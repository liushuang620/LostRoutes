Skill = cc.Layer.extend({
    ctor : function(){
        this._super();

        //冰冻技能,冰冻屏幕敌人
        var scaleFreeze = new cc.Sprite("res/freeze.png");
        scaleFreeze.setScale(0.9);
        var spFreeze = new cc.Sprite("res/freeze.png");
        this.freeze = new cc.MenuItemSprite(spFreeze, scaleFreeze, this.skillMenuCallBack, this);   //锚点默认为(0.5, 0.5);
        var normalImg1 = this.freeze.getNormalImage();
        normalImg1.setAnchorPoint(0.5, 0.5);     //image锚点在源码里被设置成(0, 0)
        normalImg1.setNormalizedPosition(0.5, 0.5);
        var selectedImg1 = this.freeze.getSelectedImage();
        selectedImg1.setAnchorPoint(0.5, 0.5);
        selectedImg1.setNormalizedPosition(0.5, 0.5);
        this.freeze.setTag(SkillTyes.FREEZE);


        //核弹技能,炸光屏幕敌人
        var scaleBomb = new cc.Sprite("res/bomb.png");
        scaleBomb.setScale(0.9);
        var spBomb = new cc.Sprite("res/bomb.png");
        this.bomb = new cc.MenuItemSprite(spBomb, scaleBomb, this.skillMenuCallBack, this);
        var normalImg2 = this.bomb.getNormalImage();
        normalImg2.setAnchorPoint(0.5, 0.5);
        normalImg2.setNormalizedPosition(0.5, 0.5);
        var selectedImg2 = this.bomb.getSelectedImage();
        selectedImg2.setAnchorPoint(0.5, 0.5);
        selectedImg2.setNormalizedPosition(0.5, 0.5);
        this.bomb.setTag(SkillTyes.BOMB);

        //子弹增强技能,子弹双倍伤害
        var scaleEnhance = new cc.Sprite("res/enhance.png");
        scaleEnhance.setScale(0.9);
        var spEnhance = new cc.Sprite("res/enhance.png");
        this.enhance = new cc.MenuItemSprite(spEnhance, scaleEnhance, this.skillMenuCallBack, this);
        var normalImg3 = this.enhance.getNormalImage();
        normalImg3.setAnchorPoint(0.5, 0.5);
        normalImg3.setNormalizedPosition(0.5, 0.5);
        var selectedImg3 = this.enhance.getSelectedImage();
        selectedImg3.setAnchorPoint(0.5, 0.5);
        selectedImg3.setNormalizedPosition(0.5, 0.5);
        this.enhance.setTag(SkillTyes.ENHANCE);
        
        this.skillMenu = new cc.Menu(this.freeze, this.bomb, this.enhance);
        this.skillMenu.alignItemsVerticallyWithPadding(0);
        this.skillMenu.setPosition(60, 180);
        this.addChild(this.skillMenu);
    },

    skillMenuCallBack : function(sender){
        cc.log("on touch skill......");
        switch(sender.tag){
            case SkillTyes.FREEZE:
                cc.log("use freeze...");
                
                break;
            case SkillTyes.BOMB:
                cc.log("use bomb...");
                break;
            case SkillTyes.ENHANCE:
                cc.log("use enhance...");
                // break;
        }
    }
});