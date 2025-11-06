gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.idToCallbackMap = new Map();
gdjs.LeaderboardCode.GDNewSpriteObjects1= [];
gdjs.LeaderboardCode.GDNewSpriteObjects2= [];
gdjs.LeaderboardCode.GDNewSprite2Objects1= [];
gdjs.LeaderboardCode.GDNewSprite2Objects2= [];
gdjs.LeaderboardCode.GDPlayerNameTextObjects1= [];
gdjs.LeaderboardCode.GDPlayerNameTextObjects2= [];
gdjs.LeaderboardCode.GDPlayerScoreTextObjects1= [];
gdjs.LeaderboardCode.GDPlayerScoreTextObjects2= [];
gdjs.LeaderboardCode.GDNewTextObjects1= [];
gdjs.LeaderboardCode.GDNewTextObjects2= [];
gdjs.LeaderboardCode.GDNewSprite3Objects1= [];
gdjs.LeaderboardCode.GDNewSprite3Objects2= [];
gdjs.LeaderboardCode.GDNewSprite4Objects1= [];
gdjs.LeaderboardCode.GDNewSprite4Objects2= [];


gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPlayerNameTextObjects2Objects = Hashtable.newFrom({"PlayerNameText": gdjs.LeaderboardCode.GDPlayerNameTextObjects2});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPlayerScoreTextObjects2Objects = Hashtable.newFrom({"PlayerScoreText": gdjs.LeaderboardCode.GDPlayerScoreTextObjects2});
gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.LeaderboardCode.GDNewSprite2Objects1});
gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}
}

}


};gdjs.LeaderboardCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "bg_sound.mp3", true, 100, 1);
}
{gdjs.evtTools.network.sendAsyncRequest("https://mts-4.ru/top", "", "GET", "", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(15));
}
}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(15));
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.LeaderboardCode.GDPlayerNameTextObjects2.length = 0;

gdjs.LeaderboardCode.GDPlayerScoreTextObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber() < 10);
}
if (isConditionTrue_0)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPlayerNameTextObjects2Objects, 42, 199 + runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber() * 100, "Layer");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPlayerScoreTextObjects2Objects, 600, 200 + runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber() * 100, "Layer");
}
{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameTextObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameTextObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(15).getChild(runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber()).getChild("fname").getAsString());
}
}
{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerScoreTextObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerScoreTextObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(15).getChild(runtimeScene.getGame().getVariables().getFromIndex(16).getAsNumber()).getChild("sc").getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(16).add(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.LeaderboardCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDNewSpriteObjects1.length = 0;
gdjs.LeaderboardCode.GDNewSpriteObjects2.length = 0;
gdjs.LeaderboardCode.GDNewSprite2Objects1.length = 0;
gdjs.LeaderboardCode.GDNewSprite2Objects2.length = 0;
gdjs.LeaderboardCode.GDPlayerNameTextObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerNameTextObjects2.length = 0;
gdjs.LeaderboardCode.GDPlayerScoreTextObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerScoreTextObjects2.length = 0;
gdjs.LeaderboardCode.GDNewTextObjects1.length = 0;
gdjs.LeaderboardCode.GDNewTextObjects2.length = 0;
gdjs.LeaderboardCode.GDNewSprite3Objects1.length = 0;
gdjs.LeaderboardCode.GDNewSprite3Objects2.length = 0;
gdjs.LeaderboardCode.GDNewSprite4Objects1.length = 0;
gdjs.LeaderboardCode.GDNewSprite4Objects2.length = 0;

gdjs.LeaderboardCode.eventsList2(runtimeScene);
gdjs.LeaderboardCode.GDNewSpriteObjects1.length = 0;
gdjs.LeaderboardCode.GDNewSpriteObjects2.length = 0;
gdjs.LeaderboardCode.GDNewSprite2Objects1.length = 0;
gdjs.LeaderboardCode.GDNewSprite2Objects2.length = 0;
gdjs.LeaderboardCode.GDPlayerNameTextObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerNameTextObjects2.length = 0;
gdjs.LeaderboardCode.GDPlayerScoreTextObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerScoreTextObjects2.length = 0;
gdjs.LeaderboardCode.GDNewTextObjects1.length = 0;
gdjs.LeaderboardCode.GDNewTextObjects2.length = 0;
gdjs.LeaderboardCode.GDNewSprite3Objects1.length = 0;
gdjs.LeaderboardCode.GDNewSprite3Objects2.length = 0;
gdjs.LeaderboardCode.GDNewSprite4Objects1.length = 0;
gdjs.LeaderboardCode.GDNewSprite4Objects2.length = 0;


return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
