package com.saurabhtotey.pong

/**
 * The class that handles running the actual game that is played
 */
class Game {

    val width = 480 //The game's resolution width; how wide the HTML canvas will be
    val height = 320 //The game's resolution height; how tall the HTML canvas will be
    var playerOneScore = 0 //The score of the first player
    var playerTwoScore = 0 //The score of the second player
    var lastScorerer = 0 //The player who last scored a point; ball goes towards them
    lateinit var ball: Ball //The game's ball
    val paddles = Array(2, { i -> Paddle(this.width, this.height, i) }) //Both of the game's paddles
    val walls = Array(4, { i -> Wall(this.width, this.height, i) }) //All 4 of the game's walls
    var isFinished = false //Returns whether the game is finished; game is finished once ball stops moving
        get() = this.ball.speed == 0.toFloat()
    val allObjects
        get() = arrayOf(paddles[0], paddles[1], ball, walls[0], walls[1], walls[2], walls[3])

    /**
     * When the game is created, it gets started
     */
    init {
        this.start()
    }

    /**
     * Creates the game's ball, adjusts the paddle locations, and starts the game again, but maintains score
     */
    fun start() {
        this.paddles.forEach { it.adjustPosition() }
        this.ball = Ball(this.width, this.height, lastScorerer, this.height.toFloat() / 40)

    }

    /**
     * Moves the game forward by a tick
     * Updates locations, handles collisions, and in the event that the game is finished, will update scores
     */
    fun tick() {
        if (this.isFinished) {
            return
        }
        this.allObjects.forEach { it.update() }
        this.allObjects.forEach { obj1 -> this.allObjects.filter { obj2 -> obj1.collides(obj2) && obj1 != obj2}.forEach { obj2 -> obj1.onCollide(obj2) } }
        if (this.isFinished) {
            val ballCollidedObjects = this.allObjects.filter { it.collides(this.ball) }
            for (collidedObject in ballCollidedObjects) {
                if (collidedObject !is Wall) {
                    continue
                }
                if (collidedObject.count == 2) {
                    lastScorerer = 0
                    playerOneScore++
                }
                if (collidedObject.count == 3) {
                    lastScorerer = 1
                    playerTwoScore++
                }
            }
        }
    }

}
