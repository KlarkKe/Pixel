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
gdjs.EndScreenCode.asyncCallback22077812 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EndScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}
gdjs.EndScreenCode.localVariables.length = 0;
}
gdjs.EndScreenCode.idToCallbackMap.set(22077812, gdjs.EndScreenCode.asyncCallback22077812);
gdjs.EndScreenCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.EndScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.EndScreenCode.asyncCallback22077812(runtimeScene, asyncObjectsList)), 22077812, asyncObjectsList);
}
}

}


};gdjs.EndScreenCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.EndScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDRestartButtonObjects1Objects = Hashtable.newFrom({"RestartButton": gdjs.EndScreenCode.GDRestartButtonObjects1});
gdjs.EndScreenCode.asyncCallback22079116 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EndScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
gdjs.EndScreenCode.localVariables.length = 0;
}
gdjs.EndScreenCode.idToCallbackMap.set(22079116, gdjs.EndScreenCode.asyncCallback22079116);
gdjs.EndScreenCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.EndScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.EndScreenCode.asyncCallback22079116(runtimeScene, asyncObjectsList)), 22079116, asyncObjectsList);
}
}

}


};gdjs.EndScreenCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.EndScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDVoteButtonObjects1Objects = Hashtable.newFrom({"VoteButton": gdjs.EndScreenCode.GDVoteButtonObjects1});
gdjs.EndScreenCode.userFunc0xdaca00 = function GDJSInlineCode(runtimeScene) {
"use strict";
  const url = 'https://best-company-award-2026.testograf.ru/?utm_source=miniapp&utm_medium=mts&utm_term=&utm_content=&utm_campaign=app';

  // Проверяем, запущена ли игра внутри Telegram
  if (window.Telegram && window.Telegram.WebApp) {
    // ✅ Telegram откроет ссылку во внешнем браузере
    window.Telegram.WebApp.openLink(url);
  } else {
    // ✅ Обычные браузеры
    const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = url; // на мобиле — просто переход
    } else {
      window.open(url, '_blank'); // на ПК — новая вкладка
    }
  }
};
gdjs.EndScreenCode.eventsList4 = function(runtimeScene) {

{


gdjs.EndScreenCode.userFunc0xdaca00(runtimeScene);

}


};gdjs.EndScreenCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.network.sendAsyncRequest("https://mts-4.ru/track-click", "{\"uid\":\"" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(14).getChild("uid")) + "\"}", "POST", "application/json", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable);
}

{ //Subevents
gdjs.EndScreenCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.EndScreenCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.network.sendAsyncRequest("https://mts-4.ru/end-session", "{\"uid\":\"" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(14).getChild("uid")) + "\",\"fname\":\"" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(14).getChild("fname")) + "\",\"sessionStart\":\"" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(14).getChild("sessionStart")) + "\",\"sessionEnd\":\"" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(14).getChild("sessionEnd")) + "\"}", "POST", "application/json", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable);
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
gdjs.EndScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.EndScreenCode.GDRestartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDRestartButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.EndScreenCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("VoteButton"), gdjs.EndScreenCode.GDVoteButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDVoteButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.EndScreenCode.eventsList5(runtimeScene);} //End of subevents
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

gdjs.EndScreenCode.eventsList6(runtimeScene);
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
