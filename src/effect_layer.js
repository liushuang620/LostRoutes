/**
 * 创建精灵帧动画
 */

EffectLayer = cc.Class.extend({
    _ctor : function () {
        this._super();
    },

    genAnimate0 : function (name, prefix, delay) {
        var animation = cc.animationCache.getAnimation(name);
        if(!animation){
            animation = new cc.Animation();
            for(var i = 1; ; i++){
                var sp = new cc.SpriteFrame(prefix + (i < 10 ? '0' + i : i) + '.png');  //原始资源图片
                if(!sp)
                    break;
                animation.addSpriteFrame(sp);
                // animation.addSpriteFrameWithFile(prefix + (i < 10 ? '0' + i : i) + '.png');
            }
            animation.setDelayPerUnit(delay);
            cc.animationCache.addAnimation(animation, name);
        }
        return cc.Animate(animation);
    },

    genAnimate1 : function (name, prefix, delay) {
        var animation = cc.animationCache.getAnimation(name);
        if(!animation){
            var frames = [];
            for(var i = 1; ; i++){
                var sp = cc.spriteFrameCache.getSpriteFrame(prefix + (i < 10 ? '0' + i : i) + '.png');
                if(!sp)
                    break;
                frames.push(sp);
            }
            animation = cc.Animation.create(frames, delay);
            cc.animationCache.addAnimation(animation, name);
        }
        return cc.Animate(animation);
    },

    genAnimate2 : function (name, prefix, delay) {
        var animation = cc.animationCache.getAnimation(name);
        if(!animation){
            animation = new cc.Animation();
            for(var i = 1; ; i++){
                var sp = cc.spriteFrameCache.getSpriteFrame(prefix + (i < 10 ? '0' + i : i) + '.png');
                if(!sp)
                    break;
                animation.addSpriteFrame(sp);
            }
            animation.setDelayPerUnit(delay);
            cc.animationCache.addAnimation(animation, name);
        }
        return cc.Animate(animation);
    }
});

