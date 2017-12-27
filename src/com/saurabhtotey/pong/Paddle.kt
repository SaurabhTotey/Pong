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

abstract class Object {
    abstract val dimensions: Vector<Double>
    abstract var location: Vector<Double>
    abstract fun move(direction: Direction)
}

open class Paddle(startingDirection: Direction, val axisOfMovement: Axis): Object() {

    override val dimensions = Vector(gameWidth * if (axisOfMovement == Axis.X) paddleOnDimensionScale else paddleOffDimensionScale, gameHeight * if (axisOfMovement == Axis.Y) paddleOnDimensionScale else paddleOffDimensionScale)
    override var location = if (axisOfMovement == Axis.Y) Vector(if (startingDirection == Direction.POSITIVE) 0.0 else gameWidth - dimensions.x, 0.5) else Vector(0.5, if (startingDirection == Direction.POSITIVE) 0.0 else gameHeight - dimensions.y)

    override fun move(direction: Direction) {
        val changeScale = paddleChangeScale * if (direction == Direction.POSITIVE) 1 else -1
        if (this.axisOfMovement == Axis.X) {
            this.location.x += changeScale * gameWidth
        } else {
            this.location.y += changeScale * gameHeight
        }
    }

}

class Wall(startingDirection: Direction) : Object() {
    override val dimensions = Vector(gameWidth + 0.0, 1.0)
    override var location = Vector(0.0, if (startingDirection == Direction.POSITIVE) 0.0 else gameHeight - dimensions.y)
    override fun move(direction: Direction) {}
}