/** @namespace qtek */
/** @namespace qtek.math */
/** @namespace qtek.animation */
/** @namespace qtek.async */
/** @namespace qtek.camera */
/** @namespace qtek.compositor */
/** @namespace qtek.core */
/** @namespace qtek.geometry */
/** @namespace qtek.helper */
/** @namespace qtek.light */
/** @namespace qtek.loader */
/** @namespace qtek.particleSystem */
/** @namespace qtek.plugin */
/** @namespace qtek.prePass */
/** @namespace qtek.shader */
/** @namespace qtek.texture */
/** @namespace qtek.util */
define(function(require) {
	
	var exportsObject = {
	"animation": {
		"Animation": require('./animation/Animation'),
		"Animator": require('./animation/Animator'),
		"Blend1DClip": require('./animation/Blend1DClip'),
		"Blend2DClip": require('./animation/Blend2DClip'),
		"Clip": require('./animation/Clip'),
		"easing": require('./animation/easing'),
		"SamplerClip": require('./animation/SamplerClip'),
		"SkinningClip": require('./animation/SkinningClip'),
		"TransformClip": require('./animation/TransformClip')
	},
	"async": {
		"Task": require('./async/Task'),
		"TaskGroup": require('./async/TaskGroup')
	},
	"Camera": require('./Camera'),
	"camera": {
		"Orthographic": require('./camera/Orthographic'),
		"Perspective": require('./camera/Perspective')
	},
	"canvas": {
		"Material": require('./canvas/Material'),
		"Renderer": require('./canvas/Renderer')
	},
	"compositor": {
		"Compositor": require('./compositor/Compositor'),
		"Graph": require('./compositor/Graph'),
		"Node": require('./compositor/Node'),
		"Pass": require('./compositor/Pass'),
		"SceneNode": require('./compositor/SceneNode'),
		"TextureNode": require('./compositor/TextureNode'),
		"TexturePool": require('./compositor/TexturePool')
	},
	"core": {
		"Base": require('./core/Base'),
		"Cache": require('./core/Cache'),
		"Event": require('./core/Event'),
		"glenum": require('./core/glenum'),
		"glinfo": require('./core/glinfo'),
		"LinkedList": require('./core/LinkedList'),
		"LRU": require('./core/LRU'),
		"mixin": {
			"derive": require('./core/mixin/derive'),
			"notifier": require('./core/mixin/notifier')
		},
		"request": require('./core/request'),
		"util": require('./core/util'),
		"vendor": require('./core/vendor')
	},
	"deferred": {
		"Renderer": require('./deferred/Renderer'),
		"StandardMaterial": require('./deferred/StandardMaterial')
	},
	"dep": {
		"glmatrix": require('./dep/glmatrix')
	},
	"DynamicGeometry": require('./DynamicGeometry'),
	"FrameBuffer": require('./FrameBuffer'),
	"Geometry": require('./Geometry'),
	"geometry": {
		"Cone": require('./geometry/Cone'),
		"Cube": require('./geometry/Cube'),
		"Cylinder": require('./geometry/Cylinder'),
		"Plane": require('./geometry/Plane'),
		"Sphere": require('./geometry/Sphere')
	},
	"Joint": require('./Joint'),
	"Light": require('./Light'),
	"light": {
		"Ambient": require('./light/Ambient'),
		"AmbientSH": require('./light/AmbientSH'),
		"Directional": require('./light/Directional'),
		"Point": require('./light/Point'),
		"Sphere": require('./light/Sphere'),
		"Spot": require('./light/Spot'),
		"Tube": require('./light/Tube')
	},
	"loader": {
		"FX": require('./loader/FX'),
		"GLTF": require('./loader/GLTF'),
		"ThreeModel": require('./loader/ThreeModel')
	},
	"Material": require('./Material'),
	"math": {
		"BoundingBox": require('./math/BoundingBox'),
		"Frustum": require('./math/Frustum'),
		"Matrix2": require('./math/Matrix2'),
		"Matrix2d": require('./math/Matrix2d'),
		"Matrix3": require('./math/Matrix3'),
		"Matrix4": require('./math/Matrix4'),
		"Plane": require('./math/Plane'),
		"Quaternion": require('./math/Quaternion'),
		"Ray": require('./math/Ray'),
		"util": require('./math/util'),
		"Value": require('./math/Value'),
		"Vector2": require('./math/Vector2'),
		"Vector3": require('./math/Vector3'),
		"Vector4": require('./math/Vector4')
	},
	"Mesh": require('./Mesh'),
	"Node": require('./Node'),
	"particleSystem": {
		"Emitter": require('./particleSystem/Emitter'),
		"Field": require('./particleSystem/Field'),
		"ForceField": require('./particleSystem/ForceField'),
		"Particle": require('./particleSystem/Particle'),
		"ParticleRenderable": require('./particleSystem/ParticleRenderable')
	},
	"picking": {
		"PixelPicking": require('./picking/PixelPicking'),
		"RayPicking": require('./picking/RayPicking')
	},
	"plugin": {
		"FirstPersonControl": require('./plugin/FirstPersonControl'),
		"InfinitePlane": require('./plugin/InfinitePlane'),
		"OrbitControl": require('./plugin/OrbitControl'),
		"Skybox": require('./plugin/Skybox'),
		"Skydome": require('./plugin/Skydome')
	},
	"prePass": {
		"EnvironmentMap": require('./prePass/EnvironmentMap'),
		"Reflection": require('./prePass/Reflection'),
		"ShadowMap": require('./prePass/ShadowMap')
	},
	"Renderable": require('./Renderable'),
	"Renderer": require('./Renderer'),
	"Scene": require('./Scene'),
	"Shader": require('./Shader'),
	"shader": {
		"buildin": require('./shader/buildin'),
		"library": require('./shader/library'),
		"source": {
			"header": {
				"light": require('./shader/source/header/light')
			}
		}
	},
	"Skeleton": require('./Skeleton'),
	"StaticGeometry": require('./StaticGeometry'),
	"Texture": require('./Texture'),
	"Texture2D": require('./Texture2D'),
	"TextureCube": require('./TextureCube'),
	"util": {
		"cubemap": require('./util/cubemap'),
		"dds": require('./util/dds'),
		"delaunay": require('./util/delaunay'),
		"earClipping": require('./util/earClipping'),
		"hdr": require('./util/hdr'),
		"mesh": require('./util/mesh'),
		"texture": require('./util/texture')
	}
};

    exportsObject.version = '0.2.1';

    return exportsObject;
});