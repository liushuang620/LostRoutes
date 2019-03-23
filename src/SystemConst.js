/**
 * Created by tu on 2018/11/21.
 */
//Home菜单操作标识
HomeMenuActionTypes = {
    MenuItemStart : 100,
    MenuItemSetting : 101,
    MenuItemHelp : 102,
    MenuItenRank : 103
};

//保存音效状态
EFFECT_KEY = "sound_key";
//保存声音状态
MUSIC_KEY = "music_key";
//最高分
HIGHSCORE_KEY = "highscore";

//游戏场景中使用的标签常量
GameSceneNodeTag = {
    BatchBackground : 800,
    Fighter : 900,
    Enemy : 700,
    ExplosionParticleSystem : 901,
    StatusBarScore : 303,
    StatusBarFighterNode : 301,
    StatusBarLifeNode : 302
};

//碰撞类型
Collision_Type = {
    Fighter : 1,
    Enemy : 1,
    Bullet : 1
};

//飞机生命数
Fighter_hitPoints = 5;

Enemy_Types = {
    Enemy_stone : 0,
    Enemy_1 : 1,
    Enemy_2 : 2,
    Enemy_Planet : 3
};

//敌人精灵帧名字
EnemyName = {
    Enemy_Stone : "gameplay.stone1.png",
    Enemy_1 : "gameplay.enemy-1.png",
    Enemy_2 : "gameplay.enemy-2.png",
    Enemy_Planet : "gameplay.enemy.planet.png"
};

//精灵速度常量
Sprite_Velocity = {
    Enemy_Stone : cc.p(0, -300),
    Enemy_1 : cc.p(0, -80),
    Enemy_2 : cc.p(0, -100),
    Enemy_Planet : cc.p(0, -50),
    Bullet : cc.p(0, 300)
};

//敌人初始生命值
Enemy_initialHitPoints = {
    Enemy_Stone : 3,
    Enemy_1 : 5,
    Enemy_2 : 15,
    Enemy_Planet : 20
};

//游戏分数
EnemyScores = {
    Enemy_Stone : 5,
    Enemy_1 : 10,
    Enemy_2 : 15,
    Enemy_Planet : 20
};

//技能类型
SkillTyes = {
    FREEZE : 201,
    BOMB : 202,
    ENHANCE : 203
};

RankList = [
    {
        name : 'Susan',
        score : 1896,
        rank : 1
    },

    {
        name : 'Darci',
        score : 1760,
        rank : 2
    },

    {
        name : 'Daive',
        score : 1579,
        rank : 3
    },

    {
        name : 'Wendy',
        score : 1321,
        rank : 4
    },

    {
        name : 'Nancy',
        score : 1152,
        rank : 5
    },

    {
        name : 'Jane',
        score : 1069,
        rank : 6
    },

    {
        name : 'Jack',
        score : 966,
        rank : 7
    },

    {
        name : 'Rose',
        score : 786,
        rank : 8
    },

    {
        name : 'Sun',
        score : 699,
        rank : 9
    },

    {
        name : 'Marry',
        score : 652,
        rank : 10
    }
];
