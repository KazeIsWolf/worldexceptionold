gdjs.IntroCode = {};
gdjs.IntroCode.GDNewSpriteObjects1= [];
gdjs.IntroCode.GDNewSpriteObjects2= [];


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.IntroCode.GDNewSpriteObjects1);
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "A Dust In Air - No Time Left Edition.mp3");
}{for(var i = 0, len = gdjs.IntroCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDNewSpriteObjects1[i].setOpacity(gdjs.IntroCode.GDNewSpriteObjects1[i].getOpacity() - (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.IntroCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDNewSpriteObjects1[i].getOpacity() < 1 ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDNewSpriteObjects1[k] = gdjs.IntroCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDNewSpriteObjects1.length = 0;
gdjs.IntroCode.GDNewSpriteObjects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);

return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
