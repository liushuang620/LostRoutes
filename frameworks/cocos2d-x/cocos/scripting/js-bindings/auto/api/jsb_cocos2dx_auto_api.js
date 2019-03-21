/**
 * @module cocos2dx
 */
var cc = cc || {};

/**
 * @class Texture2D
 */
cc.Texture2D = {

/**
 * @method getGLProgram
 * @return {cc.GLProgram}
 */
getGLProgram : function (
)
{
    return cc.GLProgram;
},

/**
 * @method getMaxT
 * @return {float}
 */
getMaxT : function (
)
{
    return 0;
},

/**
 * @method getStringForFormat
 * @return {char}
 */
getStringForFormat : function (
)
{
    return 0;
},

/**
 * @method initWithImage
* @param {cc.Image|cc.Image} image
* @param {cc.Texture2D::PixelFormat} pixelformat
* @return {bool|bool}
*/
initWithImage : function(
image,
pixelformat 
)
{
    return false;
},

/**
 * @method setGLProgram
 * @param {cc.GLProgram} arg0
 */
setGLProgram : function (
glprogram 
)
{
},

/**
 * @method getMaxS
 * @return {float}
 */
getMaxS : function (
)
{
    return 0;
},

/**
 * @method releaseGLTexture
 */
releaseGLTexture : function (
)
{
},

/**
 * @method hasPremultipliedAlpha
 * @return {bool}
 */
hasPremultipliedAlpha : function (
)
{
    return false;
},

/**
 * @method initWithMipmaps
 * @param {cc._MipmapInfo} arg0
 * @param {int} arg1
 * @param {cc.Texture2D::PixelFormat} arg2
 * @param {int} arg3
 * @param {int} arg4
 * @return {bool}
 */
initWithMipmaps : function (
map, 
int, 
pixelformat, 
int, 
int 
)
{
    return false;
},

/**
 * @method getPixelsHigh
 * @return {int}
 */
getPixelsHigh : function (
)
{
    return 0;
},

/**
 * @method getBitsPerPixelForFormat
* @param {cc.Texture2D::PixelFormat} pixelformat
* @return {unsigned int|unsigned int}
*/
getBitsPerPixelForFormat : function(
pixelformat 
)
{
    return 0;
},

/**
 * @method getName
 * @return {unsigned int}
 */
getName : function (
)
{
    return 0;
},

/**
 * @method initWithString
* @param {char|char} char
* @param {cc.FontDefinition|String} fontdefinition
* @param {float} float
* @param {size_object} size
* @param {cc.TextHAlignment} texthalignment
* @param {cc.TextVAlignment} textvalignment
* @return {bool|bool}
*/
initWithString : function(
char,
str,
float,
size,
texthalignment,
textvalignment 
)
{
    return false;
},

/**
 * @method setMaxT
 * @param {float} arg0
 */
setMaxT : function (
float 
)
{
},

/**
 * @method getPath
 * @return {String}
 */
getPath : function (
)
{
    return ;
},

/**
 * @method drawInRect
 * @param {rect_object} arg0
 */
drawInRect : function (
rect 
)
{
},

/**
 * @method getContentSize
 * @return {size_object}
 */
getContentSize : function (
)
{
    return cc.Size;
},

/**
 * @method setAliasTexParameters
 */
setAliasTexParameters : function (
)
{
},

/**
 * @method setAntiAliasTexParameters
 */
setAntiAliasTexParameters : function (
)
{
},

/**
 * @method generateMipmap
 */
generateMipmap : function (
)
{
},

/**
 * @method getDescription
 * @return {String}
 */
getDescription : function (
)
{
    return ;
},

/**
 * @method getPixelFormat
 * @return {cc.Texture2D::PixelFormat}
 */
getPixelFormat : function (
)
{
    return 0;
},

/**
 * @method getContentSizeInPixels
 * @return {size_object}
 */
getContentSizeInPixels : function (
)
{
    return cc.Size;
},

/**
 * @method getPixelsWide
 * @return {int}
 */
getPixelsWide : function (
)
{
    return 0;
},

/**
 * @method drawAtPoint
 * @param {vec2_object} arg0
 */
drawAtPoint : function (
vec2 
)
{
},

/**
 * @method hasMipmaps
 * @return {bool}
 */
hasMipmaps : function (
)
{
    return false;
},

/**
 * @method setMaxS
 * @param {float} arg0
 */
setMaxS : function (
float 
)
{
},

/**
 * @method setDefaultAlphaPixelFormat
 * @param {cc.Texture2D::PixelFormat} arg0
 */
setDefaultAlphaPixelFormat : function (
pixelformat 
)
{
},

/**
 * @method getDefaultAlphaPixelFormat
 * @return {cc.Texture2D::PixelFormat}
 */
getDefaultAlphaPixelFormat : function (
)
{
    return 0;
},

/**
 * @method Texture2D
 * @constructor
 */
Texture2D : function (
)
{
},

};

