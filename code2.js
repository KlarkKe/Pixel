gdjs.CharacterSelectionCode = {};
gdjs.CharacterSelectionCode.localVariables = [];
gdjs.CharacterSelectionCode.idToCallbackMap = new Map();
gdjs.CharacterSelectionCode.GDBackObjects1= [];
gdjs.CharacterSelectionCode.GDBackObjects2= [];
gdjs.CharacterSelectionCode.GDBackObjects3= [];
gdjs.CharacterSelectionCode.GDBackObjects4= [];
gdjs.CharacterSelectionCode.GDArrowRightObjects1= [];
gdjs.CharacterSelectionCode.GDArrowRightObjects2= [];
gdjs.CharacterSelectionCode.GDArrowRightObjects3= [];
gdjs.CharacterSelectionCode.GDArrowRightObjects4= [];
gdjs.CharacterSelectionCode.GDVirtualGuyObjects1= [];
gdjs.CharacterSelectionCode.GDVirtualGuyObjects2= [];
gdjs.CharacterSelectionCode.GDVirtualGuyObjects3= [];
gdjs.CharacterSelectionCode.GDVirtualGuyObjects4= [];
gdjs.CharacterSelectionCode.GDNinjaFrogObjects1= [];
gdjs.CharacterSelectionCode.GDNinjaFrogObjects2= [];
gdjs.CharacterSelectionCode.GDNinjaFrogObjects3= [];
gdjs.CharacterSelectionCode.GDNinjaFrogObjects4= [];
gdjs.CharacterSelectionCode.GDArrowLeftObjects1= [];
gdjs.CharacterSelectionCode.GDArrowLeftObjects2= [];
gdjs.CharacterSelectionCode.GDArrowLeftObjects3= [];
gdjs.CharacterSelectionCode.GDArrowLeftObjects4= [];
gdjs.CharacterSelectionCode.GDChooseButtonObjects1= [];
gdjs.CharacterSelectionCode.GDChooseButtonObjects2= [];
gdjs.CharacterSelectionCode.GDChooseButtonObjects3= [];
gdjs.CharacterSelectionCode.GDChooseButtonObjects4= [];


