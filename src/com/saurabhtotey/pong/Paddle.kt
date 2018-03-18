package com.saurabhtotey.pong

/**
 * The class that could be a game's paddle
 * Are the only objects the players can directly control
 * A paddle with a 0 count is on the left, a paddle with a 1 count is on the right
 */
class Paddle(override val gameWidth: Int, override val gameHeight: Int, override val count: Int) : GameObject() {

    override val width = this.gameWidth.toFloat() / 50
    override val height = this.gameHeight.toFloat() / 5
    override var x = 0.toFloat()
    override var y = 0.toFloat()
    override var xVelocity = 0.toFloat()
    override var yVelocity = 0.toFloat()
    var idleTicks = 0
    var isCpu = false
        get() = this.idleTicks > 75

    /**
     * When the paddle is created, its position is set to where it actually belongs
     */
    init {
        this.adjustPosition()
    }

    /**
     * Sets the paddles back to their original positions
     */
    fun adjustPosition() {
        this.x = if (this.count == 0) 0.toFloat() else this.gameWidth - this.width
        this.y = (this.gameHeight - this.height) / 2
        this.idleTicks = 60
    }

    /**
     * Moves the paddle; true means up and false means down
     */
    fun move(isUp: Boolean) {
        this.yVelocity = this.gameHeight.toFloat() / 20
        if (isUp) {
            this.yVelocity = -this.yVelocity
        }
    }

    /**
     * Every tick, the game paddle stop moving
     */
    override fun tickAction() {
        this.speed = 0.toFloat()
        this.idleTicks++
    }

    /**
     * If the paddle collides with a ball, it moves the ball to the edge of the paddle
     */
    override fun onCollide(other: GameObject) {
        if (other !is Ball) {
            return
        }
        other.x = if (this.count == 0) this.width - 1 else this.x - other.width + 1
    }

}