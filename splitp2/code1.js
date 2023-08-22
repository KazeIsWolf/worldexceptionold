gdjs.MenuCode = {};
gdjs.MenuCode.GDMenuButtonObjects1_1final = [];

gdjs.MenuCode.GDMenuButtonObjects2_1final = [];

gdjs.MenuCode.forEachIndex2 = 0;

gdjs.MenuCode.forEachObjects2 = [];

gdjs.MenuCode.forEachTemporary2 = null;

gdjs.MenuCode.forEachTotalCount2 = 0;

gdjs.MenuCode.GDMenuButtonObjects1= [];
gdjs.MenuCode.GDMenuButtonObjects2= [];
gdjs.MenuCode.GDMenuButtonObjects3= [];
gdjs.MenuCode.GDMenuButtonObjects4= [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDTitleObjects3= [];
gdjs.MenuCode.GDTitleObjects4= [];
gdjs.MenuCode.GDTitleBackObjects1= [];
gdjs.MenuCode.GDTitleBackObjects2= [];
gdjs.MenuCode.GDTitleBackObjects3= [];
gdjs.MenuCode.GDTitleBackObjects4= [];
gdjs.MenuCode.GDContinueTextObjects1= [];
gdjs.MenuCode.GDContinueTextObjects2= [];
gdjs.MenuCode.GDContinueTextObjects3= [];
gdjs.MenuCode.GDContinueTextObjects4= [];
gdjs.MenuCode.GDCodeObjects1= [];
gdjs.MenuCode.GDCodeObjects2= [];
gdjs.MenuCode.GDCodeObjects3= [];
gdjs.MenuCode.GDCodeObjects4= [];
gdjs.MenuCode.GDServerObjects1= [];
gdjs.MenuCode.GDServerObjects2= [];
gdjs.MenuCode.GDServerObjects3= [];
gdjs.MenuCode.GDServerObjects4= [];
gdjs.MenuCode.GDNewParticlesEmitterObjects1= [];
gdjs.MenuCode.GDNewParticlesEmitterObjects2= [];
gdjs.MenuCode.GDNewParticlesEmitterObjects3= [];
gdjs.MenuCode.GDNewParticlesEmitterObjects4= [];
gdjs.MenuCode.GDNewTiledSpriteObjects1= [];
gdjs.MenuCode.GDNewTiledSpriteObjects2= [];
gdjs.MenuCode.GDNewTiledSpriteObjects3= [];
gdjs.MenuCode.GDNewTiledSpriteObjects4= [];
gdjs.MenuCode.GDSoulSelectorObjects1= [];
gdjs.MenuCode.GDSoulSelectorObjects2= [];
gdjs.MenuCode.GDSoulSelectorObjects3= [];
gdjs.MenuCode.GDSoulSelectorObjects4= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.storage.readNumberFromJSONFile("Save0", "HealthMax", runtimeScene, runtimeScene.getScene().getVariables().get("HealthMax"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save0", "Health", runtimeScene, runtimeScene.getScene().getVariables().get("Health"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save0", "Gold", runtimeScene, runtimeScene.getScene().getVariables().get("Gold"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save0", "Level", runtimeScene, runtimeScene.getScene().getVariables().get("Level"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save0", "Weapon", runtimeScene, runtimeScene.getScene().getVariables().get("Weapon"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save0", "Armor", runtimeScene, runtimeScene.getScene().getVariables().get("Armor"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save0", "Inventory", runtimeScene, runtimeScene.getScene().getVariables().get("Inventory"));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Character Maker", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Save0", "Existence");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("Save0", "Name", runtimeScene, runtimeScene.getScene().getVariables().get("Name"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save0", "HealthMax", runtimeScene, runtimeScene.getScene().getVariables().get("HealthMax"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save0", "Health", runtimeScene, runtimeScene.getScene().getVariables().get("Health"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save0", "Gold", runtimeScene, runtimeScene.getScene().getVariables().get("Gold"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save0", "Level", runtimeScene, runtimeScene.getScene().getVariables().get("Level"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save0", "Weapon", runtimeScene, runtimeScene.getScene().getVariables().get("Weapon"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save0", "Armor", runtimeScene, runtimeScene.getScene().getVariables().get("Armor"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save0", "Body", runtimeScene, runtimeScene.getScene().getVariables().get("Body"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save0", "Hair", runtimeScene, runtimeScene.getScene().getVariables().get("Hair"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save0", "Shirt", runtimeScene, runtimeScene.getScene().getVariables().get("Shirt"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save0", "Pants", runtimeScene, runtimeScene.getScene().getVariables().get("Pants"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save0", "Shoes", runtimeScene, runtimeScene.getScene().getVariables().get("Shoes"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("Save0", "Existence"));
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("Save0", "HealthMax", 16);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save0", "Health", 16);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save0", "Gold", 0);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save0", "Level", 1);
}{gdjs.evtTools.storage.writeStringInJSONFile("Save0", "Weapon", "None");
}{gdjs.evtTools.storage.writeStringInJSONFile("Save0", "Armor", "None");
}{gdjs.evtTools.inventory.serializeToVariable(runtimeScene, "None", runtimeScene.getScene().getVariables().get("Inventory"));
}{gdjs.evtTools.storage.writeStringInJSONFile("Save0", "Armor", gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Inventory")));
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "HealthMax", runtimeScene, runtimeScene.getScene().getVariables().get("HealthMax"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "Health", runtimeScene, runtimeScene.getScene().getVariables().get("Health"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "Gold", runtimeScene, runtimeScene.getScene().getVariables().get("Gold"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "Level", runtimeScene, runtimeScene.getScene().getVariables().get("Level"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Weapon", runtimeScene, runtimeScene.getScene().getVariables().get("Weapon"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Armor", runtimeScene, runtimeScene.getScene().getVariables().get("Armor"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Inventory", runtimeScene, runtimeScene.getScene().getVariables().get("Inventory"));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Character Maker", false);
}}

}


};gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Save1", "Existence");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Name", runtimeScene, runtimeScene.getScene().getVariables().get("Name"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "HealthMax", runtimeScene, runtimeScene.getScene().getVariables().get("HealthMax"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "Health", runtimeScene, runtimeScene.getScene().getVariables().get("Health"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "Gold", runtimeScene, runtimeScene.getScene().getVariables().get("Gold"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "Level", runtimeScene, runtimeScene.getScene().getVariables().get("Level"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Weapon", runtimeScene, runtimeScene.getScene().getVariables().get("Weapon"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Armor", runtimeScene, runtimeScene.getScene().getVariables().get("Armor"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Body", runtimeScene, runtimeScene.getScene().getVariables().get("Body"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Hair", runtimeScene, runtimeScene.getScene().getVariables().get("Hair"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Shirt", runtimeScene, runtimeScene.getScene().getVariables().get("Shirt"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Pants", runtimeScene, runtimeScene.getScene().getVariables().get("Pants"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Shoes", runtimeScene, runtimeScene.getScene().getVariables().get("Shoes"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("Save1", "Existence"));
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("Save1", "HealthMax", 16);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save1", "Health", 16);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save1", "Gold", 0);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save1", "Level", 1);
}{gdjs.evtTools.storage.writeStringInJSONFile("Save1", "Weapon", "None");
}{gdjs.evtTools.storage.writeStringInJSONFile("Save1", "Armor", "None");
}{gdjs.evtTools.inventory.serializeToVariable(runtimeScene, "None", runtimeScene.getScene().getVariables().get("Inventory"));
}{gdjs.evtTools.storage.writeStringInJSONFile("Save1", "Armor", gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Inventory")));
}
{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.storage.readNumberFromJSONFile("Save2", "HealthMax", runtimeScene, runtimeScene.getScene().getVariables().get("HealthMax"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save2", "Health", runtimeScene, runtimeScene.getScene().getVariables().get("Health"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save2", "Gold", runtimeScene, runtimeScene.getScene().getVariables().get("Gold"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save2", "Level", runtimeScene, runtimeScene.getScene().getVariables().get("Level"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save2", "Weapon", runtimeScene, runtimeScene.getScene().getVariables().get("Weapon"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save2", "Armor", runtimeScene, runtimeScene.getScene().getVariables().get("Armor"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save2", "Inventory", runtimeScene, runtimeScene.getScene().getVariables().get("Inventory"));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Character Maker", false);
}}

}


};gdjs.MenuCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Save2", "Existence");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("Save2", "Name", runtimeScene, runtimeScene.getScene().getVariables().get("Name"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save2", "HealthMax", runtimeScene, runtimeScene.getScene().getVariables().get("HealthMax"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save2", "Health", runtimeScene, runtimeScene.getScene().getVariables().get("Health"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save2", "Gold", runtimeScene, runtimeScene.getScene().getVariables().get("Gold"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save2", "Level", runtimeScene, runtimeScene.getScene().getVariables().get("Level"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save2", "Weapon", runtimeScene, runtimeScene.getScene().getVariables().get("Weapon"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save2", "Armor", runtimeScene, runtimeScene.getScene().getVariables().get("Armor"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save2", "Body", runtimeScene, runtimeScene.getScene().getVariables().get("Body"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save2", "Hair", runtimeScene, runtimeScene.getScene().getVariables().get("Hair"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save2", "Shirt", runtimeScene, runtimeScene.getScene().getVariables().get("Shirt"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save2", "Pants", runtimeScene, runtimeScene.getScene().getVariables().get("Pants"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save2", "Shoes", runtimeScene, runtimeScene.getScene().getVariables().get("Shoes"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("Save2", "Existence"));
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("Save2", "HealthMax", 16);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save2", "Health", 16);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save2", "Gold", 0);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save2", "Level", 1);
}{gdjs.evtTools.storage.writeStringInJSONFile("Save2", "Weapon", "None");
}{gdjs.evtTools.storage.writeStringInJSONFile("Save2", "Armor", "None");
}{gdjs.evtTools.inventory.serializeToVariable(runtimeScene, "None", runtimeScene.getScene().getVariables().get("Inventory"));
}{gdjs.evtTools.storage.writeStringInJSONFile("Save2", "Armor", gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Inventory")));
}
{ //Subevents
gdjs.MenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.loadJSONFileFromStorage("Save0");
}
{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.loadJSONFileFromStorage("Save1");
}
{ //Subevents
gdjs.MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 2;
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.loadJSONFileFromStorage("Save2");
}
{ //Subevents
gdjs.MenuCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), false);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "A Dust In Air - No Time Left Edition.mp3", 1, true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "A Dust In Air - No Time Left Edition.mp3", 1, true, 100, 1);
}}

}


};gdjs.MenuCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) != "";
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}{gdjs.evtsExt__THNK_P2P__ConnectToServer.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.MenuCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) != "";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) != "0";
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.MenuCode.asyncCallback23532676 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Code"), gdjs.MenuCode.GDCodeObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.MenuCode.GDNewTiledSpriteObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDNewTiledSpriteObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDNewTiledSpriteObjects2[i].setOpacity(gdjs.MenuCode.GDNewTiledSpriteObjects2[i].getOpacity() - (1));
}
}{for(var i = 0, len = gdjs.MenuCode.GDCodeObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDCodeObjects2[i].setY(572 + ((( gdjs.MenuCode.GDNewTiledSpriteObjects2.length === 0 ) ? 0 :gdjs.MenuCode.GDNewTiledSpriteObjects2[0].getOpacity()) * 4));
}
}}
gdjs.MenuCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.MenuCode.asyncCallback23532676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


};gdjs.MenuCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24604108);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("down"), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("left"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("right"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("up"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24602148);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("down"), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("left"), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("right"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("up"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24621148);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("down"), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("left"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("right"), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("up"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24622164);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("down"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("left"), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("right"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("up"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24623756);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("down"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("left"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("right"), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("up"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24625268);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("down"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("left"), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("right"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("up"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24626420);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("down"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("left"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("right"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("up"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24627452);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("down"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("left"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("right"), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("up"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24630820);
}
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("down"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("left"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("right"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("up"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24633028);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("action"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24634596);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("action"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24635060);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("back"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24636092);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("back"), false);
}
{ //Subevents
gdjs.MenuCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24637660);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("menu"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24638692);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("menu"), false);
}}

}


};gdjs.MenuCode.eventsList14 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList13(runtimeScene);
}


};gdjs.MenuCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


};gdjs.MenuCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24639644);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("down"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24640180);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("down"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24641324);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("left"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24642300);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("left"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("right"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24643884);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("right"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24644788);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("up"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24645604);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("up"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24646716);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("action"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24647652);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("action"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "B", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24648492);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("back"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "B", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24649324);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("back"), false);
}
{ //Subevents
gdjs.MenuCode.eventsList15(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "Start", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24650524);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("menu"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "Start", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24651316);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("menu"), false);
}}

}


};gdjs.MenuCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


};gdjs.MenuCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24652620);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("down"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24653340);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("down"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24654108);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("left"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24654548);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("left"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24655508);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("right"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24656300);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("right"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24655996);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("up"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24657508);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("up"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24658460);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("action"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24659292);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("action"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24659052);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("back"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24660500);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("back"), false);
}
{ //Subevents
gdjs.MenuCode.eventsList17(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24661996);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("menu"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "c");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24662436);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("menu"), false);
}}

}


};gdjs.MenuCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.eventsList16(runtimeScene);
}


