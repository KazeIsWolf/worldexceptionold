
if (typeof gdjs.evtsExt__UntitledExtension2__Clicked !== "undefined") {
  gdjs.evtsExt__UntitledExtension2__Clicked.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__UntitledExtension2__Clicked = {};
gdjs.evtsExt__UntitledExtension2__Clicked.GDTriggerObjects1= [];
gdjs.evtsExt__UntitledExtension2__Clicked.GDTriggerObjects2= [];
gdjs.evtsExt__UntitledExtension2__Clicked.GDTargetObjects1= [];
gdjs.evtsExt__UntitledExtension2__Clicked.GDTargetObjects2= [];


gdjs.evtsExt__UntitledExtension2__Clicked.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Target"), gdjs.evtsExt__UntitledExtension2__Clicked.GDTargetObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Trigger"), gdjs.evtsExt__UntitledExtension2__Clicked.GDTriggerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__UntitledExtension2__Clicked.GDTargetObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__UntitledExtension2__Clicked.GDTargetObjects1[i].isCollidingWithPoint((( gdjs.evtsExt__UntitledExtension2__Clicked.GDTriggerObjects1.length === 0 ) ? 0 :gdjs.evtsExt__UntitledExtension2__Clicked.GDTriggerObjects1[0].getCenterXInScene()), (( gdjs.evtsExt__UntitledExtension2__Clicked.GDTriggerObjects1.length === 0 ) ? 0 :gdjs.evtsExt__UntitledExtension2__Clicked.GDTriggerObjects1[0].getCenterYInScene())) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__UntitledExtension2__Clicked.GDTargetObjects1[k] = gdjs.evtsExt__UntitledExtension2__Clicked.GDTargetObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__UntitledExtension2__Clicked.GDTargetObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("input").getChild("action"), true);
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__UntitledExtension2__Clicked.func = function(runtimeScene, Trigger, Target, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Trigger": Trigger
, "Target": Target
},
  _objectArraysMap: {
"Trigger": gdjs.objectsListsToArray(Trigger)
, "Target": gdjs.objectsListsToArray(Target)
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

gdjs.evtsExt__UntitledExtension2__Clicked.GDTriggerObjects1.length = 0;
gdjs.evtsExt__UntitledExtension2__Clicked.GDTriggerObjects2.length = 0;
gdjs.evtsExt__UntitledExtension2__Clicked.GDTargetObjects1.length = 0;
gdjs.evtsExt__UntitledExtension2__Clicked.GDTargetObjects2.length = 0;

gdjs.evtsExt__UntitledExtension2__Clicked.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__UntitledExtension2__Clicked.registeredGdjsCallbacks = [];