gdjs.CharacterSelectionCode.mapOfGDgdjs_9546CharacterSelectionCode_9546GDVirtualGuyObjects3ObjectsGDgdjs_9546CharacterSelectionCode_9546GDNinjaFrogObjects3Objects = Hashtable.newFrom({"VirtualGuy": gdjs.CharacterSelectionCode.GDVirtualGuyObjects3, "NinjaFrog": gdjs.CharacterSelectionCode.GDNinjaFrogObjects3});
gdjs.CharacterSelectionCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NinjaFrog"), gdjs.CharacterSelectionCode.GDNinjaFrogObjects3);
gdjs.copyArray(runtimeScene.getObjects("VirtualGuy"), gdjs.CharacterSelectionCode.GDVirtualGuyObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.CharacterSelectionCode.mapOfGDgdjs_9546CharacterSelectionCode_9546GDVirtualGuyObjects3ObjectsGDgdjs_9546CharacterSelectionCode_9546GDNinjaFrogObjects3Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.CharacterSelectionCode.GDNinjaFrogObjects3 */
/* Reuse gdjs.CharacterSelectionCode.GDVirtualGuyObjects3 */
{for(var i = 0, len = gdjs.CharacterSelectionCode.GDVirtualGuyObjects3.length ;i < len;++i) {
    gdjs.CharacterSelectionCode.GDVirtualGuyObjects3[i].hide();
}
for(var i = 0, len = gdjs.CharacterSelectionCode.GDNinjaFrogObjects3.length ;i < len;++i) {
    gdjs.CharacterSelectionCode.GDNinjaFrogObjects3[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NinjaFrog"), gdjs.CharacterSelectionCode.GDNinjaFrogObjects2);
gdjs.copyArray(runtimeScene.getObjects("VirtualGuy"), gdjs.CharacterSelectionCode.GDVirtualGuyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CharacterSelectionCode.GDVirtualGuyObjects2.length;i<l;++i) {
    if ( gdjs.CharacterSelectionCode.GDVirtualGuyObjects2[i].getVariableNumber(gdjs.CharacterSelectionCode.GDVirtualGuyObjects2[i].getVariables().get("Character")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Character")) ) {
        isConditionTrue_0 = true;
        gdjs.CharacterSelectionCode.GDVirtualGuyObjects2[k] = gdjs.CharacterSelectionCode.GDVirtualGuyObjects2[i];
        ++k;
    }
}
gdjs.CharacterSelectionCode.GDVirtualGuyObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CharacterSelectionCode.GDNinjaFrogObjects2.length;i<l;++i) {
    if ( gdjs.CharacterSelectionCode.GDNinjaFrogObjects2[i].getVariableNumber(gdjs.CharacterSelectionCode.GDNinjaFrogObjects2[i].getVariables().get("Character")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Character")) ) {
        isConditionTrue_0 = true;
        gdjs.CharacterSelectionCode.GDNinjaFrogObjects2[k] = gdjs.CharacterSelectionCode.GDNinjaFrogObjects2[i];
        ++k;
    }
}
gdjs.CharacterSelectionCode.GDNinjaFrogObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CharacterSelectionCode.GDNinjaFrogObjects2 */
/* Reuse gdjs.CharacterSelectionCode.GDVirtualGuyObjects2 */
{for(var i = 0, len = gdjs.CharacterSelectionCode.GDVirtualGuyObjects2.length ;i < len;++i) {
    gdjs.CharacterSelectionCode.GDVirtualGuyObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.CharacterSelectionCode.GDNinjaFrogObjects2.length ;i < len;++i) {
    gdjs.CharacterSelectionCode.GDNinjaFrogObjects2[i].hide(false);
}
}
}

}


};gdjs.CharacterSelectionCode.mapOfGDgdjs_9546CharacterSelectionCode_9546GDVirtualGuyObjects2ObjectsGDgdjs_9546CharacterSelectionCode_9546GDNinjaFrogObjects2Objects = Hashtable.newFrom({"VirtualGuy": gdjs.CharacterSelectionCode.GDVirtualGuyObjects2, "NinjaFrog": gdjs.CharacterSelectionCode.GDNinjaFrogObjects2});
gdjs.CharacterSelectionCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Character")) > 1;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Character").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Character")) < 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Character").setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NinjaFrog"), gdjs.CharacterSelectionCode.GDNinjaFrogObjects2);
gdjs.copyArray(runtimeScene.getObjects("VirtualGuy"), gdjs.CharacterSelectionCode.GDVirtualGuyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.CharacterSelectionCode.mapOfGDgdjs_9546CharacterSelectionCode_9546GDVirtualGuyObjects2ObjectsGDgdjs_9546CharacterSelectionCode_9546GDNinjaFrogObjects2Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.CharacterSelectionCode.GDNinjaFrogObjects2 */
/* Reuse gdjs.CharacterSelectionCode.GDVirtualGuyObjects2 */
{for(var i = 0, len = gdjs.CharacterSelectionCode.GDVirtualGuyObjects2.length ;i < len;++i) {
    gdjs.CharacterSelectionCode.GDVirtualGuyObjects2[i].hide();
}
for(var i = 0, len = gdjs.CharacterSelectionCode.GDNinjaFrogObjects2.length ;i < len;++i) {
    gdjs.CharacterSelectionCode.GDNinjaFrogObjects2[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NinjaFrog"), gdjs.CharacterSelectionCode.GDNinjaFrogObjects1);
gdjs.copyArray(runtimeScene.getObjects("VirtualGuy"), gdjs.CharacterSelectionCode.GDVirtualGuyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CharacterSelectionCode.GDVirtualGuyObjects1.length;i<l;++i) {
    if ( gdjs.CharacterSelectionCode.GDVirtualGuyObjects1[i].getVariableNumber(gdjs.CharacterSelectionCode.GDVirtualGuyObjects1[i].getVariables().get("Character")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Character")) ) {
        isConditionTrue_0 = true;
        gdjs.CharacterSelectionCode.GDVirtualGuyObjects1[k] = gdjs.CharacterSelectionCode.GDVirtualGuyObjects1[i];
        ++k;
    }
}
gdjs.CharacterSelectionCode.GDVirtualGuyObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CharacterSelectionCode.GDNinjaFrogObjects1.length;i<l;++i) {
    if ( gdjs.CharacterSelectionCode.GDNinjaFrogObjects1[i].getVariableNumber(gdjs.CharacterSelectionCode.GDNinjaFrogObjects1[i].getVariables().get("Character")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Character")) ) {
        isConditionTrue_0 = true;
        gdjs.CharacterSelectionCode.GDNinjaFrogObjects1[k] = gdjs.CharacterSelectionCode.GDNinjaFrogObjects1[i];
        ++k;
    }
}
gdjs.CharacterSelectionCode.GDNinjaFrogObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CharacterSelectionCode.GDNinjaFrogObjects1 */
/* Reuse gdjs.CharacterSelectionCode.GDVirtualGuyObjects1 */
{for(var i = 0, len = gdjs.CharacterSelectionCode.GDVirtualGuyObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectionCode.GDVirtualGuyObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.CharacterSelectionCode.GDNinjaFrogObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectionCode.GDNinjaFrogObjects1[i].hide(false);
}
}
}

}


};gdjs.CharacterSelectionCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.CharacterSelectionCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowLeft"), gdjs.CharacterSelectionCode.GDArrowLeftObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CharacterSelectionCode.GDArrowLeftObjects2.length;i<l;++i) {
    if ( gdjs.CharacterSelectionCode.GDArrowLeftObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CharacterSelectionCode.GDArrowLeftObjects2[k] = gdjs.CharacterSelectionCode.GDArrowLeftObjects2[i];
        ++k;
    }
}
gdjs.CharacterSelectionCode.GDArrowLeftObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Character").sub(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowRight"), gdjs.CharacterSelectionCode.GDArrowRightObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CharacterSelectionCode.GDArrowRightObjects2.length;i<l;++i) {
    if ( gdjs.CharacterSelectionCode.GDArrowRightObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CharacterSelectionCode.GDArrowRightObjects2[k] = gdjs.CharacterSelectionCode.GDArrowRightObjects2[i];
        ++k;
    }
}
gdjs.CharacterSelectionCode.GDArrowRightObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Character").add(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowLeft"), gdjs.CharacterSelectionCode.GDArrowLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("ArrowRight"), gdjs.CharacterSelectionCode.GDArrowRightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CharacterSelectionCode.GDArrowRightObjects1.length;i<l;++i) {
    if ( gdjs.CharacterSelectionCode.GDArrowRightObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CharacterSelectionCode.GDArrowRightObjects1[k] = gdjs.CharacterSelectionCode.GDArrowRightObjects1[i];
        ++k;
    }
}
gdjs.CharacterSelectionCode.GDArrowRightObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CharacterSelectionCode.GDArrowLeftObjects1.length;i<l;++i) {
    if ( gdjs.CharacterSelectionCode.GDArrowLeftObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CharacterSelectionCode.GDArrowLeftObjects1[k] = gdjs.CharacterSelectionCode.GDArrowLeftObjects1[i];
        ++k;
    }
}
gdjs.CharacterSelectionCode.GDArrowLeftObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonHover", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound")), gdjs.randomFloatInRange(1, 1.1));
}

