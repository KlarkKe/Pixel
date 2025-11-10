gdjs.PreloaderCode = {};
gdjs.PreloaderCode.localVariables = [];
gdjs.PreloaderCode.idToCallbackMap = new Map();
gdjs.PreloaderCode.GDBG_9595ProgressBarObjects1= [];
gdjs.PreloaderCode.GDBG_9595ProgressBarObjects2= [];
gdjs.PreloaderCode.GDBG_9595PreloaderObjects1= [];
gdjs.PreloaderCode.GDBG_9595PreloaderObjects2= [];
gdjs.PreloaderCode.GDLoaderObjects1= [];
gdjs.PreloaderCode.GDLoaderObjects2= [];
gdjs.PreloaderCode.GDNewSpriteObjects1= [];
gdjs.PreloaderCode.GDNewSpriteObjects2= [];
gdjs.PreloaderCode.GDNewTextObjects1= [];
gdjs.PreloaderCode.GDNewTextObjects2= [];
gdjs.PreloaderCode.GDCopperRedBarObjects1= [];
gdjs.PreloaderCode.GDCopperRedBarObjects2= [];


gdjs.PreloaderCode.userFunc0xd22cc0 = function GDJSInlineCode(runtimeScene) {
"use strict";
(function(runtimeScene) {
  // Получаем глобальные переменные
  const game = runtimeScene.getGame();
  const playerData = game.getVariables().get("PlayerData");

  // Если Telegram из index.html передал данные
  if (window.tgData) {
    playerData.getChild("uid").setString(window.tgData.uid || "");
    playerData.getChild("fname").setString(window.tgData.fname || "");
  } else {
    // Если игра не в Telegram — ставим пустое
    playerData.getChild("uid").setString("");
    playerData.getChild("fname").setString("");
  }

  console.log("✅ PlayerData:", {
    uid: playerData.getChild("uid").getAsString(),
    fname: playerData.getChild("fname").getAsString()
  });
})(runtimeScene);

};
gdjs.PreloaderCode.eventsList0 = function(runtimeScene) {

{


gdjs.PreloaderCode.userFunc0xd22cc0(runtimeScene);

}


};gdjs.PreloaderCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BG_Preloader"), gdjs.PreloaderCode.GDBG_9595PreloaderObjects1);
gdjs.copyArray(runtimeScene.getObjects("Loader"), gdjs.PreloaderCode.GDLoaderObjects1);
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
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "LoaderTimer") > 7;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.PreloaderCode.GDCopperRedBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PreloaderCode.GDCopperRedBarObjects1.length;i<l;++i) {
    if ( gdjs.PreloaderCode.GDCopperRedBarObjects1[i].Value(null) < 32 ) {
        isConditionTrue_0 = true;
        gdjs.PreloaderCode.GDCopperRedBarObjects1[k] = gdjs.PreloaderCode.GDCopperRedBarObjects1[i];
        ++k;
    }
}
gdjs.PreloaderCode.GDCopperRedBarObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PreloaderCode.GDCopperRedBarObjects1 */
{for(var i = 0, len = gdjs.PreloaderCode.GDCopperRedBarObjects1.length ;i < len;++i) {
    gdjs.PreloaderCode.GDCopperRedBarObjects1[i].SetValue(gdjs.PreloaderCode.GDCopperRedBarObjects1[i].Value(null) + ((32 / 7) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), null);
}
}
}

}


};

gdjs.PreloaderCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PreloaderCode.GDBG_9595ProgressBarObjects1.length = 0;
gdjs.PreloaderCode.GDBG_9595ProgressBarObjects2.length = 0;
gdjs.PreloaderCode.GDBG_9595PreloaderObjects1.length = 0;
gdjs.PreloaderCode.GDBG_9595PreloaderObjects2.length = 0;
gdjs.PreloaderCode.GDLoaderObjects1.length = 0;
gdjs.PreloaderCode.GDLoaderObjects2.length = 0;
gdjs.PreloaderCode.GDNewSpriteObjects1.length = 0;
gdjs.PreloaderCode.GDNewSpriteObjects2.length = 0;
gdjs.PreloaderCode.GDNewTextObjects1.length = 0;
gdjs.PreloaderCode.GDNewTextObjects2.length = 0;
gdjs.PreloaderCode.GDCopperRedBarObjects1.length = 0;
gdjs.PreloaderCode.GDCopperRedBarObjects2.length = 0;

gdjs.PreloaderCode.eventsList1(runtimeScene);
gdjs.PreloaderCode.GDBG_9595ProgressBarObjects1.length = 0;
gdjs.PreloaderCode.GDBG_9595ProgressBarObjects2.length = 0;
gdjs.PreloaderCode.GDBG_9595PreloaderObjects1.length = 0;
gdjs.PreloaderCode.GDBG_9595PreloaderObjects2.length = 0;
gdjs.PreloaderCode.GDLoaderObjects1.length = 0;
gdjs.PreloaderCode.GDLoaderObjects2.length = 0;
gdjs.PreloaderCode.GDNewSpriteObjects1.length = 0;
gdjs.PreloaderCode.GDNewSpriteObjects2.length = 0;
gdjs.PreloaderCode.GDNewTextObjects1.length = 0;
gdjs.PreloaderCode.GDNewTextObjects2.length = 0;
gdjs.PreloaderCode.GDCopperRedBarObjects1.length = 0;
gdjs.PreloaderCode.GDCopperRedBarObjects2.length = 0;


return;

}

gdjs['PreloaderCode'] = gdjs.PreloaderCode;
