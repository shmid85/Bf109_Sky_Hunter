/**
 * Created by SHMID on 28.03.2019.
 */
function MapCell(xIndex, yIndex) {
    if(!(isInterger(xIndex))) {
        throw new TypeError("xIndex isn't Interger");
    };

    if(!(isInterger(yIndex))) {
        throw new TypeError("yIndex isn't Interger");
    };
}

MapCell.prototype = {
    constructor : MapCell
};