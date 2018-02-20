package com.saurabhtotey.pong

val aspectRatio = Vector(16, 9)
const val scaling = 100
val logicalCoordinates = Vector(aspectRatio.x * scaling, aspectRatio.y * scaling)

fun getCollisionAngleBetween(ball: Ball, paddle: Paddle): Double? {
    return null
}

class Game(val computerOpponent: Boolean) {

    lateinit var ball: Ball
    val paddles = arrayListOf<Paddle>()
    var p1Score = 0
    var p2Score = 0
    val isFinished
        get() = p1Score == 10 || p2Score == 10

    init {
        makeBall()
    }

    fun tick() {
        if (this.isFinished){
            return
        }
        this.ball.move()
        if (this.paddles.mapNotNull { getCollisionAngleBetween(this.ball, it) }.isNotEmpty()) {
            this.ball.velocity.x = -this.ball.velocity.x
        }
        if (this.ball.location.y - this.ball.radius < 0 || this.ball.location.y + this.ball.radius > logicalCoordinates.y) {
            this.ball.velocity.y = -this.ball.velocity.y
        }
    }

    fun makeBall() {
        ball = Ball(50.0, Vector(0.0, 0.0))
    }

}
