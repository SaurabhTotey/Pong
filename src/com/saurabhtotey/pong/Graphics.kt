package com.saurabhtotey.pong

import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLBodyElement
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.document

val body = document.getElementById("body") as HTMLBodyElement
val screen = document.getElementById("screen") as HTMLCanvasElement
val renderer = screen.getContext("2d") as CanvasRenderingContext2D
lateinit var referenceDimension: String
lateinit var game: Game

fun main(args: Array<String>) {
    game = Game(true)
    body.onresize = {
        screen.width = body.clientWidth
        screen.height = body.clientHeight
        referenceDimension = if (screen.height / aspectRatio.y < screen.width / aspectRatio.x) "y" else "x"
        null
    }
    while (!game.isFinished) {
        game.tick()
        //TODO: draw
    }
}
