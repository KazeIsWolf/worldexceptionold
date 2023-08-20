gdjs.IFrame_32TestCode = {};


gdjs.IFrame_32TestCode.asyncCallback22627068 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "Game1", "https://redninjabr.github.io/worldexception/splitp1/", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 6, 25, false, false, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "Game2", "https://redninjabr.github.io/worldexception/splitp2/", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 6, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 + 25, false, false, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
gdjs.IFrame_32TestCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.IFrame_32TestCode.asyncCallback22627068(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.IFrame_32TestCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.window.isFullScreen(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("Initiated"), false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("Initiated"), true);
}
{ //Subevents
gdjs.IFrame_32TestCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


};

gdjs.IFrame_32TestCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.IFrame_32TestCode.eventsList1(runtimeScene);

return;

}

gdjs['IFrame_32TestCode'] = gdjs.IFrame_32TestCode;
