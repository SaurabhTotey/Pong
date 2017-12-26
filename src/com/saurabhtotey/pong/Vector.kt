package com.saurabhtotey.pong

import kotlin.math.sqrt

class Vector<T>(var x: T, var y: T) {
    var magnitude: T
        get() = sqrt(x as Double * x as Double + y as Double * y as Double) as T
        set(value) {
            val scalarChange = value as Double / this.magnitude as Double
            x = (x as Double * scalarChange) as T
            y = (y as Double * scalarChange) as T
        }
}