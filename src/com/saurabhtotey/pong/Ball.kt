package com.saurabhtotey.pong

import kotlin.math.cos
import kotlin.math.sin

class Ball(val radius: Double, private val velocity: Vector<Double>, location: Vector<Double>, private val bounceSpeedMultiplier: Double = 1.05) {

    val location: Vector<Double> = location
        get() = Vector(field.x, field.y)

    fun move() {
        this.location.x = this.velocity.x
        this.location.y = this.velocity.y
    }

    fun bounce(angle: Double) {
        val newMagnitude = this.velocity.magnitude * bounceSpeedMultiplier
        this.velocity.x = -newMagnitude * cos(angle)
        this.velocity.y = -newMagnitude * sin(angle)
    }

}
