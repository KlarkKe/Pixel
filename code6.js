gdjs.EndScreenCode = {};
gdjs.EndScreenCode.localVariables = [];
gdjs.EndScreenCode.idToCallbackMap = new Map();
gdjs.EndScreenCode.GDBG_9595EndScreenObjects1= [];
gdjs.EndScreenCode.GDBG_9595EndScreenObjects2= [];
gdjs.EndScreenCode.GDVoteButtonObjects1= [];
gdjs.EndScreenCode.GDVoteButtonObjects2= [];
gdjs.EndScreenCode.GDRestartButtonObjects1= [];
gdjs.EndScreenCode.GDRestartButtonObjects2= [];
gdjs.EndScreenCode.GDMenuButtonObjects1= [];
gdjs.EndScreenCode.GDMenuButtonObjects2= [];
gdjs.EndScreenCode.GDNewTextObjects1= [];
gdjs.EndScreenCode.GDNewTextObjects2= [];


gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDMenuButtonObjects1Objects = Hashtable.newFrom({"MenuButton": gdjs.EndScreenCode.GDMenuButtonObjects1});
gdjs.EndScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}
}

}


};gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDRestartButtonObjects1Objects = Hashtable.newFrom({"RestartButton": gdjs.EndScreenCode.GDRestartButtonObjects1});
gdjs.EndScreenCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


};gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDVoteButtonObjects1Objects = Hashtable.newFrom({"VoteButton": gdjs.EndScreenCode.GDVoteButtonObjects1});
gdjs.EndScreenCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
}

}


};gdjs.EndScreenCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.network.sendAsyncRequest("https://mts-4.ru/session-time", "{\"uid\":\"" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(14).getChild("uid")) + "\",\"fname\":\"" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(14).getChild("fname")) + "\",\"sessionStart\":\"" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(14).getChild("sessionStart")) + "\",\"sessionEnd\":\"" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(14).getChild("sessionEnd")) + "\"}", "POST", "application/json", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.EndScreenCode.GDMenuButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDMenuButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.EndScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.EndScreenCode.GDRestartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDRestartButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.EndScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("VoteButton"), gdjs.EndScreenCode.GDVoteButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDVoteButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.EndScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.EndScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndScreenCode.GDBG_9595EndScreenObjects1.length = 0;
gdjs.EndScreenCode.GDBG_9595EndScreenObjects2.length = 0;
gdjs.EndScreenCode.GDVoteButtonObjects1.length = 0;
gdjs.EndScreenCode.GDVoteButtonObjects2.length = 0;
gdjs.EndScreenCode.GDRestartButtonObjects1.length = 0;
gdjs.EndScreenCode.GDRestartButtonObjects2.length = 0;
gdjs.EndScreenCode.GDMenuButtonObjects1.length = 0;
gdjs.EndScreenCode.GDMenuButtonObjects2.length = 0;
gdjs.EndScreenCode.GDNewTextObjects1.length = 0;
gdjs.EndScreenCode.GDNewTextObjects2.length = 0;

gdjs.EndScreenCode.eventsList3(runtimeScene);
gdjs.EndScreenCode.GDBG_9595EndScreenObjects1.length = 0;
gdjs.EndScreenCode.GDBG_9595EndScreenObjects2.length = 0;
gdjs.EndScreenCode.GDVoteButtonObjects1.length = 0;
gdjs.EndScreenCode.GDVoteButtonObjects2.length = 0;
gdjs.EndScreenCode.GDRestartButtonObjects1.length = 0;
gdjs.EndScreenCode.GDRestartButtonObjects2.length = 0;
gdjs.EndScreenCode.GDMenuButtonObjects1.length = 0;
gdjs.EndScreenCode.GDMenuButtonObjects2.length = 0;
gdjs.EndScreenCode.GDNewTextObjects1.length = 0;
gdjs.EndScreenCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['EndScreenCode'] = gdjs.EndScreenCode;
