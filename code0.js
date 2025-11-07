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
gdjs.PreloaderCode.GDNewTextObjects1= [];
gdjs.PreloaderCode.GDNewTextObjects2= [];


gdjs.PreloaderCode.userFunc0xfaac88 = function GDJSInlineCode(runtimeScene) {
"use strict";
(function(runtimeScene) {
    const game = runtimeScene.getGame();
    const playerData = game.getVariables().get("PlayerData");

    // Если уже заполнено (чтобы не перезаписывать при перезапуске сцены):
    if (playerData.getChild("uid").getAsString() !== "") return;

    // Значения по умолчанию
    let uid = "";
    let fname = "";

    // 1. Берём из Telegram WebApp initDataUnsafe
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
        const user = window.Telegram.WebApp.initDataUnsafe.user;
        if (user) {
            uid = String(user.id || "");
            fname = String(user.first_name || "");
        }
    }

    // 2. Если ты вручную добавлял window.tgData (fallback)
    if (!uid && window.tgData && window.tgData.uid) {
        uid = String(window.tgData.uid);
    }
    if (!fname && window.tgData && window.tgData.first_name) {
        fname = String(window.tgData.first_name);
    }

    // 3. Записываем в глобальные переменные
    playerData.getChild("uid").setString(uid);
    playerData.getChild("fname").setString(fname);
    // chatId из initData не приходит — оставляем пустым
    playerData.getChild("chatId").setString("");

    // 4. Если нет поля sc — создаём
    if (!playerData.hasChild("sc")) {
        playerData.getChild("sc").setNumber(0);
    }
})(runtimeScene);

};
gdjs.PreloaderCode.eventsList0 = function(runtimeScene) {

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


{


gdjs.PreloaderCode.userFunc0xfaac88(runtimeScene);

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
gdjs.PreloaderCode.GDNewTextObjects1.length = 0;
gdjs.PreloaderCode.GDNewTextObjects2.length = 0;

gdjs.PreloaderCode.eventsList0(runtimeScene);
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
gdjs.PreloaderCode.GDNewTextObjects1.length = 0;
gdjs.PreloaderCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['PreloaderCode'] = gdjs.PreloaderCode;