{


gdjs.MenuCode.eventsList18(runtimeScene);
}


};gdjs.MenuCode.eventsList20 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList19(runtimeScene);
}


};gdjs.MenuCode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


};gdjs.MenuCode.eventsList22 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24664356);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("down"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24665076);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("down"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24665844);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("left"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24666284);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("left"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24667244);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("right"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24668036);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("right"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24667732);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("up"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24669244);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("up"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24670196);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("action"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24671028);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("action"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24670788);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("back"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24672236);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("back"), false);
}
{ //Subevents
gdjs.MenuCode.eventsList21(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24673732);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("menu"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "c");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24674172);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("menu"), false);
}}

}


};gdjs.MenuCode.eventsList23 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


};gdjs.MenuCode.eventsList24 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24674924);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("down"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24675460);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("down"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24676604);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("left"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24677580);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("left"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("right"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24679164);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("right"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24680068);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("up"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24680884);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("up"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24681996);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("action"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24682932);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("action"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "B", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24683772);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("back"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "B", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24684604);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("back"), false);
}
{ //Subevents
gdjs.MenuCode.eventsList23(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "Start", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24685804);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("menu"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), "Start", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24686596);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("menu"), false);
}}

}


};gdjs.MenuCode.eventsList25 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList22(runtimeScene);
}


