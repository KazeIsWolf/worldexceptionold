gdjs.SplitScreen_32TestCode = {};
gdjs.SplitScreen_32TestCode.GDNewSpriteObjects1= [];
gdjs.SplitScreen_32TestCode.GDNewSpriteObjects2= [];
gdjs.SplitScreen_32TestCode.GDNewSpriteObjects3= [];
gdjs.SplitScreen_32TestCode.GDNewTextObjects1= [];
gdjs.SplitScreen_32TestCode.GDNewTextObjects2= [];
gdjs.SplitScreen_32TestCode.GDNewTextObjects3= [];


gdjs.SplitScreen_32TestCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Sync2")) == "true";
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};gdjs.SplitScreen_32TestCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "true";
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeStringInJSONFile("splitcfg", "sync2", "true");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};gdjs.SplitScreen_32TestCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("synccfg", "session");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.deleteElementFromJSONFile("synccfg", "session");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeStringInJSONFile("splitcfg", "sync", "true");
}{gdjs.evtTools.storage.readStringFromJSONFile("splitcfg", "sync2", runtimeScene, runtimeScene.getScene().getVariables().get("Sync2"));
}
{ //Subevents
gdjs.SplitScreen_32TestCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 2;
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("splitcfg", "sync", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}
{ //Subevents
gdjs.SplitScreen_32TestCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.SplitScreen_32TestCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.SplitScreen_32TestCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isPreview(runtimeScene);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isPreview(runtimeScene);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(2);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
}}

}


};

gdjs.SplitScreen_32TestCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplitScreen_32TestCode.GDNewSpriteObjects1.length = 0;
gdjs.SplitScreen_32TestCode.GDNewSpriteObjects2.length = 0;
gdjs.SplitScreen_32TestCode.GDNewSpriteObjects3.length = 0;
gdjs.SplitScreen_32TestCode.GDNewTextObjects1.length = 0;
gdjs.SplitScreen_32TestCode.GDNewTextObjects2.length = 0;
gdjs.SplitScreen_32TestCode.GDNewTextObjects3.length = 0;

gdjs.SplitScreen_32TestCode.eventsList3(runtimeScene);

return;

}

gdjs['SplitScreen_32TestCode'] = gdjs.SplitScreen_32TestCode;
