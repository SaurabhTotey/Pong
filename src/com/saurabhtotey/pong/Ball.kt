package com.saurabhtotey.pong

import kotlin.js.Math.random

/**
 * The class that represents a game ball
 * Is the object in the game that gets moved around
 */
class Ball(val gameWidth: Int, val gameHeight: Int, override val count: Int, var maxSpeed: Float) : GameObject() {

    override val width = gameHeight.toFloat() / 5
    override val height = this.width
    override var x = (gameWidth.toFloat() - this.width) / 2
    override var y = (gameHeight.toFloat() - this.height) / 2
    override var xVelocity = if (this.count % 2 == 0) 1.toFloat() else (-1).toFloat()
    override var yVelocity = random().toFloat() * 2 - 1 //A random value from -1 to 1

    /**
     * Every tick, the ball will reset its speed to be the highest speed it can be
     */
    override fun tickAction() {
        this.speed = this.maxSpeed
    }

    /**
     * When the ball collides, it either bounces, or stops based on Pong rules
     */
    override fun onCollide(other: GameObject) {
        if (this.y < 0 || this.y > this.gameHeight) {
            this.yVelocity *= (-1.1).toFloat()
        } else {
            this.xVelocity *= (-1.1).toFloat()
        }
        this.maxSpeed *= 1.1.toFloat()
    }

}