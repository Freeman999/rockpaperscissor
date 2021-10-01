//  Punkte mit Variable "score" sammeln und bei Schütteln score anzeigen
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showIcon(IconNames.Happy)
    for (let index = 0; index < 2; index++) {
        music.playMelody("G B A G C5 B A B ", 500)
    }
    //  soll anzeigen, wieviele Punkte und +1
    //  
    basic.showString("hi!")
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    basic.clearScreen()
    score = 0
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
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showIcon(IconNames.Sad)
    for (let index2 = 0; index2 < 1; index2++) {
        music.playMelody("F G E F D E C D ", 100)
    }
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
basic.pause(1000)
basic.showLeds(`
    . . . . .
    . # . # .
    # . . . #
    . # . # .
    . . . . .
    `)
