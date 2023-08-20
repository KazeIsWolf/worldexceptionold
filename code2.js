gdjs.Character_32MakerCode = {};
gdjs.Character_32MakerCode.forEachIndex2 = 0;

gdjs.Character_32MakerCode.forEachIndex3 = 0;

gdjs.Character_32MakerCode.forEachObjects2 = [];

gdjs.Character_32MakerCode.forEachObjects3 = [];

gdjs.Character_32MakerCode.forEachTemporary2 = null;

gdjs.Character_32MakerCode.forEachTemporary3 = null;

gdjs.Character_32MakerCode.forEachTotalCount2 = 0;

gdjs.Character_32MakerCode.forEachTotalCount3 = 0;

gdjs.Character_32MakerCode.GDHairSelectorObjects1= [];
gdjs.Character_32MakerCode.GDHairSelectorObjects2= [];
gdjs.Character_32MakerCode.GDHairSelectorObjects3= [];
gdjs.Character_32MakerCode.GDHairSelectorObjects4= [];
gdjs.Character_32MakerCode.GDShirtSelectorObjects1= [];
gdjs.Character_32MakerCode.GDShirtSelectorObjects2= [];
gdjs.Character_32MakerCode.GDShirtSelectorObjects3= [];
gdjs.Character_32MakerCode.GDShirtSelectorObjects4= [];
gdjs.Character_32MakerCode.GDBodySelectorObjects1= [];
gdjs.Character_32MakerCode.GDBodySelectorObjects2= [];
gdjs.Character_32MakerCode.GDBodySelectorObjects3= [];
gdjs.Character_32MakerCode.GDBodySelectorObjects4= [];
gdjs.Character_32MakerCode.GDPantsSelectorObjects1= [];
gdjs.Character_32MakerCode.GDPantsSelectorObjects2= [];
gdjs.Character_32MakerCode.GDPantsSelectorObjects3= [];
gdjs.Character_32MakerCode.GDPantsSelectorObjects4= [];
gdjs.Character_32MakerCode.GDShoeSelectorObjects1= [];
gdjs.Character_32MakerCode.GDShoeSelectorObjects2= [];
gdjs.Character_32MakerCode.GDShoeSelectorObjects3= [];
gdjs.Character_32MakerCode.GDShoeSelectorObjects4= [];
gdjs.Character_32MakerCode.GDColorPickerObjects1= [];
gdjs.Character_32MakerCode.GDColorPickerObjects2= [];
gdjs.Character_32MakerCode.GDColorPickerObjects3= [];
gdjs.Character_32MakerCode.GDColorPickerObjects4= [];
gdjs.Character_32MakerCode.GDNameObjects1= [];
gdjs.Character_32MakerCode.GDNameObjects2= [];
gdjs.Character_32MakerCode.GDNameObjects3= [];
gdjs.Character_32MakerCode.GDNameObjects4= [];
gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects1= [];
gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2= [];
gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects3= [];
gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects4= [];
gdjs.Character_32MakerCode.GDColorObjects1= [];
gdjs.Character_32MakerCode.GDColorObjects2= [];
gdjs.Character_32MakerCode.GDColorObjects3= [];
gdjs.Character_32MakerCode.GDColorObjects4= [];
gdjs.Character_32MakerCode.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.Character_32MakerCode.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.Character_32MakerCode.GDFloatingOutButtonDarkBlueObjects3= [];
gdjs.Character_32MakerCode.GDFloatingOutButtonDarkBlueObjects4= [];


gdjs.Character_32MakerCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Character_32MakerCode.GDColorPickerObjects2, gdjs.Character_32MakerCode.GDColorPickerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects3.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariableString(gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariables().getFromIndex(1)) == "R" ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects3[k] = gdjs.Character_32MakerCode.GDColorPickerObjects3[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BodySelector"), gdjs.Character_32MakerCode.GDBodySelectorObjects3);
/* Reuse gdjs.Character_32MakerCode.GDColorPickerObjects3 */
{for(var i = 0, len = gdjs.Character_32MakerCode.GDBodySelectorObjects3.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDBodySelectorObjects3[i].returnVariable(gdjs.Character_32MakerCode.GDBodySelectorObjects3[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.common.toNumber((( gdjs.Character_32MakerCode.GDColorPickerObjects3.length === 0 ) ? "" :gdjs.Character_32MakerCode.GDColorPickerObjects3[0].getString())));
}
}}

}


