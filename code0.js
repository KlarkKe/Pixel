gdjs.PreloaderCode = {};
gdjs.PreloaderCode.localVariables = [];
gdjs.PreloaderCode.idToCallbackMap = new Map();
gdjs.PreloaderCode.GDProgressBarkaObjects1= [];
gdjs.PreloaderCode.GDProgressBarkaObjects2= [];
gdjs.PreloaderCode.GDBG_9595ProgressBarObjects1= [];
gdjs.PreloaderCode.GDBG_9595ProgressBarObjects2= [];
gdjs.PreloaderCode.GDBG_9595PreloaderObjects1= [];
gdjs.PreloaderCode.GDBG_9595PreloaderObjects2= [];
gdjs.PreloaderCode.GDLoaderObjects1= [];
gdjs.PreloaderCode.GDLoaderObjects2= [];
gdjs.PreloaderCode.GDNewSpriteObjects1= [];
gdjs.PreloaderCode.GDNewSpriteObjects2= [];


gdjs.PreloaderCode.userFunc0xd07cf0 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);
const game = runtimeScene.getGame();
const playerData = game.getVariables().get("PlayerData");

// устанавливаем uid и fname из Telegram (если Telegram доступен)
if (window.tgData) {
  playerData.getChild("uid").setString(window.tgData.uid || "");
  playerData.getChild("fname").setString(window.tgData.fname || "");
}

// score на старте = 0 (если не загружали ранее)
playerData.getChild("sc").setNumber(0);


};
gdjs.PreloaderCode.eventsList0 = function(runtimeScene) {

{


gdjs.PreloaderCode.userFunc0xd07cf0(runtimeScene);

}


};gdjs.PreloaderCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BG_Preloader"), gdjs.PreloaderCode.GDBG_9595PreloaderObjects1);
gdjs.copyArray(runtimeScene.getObjects("Loader"), gdjs.PreloaderCode.GDLoaderObjects1);
gdjs.copyArray(runtimeScene.getObjects("ProgressBarka"), gdjs.PreloaderCode.GDProgressBarkaObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
{for(var i = 0, len = gdjs.PreloaderCode.GDProgressBarkaObjects1.length ;i < len;++i) {
    gdjs.PreloaderCode.GDProgressBarkaObjects1[i].getBehavior("Resizable").setWidth(0);
}
}
{for(var i = 0, len = gdjs.PreloaderCode.GDLoaderObjects1.length ;i < len;++i) {
    gdjs.PreloaderCode.GDLoaderObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(0, 5));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "LoaderTimer");
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.PreloaderCode.GDBG_9595PreloaderObjects1.length !== 0 ? gdjs.PreloaderCode.GDBG_9595PreloaderObjects1[0] : null), true, "", 0);
}

{ //Subevents
gdjs.PreloaderCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() + gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() <= 12);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ProgressBarka"), gdjs.PreloaderCode.GDProgressBarkaObjects1);
{for(var i = 0, len = gdjs.PreloaderCode.GDProgressBarkaObjects1.length ;i < len;++i) {
    gdjs.PreloaderCode.GDProgressBarkaObjects1[i].getBehavior("Resizable").setWidth(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() / 7 * 334);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "LoaderTimer") > 12;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.PreloaderCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PreloaderCode.GDProgressBarkaObjects1.length = 0;
gdjs.PreloaderCode.GDProgressBarkaObjects2.length = 0;
gdjs.PreloaderCode.GDBG_9595ProgressBarObjects1.length = 0;
gdjs.PreloaderCode.GDBG_9595ProgressBarObjects2.length = 0;
gdjs.PreloaderCode.GDBG_9595PreloaderObjects1.length = 0;
gdjs.PreloaderCode.GDBG_9595PreloaderObjects2.length = 0;
gdjs.PreloaderCode.GDLoaderObjects1.length = 0;
gdjs.PreloaderCode.GDLoaderObjects2.length = 0;
gdjs.PreloaderCode.GDNewSpriteObjects1.length = 0;
gdjs.PreloaderCode.GDNewSpriteObjects2.length = 0;

gdjs.PreloaderCode.eventsList1(runtimeScene);
gdjs.PreloaderCode.GDProgressBarkaObjects1.length = 0;
gdjs.PreloaderCode.GDProgressBarkaObjects2.length = 0;
gdjs.PreloaderCode.GDBG_9595ProgressBarObjects1.length = 0;
gdjs.PreloaderCode.GDBG_9595ProgressBarObjects2.length = 0;
gdjs.PreloaderCode.GDBG_9595PreloaderObjects1.length = 0;
gdjs.PreloaderCode.GDBG_9595PreloaderObjects2.length = 0;
gdjs.PreloaderCode.GDLoaderObjects1.length = 0;
gdjs.PreloaderCode.GDLoaderObjects2.length = 0;
gdjs.PreloaderCode.GDNewSpriteObjects1.length = 0;
gdjs.PreloaderCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['PreloaderCode'] = gdjs.PreloaderCode;
