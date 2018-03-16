package com.saurabhtotey.pong

/**
 * A class that defines or expects common behaviour from all objects in a Pong game
 */
abstract class GameObject(var x: Float, var y: Float, val width: Float, val height: Float, val xVelocity: Float, val yVelocity: Float) {
    fun update() {
        this.x += this.xVelocity
        this.y += this.yVelocity
    }
    //TODO: handle collisions
}