/**
 * @class Touch
 */
cc.Touch = {

/**
 * @method getPreviousLocationInView
 * @return {vec2_object}
 */
getPreviousLocationInView : function (
)
{
    return cc.Vec2;
},

/**
 * @method getLocation
 * @return {vec2_object}
 */
getLocation : function (
)
{
    return cc.Vec2;
},

/**
 * @method getDelta
 * @return {vec2_object}
 */
getDelta : function (
)
{
    return cc.Vec2;
},

/**
 * @method getStartLocationInView
 * @return {vec2_object}
 */
getStartLocationInView : function (
)
{
    return cc.Vec2;
},

/**
 * @method getCurrentForce
 * @return {float}
 */
getCurrentForce : function (
)
{
    return 0;
},

/**
 * @method getStartLocation
 * @return {vec2_object}
 */
getStartLocation : function (
)
{
    return cc.Vec2;
},

/**
 * @method getID
 * @return {int}
 */
getID : function (
)
{
    return 0;
},

/**
 * @method setTouchInfo
* @param {int|int} int
* @param {float|float} float
* @param {float|float} float
* @param {float} float
* @param {float} float
*/
setTouchInfo : function(
int,
float,
float,
float,
float 
)
{
},

/**
 * @method getMaxForce
 * @return {float}
 */
getMaxForce : function (
)
{
    return 0;
},

/**
 * @method getLocationInView
 * @return {vec2_object}
 */
getLocationInView : function (
)
{
    return cc.Vec2;
},

/**
 * @method getPreviousLocation
 * @return {vec2_object}
 */
getPreviousLocation : function (
)
{
    return cc.Vec2;
},

/**
 * @method Touch
 * @constructor
 */
Touch : function (
)
{
},

};

/**
 * @class Event
 */
cc.Event = {

/**
 * @method isStopped
 * @return {bool}
 */
isStopped : function (
)
{
    return false;
},

/**
 * @method getType
 * @return {cc.Event::Type}
 */
getType : function (
)
{
    return 0;
},

/**
 * @method getCurrentTarget
 * @return {cc.Node}
 */
getCurrentTarget : function (
)
{
    return cc.Node;
},

/**
 * @method stopPropagation
 */
stopPropagation : function (
)
{
},

/**
 * @method Event
 * @constructor
 * @param {cc.Event::Type} arg0
 */
Event : function (
type 
)
{
},

};

/**
 * @class EventTouch
 */
cc.EventTouch = {

/**
 * @method getEventCode
 * @return {cc.EventTouch::EventCode}
 */
getEventCode : function (
)
{
    return 0;
},

/**
 * @method setEventCode
 * @param {cc.EventTouch::EventCode} arg0
 */
setEventCode : function (
eventcode 
)
{
},

/**
 * @method EventTouch
 * @constructor
 */
EventTouch : function (
)
{
},

};

/**
 * @class ComponentContainer
 */
cc.ComponentContainer = {

/**
 * @method visit
 * @param {float} arg0
 */
visit : function (
float 
)
{
},

/**
 * @method remove
* @param {cc.Component|String} component
* @return {bool|bool}
*/
remove : function(
str 
)
{
    return false;
},

/**
 * @method removeAll
 */
removeAll : function (
)
{
},

/**
 * @method add
 * @param {cc.Component} arg0
 * @return {bool}
 */
add : function (
component 
)
{
    return false;
},

/**
 * @method isEmpty
 * @return {bool}
 */
isEmpty : function (
)
{
    return false;
},

/**
 * @method get
 * @param {String} arg0
 * @return {cc.Component}
 */
get : function (
str 
)
{
    return cc.Component;
},

};

/**
 * @class Component
 */
