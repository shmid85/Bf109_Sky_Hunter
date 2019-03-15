/**
 * Created by SHMID on 14.03.2019.
 */
var mainGameDrawer, backgroundColor ="lightskyblue";

mainGameDrawer = new MainGameDrawer();
earthDrawer = new EarthDrawer();
window.onload = onLoadHandler();

function onLoadHandler() {
    mainGameDrawer.drawLogo();
    // mainGameDrawer.drawSkyMap(backgroundColor);
    // earthDrawer.drawEarth(10, mainGameDrawer.forestImage, mainGameDrawer.earthFieldWidth, mainGameDrawer.earthFieldHeight, mainGameDrawer.drawAreaEarth, backgroundColor);
    // mainGameDrawer.drawVisibleObjects();
    //  mainGameDrawer.drawBf();
}

function startButtonHandler() {
    mainGameDrawer.drawSkyMap(backgroundColor);
    earthDrawer.drawEarth(10, mainGameDrawer.forestImage, mainGameDrawer.earthFieldWidth, mainGameDrawer.earthFieldHeight, mainGameDrawer.drawAreaEarth, backgroundColor);
    mainGameDrawer.drawBf();
}

