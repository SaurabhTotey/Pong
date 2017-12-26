package com.saurabhtotey.pong

import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.document
import kotlin.math.PI

val screen = document.getElementById("screen") as HTMLCanvasElement
val renderer = screen.getContext("2d") as CanvasRenderingContext2D
lateinit var game: Game

fun main(args: Array<String>) {
    game = Game(1, 1)
}

fun draw() {
    //TODO make canvas viewport centered and scaled version of dimensions of gameWidth and gameHeight
    renderer.beginPath()
    renderer.arc(game.ball.location.x, game.ball.location.y, game.ball.radius, 0.0, 2 * PI)
    renderer.stroke()
}