cc.Component = {

/**
 * @method setEnabled
 * @param {bool} arg0
 */
setEnabled : function (
bool 
)
{
},

/**
 * @method setName
 * @param {String} arg0
 */
setName : function (
str 
)
{
},

/**
 * @method isEnabled
 * @return {bool}
 */
isEnabled : function (
)
{
    return false;
},

/**
 * @method getOwner
 * @return {cc.Node}
 */
getOwner : function (
)
{
    return cc.Node;
},

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method setOwner
 * @param {cc.Node} arg0
 */
setOwner : function (
node 
)
{
},

/**
 * @method getName
 * @return {String}
 */
getName : function (
)
{
    return ;
},

/**
 * @method create
 * @return {cc.Component}
 */
create : function (
)
{
    return cc.Component;
},

/**
 * @method Component
 * @constructor
 */
Component : function (
)
{
},

};

/**
 * @class Node
 */
cc.Node = {

/**
 * @method addChild
* @param {cc.Node|cc.Node|cc.Node|cc.Node} node
* @param {int|int|int} int
* @param {int|String} int
*/
addChild : function(
node,
int,
str 
)
{
},

/**
 * @method removeComponent
* @param {cc.Component|String} component
* @return {bool|bool}
*/
removeComponent : function(
str 
)
{
    return false;
},

/**
 * @method setPhysicsBody
 * @param {cc.Component} arg0
 */
setPhysicsBody : function (
component 
)
{
},

/**
 * @method getGLProgram
 * @return {cc.GLProgram}
 */
getGLProgram : function (
)
{
    return cc.GLProgram;
},

/**
 * @method getDescription
 * @return {String}
 */
getDescription : function (
)
{
    return ;
},

/**
 * @method setOpacityModifyRGB
 * @param {bool} arg0
 */
setOpacityModifyRGB : function (
bool 
)
{
},

/**
 * @method setCascadeOpacityEnabled
 * @param {bool} arg0
 */
setCascadeOpacityEnabled : function (
bool 
)
{
},

/**
 * @method getChildren
* @return {Array|Array}
*/
getChildren : function(
)
{
    return new Array();
},

/**
 * @method setOnExitCallback
 * @param {function} arg0
 */
setOnExitCallback : function (
func 
)
{
},

/**
 * @method isIgnoreAnchorPointForPosition
 * @return {bool}
 */
isIgnoreAnchorPointForPosition : function (
)
{
    return false;
},

/**
 * @method getChildByName
 * @param {String} arg0
 * @return {cc.Node}
 */
getChildByName : function (
str 
)
{
    return cc.Node;
},

/**
 * @method updateDisplayedOpacity
 * @param {unsigned char} arg0
 */
updateDisplayedOpacity : function (
char 
)
{
},

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method getCameraMask
 * @return {unsigned short}
 */
getCameraMask : function (
)
{
    return 0;
},

/**
 * @method setRotation
 * @param {float} arg0
 */
setRotation : function (
float 
)
{
},

/**
 * @method setScaleZ
 * @param {float} arg0
 */
setScaleZ : function (
float 
)
{
},

/**
 * @method setScaleY
 * @param {float} arg0
 */
setScaleY : function (
float 
)
{
},

/**
 * @method setScaleX
 * @param {float} arg0
 */
setScaleX : function (
float 
)
{
},

/**
 * @method getColor
 * @return {color3b_object}
 */
getColor : function (
)
{
    return cc.Color3B;
},

/**
 * @method setonEnterTransitionDidFinishCallback
 * @param {function} arg0
 */
setonEnterTransitionDidFinishCallback : function (
func 
)
{
},

/**
 * @method removeAllComponents
 */
removeAllComponents : function (
)
{
},

/**
 * @method getOpacity
 * @return {unsigned char}
 */
getOpacity : function (
)
{
    return 0;
},

/**
 * @method setCameraMask
 * @param {unsigned short} arg0
 * @param {bool} arg1
 */
setCameraMask : function (
short, 
bool 
)
{
},

/**
 * @method getTag
 * @return {int}
 */
getTag : function (
)
{
    return 0;
},

/**
 * @method getonEnterTransitionDidFinishCallback
 * @return {function}
 */
getonEnterTransitionDidFinishCallback : function (
)
{
    return std::function<void ()>;
},

/**
 * @method getNodeToWorldAffineTransform
 * @return {cc.AffineTransform}
 */
getNodeToWorldAffineTransform : function (
)
{
    return cc.AffineTransform;
},

/**
 * @method getPosition3D
 * @return {vec3_object}
 */
getPosition3D : function (
)
{
    return cc.Vec3;
},

/**
 * @method removeChild
 * @param {cc.Node} arg0
 * @param {bool} arg1
 */
removeChild : function (
node, 
bool 
)
{
},

/**
 * @method getScene
 * @return {cc.Scene}
 */
getScene : function (
)
{
    return cc.Scene;
},

/**
 * @method getEventDispatcher
 * @return {cc.EventDispatcher}
 */
getEventDispatcher : function (
)
{
    return cc.EventDispatcher;
},

/**
 * @method setSkewX
 * @param {float} arg0
 */
setSkewX : function (
float 
)
{
},

/**
 * @method setGLProgramState
 * @param {cc.GLProgramState} arg0
 */
setGLProgramState : function (
glprogramstate 
)
{
},

/**
 * @method setOnEnterCallback
 * @param {function} arg0
 */
setOnEnterCallback : function (
func 
)
{
},

/**
 * @method stopActionsByFlags
 * @param {unsigned int} arg0
 */
stopActionsByFlags : function (
int 
)
{
},

/**
 * @method setNormalizedPosition
 * @param {vec2_object} arg0
 */
setNormalizedPosition : function (
vec2 
)
{
},

/**
 * @method setonExitTransitionDidStartCallback
 * @param {function} arg0
 */
setonExitTransitionDidStartCallback : function (
func 
)
{
},

/**
 * @method convertTouchToNodeSpace
 * @param {cc.Touch} arg0
 * @return {vec2_object}
 */
convertTouchToNodeSpace : function (
touch 
)
{
    return cc.Vec2;
},

/**
 * @method removeAllChildrenWithCleanup
* @param {bool} bool
*/
removeAllChildrenWithCleanup : function(
bool 
)
{
},

/**
 * @method getRotationSkewX
 * @return {float}
 */
getRotationSkewX : function (
)
{
    return 0;
},

/**
 * @method getRotationSkewY
 * @return {float}
 */
getRotationSkewY : function (
)
{
    return 0;
},

/**
 * @method getNodeToWorldTransform
 * @return {mat4_object}
 */
getNodeToWorldTransform : function (
)
{
    return cc.Mat4;
},

/**
 * @method isCascadeOpacityEnabled
 * @return {bool}
 */
isCascadeOpacityEnabled : function (
)
{
    return false;
},

/**
 * @method setParent
 * @param {cc.Node} arg0
 */
setParent : function (
node 
)
{
},

/**
 * @method getName
 * @return {String}
 */
getName : function (
)
{
    return ;
},

/**
 * @method getRotation3D
 * @return {vec3_object}
 */
getRotation3D : function (
)
{
    return cc.Vec3;
},

/**
 * @method getNodeToParentAffineTransform
* @param {cc.Node} node
* @return {cc.AffineTransform|cc.AffineTransform}
*/
getNodeToParentAffineTransform : function(
node 
)
{
    return cc.AffineTransform;
},

/**
 * @method convertTouchToNodeSpaceAR
 * @param {cc.Touch} arg0
 * @return {vec2_object}
 */
convertTouchToNodeSpaceAR : function (
touch 
)
{
    return cc.Vec2;
},

/**
 * @method getOnEnterCallback
 * @return {function}
 */
getOnEnterCallback : function (
)
{
    return std::function<void ()>;
},

/**
 * @method isOpacityModifyRGB
 * @return {bool}
 */
isOpacityModifyRGB : function (
)
{
    return false;
},

/**
 * @method stopActionByTag
 * @param {int} arg0
 */
stopActionByTag : function (
int 
)
{
},

/**
 * @method reorderChild
 * @param {cc.Node} arg0
 * @param {int} arg1
 */
reorderChild : function (
node, 
int 
)
{
},

/**
 * @method ignoreAnchorPointForPosition
 * @param {bool} arg0
 */
ignoreAnchorPointForPosition : function (
bool 
)
{
},

/**
 * @method setSkewY
 * @param {float} arg0
 */
setSkewY : function (
float 
)
{
},

/**
 * @method setRotation3D
 * @param {vec3_object} arg0
 */
setRotation3D : function (
vec3 
)
{
},

/**
 * @method setPositionX
 * @param {float} arg0
 */
setPositionX : function (
float 
)
{
},

/**
 * @method setNodeToParentTransform
 * @param {mat4_object} arg0
 */
setNodeToParentTransform : function (
mat4 
)
{
},

/**
 * @method getAnchorPoint
 * @return {vec2_object}
 */
getAnchorPoint : function (
)
{
    return cc.Vec2;
},

/**
 * @method getNumberOfRunningActions
 * @return {long}
 */
getNumberOfRunningActions : function (
)
{
    return 0;
},

/**
 * @method updateTransform
 */
updateTransform : function (
)
{
},

/**
 * @method isVisible
 * @return {bool}
 */
isVisible : function (
)
{
    return false;
},

/**
 * @method getChildrenCount
 * @return {long}
 */
getChildrenCount : function (
)
{
    return 0;
},

/**
 * @method getNodeToParentTransform
* @param {cc.Node} node
* @return {mat4_object|mat4_object}
*/
getNodeToParentTransform : function(
node 
)
{
    return cc.Mat4;
},

/**
 * @method convertToNodeSpaceAR
 * @param {vec2_object} arg0
 * @return {vec2_object}
 */
convertToNodeSpaceAR : function (
vec2 
)
{
    return cc.Vec2;
},

/**
 * @method addComponent
 * @param {cc.Component} arg0
 * @return {bool}
 */
addComponent : function (
component 
)
{
    return false;
},

/**
 * @method runAction
 * @param {cc.Action} arg0
 * @return {cc.Action}
 */
runAction : function (
action 
)
{
    return cc.Action;
},

/**
 * @method visit
* @param {cc.Renderer} renderer
* @param {mat4_object} mat4
* @param {unsigned int} int
*/
visit : function(
renderer,
mat4,
int 
)
{
},

/**
 * @method setGLProgram
 * @param {cc.GLProgram} arg0
 */
setGLProgram : function (
glprogram 
)
{
},

/**
 * @method getRotation
 * @return {float}
 */
getRotation : function (
)
{
    return 0;
},

/**
 * @method getPhysicsBody
 * @return {cc.PhysicsBody}
 */
getPhysicsBody : function (
)
{
    return cc.PhysicsBody;
},

/**
 * @method getAnchorPointInPoints
 * @return {vec2_object}
 */
getAnchorPointInPoints : function (
)
{
    return cc.Vec2;
},

/**
 * @method getRotationQuat
 * @return {cc.Quaternion}
 */
getRotationQuat : function (
)
{
    return cc.Quaternion;
},

/**
 * @method removeChildByName
 * @param {String} arg0
 * @param {bool} arg1
 */
removeChildByName : function (
str, 
bool 
)
{
},

/**
 * @method setPositionZ
 * @param {float} arg0
 */
setPositionZ : function (
float 
)
{
},

/**
 * @method getGLProgramState
 * @return {cc.GLProgramState}
 */
getGLProgramState : function (
)
{
    return cc.GLProgramState;
},

/**
 * @method setScheduler
 * @param {cc.Scheduler} arg0
 */
setScheduler : function (
scheduler 
)
{
},

/**
 * @method stopAllActions
 */
stopAllActions : function (
)
{
},

/**
 * @method getSkewX
 * @return {float}
 */
getSkewX : function (
)
{
    return 0;
},

/**
 * @method getSkewY
 * @return {float}
 */
getSkewY : function (
)
{
    return 0;
},

/**
 * @method isScheduled
 * @param {String} arg0
 * @return {bool}
 */
isScheduled : function (
str 
)
{
    return false;
},

/**
 * @method getDisplayedColor
 * @return {color3b_object}
 */
getDisplayedColor : function (
)
{
    return cc.Color3B;
},

/**
 * @method getActionByTag
 * @param {int} arg0
 * @return {cc.Action}
 */
getActionByTag : function (
int 
)
{
    return cc.Action;
},

/**
 * @method setRotationSkewX
 * @param {float} arg0
 */
setRotationSkewX : function (
float 
)
{
},

/**
 * @method setRotationSkewY
 * @param {float} arg0
 */
setRotationSkewY : function (
float 
)
{
},

/**
 * @method setName
 * @param {String} arg0
 */
setName : function (
str 
)
{
},

/**
 * @method getDisplayedOpacity
 * @return {unsigned char}
 */
getDisplayedOpacity : function (
)
{
    return 0;
},

/**
 * @method getLocalZOrder
 * @return {int}
 */
getLocalZOrder : function (
)
{
    return 0;
},

/**
 * @method getScheduler
* @return {cc.Scheduler|cc.Scheduler}
*/
getScheduler : function(
)
{
    return cc.Scheduler;
},

/**
 * @method getOrderOfArrival
 * @return {int}
 */
getOrderOfArrival : function (
)
{
    return 0;
},

/**
 * @method setActionManager
 * @param {cc.ActionManager} arg0
 */
setActionManager : function (
actionmanager 
)
{
},

/**
 * @method getPosition
* @param {float} float
* @param {float} float
* @return {vec2_object}
*/
getPosition : function(
float,
float 
)
{
},

/**
 * @method isRunning
 * @return {bool}
 */
isRunning : function (
)
{
    return false;
},

/**
 * @method getParent
* @return {cc.Node|cc.Node}
*/
getParent : function(
)
{
    return cc.Node;
},

/**
 * @method getWorldToNodeTransform
 * @return {mat4_object}
 */
getWorldToNodeTransform : function (
)
{
    return cc.Mat4;
},

/**
 * @method getPositionY
 * @return {float}
 */
getPositionY : function (
)
{
    return 0;
},

/**
 * @method getPositionX
 * @return {float}
 */
getPositionX : function (
)
{
    return 0;
},

/**
 * @method removeChildByTag
 * @param {int} arg0
 * @param {bool} arg1
 */
removeChildByTag : function (
int, 
bool 
)
{
},

/**
 * @method setPositionY
 * @param {float} arg0
 */
setPositionY : function (
float 
)
{
},

/**
 * @method updateDisplayedColor
 * @param {color3b_object} arg0
 */
updateDisplayedColor : function (
color3b 
)
{
},

/**
 * @method setVisible
 * @param {bool} arg0
 */
setVisible : function (
bool 
)
{
},

/**
 * @method getParentToNodeAffineTransform
 * @return {cc.AffineTransform}
 */
getParentToNodeAffineTransform : function (
)
{
    return cc.AffineTransform;
},

/**
 * @method getPositionZ
 * @return {float}
 */
getPositionZ : function (
)
{
    return 0;
},

/**
 * @method setGlobalZOrder
 * @param {float} arg0
 */
setGlobalZOrder : function (
float 
)
{
},

/**
 * @method setScale
* @param {float|float} float
* @param {float} float
*/
setScale : function(
float,
float 
)
{
},

/**
 * @method getOnExitCallback
 * @return {function}
 */
getOnExitCallback : function (
)
{
    return std::function<void ()>;
},

/**
 * @method getChildByTag
 * @param {int} arg0
 * @return {cc.Node}
 */
getChildByTag : function (
int 
)
{
    return cc.Node;
},

/**
 * @method setOrderOfArrival
 * @param {int} arg0
 */
setOrderOfArrival : function (
int 
)
{
},

/**
 * @method getScaleZ
 * @return {float}
 */
getScaleZ : function (
)
{
    return 0;
},

/**
 * @method getScaleY
 * @return {float}
 */
getScaleY : function (
)
{
    return 0;
},

/**
 * @method getScaleX
 * @return {float}
 */
getScaleX : function (
)
{
    return 0;
},

/**
 * @method setLocalZOrder
 * @param {int} arg0
 */
setLocalZOrder : function (
int 
)
{
},

/**
 * @method setCascadeColorEnabled
 * @param {bool} arg0
 */
setCascadeColorEnabled : function (
bool 
)
{
},

/**
 * @method setOpacity
 * @param {unsigned char} arg0
 */
setOpacity : function (
char 
)
{
},

/**
 * @method getComponent
 * @param {String} arg0
 * @return {cc.Component}
 */
getComponent : function (
str 
)
{
    return cc.Component;
},

/**
 * @method getContentSize
 * @return {size_object}
 */
getContentSize : function (
)
{
    return cc.Size;
},

/**
 * @method stopAllActionsByTag
 * @param {int} arg0
 */
stopAllActionsByTag : function (
int 
)
{
},

/**
 * @method getBoundingBox
 * @return {rect_object}
 */
getBoundingBox : function (
)
{
    return cc.Rect;
},

/**
 * @method setEventDispatcher
 * @param {cc.EventDispatcher} arg0
 */
setEventDispatcher : function (
eventdispatcher 
)
{
},

/**
 * @method getGlobalZOrder
 * @return {float}
 */
getGlobalZOrder : function (
)
{
    return 0;
},

/**
 * @method draw
* @param {cc.Renderer} renderer
* @param {mat4_object} mat4
* @param {unsigned int} int
*/
draw : function(
renderer,
mat4,
int 
)
{
},

/**
 * @method setUserObject
 * @param {cc.Ref} arg0
 */
setUserObject : function (
ref 
)
{
},

/**
 * @method enumerateChildren
 * @param {String} arg0
 * @param {function} arg1
 */
enumerateChildren : function (
str, 
func 
)
{
},

/**
 * @method getonExitTransitionDidStartCallback
 * @return {function}
 */
getonExitTransitionDidStartCallback : function (
)
{
    return std::function<void ()>;
},

/**
 * @method removeFromParentAndCleanup
* @param {bool} bool
*/
removeFromParentAndCleanup : function(
bool 
)
{
},

/**
 * @method setPosition3D
 * @param {vec3_object} arg0
 */
setPosition3D : function (
vec3 
)
{
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method sortAllChildren
 */
sortAllChildren : function (
)
{
},

/**
 * @method getWorldToNodeAffineTransform
 * @return {cc.AffineTransform}
 */
getWorldToNodeAffineTransform : function (
)
{
    return cc.AffineTransform;
},

/**
 * @method getScale
 * @return {float}
 */
getScale : function (
)
{
    return 0;
},

/**
 * @method getNormalizedPosition
 * @return {vec2_object}
 */
getNormalizedPosition : function (
)
{
    return cc.Vec2;
},

/**
 * @method getParentToNodeTransform
 * @return {mat4_object}
 */
getParentToNodeTransform : function (
)
{
    return cc.Mat4;
},

/**
 * @method convertToNodeSpace
 * @param {vec2_object} arg0
 * @return {vec2_object}
 */
convertToNodeSpace : function (
vec2 
)
{
    return cc.Vec2;
},

/**
 * @method setTag
 * @param {int} arg0
 */
setTag : function (
int 
)
{
},

/**
 * @method isCascadeColorEnabled
 * @return {bool}
 */
isCascadeColorEnabled : function (
)
{
    return false;
},

/**
 * @method setRotationQuat
 * @param {cc.Quaternion} arg0
 */
setRotationQuat : function (
quaternion 
)
{
},

/**
 * @method stopAction
 * @param {cc.Action} arg0
 */
stopAction : function (
action 
)
{
},

/**
 * @method getActionManager
* @return {cc.ActionManager|cc.ActionManager}
*/
getActionManager : function(
)
{
    return cc.ActionManager;
},

/**
 * @method create
 * @return {cc.Node}
 */
create : function (
)
{
    return cc.Node;
},

/**
 * @method Node
 * @constructor
 */
Node : function (
)
{
},

};

/**
 * @class __NodeRGBA
 */
cc.NodeRGBA = {

/**
 * @method __NodeRGBA
 * @constructor
 */
__NodeRGBA : function (
)
{
},

};

/**
 * @class Scene
 */
cc.Scene = {

/**
 * @method setCameraOrderDirty
 */
setCameraOrderDirty : function (
)
{
},

/**
 * @method render
 * @param {cc.Renderer} arg0
 */
render : function (
renderer 
)
{
},

/**
 * @method stepPhysicsAndNavigation
 * @param {float} arg0
 */
stepPhysicsAndNavigation : function (
float 
)
{
},

/**
 * @method onProjectionChanged
 * @param {cc.EventCustom} arg0
 */
onProjectionChanged : function (
eventcustom 
)
{
},

/**
 * @method initWithSize
 * @param {size_object} arg0
 * @return {bool}
 */
initWithSize : function (
size 
)
{
    return false;
},

/**
 * @method getDefaultCamera
 * @return {cc.Camera}
 */
getDefaultCamera : function (
)
{
    return cc.Camera;
},

/**
 * @method createWithSize
 * @param {size_object} arg0
 * @return {cc.Scene}
 */
createWithSize : function (
size 
)
{
    return cc.Scene;
},

/**
 * @method create
 * @return {cc.Scene}
 */
create : function (
)
{
    return cc.Scene;
},

/**
 * @method Scene
 * @constructor
 */
Scene : function (
)
{
},

};

/**
 * @class GLView
 */
cc.GLView = {

/**
 * @method setFrameSize
 * @param {float} arg0
 * @param {float} arg1
 */
setFrameSize : function (
float, 
float 
)
{
},

/**
 * @method getViewPortRect
 * @return {rect_object}
 */
getViewPortRect : function (
)
{
    return cc.Rect;
},

/**
 * @method setContentScaleFactor
 * @param {float} arg0
 * @return {bool}
 */
setContentScaleFactor : function (
float 
)
{
    return false;
},

/**
 * @method getContentScaleFactor
 * @return {float}
 */
getContentScaleFactor : function (
)
{
    return 0;
},

/**
 * @method setIMEKeyboardState
 * @param {bool} arg0
 */
setIMEKeyboardState : function (
bool 
)
{
},

/**
 * @method setScissorInPoints
 * @param {float} arg0
 * @param {float} arg1
 * @param {float} arg2
 * @param {float} arg3
 */
setScissorInPoints : function (
float, 
float, 
float, 
float 
)
{
},

/**
 * @method getViewName
 * @return {String}
 */
getViewName : function (
)
{
    return ;
},

/**
 * @method isOpenGLReady
 * @return {bool}
 */
isOpenGLReady : function (
)
{
    return false;
},

/**
 * @method setCursorVisible
 * @param {bool} arg0
 */
setCursorVisible : function (
bool 
)
{
},

/**
 * @method getScaleY
 * @return {float}
 */
getScaleY : function (
)
{
    return 0;
},

/**
 * @method getScaleX
 * @return {float}
 */
getScaleX : function (
)
{
    return 0;
},

/**
 * @method getVisibleOrigin
 * @return {vec2_object}
 */
getVisibleOrigin : function (
)
{
    return cc.Vec2;
},

/**
 * @method getFrameSize
 * @return {size_object}
 */
getFrameSize : function (
)
{
    return cc.Size;
},

/**
 * @method setFrameZoomFactor
 * @param {float} arg0
 */
setFrameZoomFactor : function (
float 
)
{
},

/**
 * @method getFrameZoomFactor
 * @return {float}
 */
getFrameZoomFactor : function (
)
{
    return 0;
},

/**
 * @method getDesignResolutionSize
 * @return {size_object}
 */
getDesignResolutionSize : function (
)
{
    return cc.Size;
},

/**
 * @method windowShouldClose
 * @return {bool}
 */
windowShouldClose : function (
)
{
    return false;
},

/**
 * @method setDesignResolutionSize
 * @param {float} arg0
 * @param {float} arg1
 * @param {ResolutionPolicy} arg2
 */
setDesignResolutionSize : function (
float, 
float, 
resolutionpolicy 
)
{
},

/**
 * @method getResolutionPolicy
 * @return {ResolutionPolicy}
 */
getResolutionPolicy : function (
)
{
    return ResolutionPolicy;
},

/**
 * @method isRetinaDisplay
 * @return {bool}
 */
isRetinaDisplay : function (
)
{
    return false;
},

/**
 * @method setViewPortInPoints
 * @param {float} arg0
 * @param {float} arg1
 * @param {float} arg2
 * @param {float} arg3
 */
setViewPortInPoints : function (
float, 
float, 
float, 
float 
)
{
},

/**
 * @method getScissorRect
 * @return {rect_object}
 */
getScissorRect : function (
)
{
    return cc.Rect;
},

/**
 * @method getRetinaFactor
 * @return {int}
 */
getRetinaFactor : function (
)
{
    return 0;
},

/**
 * @method setViewName
 * @param {String} arg0
 */
setViewName : function (
str 
)
{
},

/**
 * @method getVisibleRect
 * @return {rect_object}
 */
getVisibleRect : function (
)
{
    return cc.Rect;
},

/**
 * @method getVisibleSize
 * @return {size_object}
 */
getVisibleSize : function (
)
{
    return cc.Size;
},

/**
 * @method isScissorEnabled
 * @return {bool}
 */
isScissorEnabled : function (
)
{
    return false;
},

/**
 * @method pollEvents
 */
pollEvents : function (
)
{
},

/**
 * @method setGLContextAttrs
 * @param {GLContextAttrs} arg0
 */
setGLContextAttrs : function (
glcontextattrs 
)
{
},

/**
 * @method getGLContextAttrs
 * @return {GLContextAttrs}
 */
getGLContextAttrs : function (
)
{
    return GLContextAttrs;
},

