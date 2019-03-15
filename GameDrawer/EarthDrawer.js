/**
 * Created by SHMID on 15.03.2019.
 */
/*Класс отрисовки земли и ее скроллинга*/
function EarthDrawer() {
}

EarthDrawer.prototype = {
    constructor : EarthDrawer,
    drawEarth : function (speed, earthImage, width, height, drawArea, backgroundColor) {
        var delta=0;
        this.timerID = setInterval(function () {
            EarthDrawer.prototype.drawSkyMapBehindEarth(drawArea, width ,height);
            drawArea.drawImage(earthImage, delta, 0);
            drawArea.drawImage(earthImage, earthImage.width-Math.abs(delta), 0);
            if(Math.abs(delta) > earthImage.width) delta =0;
            delta -= 1;
        }, speed);
},

    drawSkyMapBehindEarth : function (drawArea, width , height) {
        drawArea.fillStyle = backgroundColor;
        drawArea.fillRect(0, 0, width, height);
    }
};