package com.saurabhtotey.pong

import org.w3c.dom.*
import org.w3c.dom.events.KeyboardEvent
import kotlin.browser.document
import kotlin.browser.window


/**
 * Entry point of the program
 * Constructs a game, gets the HTML canvas, and then updates the HTML canvas based on the game
 */
fun main(args: Array<String>) {
    val mainGame = Game()
    val screen = document.getElementById("screen") as HTMLCanvasElement
    screen.width = mainGame.width
    screen.height = mainGame.height
    val renderer = screen.getContext("2d") as CanvasRenderingContext2D
    renderer.fillStyle = "#ADD8E6"
    val fontSize = 50
    renderer.font = "${fontSize}px Courier New"
    renderer.textAlign = CanvasTextAlign.CENTER
    fun clearScreen() {
        val oldStyle = renderer.fillStyle
        renderer.fillStyle = "#FFF"
        renderer.fillRect(0.0, 0.0, screen.width.toDouble(), screen.height.toDouble())
        renderer.fillStyle = oldStyle
    }
    val keys = arrayOf("ArrowUp", "ArrowDown", "w", "s")
    val keyStates = hashMapOf<String, Boolean>()
    keys.forEach { keyStates[it] = false }
    val keyActions = hashMapOf(
            keys[0] to { mainGame.paddles[1].move(true) },
            keys[1] to { mainGame.paddles[1].move(false) },
            keys[2] to { mainGame.paddles[0].move(true) },
            keys[3] to { mainGame.paddles[0].move(false) }
    )
    var windowInterval = -1
    windowInterval = window.setInterval({
        if (mainGame.isFinished) {
            val x = (screen.width - mainGame.ball.width).toDouble() / 2
            val y = (screen.height - mainGame.ball.height).toDouble() / 2
            val w = mainGame.ball.width.toDouble()
            val h = mainGame.ball.height.toDouble()
            val image = document.createElement("IMG") as HTMLImageElement
            image.src = "restart.png"
            image.onload = { renderer.drawImage(image, x, y, w, h) }
            window.clearInterval(windowInterval)
        }
        keys.filter { keyStates[it]!! }.forEach { keyActions[it]!!() }
        clearScreen()
        mainGame.tick()
        renderer.fillText("${mainGame.playerTwoScore} : ${mainGame.playerOneScore}", screen.width.toDouble() / 2, fontSize.toDouble(), screen.width.toDouble())
        mainGame.allObjects.forEach { renderer.fillRect(it.x.toDouble(), it.y.toDouble(), it.width.toDouble(), it.height.toDouble()) }
    }, 1000 / 20)
    window.onkeydown = {
        if (keyStates.keys.contains((it as KeyboardEvent).key)) {
            keyStates[it.key] = true
        }
    }
    window.onkeyup = {
        if (keyStates.keys.contains((it as KeyboardEvent).key)) {
            keyStates[it.key] = false
        }
    }
}
