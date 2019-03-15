/**
 * Created by SHMID on 13.03.2019.
 */
/*Конструктор рисовальщика 2D*/
function MainGameDrawer() {
    var mainContainer, canvasDrawAreaSky, drawAreaEarthContainer, canvasDrawAreaEarth;
    this.earthFieldWidth = document.getElementById("drawAreaEarthContainer").clientWidth;
    this.earthFieldHeight = document.getElementById("drawAreaEarthContainer").clientHeight+2;
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

    // drawVisibleObjects : function (x, y) {
    //     if(!arguments.length) {
    //         var self = this;
    //         self._bf109Image.imageObject.onload = function () {
    //             self.drawAreaSky.drawImage(self._bf109Image.imageObject, 0, 200, self.gameFieldWidth / 8, self.gameFieldHeight / 10);
    //         }
    //     }
    // },


    // drawBf : function () {
    //     var self =this, deltaX = 0;
    //     setInterval(function () {
    //         self.drawSkyMap();
    //         self._bf109Image.onload = self.drawAreaSky.drawImage(self._bf109Image, deltaX-250, 200, self.gameFieldWidth / 8, self.gameFieldHeight / 10);
    //         deltaX +=1;
    //         if(deltaX > self.gameFieldWidth ) deltaX =0;
    //
    //     },50);
    // };


drawBf : function () {
    var self =this, deltaX = 0;
    setInterval(function () {
        self.drawSkyMap();
        self.bf109e3_yellow.imageObject.onload = self.drawAreaSky.drawImage(self.bf109e3_yellow.imageObject, deltaX-250, 200, self.gameFieldWidth / 8, self.gameFieldHeight / 10);
        deltaX +=1;
        if(deltaX > self.gameFieldWidth ) deltaX =0;
    },50);
}


};

