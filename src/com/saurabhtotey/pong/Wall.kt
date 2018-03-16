package com.saurabhtotey.pong

enum class WallCount(val value: Int) {
    TOP(0), BOTTOM(1), LEFT(2), RIGHT(3)
}

class Wall(val gameWidth: Int, val gameHeight: Int, override val count: Int) : GameObject() {

    //TODO: test
    override val width = if (this.count < 2) this.gameWidth.toFloat() else 1.toFloat()
    override val height = if (this.count > 1) this.gameHeight.toFloat() else 1.toFloat()
    override var x = if (this.count < 3) 0.toFloat() else this.gameWidth.toFloat()
    override var y = if (this.count == 0 || this.count > 1) 0.toFloat() else gameHeight.toFloat()
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