{


gdjs.MenuCode.eventsList24(runtimeScene);
}


};gdjs.MenuCode.eventsList26 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList25(runtimeScene);
}


};gdjs.MenuCode.eventsList27 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDMenuButtonObjects2, gdjs.MenuCode.GDMenuButtonObjects3);

gdjs.copyArray(runtimeScene.getObjects("SoulSelector"), gdjs.MenuCode.GDSoulSelectorObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects3[i].isCollidingWithPoint((( gdjs.MenuCode.GDSoulSelectorObjects3.length === 0 ) ? 0 :gdjs.MenuCode.GDSoulSelectorObjects3[0].getCenterXInScene()), (( gdjs.MenuCode.GDSoulSelectorObjects3.length === 0 ) ? 0 :gdjs.MenuCode.GDSoulSelectorObjects3[0].getCenterYInScene())) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuButtonObjects3[k] = gdjs.MenuCode.GDMenuButtonObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenuButtonObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDMenuButtonObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuButtonObjects3[i].enableEffect("Hovering", true);
}
}{for(var i = 0, len = gdjs.MenuCode.GDMenuButtonObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuButtonObjects3[i].setVariableBoolean(gdjs.MenuCode.GDMenuButtonObjects3[i].getVariables().get("Hovering"), true);
}
}}

}


