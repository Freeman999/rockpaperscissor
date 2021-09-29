input.onButtonPressed(Button.B, function () {
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
