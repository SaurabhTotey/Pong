package com.saurabhtotey.pong

/**
 * The class that could be a game's paddle
 * Are the only objects the players can directly control
 */
class Paddle(val gameWidth: Int, val gameHeight: Int, override val count: Int) : GameObject() {

    override val width = this.gameWidth.toFloat() / 50
    override val height = this.gameHeight.toFloat() / 5
    override var x = if (this.count == 0) 0.toFloat() else this.gameWidth - this.width
    override var y = (this.gameHeight - this.height) / 2
    override var xVelocity = 0.toFloat()
    override var yVelocity = 0.toFloat()

    /**
     * Every tick, the game paddle stop moving
     */
    override fun tickAction() {
        this.speed = 0.toFloat()
    }

    /**
     * The paddle itself doesn't do anything on a collide
     */
    override fun onCollide(other: GameObject) {}

}