{

gdjs.copyArray(gdjs.Character_32MakerCode.GDColorPickerObjects2, gdjs.Character_32MakerCode.GDColorPickerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects3.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariableString(gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariables().getFromIndex(1)) == "G" ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects3[k] = gdjs.Character_32MakerCode.GDColorPickerObjects3[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BodySelector"), gdjs.Character_32MakerCode.GDBodySelectorObjects3);
/* Reuse gdjs.Character_32MakerCode.GDColorPickerObjects3 */
{for(var i = 0, len = gdjs.Character_32MakerCode.GDBodySelectorObjects3.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDBodySelectorObjects3[i].returnVariable(gdjs.Character_32MakerCode.GDBodySelectorObjects3[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.common.toNumber((( gdjs.Character_32MakerCode.GDColorPickerObjects3.length === 0 ) ? "" :gdjs.Character_32MakerCode.GDColorPickerObjects3[0].getString())));
}
}}

}


{

/* Reuse gdjs.Character_32MakerCode.GDColorPickerObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects2.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects2[i].getVariableString(gdjs.Character_32MakerCode.GDColorPickerObjects2[i].getVariables().getFromIndex(1)) == "B" ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects2[k] = gdjs.Character_32MakerCode.GDColorPickerObjects2[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BodySelector"), gdjs.Character_32MakerCode.GDBodySelectorObjects2);
/* Reuse gdjs.Character_32MakerCode.GDColorPickerObjects2 */
{for(var i = 0, len = gdjs.Character_32MakerCode.GDBodySelectorObjects2.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDBodySelectorObjects2[i].returnVariable(gdjs.Character_32MakerCode.GDBodySelectorObjects2[i].getVariables().getFromIndex(2)).setNumber(gdjs.evtTools.common.toNumber((( gdjs.Character_32MakerCode.GDColorPickerObjects2.length === 0 ) ? "" :gdjs.Character_32MakerCode.GDColorPickerObjects2[0].getString())));
}
}}

}


};gdjs.Character_32MakerCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Character_32MakerCode.GDColorPickerObjects2, gdjs.Character_32MakerCode.GDColorPickerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects3.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariableString(gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariables().getFromIndex(1)) == "R" ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects3[k] = gdjs.Character_32MakerCode.GDColorPickerObjects3[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Character_32MakerCode.GDColorPickerObjects3 */
gdjs.copyArray(runtimeScene.getObjects("ShirtSelector"), gdjs.Character_32MakerCode.GDShirtSelectorObjects3);
{for(var i = 0, len = gdjs.Character_32MakerCode.GDShirtSelectorObjects3.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDShirtSelectorObjects3[i].returnVariable(gdjs.Character_32MakerCode.GDShirtSelectorObjects3[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.common.toNumber((( gdjs.Character_32MakerCode.GDColorPickerObjects3.length === 0 ) ? "" :gdjs.Character_32MakerCode.GDColorPickerObjects3[0].getString())));
}
}}

}


