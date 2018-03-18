package com.saurabhtotey.pong

import org.w3c.dom.*
import org.w3c.dom.events.Event
import org.w3c.dom.events.KeyboardEvent
import org.w3c.dom.events.MouseEvent
import kotlin.browser.document
import kotlin.browser.window
import kotlin.math.abs


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
    val keys = arrayOf("ArrowUp", "ArrowDown", "w", "s")
    val keyStates = hashMapOf<String, Boolean>()
    keys.forEach { keyStates[it] = false }
    val keyActions = hashMapOf(
            keys[0] to { mainGame.paddles[1].also { it.idleTicks = 0 }.move(true) },
            keys[1] to { mainGame.paddles[1].also { it.idleTicks = 0 }.move(false) },
            keys[2] to { mainGame.paddles[0].also { it.idleTicks = 0 }.move(true) },
            keys[3] to { mainGame.paddles[0].also { it.idleTicks = 0 }.move(false) }
    )
    val centerX = (screen.width - mainGame.ball.width).toDouble() / 2
    val centerY = (screen.height - mainGame.ball.height).toDouble() / 2
    val centerW = mainGame.ball.width.toDouble()
    val centerH = mainGame.ball.height.toDouble()
    window.setInterval({
        if (mainGame.isFinished) {
            val image = document.createElement("IMG") as HTMLImageElement
            image.src = "restart.png"
            renderer.fillRect(centerX, centerY, centerW, centerH)
            image.onload = { renderer.drawImage(image, centerX, centerY, centerW, centerH) }
        } else {
            keys.filter { keyStates[it]!! }.forEach { keyActions[it]!!() }
            mainGame.paddles.filter { it.isCpu }.forEach {
                val paddleCenter = it.y + it.height / 2
                val ballCenter = mainGame.ball.y + mainGame.ball.height / 2
                when {
                    abs(paddleCenter - ballCenter) < screen.height / 10 -> { /*No action taken*/
                    }
                    paddleCenter > ballCenter -> it.move(true)
                    paddleCenter < ballCenter -> it.move(false)
                }
            }
            renderer.clearRect(0.0, 0.0, screen.width.toDouble(), screen.height.toDouble())
            mainGame.tick()
            renderer.fillText("${mainGame.playerTwoScore} : ${mainGame.playerOneScore}", screen.width.toDouble() / 2, fontSize.toDouble(), screen.width.toDouble())
            mainGame.allObjects.forEach { renderer.fillRect(it.x.toDouble(), it.y.toDouble(), it.width.toDouble(), it.height.toDouble()) }
        }
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
    screen.onclick = {
        it as MouseEvent
        if (mainGame.isFinished && it.offsetX > centerX && it.offsetX < centerX + centerW && it.offsetY > centerY && it.offsetY < centerY + centerH) {
            mainGame.start()
        }
    }
    var paddleToDrag: Paddle? = null
    var lastMouseY: Double? = null
    val mousePressed: (Event) -> Unit = {
        var offsetX: Double
        var offsetY: Double
        try {
            it as MouseEvent
            offsetX = it.offsetX
            offsetY = it.offsetY
        } catch (e: ClassCastException) {
            offsetX = it.asDynamic().targetTouches[0].pageX - screen.getBoundingClientRect().x
            offsetY = it.asDynamic().targetTouches[0].pageY - screen.getBoundingClientRect().y
        }
        paddleToDrag = mainGame.paddles.filter { paddle ->
            offsetX > paddle.x && offsetX < paddle.x + paddle.width &&
                    offsetY > paddle.y && offsetY < paddle.y + paddle.height
        }.elementAtOrNull(0)
        lastMouseY = offsetY
    }
    val mouseReleased: (Event) -> Unit = {
        lastMouseY = null
        paddleToDrag = null
    }
    val mouseMoved: (Event) -> Unit = {
        val offsetY = try {
            it as MouseEvent
            it.offsetY
        } catch (e: ClassCastException) {
            (it.asDynamic().targetTouches[0].pageY - screen.getBoundingClientRect().y) as Double
        }
        if (paddleToDrag != null) {
            paddleToDrag!!.y += (offsetY - lastMouseY!!).toFloat()
            paddleToDrag!!.idleTicks = 0
            lastMouseY = offsetY
        }
    }
    screen.addEventListener("mousedown", mousePressed)
    screen.addEventListener("touchstart", mousePressed)
    window.addEventListener("mouseup", mouseReleased)
    window.addEventListener("touchend", mouseReleased)
    screen.addEventListener("mousemove", mouseMoved)
    screen.addEventListener("touchmove", mouseMoved)
}
