input.onButtonPressed(Button.A, function () {
    hand += 1
    basic.showIcon(IconNames.Happy)
    for (let index = 0; index < 2; index++) {
        music.playMelody("G B A G C5 B A B ", 500)
    }
    basic.showString("" + (score - 1) + "->" + score)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("score=" + score)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(1000)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(1000)
    music.playMelody("G E F D C5 - - - ", 170)
    hand = 0
    hand = randint(0, 2)
    if (hand == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    if (hand == 1) {
        basic.showIcon(IconNames.Scissors)
    }
    if (hand == 2) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
    basic.pause(5000)
})
input.onButtonPressed(Button.B, function () {
    hand += -1
    basic.showIcon(IconNames.Sad)
    for (let index = 0; index < 1; index++) {
        music.playMelody("F G E F D E C D ", 100)
    }
    basic.showString("" + (score + 1) + "->" + score)
})
let hand = 0
let score = 0
basic.showLeds(`
    # . # . #
    # . # . #
    # # # . #
    # . # . #
    # . # . #
    `)
score = 0
basic.pause(1000)
basic.showLeds(`
    . . . . .
    . # . # .
    # . . . #
    . # . # .
    . . . . .
    `)
