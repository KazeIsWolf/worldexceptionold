
if (typeof gdjs.evtsExt__TwitchChatHandler__onScenePostEvents !== "undefined") {
  gdjs.evtsExt__TwitchChatHandler__onScenePostEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__TwitchChatHandler__onScenePostEvents = {};


gdjs.evtsExt__TwitchChatHandler__onScenePostEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(14818676);
}
if (isConditionTrue_0) {
{gdjs.evtsExt__WebSocketClient__Send.func(runtimeScene, "PASS " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Twitch").getChild("Token")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__WebSocketClient__Send.func(runtimeScene, "NICK " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Twitch").getChild("Nick")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__WebSocketClient__Send.func(runtimeScene, "JOIN " + "#" + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Twitch").getChild("Nick")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.debuggerTools.log("Connected To Chat", "info", "TwitchChat");
}}

}


};gdjs.evtsExt__TwitchChatHandler__onScenePostEvents.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__WebSocketClient__EventReceived.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.debuggerTools.log("Message" + gdjs.evtsExt__WebSocketClient__Data.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), "info", "TwitchChat");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__WebSocketClient__IsConnected.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.debuggerTools.log("Connected", "info", "TwitchChat");
}
{ //Subevents
gdjs.evtsExt__TwitchChatHandler__onScenePostEvents.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TwitchChatHandler__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__TwitchChatHandler__onScenePostEvents.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__TwitchChatHandler__onScenePostEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__TwitchChatHandler__onScenePostEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__TwitchChatHandler__onScenePostEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePostEventsCallback(gdjs.evtsExt__TwitchChatHandler__onScenePostEvents.registeredGdjsCallbacks[gdjs.evtsExt__TwitchChatHandler__onScenePostEvents.registeredGdjsCallbacks.length - 1]);