{ //Subevents
gdjs.CharacterSelectionCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.CharacterSelectionCode.mapOfGDgdjs_9546CharacterSelectionCode_9546GDChooseButtonObjects2Objects = Hashtable.newFrom({"ChooseButton": gdjs.CharacterSelectionCode.GDChooseButtonObjects2});
gdjs.CharacterSelectionCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonHover", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound")), gdjs.randomFloatInRange(1, 1.1));
}
}

}


};gdjs.CharacterSelectionCode.mapOfGDgdjs_9546CharacterSelectionCode_9546GDChooseButtonObjects1Objects = Hashtable.newFrom({"ChooseButton": gdjs.CharacterSelectionCode.GDChooseButtonObjects1});
gdjs.CharacterSelectionCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeStringInJSONFile("Settings", "Settings", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


};gdjs.CharacterSelectionCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ChooseButton"), gdjs.CharacterSelectionCode.GDChooseButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CharacterSelectionCode.mapOfGDgdjs_9546CharacterSelectionCode_9546GDChooseButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15294876);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CharacterSelectionCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ChooseButton"), gdjs.CharacterSelectionCode.GDChooseButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CharacterSelectionCode.mapOfGDgdjs_9546CharacterSelectionCode_9546GDChooseButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.CharacterSelectionCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.CharacterSelectionCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{


gdjs.CharacterSelectionCode.eventsList2(runtimeScene);
}


{


gdjs.CharacterSelectionCode.eventsList5(runtimeScene);
}


};

