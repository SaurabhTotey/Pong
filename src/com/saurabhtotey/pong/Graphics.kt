package com.saurabhtotey.pong

import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLBodyElement
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.document
import kotlin.math.PI

val body = document.getElementById("body") as HTMLBodyElement
val screen = document.getElementById("screen") as HTMLCanvasElement
val renderer = screen.getContext("2d") as CanvasRenderingContext2D
lateinit var game: Game

fun main(args: Array<String>) {
    game = Game(1, 1)
    fun fitScreenToBod() {
        screen.width = body.clientWidth
        screen.height = body.clientHeight
        draw()
        //TODO scale screen to be centered and have the correct aspect ratio or something
        /*val aspects = Vector(gameWidth / 100, gameHeight / 100) //TODO instead of dividing by 100, divide by GCF
        val x: Int
        val y: Int
        if (body.clientWidth / aspects.x > body.clientHeight / aspects.y) {
            x = gameHeight / body.clientHeight * (body.clientWidth - aspects.x * body.clientHeight / aspects.y) / 2
            screen.height = body.clientHeight
        } else {
            y = gameWidth / body.clientWidth * (body.clientHeight - aspects.y * body.clientWidth / aspects.x) / 2
            screen.width = body.clientWidth
        }*/
    }
    body.onresize = { fitScreenToBod() }
    fitScreenToBod()
    draw()
}

fun draw() {
    val scale = Vector(screen.width.toDouble() / gameWidth, screen.height.toDouble() / gameHeight)
    renderer.beginPath()
    renderer.arc(game.ball.location.x * scale.x, game.ball.location.y * scale.y, game.ball.radius, 0.0, 2 * PI)
    renderer.stroke()
}