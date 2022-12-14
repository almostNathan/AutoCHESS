//Nathan Allen
//AUTOCHESS
class Sprite{

    constructor(width, height, image, scene){
        this.width = width
        this.height = height
        this.xPos = 0
        this.yPos = 0
        this.speed = 0
        this.compSpeed = {dx:0,dy:0}
        this.acceleration = 0
        this.compAccel = {ddx:0, ddy:0}
        this.moveAngle = 0
        this.image = new Image()
        this.image.src = image
        this.imageAngle = 0
        this.scene = scene
        this.boundAction = null
        this.visible = true

    }//end constructor


    //function to draw sprite if visible
    //draw picture CENTERED on sprite position
    draw(){
        if (this.visible == true){
            let context = this.scene.context 
            context.save()
            context.translate(this.xPos, this.yPos)
            context.rotate(this.imageAngle)
            context.drawImage(this.image,0-this.width/2,0-this.height/2,this.width, this.height)
            context.restore()
            this.checkBounds()
        }//end if

    }//end draw


    //updates the current position of the sprite
    //add acceleration to speed
    //add speed to position
    
    update(){
        //increase speed by acceleration
        this.compSpeed.dx += this.compAccel.ddx
        this.compSpeed.dy += this.compAccel.ddy
        //move based on speed
        this.xPos += this.compSpeed.dx
        this.yPos -= this.compSpeed.dy


    }//end update

    //checks if the mouse was clicked on this sprite
    //parameter
    //  click : {x:mouseX, y:mouseY} || object with mouse x/y position
    //return
    //  boolean : true if mouse clicked on this sprite
    isClicked(click){
        let left = this.xPos - this.width/2
        let right = this.xPos + this.width/2
        let top = this.yPos - this.height/2
        let bot = this.yPos + this.height/2

        //if mouse is NOT clicked on this piece
        if (click.x > right || click.x < left || click.y < top || click.y > bot){
            return false
        }else {
            return true
        }
    }//end isClicked

    //POSITION set/get
    set setXPos(x){
        this.xPos = x
    }
    set setYPos(y){
        this.yPos = y
    }
    set setPos(position){
        this.xPos = position.x
        this.yPos = position.y
        this.center = {x:this.xPos, y:this.yPos}
    }
    get getXPos(){
        return this.xPos
    }
    get getYPos(){
        return this.yPos
    }
    //end Position set/get

/* old functions
    //get compoent dx/dy from speed/angle
    //return object {dx:#, dy:#}
    vectProject(speed, angle){
        returnValue = {dx:0, dy:0}
        returnValue.dx = speed * Math.cos(angle)
        returnValue.dy = speed * Math.sin(angle)
        return returnValue
    }//end vectProject

    //parameters - speed and angle of force to current
    addForce(addSpeed, addAngle){
        //get the vector projection for the speed/angle of force
        newForce = this.vectProject(addSpeed, addAngle)
        //add these new forces
        this.compSpeed.dx += newForce.dx
        this.compSpeed.dy += newForce.dy
    }//end addForce


    //check if parameter sprite is colliding with this sprite
    collidesWith(otherObject){
        collision = true
        //get the borders of the objects
        thisLeft = this.xPos - this.width/2
        thisRight = this.xPos + this.width/2
        thisTop = this.yPos - this.width/2
        thisBottom = this.yPos + this.width/2

        otherLeft = otherObject.xPos - this.width/2
        thisRight = otherObject.xPos + this.width/2
        thisTop = otherObject.yPos - this.width/2
        thisBottom = otherObject.yPos + this.width/2

        //if ANY of the borders are outside the other objects opposite border, the two CANNOT be colliding
        if (thisLeft>otherRight || thisRight<otherLeft || thisTop<otherBottom || thisBottom>otherTop){
            collision = false
        }

        return collision
    }//end collidesWith


    //function for checking bounds and handling accordingly
    checkBounds(){
        //constants for bound actions
        let DELETE=0, WRAP=1,BOUNCE=2,STOP=3,KEEP=4;

        //if delete, flag for deletion
        if (this.boundAction == DELETE){
            if(this.xPos > this.scene.width || this.xPos < 0 || this.yPos > this.scene.height || this.yPos < 0){
                this.delete = true
            }
        }//end DELETE
        //if BOUNCE, change speed to opposite direction
        else if(this.boundAction == BOUNCE){
            //goes off left/right
            if(this.xPos > this.scene.width || this.xPos < 0){
                this.compSpeed.dx *= -1
            }
            //goes off top/bottom
            if (this.yPos > this.scene.height || this.yPos < 0){
                this.compSpeed.dy *= -1
            }
        }//end BOUNCE

        //if STOP, keep sprite in the canvas
        else if (this.boundAction == STOP){
            //Right
            if(this.xPos+this.widht/2 > this.scene.width){
                this.xPos = this.scene.width - this.width/2 
            }
            //left
            if(this.xPos-this.width/2 < 0){
                this.xPos = this.width/2 
            }
            //bottom
            if (this.yPos+this.height/2 > this.scene.height){
                this.yPos = this.scene.height - this.height/2
            }
            //top
            if(this.yPos-this.height/2 < 0){
                this.yPos = this.height/2
            }
        }//end STOP
    }//end checkBounds

    //measure and return the distance between two sprites
    distanceTo(otherSprite){
        let xDif = this.xPos - otherSprite.xPos
        let yDif = this.yPos - otherSprite.yPos
        let distance = Math.sqrt(Math.pow(xDif, 2) + Math.pow(yDif, 2))
        return distance
    }

    

    //find the angle between two sprites
    angleTo(otherSprite){
        xDif = this.xPos - otherSprite.xPos
        yDif = this.yPos - otherSprite.yPos
        angle = Math.atan2(yDif, xDif)
        return angle

    }

    hide(){
        this.visible = false
    }
    show(){
        this.visible = true
    }


   
    
    //SPEED set/get
    set setSpeed(newSpeed){
        this.speed = newSpeed
    }
    set setXSpeed(newXSpeed){
        this.compSpeed.dx = newXSpeed
    }
    set setYSpeed(newYSpeed){
        this.compSpeed.dy = newYSpeed
    }
    get getSpeed(){
        return this.speed
    }
    get getXSpeed(){
        return this.compSpeed.dx
    }
    get getYSpeed(){
        return this.compSpeed.dy
    }


    set setBoundAction(action){
        this.boundAction = action
    }//end setBoundAction


*/
//end old functions

}//endSprite

