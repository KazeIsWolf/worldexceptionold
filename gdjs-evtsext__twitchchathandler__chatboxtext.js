
gdjs.evtsExt__TwitchChatHandler__ChatBoxText = gdjs.evtsExt__TwitchChatHandler__ChatBoxText || {};

/**
 * Behavior generated from Chat Box For Text
 */
gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText = class ChatBoxText extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.ScrollType = "Down Scroll";
    this._behaviorData.MaxMessages = behaviorData.MaxMessages !== undefined ? behaviorData.MaxMessages : Number("6") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.ScrollType !== newBehaviorData.ScrollType)
      this._behaviorData.ScrollType = newBehaviorData.ScrollType;
    if (oldBehaviorData.MaxMessages !== newBehaviorData.MaxMessages)
      this._behaviorData.MaxMessages = newBehaviorData.MaxMessages;

    return true;
  }

  // Properties:
  
  _getScrollType() {
    return this._behaviorData.ScrollType !== undefined ? this._behaviorData.ScrollType : "Down Scroll";
  }
  _setScrollType(newValue) {
    this._behaviorData.ScrollType = newValue;
  }
  _getMaxMessages() {
    return this._behaviorData.MaxMessages !== undefined ? this._behaviorData.MaxMessages : Number("6") || 0;
  }
  _setMaxMessages(newValue) {
    this._behaviorData.MaxMessages = newValue;
  }
}

/**
 * Shared data generated from Chat Box For Text
 */
gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.SharedData = class ChatBoxTextSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._TwitchChatHandler_ChatBoxTextSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._TwitchChatHandler_ChatBoxTextSharedData = new gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.SharedData(
      initialData
    );
  }
  return instanceContainer._TwitchChatHandler_ChatBoxTextSharedData;
}

// Methods:
gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintRawMessageContext = {};
gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintRawMessageContext.GDObjectObjects1= [];
gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintRawMessageContext.GDObjectObjects2= [];


gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintRawMessageContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintRawMessageContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintRawMessageContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintRawMessageContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getScrollType() == "Down Scroll" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintRawMessageContext.GDObjectObjects1[k] = gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintRawMessageContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintRawMessageContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintRawMessageContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintRawMessageContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintRawMessageContext.GDObjectObjects1[i].setString(gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintRawMessageContext.GDObjectObjects1[i].getString() + (gdjs.evtsExt__TwitchChatHandler__ChatMessageRaw.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintRawMessageContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintRawMessageContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintRawMessageContext.GDObjectObjects1[i].getVariables().get("Twitch").getChild("Messages")).add(1);
}
}}

}


};

gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintRawMessage = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintRawMessageContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintRawMessageContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintRawMessageContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintMessageContext = {};
gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintMessageContext.GDObjectObjects1= [];
gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintMessageContext.GDObjectObjects2= [];


gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintMessageContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintMessageContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintMessageContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintMessageContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getScrollType() == "Down Scroll" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintMessageContext.GDObjectObjects1[k] = gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintMessageContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintMessageContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintMessageContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintMessageContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintMessageContext.GDObjectObjects1[i].setString(gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintMessageContext.GDObjectObjects1[i].getString() + (gdjs.evtsExt__TwitchChatHandler__ChatMessage.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintMessageContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintMessageContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintMessageContext.GDObjectObjects1[i].getVariables().get("Twitch").getChild("Messages")).add(1);
}
}}

}


};gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintMessageContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__TwitchChatHandler__ChatMessage.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) != "undefined");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__TwitchChatHandler__ChatMessage.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) != gdjs.evtTools.string.newLine());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strAt(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Twitch").getChild("ChatFilter")), 0) != "!");
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintMessageContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintMessage = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintMessageContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintMessageContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintMessageContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintCommandContext = {};
gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintCommandContext.GDObjectObjects1= [];
gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintCommandContext.GDObjectObjects2= [];


gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintCommandContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintCommandContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintCommandContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintCommandContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getScrollType() == "Down Scroll" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintCommandContext.GDObjectObjects1[k] = gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintCommandContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintCommandContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintCommandContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintCommandContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintCommandContext.GDObjectObjects1[i].setString(gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintCommandContext.GDObjectObjects1[i].getString() + (gdjs.evtsExt__TwitchChatHandler__ChatMessage.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintCommandContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintCommandContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintCommandContext.GDObjectObjects1[i].getVariables().get("Twitch").getChild("Messages")).add(1);
}
}}

}


};gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintCommandContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__TwitchChatHandler__ChatMessage.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) != "undefined");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__TwitchChatHandler__ChatMessage.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) != gdjs.evtTools.string.newLine());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strAt(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Twitch").getChild("ChatFilter")), 0) == "!");
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintCommandContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintCommand = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintCommandContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintCommandContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.PrintCommandContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Twitch").getChild("Messages")) > (gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxMessages()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getScrollType() == "Down Scroll" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Twitch").getChild("Messages")).sub(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects1[i].setString(gdjs.evtTools.string.subStr((gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects1[i].getString()), gdjs.evtTools.string.strFind((gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects1[i].getString()), gdjs.evtTools.string.newLine()) + 1, gdjs.evtTools.string.strLen((gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects1[i].getString()))));
}
}}

}


};

gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("TwitchChatHandler::ChatBoxText", gdjs.evtsExt__TwitchChatHandler__ChatBoxText.ChatBoxText);
