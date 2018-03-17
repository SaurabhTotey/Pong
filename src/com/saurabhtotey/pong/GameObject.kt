package com.saurabhtotey.pong

import kotlin.math.pow
import kotlin.math.sqrt

/**
 * A class that defines or expects common behaviour from all objects in a Pong game
 */
abstract class GameObject {

    abstract val count: Int
    abstract var x: Float
    abstract var y: Float
    abstract val width: Float
    abstract val height: Float
    abstract var xVelocity: Float
    abstract var yVelocity: Float

    //A set of getters and setters that deal with the object's velocity
    var speed
        get() = sqrt(xVelocity.pow(2) + yVelocity.pow(2))
        set(value) {
            if (this.speed == 0.toFloat()) {
                this.xVelocity = value / sqrt(2.toFloat())
                this.yVelocity = this.xVelocity
            } else {
                val scale = value / this.speed
                this.xVelocity *= scale
                this.yVelocity *= scale
            }
        }

    /**
     * Updates the object's location based on its velocity
     */
    fun update() {
        this.x += this.xVelocity
        this.y += this.yVelocity
        this.tickAction()
    }

    /**
     * Checks whether the game object intersects or collides with another object
     */
    fun collides(other: GameObject): Boolean {
        return other.x < this.x + this.width && other.x + other.width > this.x
                && other.y < this.y + this.height && other.y + other.height > this.y
    }

    /**
     * What the game object does every tick
     */
    abstract fun tickAction()

    /**
     * What the game object does when it collides with the another given gameObject
     */
    abstract fun onCollide(other: GameObject)

}