{

gdjs.copyArray(gdjs.MenuCode.GDMenuButtonObjects2, gdjs.MenuCode.GDMenuButtonObjects3);

gdjs.copyArray(runtimeScene.getObjects("SoulSelector"), gdjs.MenuCode.GDSoulSelectorObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDMenuButtonObjects3[i].isCollidingWithPoint((( gdjs.MenuCode.GDSoulSelectorObjects3.length === 0 ) ? 0 :gdjs.MenuCode.GDSoulSelectorObjects3[0].getCenterXInScene()), (( gdjs.MenuCode.GDSoulSelectorObjects3.length === 0 ) ? 0 :gdjs.MenuCode.GDSoulSelectorObjects3[0].getCenterYInScene()))) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuButtonObjects3[k] = gdjs.MenuCode.GDMenuButtonObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenuButtonObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDMenuButtonObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuButtonObjects3[i].enableEffect("Hovering", false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDMenuButtonObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuButtonObjects3[i].setVariableBoolean(gdjs.MenuCode.GDMenuButtonObjects3[i].getVariables().get("Hovering"), false);
}
}}

}


};gdjs.MenuCode.eventsList28 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Online Menu");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "Game");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "FireBase Test");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "Menu");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "FireBase Test");
}}

}


};gdjs.MenuCode.eventsList29 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDMenuButtonObjects1, gdjs.MenuCode.GDMenuButtonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].getVariableNumber(gdjs.MenuCode.GDMenuButtonObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCodeObjects2 */
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}{gdjs.evtsExt__THNK_P2P__ConnectToServer.func(runtimeScene, (( gdjs.MenuCode.GDCodeObjects2.length === 0 ) ? "" :gdjs.MenuCode.GDCodeObjects2[0].getString()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.MenuCode.eventsList30 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDMenuButtonObjects1, gdjs.MenuCode.GDMenuButtonObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects3[i].getVariableNumber(gdjs.MenuCode.GDMenuButtonObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuButtonObjects3[k] = gdjs.MenuCode.GDMenuButtonObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects3.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}{gdjs.evtsExt__THNK_P2P__StartServer.func(runtimeScene, "Game", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Code"), gdjs.MenuCode.GDCodeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCodeObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCodeObjects2[i].getString() != "" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCodeObjects2[k] = gdjs.MenuCode.GDCodeObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDCodeObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList29(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.asyncCallback23571796 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtsExt__THNK_P2P__StartServer.func(runtimeScene, "Game", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
gdjs.MenuCode.eventsList31 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MenuCode.asyncCallback23571796(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.asyncCallback23573332 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Code"), gdjs.MenuCode.GDCodeObjects2);

{gdjs.evtsExt__THNK_P2P__ConnectToServer.func(runtimeScene, (( gdjs.MenuCode.GDCodeObjects2.length === 0 ) ? "" :gdjs.MenuCode.GDCodeObjects2[0].getString()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
gdjs.MenuCode.eventsList32 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.MenuCode.GDCodeObjects1) asyncObjectsList.addObject("Code", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MenuCode.asyncCallback23573332(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.eventsList33 = function(runtimeScene) {

{

/* Reuse gdjs.MenuCode.GDMenuButtonObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects1[i].getVariableNumber(gdjs.MenuCode.GDMenuButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuButtonObjects1[k] = gdjs.MenuCode.GDMenuButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}
{ //Subevents
gdjs.MenuCode.eventsList32(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList34 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDMenuButtonObjects1, gdjs.MenuCode.GDMenuButtonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].getVariableNumber(gdjs.MenuCode.GDMenuButtonObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}
{ //Subevents
gdjs.MenuCode.eventsList31(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Code"), gdjs.MenuCode.GDCodeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCodeObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCodeObjects1[i].getString() != "" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCodeObjects1[k] = gdjs.MenuCode.GDCodeObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDCodeObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList33(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList35 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "Menu");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList30(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "Game");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Online Menu");
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.unloadJSONFile("Save1");
}
{ //Subevents
gdjs.MenuCode.eventsList34(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList36 = function(runtimeScene) {

{



}


{

gdjs.MenuCode.GDMenuButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.MenuCode.GDMenuButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.MenuCode.GDMenuButtonObjects2);
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenuButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenuButtonObjects1_1final.indexOf(gdjs.MenuCode.GDMenuButtonObjects2[j]) === -1 )
            gdjs.MenuCode.GDMenuButtonObjects1_1final.push(gdjs.MenuCode.GDMenuButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDMenuButtonObjects1_1final, gdjs.MenuCode.GDMenuButtonObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuButtonObjects1[k] = gdjs.MenuCode.GDMenuButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList35(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList37 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("left"), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoulSelector"), gdjs.MenuCode.GDSoulSelectorObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDSoulSelectorObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDSoulSelectorObjects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("right"), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoulSelector"), gdjs.MenuCode.GDSoulSelectorObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDSoulSelectorObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDSoulSelectorObjects2[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("up"), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoulSelector"), gdjs.MenuCode.GDSoulSelectorObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDSoulSelectorObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDSoulSelectorObjects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("down"), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoulSelector"), gdjs.MenuCode.GDSoulSelectorObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDSoulSelectorObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDSoulSelectorObjects2[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{

gdjs.MenuCode.GDMenuButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.MenuCode.GDMenuButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.MenuCode.GDMenuButtonObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects3[i].getVariableBoolean(gdjs.MenuCode.GDMenuButtonObjects3[i].getVariables().get("Hovering"), true) ) {
        isConditionTrue_2 = true;
        gdjs.MenuCode.GDMenuButtonObjects3[k] = gdjs.MenuCode.GDMenuButtonObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("action"), true);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenuButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenuButtonObjects2_1final.indexOf(gdjs.MenuCode.GDMenuButtonObjects3[j]) === -1 )
            gdjs.MenuCode.GDMenuButtonObjects2_1final.push(gdjs.MenuCode.GDMenuButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.MenuCode.GDMenuButtonObjects3);
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects3[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDMenuButtonObjects3[k] = gdjs.MenuCode.GDMenuButtonObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenuButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenuButtonObjects2_1final.indexOf(gdjs.MenuCode.GDMenuButtonObjects3[j]) === -1 )
            gdjs.MenuCode.GDMenuButtonObjects2_1final.push(gdjs.MenuCode.GDMenuButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDMenuButtonObjects2_1final, gdjs.MenuCode.GDMenuButtonObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].getVariableNumber(gdjs.MenuCode.GDMenuButtonObjects2[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.MenuCode.GDMenuButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.MenuCode.GDMenuButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.MenuCode.GDMenuButtonObjects3);
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects3[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDMenuButtonObjects3[k] = gdjs.MenuCode.GDMenuButtonObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenuButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenuButtonObjects2_1final.indexOf(gdjs.MenuCode.GDMenuButtonObjects3[j]) === -1 )
            gdjs.MenuCode.GDMenuButtonObjects2_1final.push(gdjs.MenuCode.GDMenuButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.MenuCode.GDMenuButtonObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects3[i].getVariableBoolean(gdjs.MenuCode.GDMenuButtonObjects3[i].getVariables().get("Hovering"), true) ) {
        isConditionTrue_2 = true;
        gdjs.MenuCode.GDMenuButtonObjects3[k] = gdjs.MenuCode.GDMenuButtonObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("action"), true);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenuButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenuButtonObjects2_1final.indexOf(gdjs.MenuCode.GDMenuButtonObjects3[j]) === -1 )
            gdjs.MenuCode.GDMenuButtonObjects2_1final.push(gdjs.MenuCode.GDMenuButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDMenuButtonObjects2_1final, gdjs.MenuCode.GDMenuButtonObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].getVariableNumber(gdjs.MenuCode.GDMenuButtonObjects2[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList28(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.MenuCode.GDMenuButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].getVariableNumber(gdjs.MenuCode.GDMenuButtonObjects2[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.MenuCode.GDMenuButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.MenuCode.GDMenuButtonObjects2, gdjs.MenuCode.GDMenuButtonObjects3);

{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects3[i].getVariableBoolean(gdjs.MenuCode.GDMenuButtonObjects3[i].getVariables().get("Hovering"), true) ) {
        isConditionTrue_2 = true;
        gdjs.MenuCode.GDMenuButtonObjects3[k] = gdjs.MenuCode.GDMenuButtonObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("action"), true);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenuButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenuButtonObjects2_1final.indexOf(gdjs.MenuCode.GDMenuButtonObjects3[j]) === -1 )
            gdjs.MenuCode.GDMenuButtonObjects2_1final.push(gdjs.MenuCode.GDMenuButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDMenuButtonObjects2, gdjs.MenuCode.GDMenuButtonObjects3);

for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects3[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDMenuButtonObjects3[k] = gdjs.MenuCode.GDMenuButtonObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenuButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenuButtonObjects2_1final.indexOf(gdjs.MenuCode.GDMenuButtonObjects3[j]) === -1 )
            gdjs.MenuCode.GDMenuButtonObjects2_1final.push(gdjs.MenuCode.GDMenuButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDMenuButtonObjects2_1final, gdjs.MenuCode.GDMenuButtonObjects2);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("Save1", "HealthMax", 16);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save1", "Health", 16);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save1", "Gold", 0);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save1", "Level", 1);
}{gdjs.evtTools.storage.writeStringInJSONFile("Save1", "Weapon", "None");
}{gdjs.evtTools.storage.writeStringInJSONFile("Save1", "Armor", "None");
}{gdjs.evtTools.inventory.serializeToVariable(runtimeScene, "None", runtimeScene.getScene().getVariables().get("Inventory"));
}{gdjs.evtTools.storage.writeStringInJSONFile("Save1", "Armor", gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Inventory")));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "HealthMax", runtimeScene, runtimeScene.getScene().getVariables().get("HealthMax"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "Health", runtimeScene, runtimeScene.getScene().getVariables().get("Health"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "Gold", runtimeScene, runtimeScene.getScene().getVariables().get("Gold"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "Level", runtimeScene, runtimeScene.getScene().getVariables().get("Level"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Weapon", runtimeScene, runtimeScene.getScene().getVariables().get("Weapon"));
}{gdjs.evtTools.storage.readStringFromJSONFile("Save1", "Armor", runtimeScene, runtimeScene.getScene().getVariables().get("Armor"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "Inventory", runtimeScene, runtimeScene.getScene().getVariables().get("Inventory"));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Character Maker", false);
}}

}


{


gdjs.MenuCode.eventsList36(runtimeScene);
}


};gdjs.MenuCode.eventsList38 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.MenuCode.GDMenuButtonObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDMenuButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuButtonObjects1[i].SetLabelText((gdjs.RuntimeObject.getVariableString(gdjs.MenuCode.GDMenuButtonObjects1[i].getVariables().getFromIndex(1))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "Menu");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("menu");
}
{ //Subevents
gdjs.MenuCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("synccfg", "session");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "Menu");
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.deleteElementFromJSONFile("synccfg", "session");
}
{ //Subevents
gdjs.MenuCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "Menu");
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("synccfg", "session", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}
{ //Subevents
gdjs.MenuCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.deleteElementFromJSONFile("splitcfg", "sync");
}{gdjs.evtTools.storage.deleteElementFromJSONFile("splitcfg", "sync2");
}}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.MenuCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.MenuCode.GDMenuButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.MenuCode.GDMenuButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.MenuCode.GDMenuButtonObjects2);
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].getVariableNumber(gdjs.MenuCode.GDMenuButtonObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenuButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenuButtonObjects1_1final.indexOf(gdjs.MenuCode.GDMenuButtonObjects2[j]) === -1 )
            gdjs.MenuCode.GDMenuButtonObjects1_1final.push(gdjs.MenuCode.GDMenuButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.MenuCode.GDMenuButtonObjects2);
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].getVariableNumber(gdjs.MenuCode.GDMenuButtonObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenuButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenuButtonObjects1_1final.indexOf(gdjs.MenuCode.GDMenuButtonObjects2[j]) === -1 )
            gdjs.MenuCode.GDMenuButtonObjects1_1final.push(gdjs.MenuCode.GDMenuButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDMenuButtonObjects1_1final, gdjs.MenuCode.GDMenuButtonObjects1);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenuButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDMenuButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuButtonObjects1[i].hide(false);
}
}}

}


{

gdjs.MenuCode.GDMenuButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__InternetConnectivity__IsDeviceOnline.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.MenuCode.GDMenuButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.MenuCode.GDMenuButtonObjects2);
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].getVariableNumber(gdjs.MenuCode.GDMenuButtonObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenuButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenuButtonObjects1_1final.indexOf(gdjs.MenuCode.GDMenuButtonObjects2[j]) === -1 )
            gdjs.MenuCode.GDMenuButtonObjects1_1final.push(gdjs.MenuCode.GDMenuButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.MenuCode.GDMenuButtonObjects2);
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].getVariableNumber(gdjs.MenuCode.GDMenuButtonObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenuButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenuButtonObjects1_1final.indexOf(gdjs.MenuCode.GDMenuButtonObjects2[j]) === -1 )
            gdjs.MenuCode.GDMenuButtonObjects1_1final.push(gdjs.MenuCode.GDMenuButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDMenuButtonObjects1_1final, gdjs.MenuCode.GDMenuButtonObjects1);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenuButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDMenuButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuButtonObjects1[i].hide();
}
}}

}


{

gdjs.MenuCode.GDMenuButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.MenuCode.GDMenuButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.MenuCode.GDMenuButtonObjects2);
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].getVariableNumber(gdjs.MenuCode.GDMenuButtonObjects2[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenuButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenuButtonObjects1_1final.indexOf(gdjs.MenuCode.GDMenuButtonObjects2[j]) === -1 )
            gdjs.MenuCode.GDMenuButtonObjects1_1final.push(gdjs.MenuCode.GDMenuButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.MenuCode.GDMenuButtonObjects2);
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].getVariableNumber(gdjs.MenuCode.GDMenuButtonObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenuButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenuButtonObjects1_1final.indexOf(gdjs.MenuCode.GDMenuButtonObjects2[j]) === -1 )
            gdjs.MenuCode.GDMenuButtonObjects1_1final.push(gdjs.MenuCode.GDMenuButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.MenuCode.GDMenuButtonObjects2);
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenuButtonObjects2[i].getVariableNumber(gdjs.MenuCode.GDMenuButtonObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDMenuButtonObjects2[k] = gdjs.MenuCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenuButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenuButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenuButtonObjects1_1final.indexOf(gdjs.MenuCode.GDMenuButtonObjects2[j]) === -1 )
            gdjs.MenuCode.GDMenuButtonObjects1_1final.push(gdjs.MenuCode.GDMenuButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDMenuButtonObjects1_1final, gdjs.MenuCode.GDMenuButtonObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Code"), gdjs.MenuCode.GDCodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("ContinueText"), gdjs.MenuCode.GDContinueTextObjects1);
/* Reuse gdjs.MenuCode.GDMenuButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDMenuButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDCodeObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDCodeObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDContinueTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDContinueTextObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24615484);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("down"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("left"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("right"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("up"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("action"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("back"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("menu"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList20(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList26(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.MenuCode.GDMenuButtonObjects1);

for (gdjs.MenuCode.forEachIndex2 = 0;gdjs.MenuCode.forEachIndex2 < gdjs.MenuCode.GDMenuButtonObjects1.length;++gdjs.MenuCode.forEachIndex2) {
gdjs.MenuCode.GDMenuButtonObjects2.length = 0;


gdjs.MenuCode.forEachTemporary2 = gdjs.MenuCode.GDMenuButtonObjects1[gdjs.MenuCode.forEachIndex2];
gdjs.MenuCode.GDMenuButtonObjects2.push(gdjs.MenuCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.MenuCode.GDMenuButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuButtonObjects2[i].setEffectDoubleParameter("Hovering", "thickness", 20);
}
}
{ //Subevents: 
gdjs.MenuCode.eventsList27(runtimeScene);} //Subevents end.
}
}

}


{


gdjs.MenuCode.eventsList37(runtimeScene);
}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDMenuButtonObjects1.length = 0;
gdjs.MenuCode.GDMenuButtonObjects2.length = 0;
gdjs.MenuCode.GDMenuButtonObjects3.length = 0;
gdjs.MenuCode.GDMenuButtonObjects4.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDTitleObjects4.length = 0;
gdjs.MenuCode.GDTitleBackObjects1.length = 0;
gdjs.MenuCode.GDTitleBackObjects2.length = 0;
gdjs.MenuCode.GDTitleBackObjects3.length = 0;
gdjs.MenuCode.GDTitleBackObjects4.length = 0;
gdjs.MenuCode.GDContinueTextObjects1.length = 0;
gdjs.MenuCode.GDContinueTextObjects2.length = 0;
gdjs.MenuCode.GDContinueTextObjects3.length = 0;
gdjs.MenuCode.GDContinueTextObjects4.length = 0;
gdjs.MenuCode.GDCodeObjects1.length = 0;
gdjs.MenuCode.GDCodeObjects2.length = 0;
gdjs.MenuCode.GDCodeObjects3.length = 0;
gdjs.MenuCode.GDCodeObjects4.length = 0;
gdjs.MenuCode.GDServerObjects1.length = 0;
gdjs.MenuCode.GDServerObjects2.length = 0;
gdjs.MenuCode.GDServerObjects3.length = 0;
gdjs.MenuCode.GDServerObjects4.length = 0;
gdjs.MenuCode.GDNewParticlesEmitterObjects1.length = 0;
gdjs.MenuCode.GDNewParticlesEmitterObjects2.length = 0;
gdjs.MenuCode.GDNewParticlesEmitterObjects3.length = 0;
gdjs.MenuCode.GDNewParticlesEmitterObjects4.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.MenuCode.GDSoulSelectorObjects1.length = 0;
gdjs.MenuCode.GDSoulSelectorObjects2.length = 0;
gdjs.MenuCode.GDSoulSelectorObjects3.length = 0;
gdjs.MenuCode.GDSoulSelectorObjects4.length = 0;

gdjs.MenuCode.eventsList38(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