{

gdjs.copyArray(gdjs.Character_32MakerCode.GDColorPickerObjects2, gdjs.Character_32MakerCode.GDColorPickerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects3.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariableString(gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariables().getFromIndex(1)) == "G" ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects3[k] = gdjs.Character_32MakerCode.GDColorPickerObjects3[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Character_32MakerCode.GDColorPickerObjects3 */
gdjs.copyArray(runtimeScene.getObjects("ShirtSelector"), gdjs.Character_32MakerCode.GDShirtSelectorObjects3);
{for(var i = 0, len = gdjs.Character_32MakerCode.GDShirtSelectorObjects3.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDShirtSelectorObjects3[i].returnVariable(gdjs.Character_32MakerCode.GDShirtSelectorObjects3[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.common.toNumber((( gdjs.Character_32MakerCode.GDColorPickerObjects3.length === 0 ) ? "" :gdjs.Character_32MakerCode.GDColorPickerObjects3[0].getString())));
}
}}

}


{

gdjs.copyArray(gdjs.Character_32MakerCode.GDColorPickerObjects2, gdjs.Character_32MakerCode.GDColorPickerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects3.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariableString(gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariables().getFromIndex(1)) == "B" ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects3[k] = gdjs.Character_32MakerCode.GDColorPickerObjects3[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Character_32MakerCode.GDColorPickerObjects3 */
gdjs.copyArray(runtimeScene.getObjects("ShirtSelector"), gdjs.Character_32MakerCode.GDShirtSelectorObjects3);
{for(var i = 0, len = gdjs.Character_32MakerCode.GDShirtSelectorObjects3.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDShirtSelectorObjects3[i].returnVariable(gdjs.Character_32MakerCode.GDShirtSelectorObjects3[i].getVariables().getFromIndex(2)).setNumber(gdjs.evtTools.common.toNumber((( gdjs.Character_32MakerCode.GDColorPickerObjects3.length === 0 ) ? "" :gdjs.Character_32MakerCode.GDColorPickerObjects3[0].getString())));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Character_32MakerCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Character_32MakerCode.GDColorPickerObjects2, gdjs.Character_32MakerCode.GDColorPickerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects3.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariableString(gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariables().getFromIndex(1)) == "R" ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects3[k] = gdjs.Character_32MakerCode.GDColorPickerObjects3[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Character_32MakerCode.GDColorPickerObjects3 */
gdjs.copyArray(runtimeScene.getObjects("PantsSelector"), gdjs.Character_32MakerCode.GDPantsSelectorObjects3);
{for(var i = 0, len = gdjs.Character_32MakerCode.GDPantsSelectorObjects3.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDPantsSelectorObjects3[i].returnVariable(gdjs.Character_32MakerCode.GDPantsSelectorObjects3[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.common.toNumber((( gdjs.Character_32MakerCode.GDColorPickerObjects3.length === 0 ) ? "" :gdjs.Character_32MakerCode.GDColorPickerObjects3[0].getString())));
}
}}

}


{

gdjs.copyArray(gdjs.Character_32MakerCode.GDColorPickerObjects2, gdjs.Character_32MakerCode.GDColorPickerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects3.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariableString(gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariables().getFromIndex(1)) == "G" ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects3[k] = gdjs.Character_32MakerCode.GDColorPickerObjects3[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Character_32MakerCode.GDColorPickerObjects3 */
gdjs.copyArray(runtimeScene.getObjects("PantsSelector"), gdjs.Character_32MakerCode.GDPantsSelectorObjects3);
{for(var i = 0, len = gdjs.Character_32MakerCode.GDPantsSelectorObjects3.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDPantsSelectorObjects3[i].returnVariable(gdjs.Character_32MakerCode.GDPantsSelectorObjects3[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.common.toNumber((( gdjs.Character_32MakerCode.GDColorPickerObjects3.length === 0 ) ? "" :gdjs.Character_32MakerCode.GDColorPickerObjects3[0].getString())));
}
}}

}


{

gdjs.copyArray(gdjs.Character_32MakerCode.GDColorPickerObjects2, gdjs.Character_32MakerCode.GDColorPickerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects3.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariableString(gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariables().getFromIndex(1)) == "B" ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects3[k] = gdjs.Character_32MakerCode.GDColorPickerObjects3[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Character_32MakerCode.GDColorPickerObjects3 */
gdjs.copyArray(runtimeScene.getObjects("PantsSelector"), gdjs.Character_32MakerCode.GDPantsSelectorObjects3);
{for(var i = 0, len = gdjs.Character_32MakerCode.GDPantsSelectorObjects3.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDPantsSelectorObjects3[i].returnVariable(gdjs.Character_32MakerCode.GDPantsSelectorObjects3[i].getVariables().getFromIndex(2)).setNumber(gdjs.evtTools.common.toNumber((( gdjs.Character_32MakerCode.GDColorPickerObjects3.length === 0 ) ? "" :gdjs.Character_32MakerCode.GDColorPickerObjects3[0].getString())));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Character_32MakerCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Character_32MakerCode.GDColorPickerObjects2, gdjs.Character_32MakerCode.GDColorPickerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects3.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariableString(gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariables().getFromIndex(1)) == "R" ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects3[k] = gdjs.Character_32MakerCode.GDColorPickerObjects3[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Character_32MakerCode.GDColorPickerObjects3 */
gdjs.copyArray(runtimeScene.getObjects("HairSelector"), gdjs.Character_32MakerCode.GDHairSelectorObjects3);
{for(var i = 0, len = gdjs.Character_32MakerCode.GDHairSelectorObjects3.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDHairSelectorObjects3[i].returnVariable(gdjs.Character_32MakerCode.GDHairSelectorObjects3[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.common.toNumber((( gdjs.Character_32MakerCode.GDColorPickerObjects3.length === 0 ) ? "" :gdjs.Character_32MakerCode.GDColorPickerObjects3[0].getString())));
}
}}

}


{

gdjs.copyArray(gdjs.Character_32MakerCode.GDColorPickerObjects2, gdjs.Character_32MakerCode.GDColorPickerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects3.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariableString(gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariables().getFromIndex(1)) == "G" ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects3[k] = gdjs.Character_32MakerCode.GDColorPickerObjects3[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Character_32MakerCode.GDColorPickerObjects3 */
gdjs.copyArray(runtimeScene.getObjects("HairSelector"), gdjs.Character_32MakerCode.GDHairSelectorObjects3);
{for(var i = 0, len = gdjs.Character_32MakerCode.GDHairSelectorObjects3.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDHairSelectorObjects3[i].returnVariable(gdjs.Character_32MakerCode.GDHairSelectorObjects3[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.common.toNumber((( gdjs.Character_32MakerCode.GDColorPickerObjects3.length === 0 ) ? "" :gdjs.Character_32MakerCode.GDColorPickerObjects3[0].getString())));
}
}}

}


{

gdjs.copyArray(gdjs.Character_32MakerCode.GDColorPickerObjects2, gdjs.Character_32MakerCode.GDColorPickerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects3.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariableString(gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariables().getFromIndex(1)) == "B" ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects3[k] = gdjs.Character_32MakerCode.GDColorPickerObjects3[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Character_32MakerCode.GDColorPickerObjects3 */
gdjs.copyArray(runtimeScene.getObjects("HairSelector"), gdjs.Character_32MakerCode.GDHairSelectorObjects3);
{for(var i = 0, len = gdjs.Character_32MakerCode.GDHairSelectorObjects3.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDHairSelectorObjects3[i].returnVariable(gdjs.Character_32MakerCode.GDHairSelectorObjects3[i].getVariables().getFromIndex(2)).setNumber(gdjs.evtTools.common.toNumber((( gdjs.Character_32MakerCode.GDColorPickerObjects3.length === 0 ) ? "" :gdjs.Character_32MakerCode.GDColorPickerObjects3[0].getString())));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Character_32MakerCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Character_32MakerCode.GDColorPickerObjects1, gdjs.Character_32MakerCode.GDColorPickerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects2.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects2[i].getVariableString(gdjs.Character_32MakerCode.GDColorPickerObjects2[i].getVariables().getFromIndex(1)) == "R" ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects2[k] = gdjs.Character_32MakerCode.GDColorPickerObjects2[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Character_32MakerCode.GDColorPickerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ShoeSelector"), gdjs.Character_32MakerCode.GDShoeSelectorObjects2);
{for(var i = 0, len = gdjs.Character_32MakerCode.GDShoeSelectorObjects2.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDShoeSelectorObjects2[i].returnVariable(gdjs.Character_32MakerCode.GDShoeSelectorObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.common.toNumber((( gdjs.Character_32MakerCode.GDColorPickerObjects2.length === 0 ) ? "" :gdjs.Character_32MakerCode.GDColorPickerObjects2[0].getString())));
}
}}

}


{

gdjs.copyArray(gdjs.Character_32MakerCode.GDColorPickerObjects1, gdjs.Character_32MakerCode.GDColorPickerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects2.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects2[i].getVariableString(gdjs.Character_32MakerCode.GDColorPickerObjects2[i].getVariables().getFromIndex(1)) == "G" ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects2[k] = gdjs.Character_32MakerCode.GDColorPickerObjects2[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Character_32MakerCode.GDColorPickerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ShoeSelector"), gdjs.Character_32MakerCode.GDShoeSelectorObjects2);
{for(var i = 0, len = gdjs.Character_32MakerCode.GDShoeSelectorObjects2.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDShoeSelectorObjects2[i].returnVariable(gdjs.Character_32MakerCode.GDShoeSelectorObjects2[i].getVariables().getFromIndex(1)).setNumber(gdjs.evtTools.common.toNumber((( gdjs.Character_32MakerCode.GDColorPickerObjects2.length === 0 ) ? "" :gdjs.Character_32MakerCode.GDColorPickerObjects2[0].getString())));
}
}}

}


{

gdjs.copyArray(gdjs.Character_32MakerCode.GDColorPickerObjects1, gdjs.Character_32MakerCode.GDColorPickerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects2.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects2[i].getVariableString(gdjs.Character_32MakerCode.GDColorPickerObjects2[i].getVariables().getFromIndex(1)) == "B" ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects2[k] = gdjs.Character_32MakerCode.GDColorPickerObjects2[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Character_32MakerCode.GDColorPickerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ShoeSelector"), gdjs.Character_32MakerCode.GDShoeSelectorObjects2);
{for(var i = 0, len = gdjs.Character_32MakerCode.GDShoeSelectorObjects2.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDShoeSelectorObjects2[i].returnVariable(gdjs.Character_32MakerCode.GDShoeSelectorObjects2[i].getVariables().getFromIndex(2)).setNumber(gdjs.evtTools.common.toNumber((( gdjs.Character_32MakerCode.GDColorPickerObjects2.length === 0 ) ? "" :gdjs.Character_32MakerCode.GDColorPickerObjects2[0].getString())));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Character_32MakerCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ColorPicker"), gdjs.Character_32MakerCode.GDColorPickerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects2.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects2[i].getVariableNumber(gdjs.Character_32MakerCode.GDColorPickerObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects2[k] = gdjs.Character_32MakerCode.GDColorPickerObjects2[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Character_32MakerCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ColorPicker"), gdjs.Character_32MakerCode.GDColorPickerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects2.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects2[i].getVariableNumber(gdjs.Character_32MakerCode.GDColorPickerObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects2[k] = gdjs.Character_32MakerCode.GDColorPickerObjects2[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Character_32MakerCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ColorPicker"), gdjs.Character_32MakerCode.GDColorPickerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects2.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects2[i].getVariableNumber(gdjs.Character_32MakerCode.GDColorPickerObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects2[k] = gdjs.Character_32MakerCode.GDColorPickerObjects2[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Character_32MakerCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ColorPicker"), gdjs.Character_32MakerCode.GDColorPickerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects2.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects2[i].getVariableNumber(gdjs.Character_32MakerCode.GDColorPickerObjects2[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects2[k] = gdjs.Character_32MakerCode.GDColorPickerObjects2[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Character_32MakerCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ColorPicker"), gdjs.Character_32MakerCode.GDColorPickerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects1.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects1[i].getVariableNumber(gdjs.Character_32MakerCode.GDColorPickerObjects1[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects1[k] = gdjs.Character_32MakerCode.GDColorPickerObjects1[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Character_32MakerCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Character_32MakerCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2[i].getVariableNumber(gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2[i].getVariables().get("ID")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2[k] = gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BodySelector"), gdjs.Character_32MakerCode.GDBodySelectorObjects2);
/* Reuse gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2 */
{for(var i = 0, len = gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2[i].SetMaxValue(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Character_32MakerCode.GDBodySelectorObjects2.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDBodySelectorObjects2[i].setAnimation((( gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2.length === 0 ) ? 0 :gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2[i].getVariableNumber(gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2[i].getVariables().get("ID")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2[k] = gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShirtSelector"), gdjs.Character_32MakerCode.GDShirtSelectorObjects2);
/* Reuse gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2 */
{for(var i = 0, len = gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2[i].SetMaxValue(4, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Character_32MakerCode.GDShirtSelectorObjects2.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDShirtSelectorObjects2[i].setAnimation((( gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2.length === 0 ) ? 0 :gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2[i].getVariableNumber(gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2[i].getVariables().get("ID")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2[k] = gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PantsSelector"), gdjs.Character_32MakerCode.GDPantsSelectorObjects2);
/* Reuse gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2 */
{for(var i = 0, len = gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2[i].SetMaxValue(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Character_32MakerCode.GDPantsSelectorObjects2.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDPantsSelectorObjects2[i].setAnimation((( gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2.length === 0 ) ? 0 :gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2[i].getVariableNumber(gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2[i].getVariables().get("ID")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2[k] = gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HairSelector"), gdjs.Character_32MakerCode.GDHairSelectorObjects2);
/* Reuse gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2 */
{for(var i = 0, len = gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2[i].SetMaxValue(7, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Character_32MakerCode.GDHairSelectorObjects2.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDHairSelectorObjects2[i].setAnimation((( gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2.length === 0 ) ? 0 :gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects1.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects1[i].getVariableNumber(gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects1[i].getVariables().get("ID")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects1[k] = gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects1[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShoeSelector"), gdjs.Character_32MakerCode.GDShoeSelectorObjects1);
/* Reuse gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects1 */
{for(var i = 0, len = gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects1.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects1[i].SetMaxValue(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Character_32MakerCode.GDShoeSelectorObjects1.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDShoeSelectorObjects1[i].setAnimation((( gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects1.length === 0 ) ? 0 :gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


};gdjs.Character_32MakerCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Update") > 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BodySelector"), gdjs.Character_32MakerCode.GDBodySelectorObjects2);
gdjs.copyArray(runtimeScene.getObjects("HairSelector"), gdjs.Character_32MakerCode.GDHairSelectorObjects2);
gdjs.copyArray(runtimeScene.getObjects("PantsSelector"), gdjs.Character_32MakerCode.GDPantsSelectorObjects2);
gdjs.copyArray(runtimeScene.getObjects("ShirtSelector"), gdjs.Character_32MakerCode.GDShirtSelectorObjects2);
gdjs.copyArray(runtimeScene.getObjects("ShoeSelector"), gdjs.Character_32MakerCode.GDShoeSelectorObjects2);
{for(var i = 0, len = gdjs.Character_32MakerCode.GDBodySelectorObjects2.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDBodySelectorObjects2[i].getBehavior("SpriteRecolorizer").Recolorize("255;255;255", gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.Character_32MakerCode.GDBodySelectorObjects2[i].getVariables().getFromIndex(0)))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.Character_32MakerCode.GDBodySelectorObjects2[i].getVariables().getFromIndex(1)))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.Character_32MakerCode.GDBodySelectorObjects2[i].getVariables().getFromIndex(2)))), 0, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Character_32MakerCode.GDShirtSelectorObjects2.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDShirtSelectorObjects2[i].getBehavior("SpriteRecolorizer").Recolorize("255;255;255", gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.Character_32MakerCode.GDShirtSelectorObjects2[i].getVariables().getFromIndex(0)))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.Character_32MakerCode.GDShirtSelectorObjects2[i].getVariables().getFromIndex(1)))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.Character_32MakerCode.GDShirtSelectorObjects2[i].getVariables().getFromIndex(2)))), 0, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Character_32MakerCode.GDPantsSelectorObjects2.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDPantsSelectorObjects2[i].getBehavior("SpriteRecolorizer").Recolorize("255;255;255", gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.Character_32MakerCode.GDPantsSelectorObjects2[i].getVariables().getFromIndex(0)))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.Character_32MakerCode.GDPantsSelectorObjects2[i].getVariables().getFromIndex(1)))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.Character_32MakerCode.GDPantsSelectorObjects2[i].getVariables().getFromIndex(2)))), 0, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Character_32MakerCode.GDHairSelectorObjects2.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDHairSelectorObjects2[i].getBehavior("SpriteRecolorizer").Recolorize("255;255;255", gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.Character_32MakerCode.GDHairSelectorObjects2[i].getVariables().getFromIndex(0)))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.Character_32MakerCode.GDHairSelectorObjects2[i].getVariables().getFromIndex(1)))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.Character_32MakerCode.GDHairSelectorObjects2[i].getVariables().getFromIndex(2)))), 0, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Character_32MakerCode.GDShoeSelectorObjects2.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDShoeSelectorObjects2[i].getBehavior("SpriteRecolorizer").Recolorize("255;255;255", gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.Character_32MakerCode.GDShoeSelectorObjects2[i].getVariables().getFromIndex(0)))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.Character_32MakerCode.GDShoeSelectorObjects2[i].getVariables().getFromIndex(1)))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.Character_32MakerCode.GDShoeSelectorObjects2[i].getVariables().getFromIndex(2)))), 0, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Update");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.timerPaused(runtimeScene, "Update");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Update");
}}

}


};gdjs.Character_32MakerCode.eventsList8 = function(runtimeScene) {

};gdjs.Character_32MakerCode.eventsList9 = function(runtimeScene) {

};gdjs.Character_32MakerCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Character_32MakerCode.GDColorObjects2, gdjs.Character_32MakerCode.GDColorObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorObjects3.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorObjects3[i].getVariableString(gdjs.Character_32MakerCode.GDColorObjects3[i].getVariables().getFromIndex(1)) == "R" ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorObjects3[k] = gdjs.Character_32MakerCode.GDColorObjects3[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Character_32MakerCode.GDColorObjects3 */
{for(var i = 0, len = gdjs.Character_32MakerCode.GDColorObjects3.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDColorObjects3[i].enableEffect("Blue", false);
}
}{for(var i = 0, len = gdjs.Character_32MakerCode.GDColorObjects3.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDColorObjects3[i].enableEffect("Green", false);
}
}{for(var i = 0, len = gdjs.Character_32MakerCode.GDColorObjects3.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDColorObjects3[i].enableEffect("Red", true);
}
}}

}


{

gdjs.copyArray(gdjs.Character_32MakerCode.GDColorObjects2, gdjs.Character_32MakerCode.GDColorObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorObjects3.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorObjects3[i].getVariableString(gdjs.Character_32MakerCode.GDColorObjects3[i].getVariables().getFromIndex(1)) == "B" ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorObjects3[k] = gdjs.Character_32MakerCode.GDColorObjects3[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Character_32MakerCode.GDColorObjects3 */
{for(var i = 0, len = gdjs.Character_32MakerCode.GDColorObjects3.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDColorObjects3[i].enableEffect("Blue", true);
}
}{for(var i = 0, len = gdjs.Character_32MakerCode.GDColorObjects3.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDColorObjects3[i].enableEffect("Green", false);
}
}{for(var i = 0, len = gdjs.Character_32MakerCode.GDColorObjects3.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDColorObjects3[i].enableEffect("Red", false);
}
}}

}


{

gdjs.copyArray(gdjs.Character_32MakerCode.GDColorObjects2, gdjs.Character_32MakerCode.GDColorObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorObjects3.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorObjects3[i].getVariableString(gdjs.Character_32MakerCode.GDColorObjects3[i].getVariables().getFromIndex(1)) == "G" ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorObjects3[k] = gdjs.Character_32MakerCode.GDColorObjects3[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Character_32MakerCode.GDColorObjects3 */
{for(var i = 0, len = gdjs.Character_32MakerCode.GDColorObjects3.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDColorObjects3[i].enableEffect("Blue", false);
}
}{for(var i = 0, len = gdjs.Character_32MakerCode.GDColorObjects3.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDColorObjects3[i].enableEffect("Green", true);
}
}{for(var i = 0, len = gdjs.Character_32MakerCode.GDColorObjects3.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDColorObjects3[i].enableEffect("Red", false);
}
}}

}


};gdjs.Character_32MakerCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Color"), gdjs.Character_32MakerCode.GDColorObjects2);

for (gdjs.Character_32MakerCode.forEachIndex3 = 0;gdjs.Character_32MakerCode.forEachIndex3 < gdjs.Character_32MakerCode.GDColorObjects2.length;++gdjs.Character_32MakerCode.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("ColorPicker"), gdjs.Character_32MakerCode.GDColorPickerObjects3);
gdjs.Character_32MakerCode.GDColorObjects3.length = 0;


gdjs.Character_32MakerCode.forEachTemporary3 = gdjs.Character_32MakerCode.GDColorObjects2[gdjs.Character_32MakerCode.forEachIndex3];
gdjs.Character_32MakerCode.GDColorObjects3.push(gdjs.Character_32MakerCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects3.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariableString(gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariables().getFromIndex(1)) == (gdjs.RuntimeObject.getVariableString(((gdjs.Character_32MakerCode.GDColorObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Character_32MakerCode.GDColorObjects3[0].getVariables()).getFromIndex(1))) ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects3[k] = gdjs.Character_32MakerCode.GDColorPickerObjects3[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects3.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariableNumber(gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.Character_32MakerCode.GDColorObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Character_32MakerCode.GDColorObjects3[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects3[k] = gdjs.Character_32MakerCode.GDColorPickerObjects3[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorObjects3.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorObjects3[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorObjects3[k] = gdjs.Character_32MakerCode.GDColorObjects3[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorObjects3.length = k;
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Character_32MakerCode.GDColorPickerObjects3.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDColorPickerObjects3[i].setString(gdjs.evtTools.common.toString((( gdjs.Character_32MakerCode.GDColorObjects3.length === 0 ) ? 0 :gdjs.Character_32MakerCode.GDColorObjects3[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Color"), gdjs.Character_32MakerCode.GDColorObjects2);

for (gdjs.Character_32MakerCode.forEachIndex3 = 0;gdjs.Character_32MakerCode.forEachIndex3 < gdjs.Character_32MakerCode.GDColorObjects2.length;++gdjs.Character_32MakerCode.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("ColorPicker"), gdjs.Character_32MakerCode.GDColorPickerObjects3);
gdjs.Character_32MakerCode.GDColorObjects3.length = 0;


gdjs.Character_32MakerCode.forEachTemporary3 = gdjs.Character_32MakerCode.GDColorObjects2[gdjs.Character_32MakerCode.forEachIndex3];
gdjs.Character_32MakerCode.GDColorObjects3.push(gdjs.Character_32MakerCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects3.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariableNumber(gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.Character_32MakerCode.GDColorObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Character_32MakerCode.GDColorObjects3[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects3[k] = gdjs.Character_32MakerCode.GDColorPickerObjects3[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects3.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariableString(gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getVariables().getFromIndex(1)) == (gdjs.RuntimeObject.getVariableString(((gdjs.Character_32MakerCode.GDColorObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Character_32MakerCode.GDColorObjects3[0].getVariables()).getFromIndex(1))) ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects3[k] = gdjs.Character_32MakerCode.GDColorPickerObjects3[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects3.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects3[i].isFocused() ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects3[k] = gdjs.Character_32MakerCode.GDColorPickerObjects3[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDColorPickerObjects3.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDColorPickerObjects3[i].getString() != gdjs.evtTools.common.toString((( gdjs.Character_32MakerCode.GDColorObjects3.length === 0 ) ? 0 :gdjs.Character_32MakerCode.GDColorObjects3[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDColorPickerObjects3[k] = gdjs.Character_32MakerCode.GDColorPickerObjects3[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDColorPickerObjects3.length = k;
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Character_32MakerCode.GDColorObjects3.length ;i < len;++i) {
    gdjs.Character_32MakerCode.GDColorObjects3[i].SetValue(gdjs.evtTools.common.toNumber((( gdjs.Character_32MakerCode.GDColorPickerObjects3.length === 0 ) ? "" :gdjs.Character_32MakerCode.GDColorPickerObjects3[0].getString())), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Color"), gdjs.Character_32MakerCode.GDColorObjects1);

for (gdjs.Character_32MakerCode.forEachIndex2 = 0;gdjs.Character_32MakerCode.forEachIndex2 < gdjs.Character_32MakerCode.GDColorObjects1.length;++gdjs.Character_32MakerCode.forEachIndex2) {
gdjs.Character_32MakerCode.GDColorObjects2.length = 0;


gdjs.Character_32MakerCode.forEachTemporary2 = gdjs.Character_32MakerCode.GDColorObjects1[gdjs.Character_32MakerCode.forEachIndex2];
gdjs.Character_32MakerCode.GDColorObjects2.push(gdjs.Character_32MakerCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.Character_32MakerCode.eventsList10(runtimeScene);} //Subevents end.
}
}

}


};gdjs.Character_32MakerCode.eventsList12 = function(runtimeScene) {

{


gdjs.Character_32MakerCode.eventsList5(runtimeScene);
}


{


gdjs.Character_32MakerCode.eventsList6(runtimeScene);
}


{


gdjs.Character_32MakerCode.eventsList7(runtimeScene);
}


{


gdjs.Character_32MakerCode.eventsList11(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.Character_32MakerCode.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Character_32MakerCode.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs.Character_32MakerCode.GDFloatingOutButtonDarkBlueObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Character_32MakerCode.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs.Character_32MakerCode.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs.Character_32MakerCode.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BodySelector"), gdjs.Character_32MakerCode.GDBodySelectorObjects1);
gdjs.copyArray(runtimeScene.getObjects("HairSelector"), gdjs.Character_32MakerCode.GDHairSelectorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.Character_32MakerCode.GDNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("PantsSelector"), gdjs.Character_32MakerCode.GDPantsSelectorObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShirtSelector"), gdjs.Character_32MakerCode.GDShirtSelectorObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShoeSelector"), gdjs.Character_32MakerCode.GDShoeSelectorObjects1);
{gdjs.evtTools.storage.writeStringInJSONFile("Save1", "Body", gdjs.evtTools.common.toString((( gdjs.Character_32MakerCode.GDBodySelectorObjects1.length === 0 ) ? 0 :gdjs.Character_32MakerCode.GDBodySelectorObjects1[0].getAnimation())) + "," + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.Character_32MakerCode.GDBodySelectorObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Character_32MakerCode.GDBodySelectorObjects1[0].getVariables()).getFromIndex(0)))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.Character_32MakerCode.GDBodySelectorObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Character_32MakerCode.GDBodySelectorObjects1[0].getVariables()).getFromIndex(1)))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.Character_32MakerCode.GDBodySelectorObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Character_32MakerCode.GDBodySelectorObjects1[0].getVariables()).getFromIndex(2)))));
}{gdjs.evtTools.storage.writeStringInJSONFile("Save1", "Shirt", gdjs.evtTools.common.toString((( gdjs.Character_32MakerCode.GDShirtSelectorObjects1.length === 0 ) ? 0 :gdjs.Character_32MakerCode.GDShirtSelectorObjects1[0].getAnimation())) + "," + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.Character_32MakerCode.GDShirtSelectorObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Character_32MakerCode.GDShirtSelectorObjects1[0].getVariables()).getFromIndex(0)))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.Character_32MakerCode.GDShirtSelectorObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Character_32MakerCode.GDShirtSelectorObjects1[0].getVariables()).getFromIndex(1)))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.Character_32MakerCode.GDShirtSelectorObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Character_32MakerCode.GDShirtSelectorObjects1[0].getVariables()).getFromIndex(2)))));
}{gdjs.evtTools.storage.writeStringInJSONFile("Save1", "Pants", gdjs.evtTools.common.toString((( gdjs.Character_32MakerCode.GDPantsSelectorObjects1.length === 0 ) ? 0 :gdjs.Character_32MakerCode.GDPantsSelectorObjects1[0].getAnimation())) + "," + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.Character_32MakerCode.GDPantsSelectorObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Character_32MakerCode.GDPantsSelectorObjects1[0].getVariables()).getFromIndex(0)))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.Character_32MakerCode.GDPantsSelectorObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Character_32MakerCode.GDPantsSelectorObjects1[0].getVariables()).getFromIndex(1)))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.Character_32MakerCode.GDPantsSelectorObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Character_32MakerCode.GDPantsSelectorObjects1[0].getVariables()).getFromIndex(2)))));
}{gdjs.evtTools.storage.writeStringInJSONFile("Save1", "Hair", gdjs.evtTools.common.toString((( gdjs.Character_32MakerCode.GDHairSelectorObjects1.length === 0 ) ? 0 :gdjs.Character_32MakerCode.GDHairSelectorObjects1[0].getAnimation())) + "," + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.Character_32MakerCode.GDHairSelectorObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Character_32MakerCode.GDHairSelectorObjects1[0].getVariables()).getFromIndex(0)))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.Character_32MakerCode.GDHairSelectorObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Character_32MakerCode.GDHairSelectorObjects1[0].getVariables()).getFromIndex(1)))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.Character_32MakerCode.GDHairSelectorObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Character_32MakerCode.GDHairSelectorObjects1[0].getVariables()).getFromIndex(2)))));
}{gdjs.evtTools.storage.writeStringInJSONFile("Save1", "Shoe", gdjs.evtTools.common.toString((( gdjs.Character_32MakerCode.GDShoeSelectorObjects1.length === 0 ) ? 0 :gdjs.Character_32MakerCode.GDShoeSelectorObjects1[0].getAnimation())) + "," + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.Character_32MakerCode.GDShoeSelectorObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Character_32MakerCode.GDShoeSelectorObjects1[0].getVariables()).getFromIndex(0)))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.Character_32MakerCode.GDShoeSelectorObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Character_32MakerCode.GDShoeSelectorObjects1[0].getVariables()).getFromIndex(1)))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.Character_32MakerCode.GDShoeSelectorObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Character_32MakerCode.GDShoeSelectorObjects1[0].getVariables()).getFromIndex(2)))));
}{gdjs.evtTools.storage.writeStringInJSONFile("Save1", "Name", (( gdjs.Character_32MakerCode.GDNameObjects1.length === 0 ) ? "" :gdjs.Character_32MakerCode.GDNameObjects1[0].getString()));
}{gdjs.evtTools.storage.writeStringInJSONFile("Save1", "Existence", "yes");
}{gdjs.evtTools.storage.unloadJSONFile("Save1");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.Character_32MakerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Character_32MakerCode.GDHairSelectorObjects1.length = 0;
gdjs.Character_32MakerCode.GDHairSelectorObjects2.length = 0;
gdjs.Character_32MakerCode.GDHairSelectorObjects3.length = 0;
gdjs.Character_32MakerCode.GDHairSelectorObjects4.length = 0;
gdjs.Character_32MakerCode.GDShirtSelectorObjects1.length = 0;
gdjs.Character_32MakerCode.GDShirtSelectorObjects2.length = 0;
gdjs.Character_32MakerCode.GDShirtSelectorObjects3.length = 0;
gdjs.Character_32MakerCode.GDShirtSelectorObjects4.length = 0;
gdjs.Character_32MakerCode.GDBodySelectorObjects1.length = 0;
gdjs.Character_32MakerCode.GDBodySelectorObjects2.length = 0;
gdjs.Character_32MakerCode.GDBodySelectorObjects3.length = 0;
gdjs.Character_32MakerCode.GDBodySelectorObjects4.length = 0;
gdjs.Character_32MakerCode.GDPantsSelectorObjects1.length = 0;
gdjs.Character_32MakerCode.GDPantsSelectorObjects2.length = 0;
gdjs.Character_32MakerCode.GDPantsSelectorObjects3.length = 0;
gdjs.Character_32MakerCode.GDPantsSelectorObjects4.length = 0;
gdjs.Character_32MakerCode.GDShoeSelectorObjects1.length = 0;
gdjs.Character_32MakerCode.GDShoeSelectorObjects2.length = 0;
gdjs.Character_32MakerCode.GDShoeSelectorObjects3.length = 0;
gdjs.Character_32MakerCode.GDShoeSelectorObjects4.length = 0;
gdjs.Character_32MakerCode.GDColorPickerObjects1.length = 0;
gdjs.Character_32MakerCode.GDColorPickerObjects2.length = 0;
gdjs.Character_32MakerCode.GDColorPickerObjects3.length = 0;
gdjs.Character_32MakerCode.GDColorPickerObjects4.length = 0;
gdjs.Character_32MakerCode.GDNameObjects1.length = 0;
gdjs.Character_32MakerCode.GDNameObjects2.length = 0;
gdjs.Character_32MakerCode.GDNameObjects3.length = 0;
gdjs.Character_32MakerCode.GDNameObjects4.length = 0;
gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects3.length = 0;
gdjs.Character_32MakerCode.GDSquareWhiteSliderObjects4.length = 0;
gdjs.Character_32MakerCode.GDColorObjects1.length = 0;
gdjs.Character_32MakerCode.GDColorObjects2.length = 0;
gdjs.Character_32MakerCode.GDColorObjects3.length = 0;
gdjs.Character_32MakerCode.GDColorObjects4.length = 0;
gdjs.Character_32MakerCode.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.Character_32MakerCode.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.Character_32MakerCode.GDFloatingOutButtonDarkBlueObjects3.length = 0;
gdjs.Character_32MakerCode.GDFloatingOutButtonDarkBlueObjects4.length = 0;

gdjs.Character_32MakerCode.eventsList12(runtimeScene);

return;

}

gdjs['Character_32MakerCode'] = gdjs.Character_32MakerCode;
