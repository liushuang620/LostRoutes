#include "base/ccConfig.h"
#ifndef __cocos2dx_custom_h__
#define __cocos2dx_custom_h__

#include "jsapi.h"
#include "jsfriendapi.h"

extern JSClass  *jsb_coso2d_CustomClass_class;
extern JSObject *jsb_coso2d_CustomClass_prototype;

bool js_cocos2dx_custom_CustomClass_constructor(JSContext *cx, uint32_t argc, jsval *vp);
void js_cocos2dx_custom_CustomClass_finalize(JSContext *cx, JSObject *obj);
void js_register_cocos2dx_custom_CustomClass(JSContext *cx, JS::HandleObject global);
void register_all_cocos2dx_custom(JSContext* cx, JS::HandleObject obj);
bool js_cocos2dx_custom_CustomClass_init(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_custom_CustomClass_helloMsg(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_custom_CustomClass_create(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_custom_CustomClass_CustomClass(JSContext *cx, uint32_t argc, jsval *vp);

#endif // __cocos2dx_custom_h__
