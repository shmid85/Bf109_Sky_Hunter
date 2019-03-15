/**
 * Created by SHMID on 13.03.2019.
 */
/*Конструктор рисовальщика 2D*/
function MainGameDrawer() {
    var mainContainer, canvasDrawAreaSky, drawAreaEarthContainer, canvasDrawAreaEarth;
    this.earthFieldWidth = document.getElementById("drawAreaEarthContainer").clientWidth;
    this.earthFieldHeight = document.getElementById("drawAreaEarthContainer").clientHeight+4;
    this.gameFieldWidth = document.documentElement.clientWidth;
    this.gameFieldHeight = document.documentElement.clientHeight - this.earthFieldHeight;

    mainContainer = document.getElementById("mainContainer");
    mainContainer.style.height = this.gameFieldHeight + "px";
    drawAreaEarthContainer = document.getElementById("drawAreaEarthContainer");

    canvasDrawAreaSky =document.createElement("canvas");
    canvasDrawAreaSky.id = "drawAreaSky";
    canvasDrawAreaSky.class = "drawAreaSky";
    canvasDrawAreaSky.width = this.gameFieldWidth;
    canvasDrawAreaSky.height = this.gameFieldHeight;
    this.drawAreaSky = canvasDrawAreaSky.getContext("2d");

    canvasDrawAreaEarth =document.createElement("canvas");
    canvasDrawAreaEarth.id = "drawAreaEarth";
    canvasDrawAreaEarth.class = "drawAreaEarth";
    canvasDrawAreaEarth.width = this.earthFieldWidth;
    canvasDrawAreaEarth.height = this.earthFieldHeight;
    this.drawAreaEarth = canvasDrawAreaEarth.getContext("2d");


    mainContainer.appendChild(canvasDrawAreaSky);
    drawAreaEarthContainer.appendChild(canvasDrawAreaEarth);

    createrOfGameObject = new CreaterOfGameObject();
    this.bf109e3_yellow = createrOfGameObject.createGameObject("bf109e3_yellow", "Germany", "img/bf109e3_yellow.png",
    0, 0);

    // this._bf109Image = new Image();
    // this._bf109Image.src = 'img/bf109e3_yellow.png';
    this.forestImage = new Image();
    this.forestImage.src = "img/forest.png";
}

MainGameDrawer.prototype = {
    constructor : MainGameDrawer,
    drawSkyMap : function (backgroundColor) {
        this.drawAreaSky.fillStyle = backgroundColor;
        this.drawAreaSky.fillRect(0, 0,  this.gameFieldWidth, this.gameFieldHeight);
    },

    drawVisibleObjects : function (visibleObject) {
        if(!arguments.length) {

        }
    },

    drawBf : function () {
        var self =this, deltaX = 0;
        setInterval(function () {
        self.drawSkyMap();
        self.bf109e3_yellow.imageObject.onload = self.drawAreaSky.drawImage(self.bf109e3_yellow.imageObject, deltaX-250, 350, self.gameFieldWidth / 8, self.gameFieldHeight / 10);
            deltaX +=1;
            if(deltaX > self.gameFieldWidth ) deltaX =0;
        },5);
    },

    drawLogo : function () {
        var wrapper, startButton;
        wrapper=document.getElementById("wrapper");
        wrapper.className = "wrapperStart";
        startButton = document.createElement("span");
        startButton.id = "startButton";
        startButton.className = "startButton";
        wrapper.appendChild(startButton);
        startButton.addEventListener("click", startButtonHandler);
    },

    removeLogo : function () {
        var wrapper, startButton;
        wrapper=document.getElementById("wrapper");
        wrapper.className = "wrapper";
        startButton = document.getElementById("startButton");
        startButton.parentNode.removeChild(startButton);
    }

};

