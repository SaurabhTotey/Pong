package com.saurabhtotey.pong

enum class Direction {
    POSITIVE, NEGATIVE
}

class Paddle(startingDirection: Direction, val length: Int, val speed: Int) {

    var location = Vector(if(startingDirection == Direction.POSITIVE) 0 else logicalCoordinates.x, logicalCoordinates.y / 2 - this.length / 2)

    fun move(direction: Direction) {
        this.location.y += if (direction == Direction.POSITIVE) {
            speed
        } else {
            -speed
        }
    }

}
