gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.idToCallbackMap = new Map();
gdjs.LeaderboardCode.GDNewSpriteObjects1= [];
gdjs.LeaderboardCode.GDNewSpriteObjects2= [];
gdjs.LeaderboardCode.GDNewSprite2Objects1= [];
gdjs.LeaderboardCode.GDNewSprite2Objects2= [];


gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.LeaderboardCode.GDNewSprite2Objects1});
gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}
}

}


};gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.LeaderboardCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDNewSpriteObjects1.length = 0;
gdjs.LeaderboardCode.GDNewSpriteObjects2.length = 0;
gdjs.LeaderboardCode.GDNewSprite2Objects1.length = 0;
gdjs.LeaderboardCode.GDNewSprite2Objects2.length = 0;

gdjs.LeaderboardCode.eventsList1(runtimeScene);
gdjs.LeaderboardCode.GDNewSpriteObjects1.length = 0;
gdjs.LeaderboardCode.GDNewSpriteObjects2.length = 0;
gdjs.LeaderboardCode.GDNewSprite2Objects1.length = 0;
gdjs.LeaderboardCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
