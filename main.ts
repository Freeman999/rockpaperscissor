input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        music.playMelody("G B A G C5 B A B ", 500)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(1000)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(1000)
    music.playMelody("G E F D C5 - - - ", 170)
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
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    } else {
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
    for (let index = 0; index < 1; index++) {
        music.playMelody("F G E F D E C D ", 100)
    }
})
let hand = 0
basic.showLeds(`
    # . # . #
    # . # . #
    # # # . #
    # . # . #
    # . # . #
    `)
basic.pause(1000)
basic.showIcon(IconNames.ArrowEast)
