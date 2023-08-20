gdjs.Twitch_32TestCode = {};
gdjs.Twitch_32TestCode.GDNewTextObjects1= [];
gdjs.Twitch_32TestCode.GDNewTextObjects2= [];
gdjs.Twitch_32TestCode.GDNewBBTextObjects1= [];
gdjs.Twitch_32TestCode.GDNewBBTextObjects2= [];


gdjs.Twitch_32TestCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__TwitchChatHandler__Connect.func(runtimeScene, "oauth:mscdrxr14xqakznk4oitd5q142p7os", "redninjabrl", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__TwitchChatHandler__OnMessageReceived.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Twitch_32TestCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Twitch_32TestCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Twitch_32TestCode.GDNewTextObjects1[i].getBehavior("ChatBox").PrintMessage((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__TwitchChatHandler__OnCommandReceived.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewBBText"), gdjs.Twitch_32TestCode.GDNewBBTextObjects1);
{for(var i = 0, len = gdjs.Twitch_32TestCode.GDNewBBTextObjects1.length ;i < len;++i) {
    gdjs.Twitch_32TestCode.GDNewBBTextObjects1[i].getBehavior("ChatBoxBBText").PrintCommand("", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22543476);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__TwitchChatHandler__SendChatMessage.func(runtimeScene, "teste", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.Twitch_32TestCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Twitch_32TestCode.GDNewTextObjects1.length = 0;
gdjs.Twitch_32TestCode.GDNewTextObjects2.length = 0;
gdjs.Twitch_32TestCode.GDNewBBTextObjects1.length = 0;
gdjs.Twitch_32TestCode.GDNewBBTextObjects2.length = 0;

gdjs.Twitch_32TestCode.eventsList0(runtimeScene);

return;

}

gdjs['Twitch_32TestCode'] = gdjs.Twitch_32TestCode;
