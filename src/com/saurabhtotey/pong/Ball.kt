package com.saurabhtotey.pong

class Ball(val radius: Double, val velocity: Vector<Double>, private val bounceSpeedMultiplier: Double = 1.05) {

    val location = Vector(0.5 * logicalCoordinates.x, 0.5 * logicalCoordinates.y)
        get() = Vector(field.x, field.y)

    fun move() {
        this.location.x += this.velocity.x
        this.location.y += this.velocity.y
    }

}
