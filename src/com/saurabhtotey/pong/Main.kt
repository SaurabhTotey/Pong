package com.saurabhtotey.pong

import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
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
    fun clearScreen() {
        val oldStyle = renderer.fillStyle
        renderer.fillStyle = "#000"
        renderer.fillRect(0.0, 0.0, screen.width.toDouble(), screen.height.toDouble())
        renderer.fillStyle = oldStyle
    }
    var windowInterval = -1
    windowInterval = window.setInterval({
        if (mainGame.isFinished) {
            window.clearInterval(windowInterval)
        }
        clearScreen()
        mainGame.tick()
        mainGame.allObjects.forEach { renderer.fillRect(it.x.toDouble(), it.y.toDouble(), it.width.toDouble(), it.height.toDouble()) }
    }, 1000 / 20)
    window.onkeydown = {
        when ((it as KeyboardEvent).key) {
            "ArrowUp" -> {
                mainGame.paddles[1].move(true)
            }
            "ArrowDown" -> {
                mainGame.paddles[1].move(false)
            }
            "w" -> {
                mainGame.paddles[0].move(true)
            }
            "s" -> {
                mainGame.paddles[0].move(false)
            }
        }
    }
}
