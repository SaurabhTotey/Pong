package com.saurabhtotey.pong

enum class Axis {
    X, Y
}

enum class Direction {
    POSITIVE, NEGATIVE
}

val paddleChangeScale = 0.1
val paddleOnDimensionScale = 0.3
val paddleOffDimensionScale = 0.05

class Paddle(startingDirection: Direction, val axisOfMovement: Axis) {

    val dimensions = Vector(gameWidth * if (axisOfMovement == Axis.X) paddleOnDimensionScale else paddleOffDimensionScale, gameHeight * if (axisOfMovement == Axis.Y) paddleOnDimensionScale else paddleOffDimensionScale)
    var location = if (axisOfMovement == Axis.Y) Vector(if (startingDirection == Direction.POSITIVE) 0.0 else gameWidth - dimensions.x, 0.5) else Vector(0.5, if (startingDirection == Direction.POSITIVE) 0.0 else gameHeight - dimensions.y)
        private set(value) {
            field = value
        }

    fun move(direction: Direction) {
        val changeScale = paddleChangeScale * if (direction == Direction.POSITIVE) 1 else -1
        if (this.axisOfMovement == Axis.X) {
            this.location.x += changeScale * gameWidth
        } else {
            this.location.y += changeScale * gameHeight
        }
    }

}