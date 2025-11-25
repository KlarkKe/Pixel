gdjs.RoolsCode = {};
gdjs.RoolsCode.localVariables = [];
gdjs.RoolsCode.idToCallbackMap = new Map();
gdjs.RoolsCode.GDBG_9595RoolsObjects1= [];
gdjs.RoolsCode.GDBG_9595RoolsObjects2= [];
gdjs.RoolsCode.GDPlaButtonRoolsObjects1= [];
gdjs.RoolsCode.GDPlaButtonRoolsObjects2= [];
gdjs.RoolsCode.GDBackButtonObjects1= [];
gdjs.RoolsCode.GDBackButtonObjects2= [];


gdjs.RoolsCode.mapOfGDgdjs_9546RoolsCode_9546GDPlaButtonRoolsObjects1Objects = Hashtable.newFrom({"PlaButtonRools": gdjs.RoolsCode.GDPlaButtonRoolsObjects1});
gdjs.RoolsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


};gdjs.RoolsCode.mapOfGDgdjs_9546RoolsCode_9546GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.RoolsCode.GDBackButtonObjects1});
gdjs.RoolsCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}
}

}


};gdjs.RoolsCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlaButtonRools"), gdjs.RoolsCode.GDPlaButtonRoolsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.RoolsCode.mapOfGDgdjs_9546RoolsCode_9546GDPlaButtonRoolsObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.RoolsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.RoolsCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.RoolsCode.mapOfGDgdjs_9546RoolsCode_9546GDBackButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.RoolsCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.RoolsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RoolsCode.GDBG_9595RoolsObjects1.length = 0;
gdjs.RoolsCode.GDBG_9595RoolsObjects2.length = 0;
gdjs.RoolsCode.GDPlaButtonRoolsObjects1.length = 0;
gdjs.RoolsCode.GDPlaButtonRoolsObjects2.length = 0;
gdjs.RoolsCode.GDBackButtonObjects1.length = 0;
gdjs.RoolsCode.GDBackButtonObjects2.length = 0;

gdjs.RoolsCode.eventsList2(runtimeScene);
gdjs.RoolsCode.GDBG_9595RoolsObjects1.length = 0;
gdjs.RoolsCode.GDBG_9595RoolsObjects2.length = 0;
gdjs.RoolsCode.GDPlaButtonRoolsObjects1.length = 0;
gdjs.RoolsCode.GDPlaButtonRoolsObjects2.length = 0;
gdjs.RoolsCode.GDBackButtonObjects1.length = 0;
gdjs.RoolsCode.GDBackButtonObjects2.length = 0;


return;

}

gdjs['RoolsCode'] = gdjs.RoolsCode;
