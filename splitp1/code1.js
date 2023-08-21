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


};gdjs.MenuCode.asyncCallback8500196 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.MenuCode.asyncCallback8500196(runtimeScene, asyncObjectsList)));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21317292);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15143860);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(7846740);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20205660);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22047900);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22134692);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24257244);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23215276);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14630644);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23576508);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22125132);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13812684);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19400364);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18533036);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23542044);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19116460);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10544292);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18362804);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18658196);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21650940);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12169196);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17428516);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17651420);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22101796);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22782676);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22492860);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(28052252);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11979260);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18553844);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17618620);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21709940);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22734028);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12257388);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9701500);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21604372);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19714636);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25027612);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22058764);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13739660);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20778116);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11088732);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25412364);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14517828);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14308476);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18385108);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22892772);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14886188);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23258756);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(27909060);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14157340);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15391036);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22098132);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12017036);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9137532);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9137892);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9138108);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14597476);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24554620);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12623828);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18178268);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22252004);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10103084);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22999740);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21785220);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19656964);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9484612);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20444716);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(28186980);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10035404);
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


};gdjs.MenuCode.asyncCallback23213524 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtsExt__THNK_P2P__StartServer.func(runtimeScene, "Game", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
gdjs.MenuCode.eventsList31 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MenuCode.asyncCallback23213524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.asyncCallback19613452 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Code"), gdjs.MenuCode.GDCodeObjects2);

{gdjs.evtsExt__THNK_P2P__ConnectToServer.func(runtimeScene, (( gdjs.MenuCode.GDCodeObjects2.length === 0 ) ? "" :gdjs.MenuCode.GDCodeObjects2[0].getString()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
gdjs.MenuCode.eventsList32 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.MenuCode.GDCodeObjects1) asyncObjectsList.addObject("Code", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MenuCode.asyncCallback19613452(runtimeScene, asyncObjectsList)));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14574116);
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
