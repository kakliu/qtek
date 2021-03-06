define(function(require) {

    'use strict';

    var Base = require('../core/Base');
    var Animator = require('./Animator');

    var requestAnimationFrame = window.requestAnimationFrame
                                || window.msRequestAnimationFrame
                                || window.mozRequestAnimationFrame
                                || window.webkitRequestAnimationFrame
                                || function(func){ setTimeout(func, 16); };

    /**
     * Animation is global timeline that schedule all clips. each frame animation will set the time of clips to current and update the states of clips
     * @constructor qtek.animation.Animation
     * @extends qtek.core.Base
     *
     * @example
     *     var animation = new qtek.animation.Animation();
     *     var node = new qtek.Node();
     *     animation.animate(node.position)
     *         .when(1000, {
     *             x: 500,
     *             y: 500
     *         })
     *         .when(2000, {
     *             x: 100,
     *             y: 100
     *         })
     *         .when(3000, {
     *             z: 10
     *         })
     *         .start('spline');
     */
    var Animation = Base.derive(function() {
        return /** @lends qtek.animation.Animation# */{
            /**
             * stage is an object with render method, each frame if there exists any animating clips, stage.render will be called
             * @type {Object}
             */
            stage: null,

            _clips: [],

            _running: false,

            _time: 0
        };
    },
    /** @lends qtek.animation.Animation.prototype */
    {

        /**
         * Add animator
         * @param {qtek.animate.Animator} animator
         */
        addAnimator: function (animator) {
            animator.animation = this;
            var clips = animator.getClips();
            for (var i = 0; i < clips.length; i++) {
                this.addClip(clips[i]);
            }
        },

        /**
         * @param {qtek.animation.Clip} clip
         */
        addClip: function(clip) {
            if (this._clips.indexOf(clip) < 0) {
                this._clips.push(clip);
            }
        },

        /**
         * @param  {qtek.animation.Clip} clip
         */
        removeClip: function(clip) {
            var idx = this._clips.indexOf(clip);
            if (idx >= 0) {
                this._clips.splice(idx, 1);
            }
        },

        /**
         * Remove animator
         * @param {qtek.animate.Animator} animator
         */
        removeAnimator: function (animator) {
            var clips = animator.getClips();
            for (var i = 0; i < clips.length; i++) {
                this.removeClip(clips[i]);
            }
            animator.animation = null;
        },

        _update: function() {

            var time = new Date().getTime();
            var delta = time - this._time;
            var clips = this._clips;
            var len = clips.length;

            var deferredEvents = [];
            var deferredClips = [];
            for (var i = 0; i < len; i++) {
                var clip = clips[i];
                var e = clip.step(time);
                // Throw out the events need to be called after
                // stage.render, like finish
                if (e) {
                    deferredEvents.push(e);
                    deferredClips.push(clip);
                }
            }

            // Remove the finished clip
            for (var i = 0; i < len;) {
                if (clips[i]._needsRemove) {
                    clips[i] = clips[len-1];
                    clips.pop();
                    len--;
                } else {
                    i++;
                }
            }

            len = deferredEvents.length;
            for (var i = 0; i < len; i++) {
                deferredClips[i].fire(deferredEvents[i]);
            }

            this._time = time;

            this.trigger('frame', delta);

            if (this.stage && this.stage.render) {
                this.stage.render();
            }
        },
        /**
         * Start running animation
         */
        start: function() {
            var self = this;

            this._running = true;
            this._time = new Date().getTime();

            function step() {
                if (self._running) {

                    requestAnimationFrame(step);

                    self._update();
                }
            }

            requestAnimationFrame(step);
        },
        /**
         * Stop running animation
         */
        stop: function() {
            this._running = false;
        },
        /**
         * Remove all clips
         */
        removeClipsAll: function() {
            this._clips = [];
        },
        /**
         * Create a deferred animating object
         * @param  {Object} target
         * @param  {Object} [options]
         * @param  {boolean} [options.loop]
         * @param  {Function} [options.getter]
         * @param  {Function} [options.setter]
         * @param  {Function} [options.interpolater]
         * @return {qtek.animation.Animator}
         */
        animate: function(target, options) {
            options = options || {};
            var deferred = new Animator(
                target,
                options.loop,
                options.getter,
                options.setter,
                options.interpolater
            );
            deferred.animation = this;
            return deferred;
        }
    });

    return Animation;
});
