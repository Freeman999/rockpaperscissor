input.onGesture(Gesture.ScreenDown, function () {
    basic.showString("score:" + score)
    if (score >= 0) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Confused)
    }
})
input.onButtonPressed(Button.A, function () {
    score += 1
    basic.showIcon(IconNames.Happy)
    pins.analogSetPitchVolume(82)
    for (let index = 0; index < 2; index++) {
        music.playMelody("G B A G C5 B A B ", 500)
    }
    basic.showString("" + (score - 1) + "->" + score)
    if (score > 2) {
        basic.showString("win!")
        for (let index = 0; index < 5; index++) {
            music.playMelody("G B A G C5 B A B ", 500)
        }
    }
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
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    score += -1
    basic.showIcon(IconNames.Sad)
    for (let index = 0; index < 1; index++) {
        music.playMelody("F G E F D E C D ", 100)
    }
    basic.showString("" + (score + 1) + "->" + score)
    if (score < -2) {
        basic.showString("looser!")
        for (let index = 0; index < 3; index++) {
            music.playMelody("F G E F D E C D ", 100)
        }
    }
})
let hand = 0
let score = 0
basic.clearScreen()
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
