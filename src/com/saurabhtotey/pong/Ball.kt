package com.saurabhtotey.pong

import kotlin.js.Math.random

/**
 * The class that represents a game ball
 * Is the object in the game that gets moved around
 */
class Ball(override val gameWidth: Int, override val gameHeight: Int, override val count: Int, var maxSpeed: Float) : GameObject() {

    val speedMultiplier = 1.01.toFloat()
    override val width = gameHeight.toFloat() / 15
    override val height = this.width
    override var x = (gameWidth.toFloat() - this.width) / 2
    override var y = (gameHeight.toFloat() - this.height) / 2
    override var xVelocity = if (this.count % 2 == 0) 1.toFloat() else (-1).toFloat()
    override var yVelocity = random().toFloat() * 2 - 1 //A random value from -1 to 1

    /**
     * Sets the ball's speed to the max it can be
     */
    init {
        this.speed = this.maxSpeed
    }

    /**
     * The ball doesn't do anything every tick
     */
    override fun tickAction() {}

    /**
     * When the ball collides, it either bounces, or stops based on Pong rules
     */
    override fun onCollide(other: GameObject) {
        if (other is Wall) {
            this.yVelocity *= -this.speedMultiplier
        } else {
            this.xVelocity *= -this.speedMultiplier
        }
        this.maxSpeed *= this.speedMultiplier
        this.speed = maxSpeed
    }

}