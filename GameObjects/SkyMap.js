/**
 * Created by SHMID on 28.03.2019.
 */
function SkyMap(columnNum, rowNum) {
    if(!isInterger(columnNum)) {
        throw new TypeError("culumnNum isn't Interger");
    };

    if(!isInterger(rowNum)) {
        throw new TypeError("rowNum isn't Interger");
    };

    if(columnNum <= 0){
        throw new TypeError("culumnNum is less or equal to 0");
    };

    if(rowNum <= 0){
        throw new TypeError("rowNum is less or equal to 0");
    };

    this.columnNum = columnNum;
    this.rowNum = rowNum;
};

SkyMap.prototype = {
    constructor : SkyMap,
    isCellInMap : function (mapCell) {
        if(! (mapCell instanceof MapCell)) {
            throw new TypeError("Argument isn't MapCell object");
        };

        if(mapCell.xIndex <0 || mapCell.yIndex <0 || mapCell.xIndex >= this.columnNum || mapCell.yIndex >= this.rowNum) {
            return false;
        };

        return true;
    }
};