gdjs.CharacterSelectionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CharacterSelectionCode.GDBackObjects1.length = 0;
gdjs.CharacterSelectionCode.GDBackObjects2.length = 0;
gdjs.CharacterSelectionCode.GDBackObjects3.length = 0;
gdjs.CharacterSelectionCode.GDBackObjects4.length = 0;
gdjs.CharacterSelectionCode.GDArrowRightObjects1.length = 0;
gdjs.CharacterSelectionCode.GDArrowRightObjects2.length = 0;
gdjs.CharacterSelectionCode.GDArrowRightObjects3.length = 0;
gdjs.CharacterSelectionCode.GDArrowRightObjects4.length = 0;
gdjs.CharacterSelectionCode.GDVirtualGuyObjects1.length = 0;
gdjs.CharacterSelectionCode.GDVirtualGuyObjects2.length = 0;
gdjs.CharacterSelectionCode.GDVirtualGuyObjects3.length = 0;
gdjs.CharacterSelectionCode.GDVirtualGuyObjects4.length = 0;
gdjs.CharacterSelectionCode.GDNinjaFrogObjects1.length = 0;
gdjs.CharacterSelectionCode.GDNinjaFrogObjects2.length = 0;
gdjs.CharacterSelectionCode.GDNinjaFrogObjects3.length = 0;
gdjs.CharacterSelectionCode.GDNinjaFrogObjects4.length = 0;
gdjs.CharacterSelectionCode.GDArrowLeftObjects1.length = 0;
gdjs.CharacterSelectionCode.GDArrowLeftObjects2.length = 0;
gdjs.CharacterSelectionCode.GDArrowLeftObjects3.length = 0;
gdjs.CharacterSelectionCode.GDArrowLeftObjects4.length = 0;
gdjs.CharacterSelectionCode.GDChooseButtonObjects1.length = 0;
gdjs.CharacterSelectionCode.GDChooseButtonObjects2.length = 0;
gdjs.CharacterSelectionCode.GDChooseButtonObjects3.length = 0;
gdjs.CharacterSelectionCode.GDChooseButtonObjects4.length = 0;

gdjs.CharacterSelectionCode.eventsList6(runtimeScene);
gdjs.CharacterSelectionCode.GDBackObjects1.length = 0;
gdjs.CharacterSelectionCode.GDBackObjects2.length = 0;
gdjs.CharacterSelectionCode.GDBackObjects3.length = 0;
gdjs.CharacterSelectionCode.GDBackObjects4.length = 0;
gdjs.CharacterSelectionCode.GDArrowRightObjects1.length = 0;
gdjs.CharacterSelectionCode.GDArrowRightObjects2.length = 0;
gdjs.CharacterSelectionCode.GDArrowRightObjects3.length = 0;
gdjs.CharacterSelectionCode.GDArrowRightObjects4.length = 0;
gdjs.CharacterSelectionCode.GDVirtualGuyObjects1.length = 0;
gdjs.CharacterSelectionCode.GDVirtualGuyObjects2.length = 0;
gdjs.CharacterSelectionCode.GDVirtualGuyObjects3.length = 0;
gdjs.CharacterSelectionCode.GDVirtualGuyObjects4.length = 0;
gdjs.CharacterSelectionCode.GDNinjaFrogObjects1.length = 0;
gdjs.CharacterSelectionCode.GDNinjaFrogObjects2.length = 0;
gdjs.CharacterSelectionCode.GDNinjaFrogObjects3.length = 0;
gdjs.CharacterSelectionCode.GDNinjaFrogObjects4.length = 0;
gdjs.CharacterSelectionCode.GDArrowLeftObjects1.length = 0;
gdjs.CharacterSelectionCode.GDArrowLeftObjects2.length = 0;
gdjs.CharacterSelectionCode.GDArrowLeftObjects3.length = 0;
gdjs.CharacterSelectionCode.GDArrowLeftObjects4.length = 0;
gdjs.CharacterSelectionCode.GDChooseButtonObjects1.length = 0;
gdjs.CharacterSelectionCode.GDChooseButtonObjects2.length = 0;
gdjs.CharacterSelectionCode.GDChooseButtonObjects3.length = 0;
gdjs.CharacterSelectionCode.GDChooseButtonObjects4.length = 0;


return;

}

gdjs['CharacterSelectionCode'] = gdjs.CharacterSelectionCode;
