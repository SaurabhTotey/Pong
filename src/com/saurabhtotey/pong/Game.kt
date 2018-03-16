package com.saurabhtotey.pong

/**
 * The class that handles running the actual game that is played
 */
class Main {

    val width = 480 //The game's resolution width; how wide the HTML canvas will be
    val height = 320 //The game's resolution height; how tall the HTML canvas will be
    val ball = Ball(this.width, this.height, 0, 5.toFloat()) //The game's ball
    val paddles = Array(2, { i -> Paddle(this.width, this.height, i) }) //Both of the game's paddles
    val walls = Array(4, { i -> Wall(this.width, this.height, i) }) //All 4 of the game's walls
    var isFinished = false //Returns whether the game is finished; game is finished once ball stops moving
        get() = this.ball.speed == 0.toFloat()

    /**
     * Moves the game forward by a tick
     */
    fun tick() {
        if (this.isFinished) {
            return
        }
        this.paddles.forEach { it.update() }
        this.ball.update()
    }

}

/**
 * Entry point of the program
 */
fun main(args: Array<String>) {

}
