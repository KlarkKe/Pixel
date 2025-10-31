gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.idToCallbackMap = new Map();
gdjs.MainCode.GDCloudLeftObjects1= [];
gdjs.MainCode.GDCloudLeftObjects2= [];
gdjs.MainCode.GDCloudRightObjects1= [];
gdjs.MainCode.GDCloudRightObjects2= [];
gdjs.MainCode.GDNewSprite3Objects1= [];
gdjs.MainCode.GDNewSprite3Objects2= [];
gdjs.MainCode.GDMainTextObjects1= [];
gdjs.MainCode.GDMainTextObjects2= [];
gdjs.MainCode.GDRoolsButtonObjects1= [];
gdjs.MainCode.GDRoolsButtonObjects2= [];
gdjs.MainCode.GDLeaderboardButtonObjects1= [];
gdjs.MainCode.GDLeaderboardButtonObjects2= [];
gdjs.MainCode.GDPlayButtonObjects1= [];
gdjs.MainCode.GDPlayButtonObjects2= [];
gdjs.MainCode.GDNewTextObjects1= [];
gdjs.MainCode.GDNewTextObjects2= [];
gdjs.MainCode.GDNewText2Objects1= [];
gdjs.MainCode.GDNewText2Objects2= [];
gdjs.MainCode.GDNewText3Objects1= [];
gdjs.MainCode.GDNewText3Objects2= [];
gdjs.MainCode.GDNewSpriteObjects1= [];
gdjs.MainCode.GDNewSpriteObjects2= [];


gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDRoolsButtonObjects1Objects = Hashtable.newFrom({"RoolsButton": gdjs.MainCode.GDRoolsButtonObjects1});
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Rools", false);
}
}

}


};gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDLeaderboardButtonObjects1Objects = Hashtable.newFrom({"LeaderboardButton": gdjs.MainCode.GDLeaderboardButtonObjects1});
gdjs.MainCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboard", false);
}
}

}


};gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.MainCode.GDPlayButtonObjects1});
gdjs.MainCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CharacterSelection", false);
}
}

}


};gdjs.MainCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RoolsButton"), gdjs.MainCode.GDRoolsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDRoolsButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeaderboardButton"), gdjs.MainCode.GDLeaderboardButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDLeaderboardButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDCloudLeftObjects1.length = 0;
gdjs.MainCode.GDCloudLeftObjects2.length = 0;
gdjs.MainCode.GDCloudRightObjects1.length = 0;
gdjs.MainCode.GDCloudRightObjects2.length = 0;
gdjs.MainCode.GDNewSprite3Objects1.length = 0;
gdjs.MainCode.GDNewSprite3Objects2.length = 0;
gdjs.MainCode.GDMainTextObjects1.length = 0;
gdjs.MainCode.GDMainTextObjects2.length = 0;
gdjs.MainCode.GDRoolsButtonObjects1.length = 0;
gdjs.MainCode.GDRoolsButtonObjects2.length = 0;
gdjs.MainCode.GDLeaderboardButtonObjects1.length = 0;
gdjs.MainCode.GDLeaderboardButtonObjects2.length = 0;
gdjs.MainCode.GDPlayButtonObjects1.length = 0;
gdjs.MainCode.GDPlayButtonObjects2.length = 0;
gdjs.MainCode.GDNewTextObjects1.length = 0;
gdjs.MainCode.GDNewTextObjects2.length = 0;
gdjs.MainCode.GDNewText2Objects1.length = 0;
gdjs.MainCode.GDNewText2Objects2.length = 0;
gdjs.MainCode.GDNewText3Objects1.length = 0;
gdjs.MainCode.GDNewText3Objects2.length = 0;
gdjs.MainCode.GDNewSpriteObjects1.length = 0;
gdjs.MainCode.GDNewSpriteObjects2.length = 0;

gdjs.MainCode.eventsList3(runtimeScene);
gdjs.MainCode.GDCloudLeftObjects1.length = 0;
gdjs.MainCode.GDCloudLeftObjects2.length = 0;
gdjs.MainCode.GDCloudRightObjects1.length = 0;
gdjs.MainCode.GDCloudRightObjects2.length = 0;
gdjs.MainCode.GDNewSprite3Objects1.length = 0;
gdjs.MainCode.GDNewSprite3Objects2.length = 0;
gdjs.MainCode.GDMainTextObjects1.length = 0;
gdjs.MainCode.GDMainTextObjects2.length = 0;
gdjs.MainCode.GDRoolsButtonObjects1.length = 0;
gdjs.MainCode.GDRoolsButtonObjects2.length = 0;
gdjs.MainCode.GDLeaderboardButtonObjects1.length = 0;
gdjs.MainCode.GDLeaderboardButtonObjects2.length = 0;
gdjs.MainCode.GDPlayButtonObjects1.length = 0;
gdjs.MainCode.GDPlayButtonObjects2.length = 0;
gdjs.MainCode.GDNewTextObjects1.length = 0;
gdjs.MainCode.GDNewTextObjects2.length = 0;
gdjs.MainCode.GDNewText2Objects1.length = 0;
gdjs.MainCode.GDNewText2Objects2.length = 0;
gdjs.MainCode.GDNewText3Objects1.length = 0;
gdjs.MainCode.GDNewText3Objects2.length = 0;
gdjs.MainCode.GDNewSpriteObjects1.length = 0;
gdjs.MainCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;
