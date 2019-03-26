/**
 * Created by tu on 2018/11/21.
 */

cc.sys.localStorage.setItem(MUSIC_KEY, 1);
cc.sys.localStorage.setItem(EFFECT_KEY, 1);

var HomeMenuLayer = cc.Layer.extend({
   ctor : function(){
       this._super();
       winSize = cc.director.getWinSize();

       // musicStatus = cc.sys.localStorage.getItem("music_key");
       // cc.log(musicStatus);

       //加载精灵帧缓存
       //缓存的是加载到内存中的纹理资源，也就是图片资源。其原理是对加入缓存的纹理资源进行一次引用，使其引用计数加一，
       // 保持不被清除，其cocos2d-x的渲染机制是可以重复使用同一份纹理在不同的场合进行绘制，从而到达重复使用，降低内存和CPU运算资源的开销的目的。
       //为什么这里加载了setting也能用? --如果要消除影响,需要在onExitTransitionDidStart函数中显式移除精灵缓存;
       cc.spriteFrameCache.addSpriteFrames("res/texture/LostRoutes_Texture.plist",
           "res/texture/LostRoutes_Texture.png");

       musicstatus = cc.sys.localStorage.getItem(MUSIC_KEY);
       effectStatus = cc.sys.localStorage.getItem(EFFECT_KEY);
       effect = new EffectLayer();

       var bg = new cc.TMXTiledMap("res/map/redBg.tmx"); //瓦片地图
       this.addChild(bg);

       var top = new cc.Sprite("#home-top.png");   //从精灵帧缓存中创建精灵对象
       top.x = winSize.width / 2;
       top.y = winSize.height - top.getContentSize().height / 2;
       this.addChild(top);

       var end = new cc.Sprite("#home-end.png");
       end.x = winSize.width / 2;
       end.y = end.getContentSize().height / 2;
       this.addChild(end);

       //test bindings;
       var img = new ccui.ImageView();
       img.getImageDes();
       //test C++ binding 自定义类
       var customClass = ccext.CustomClass.create();
       var msg = customClass.helloMsg();
       cc.log("customClass's msg is========>>>" + msg)
       //创建精灵菜单
       //开始菜单
       //var startSpriteNormal = cc.Sprite.createWithSpriteFrameName("button.start.png");  //JS报错:createWithSpriteFrameName is not a function
       var startSpriteNormal = new cc.Sprite("#button.start.png");
       var startSoriteSelected = new cc.Sprite("#button.start-on.png");
       var startMeunItem = new cc.MenuItemSprite(startSpriteNormal, startSoriteSelected, this.menuItemCallback, this);
       startMeunItem.setTag(HomeMenuActionTypes.MenuItemStart);

       //设置菜单
       var settingSpriteNormal = new cc.Sprite("#button.setting.png");
       var settingSpriteSelected = new cc.Sprite("#button.setting-on.png");
       var settingMenuItem = new cc.MenuItemSprite(settingSpriteNormal, settingSpriteSelected, this.menuItemCallback, this);
       settingMenuItem.setTag(HomeMenuActionTypes.MenuItemSetting);

       //帮助菜单
       var helpSpriteNormal = new cc.Sprite("#button.help.png");
       var helpSpriteSelected = new cc.Sprite("#button.help-on.png");
       var helpMenuItem = new cc.MenuItemSprite(helpSpriteNormal, helpSpriteSelected, this.menuItemCallback, this);
       helpMenuItem.setTag(HomeMenuActionTypes.MenuItemHelp);

       /**
        * 创建单一颜色的精灵
        * @param size {cc.Size} 尺寸
        * @param color {cc.Color} 颜色
        * @returns {cc.Sprite}
        * 先用颜色画个纹理,再贴给精灵
        */

       //排名
       var rankMenuItem = new cc.MenuItemFont("Ranking", this.menuItemCallback, this);
       rankMenuItem.setFontName("Times New Roman");
       rankMenuItem.setFontSize(86);
       rankMenuItem.setColor(cc.RED);
       rankMenuItem.setTag(HomeMenuActionTypes.MenuItenRank);

       var menu = new cc.Menu(startMeunItem, settingMenuItem, helpMenuItem, rankMenuItem);
       menu.x = winSize.width / 2;
       menu.y = winSize.height / 2;
       menu.alignItemsVerticallyWithPadding(10);  //垂直排列,间隔10个像素
       this.addChild(menu);
       return true;
   },
    
    menuItemCallback : function (sender) {
        
        if(effectStatus == 1){
            cc.audioEngine.playEffect("res/sound/Blip.caf");
        }
        
        var tsc = null;
        switch(sender.tag){
            case HomeMenuActionTypes.MenuItemStart:
                tsc = new cc.TransitionFade(1.0, new GamePlayScene);
                cc.log("StartCallback");
                break;
            case HomeMenuActionTypes.MenuItemSetting:
                tsc = new cc.TransitionFade(1.0, new SettingScene);
                cc.log("SettingCallback");
                break;
            case HomeMenuActionTypes.MenuItemHelp:
                tsc = new cc.TransitionFade(1.0, new HelpScene);
                cc.log("HelpCallback");
                break;
            case HomeMenuActionTypes.MenuItenRank:
                tsc = new cc.TransitionFade(1.0, new RankScene);
                cc.log("RankLayer");
                break;
        }
        if(tsc){
            cc.director.pushScene(tsc);
        }
    },

    onEnterTransitionDidFinish : function () {
        this._super();
        cc.log("是否开启音乐..."  + musicstatus);
        if(musicstatus == 1){
            cc.audioEngine.playMusic("res/sound/homeBg.aifc", true);
        }


        cc.spriteFrameCache.addSpriteFrames('res/texture/fish_1101.plist');
        var spCoin = new cc.Sprite('#fish_1101_01.png');
        spCoin.retain();
        this.addChild(spCoin);
        spCoin.setPosition(100, 100);
        spCoin.setScale(3);
        var animate = effect.genAnimate1('fish_1101_anim', 'fish_1101_', 0.09);   //well done
        // var animate = effect.genAnimate2('fish_1101_anim', 'fish_1101_', 0.09);  //well done
        spCoin.runAction(cc.repeatForever(animate));
        cc.log("########");
    },
    onExitTransitionDidStart : function(){
        this._super();
        cc.audioEngine.stopMusic("res/sound/homeBg.aifc");
    }


    // onExitTransitionDidStart : function () {
    //     this._super();
    //     cc.spriteFrameCache.removeUnusedSpriteFrames();
    // }  //在这个生命周期函数里清除之后,下一个场景不能再使用精灵帧缓存
    
});


var HomeScene = cc.Scene.extend({
    onEnter : function () {
        this._super();
        this.addChild(new HomeMenuLayer());
    }
});
