/**
 * Created by SHMID on 15.03.2019.
 */
/*Фабрика создания игоровых объектов*/
function CreaterOfGameObject() {

}

CreaterOfGameObject.prototype = {
    constructor : CreaterOfGameObject,
    createGameObject : function (name, army, image, positionX, positionY,  health, force, lives, sound) {
        return {
            name : name,
            army : army,
            imageObject : function(){
                var imageObject = new Image();
                imageObject.src = image;
                return imageObject;
            }(),
            positionX : positionX,
            positionY : positionY,
            health : health,
            force : force,
            lives : lives,
            sound : sound
        }
    }
};