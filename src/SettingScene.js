/**
 * Created by tu on 2018/11/21.
 */
SettingLayer = cc.Layer.extend({
    ctor : function(){
        this._super();

        var bg = new cc.TMXTiledMap("res/map/redBg.tmx");
        this.addChild(bg);

        var settingPage = new cc.Sprite("#setting.page.png");
        settingPage.x = winSize.width / 2;
        settingPage.y = winSize.height / 2;
        this.addChild(settingPage);

        //音效
        var soundOnMenuItem = new cc.MenuItemImage("#check-on.png", "#check-on.png");
        var soundOffMenuItem = new cc.MenuItemImage("#check-off.png", "#check-off.png");
        var soundToggleMenuItem = new cc.MenuItemToggle(
            soundOnMenuItem,
            soundOffMenuItem,
            this.meunSoundToggleCallback, this);
        soundToggleMenuItem.x = winSize.width / 2 + 100;
        soundToggleMenuItem.y = winSize.height / 2 + 180;

        //音乐
        var musicOnMenuItem = new cc.MenuItemImage("#check-on.png", "#check-on.png");
        var musicOffMenuItem = new cc.MenuItemImage("#check-off.png", "#check-off.png");
        var musicToggleMenuItem = new cc.MenuItemToggle(
            musicOnMenuItem,
            musicOffMenuItem,
            this.meunMusicToggleCallback, this);
        musicToggleMenuItem.x = soundToggleMenuItem.x;
        musicToggleMenuItem.y = soundToggleMenuItem.y - 110;

        //OK菜单
        var okNormal = new cc.Sprite("#button.ok.png");
        var okSelected = new cc.Sprite("#button.ok-on.png");
        var okMenuItem = new cc.MenuItemSprite(okNormal, okSelected, this.menuOkCallback, this);
        okMenuItem.x = 410;
        okMenuItem.y = 75;

        var menu = new cc.Menu(soundToggleMenuItem, musicToggleMenuItem, okMenuItem);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu);

        if(musicstatus == 1){
            musicToggleMenuItem.setSelectedIndex(0);
        }else{
            musicToggleMenuItem.setSelectedIndex(1);
        }

        if(effectStatus == 1){
            soundToggleMenuItem.setSelectedIndex(0);
        }else{
            soundToggleMenuItem.setSelectedIndex(1);
        }

        return true;
    },

    meunSoundToggleCallback : function(){
        if(effectStatus == 1){
            cc.sys.localStorage.setItem(EFFECT_KEY, 0);
            effectStatus = 0;
            cc.audioEngine.stopAllEffects();
        }
        else{
            cc.sys.localStorage.setItem(EFFECT_KEY, 1);
            effectStatus = 1;
        }
    },

    meunMusicToggleCallback : function(){
        if(musicstatus == 1){
            cc.sys.localStorage.setItem(MUSIC_KEY, 0);
            musicstatus = 0;
            cc.audioEngine.stopMusic("res/sound/homeBg.aifc");
            cc.log("关闭音乐....."  + musicstatus);
        }else{
            cc.sys.localStorage.setItem(MUSIC_KEY, 1);
            musicstatus = 1;
            cc.audioEngine.playMusic("res/sound/homeBg.aifc", true);
            cc.log("打开音乐....."  + musicstatus);
        }

    },

    menuOkCallback : function(){
        cc.director.popScene();
        if(effectStatus == 1){
            cc.audioEngine.playEffect("res/sound/Blip.caf");
        }
    },

    onEnterTransitionDidFinish : function () {
        this._super();
        if(musicstatus == 1){
            cc.audioEngine.playMusic("res/sound/homeBg.aifc", true);
        }
    },
    onExitTransitionDidStart : function(){
        this._super();
        cc.audioEngine.stopMusic("res/sound/homeBg.aifc");
    }

});

SettingScene = cc.Scene.extend({
    onEnter : function () {
        this._super();
        this.addChild(new SettingLayer());
    }
});