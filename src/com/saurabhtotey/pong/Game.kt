package com.saurabhtotey.pong

import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.document
import kotlin.js.Math.random
import kotlin.math.PI

val screen = document.getElementById("screen") as HTMLCanvasElement
val renderer = screen.getContext("2d") as CanvasRenderingContext2D
lateinit var ball: Ball

fun main(args: Array<String>) {
    makeBall()
    draw()
}

fun makeBall() {
    ball = Ball(25.0, Vector(if (random() < 0.5) 1.0 else -1.0, 0.0), Vector(0.5 * screen.width, 0.5 * screen.height))
}

fun draw() {
    renderer.beginPath()
    renderer.arc(ball.location.x, ball.location.y, ball.radius, 0.0, 2 * PI)
    renderer.stroke()
}

fun getCollisionAngleBetween(ball: Ball, paddle: Paddle): Int? {
    TODO("implement")
}