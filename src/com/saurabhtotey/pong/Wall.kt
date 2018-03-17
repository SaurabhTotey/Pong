package com.saurabhtotey.pong

/**
 * A class that represents a wall; a wall is the edge of the playable area
 * Top is 0 count, Bottom is 1 count, Left is 2 count, Right is 3 count
 */
class Wall(val gameWidth: Int, val gameHeight: Int, override val count: Int) : GameObject() {

    override val width = if (this.count < 2) this.gameWidth.toFloat() else 1.toFloat()
    override val height = if (this.count > 1) this.gameHeight.toFloat() else 1.toFloat()
    override var x = if (this.count < 3) 0.toFloat() else this.gameWidth.toFloat() - 1
    override var y = if (this.count == 0 || this.count > 1) 0.toFloat() else gameHeight.toFloat() - 1
    override var xVelocity = 0.toFloat()
    override var yVelocity = 0.toFloat()

    /**
     * Walls don't do anything every tick
     */
    override fun tickAction() {}

    /**
     * When a wall collides with a ball, the game ends
     */
    override fun onCollide(other: GameObject) {
        if (this.count > 1 && other is Ball) {
            other.speed = 0.toFloat()
        }
    }

}