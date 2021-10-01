# Punkte mit Variable "score" sammeln und bei Schütteln score anzeigen

def on_button_pressed_a():
    basic.show_icon(IconNames.HAPPY)
    for index in range(2):
        music.play_melody("G B A G C5 B A B ", 500)
    # soll anzeigen, wieviele Punkte und +1
    # 
    basic.show_string("hi!")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global score, hand
    basic.clear_screen()
    score = 0
    music.play_tone(262, music.beat(BeatFraction.WHOLE))
    basic.pause(1000)
    music.play_tone(262, music.beat(BeatFraction.WHOLE))
    basic.pause(1000)
    music.play_melody("G E F D C5 - - - ", 170)
    hand = 0
    hand = randint(0, 2)
    if hand == 0:
        basic.show_leds("""
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            """)
    if hand == 1:
        basic.show_icon(IconNames.SCISSORS)
    if hand == 2:
        basic.show_leds("""
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            """)
    basic.pause(5000)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_icon(IconNames.SAD)
    for index2 in range(1):
        music.play_melody("F G E F D E C D ", 100)
input.on_button_pressed(Button.B, on_button_pressed_b)

hand = 0
score = 0
basic.show_leds("""
    # . # . #
    # . # . #
    # # # . #
    # . # . #
    # . # . #
    """)
basic.pause(1000)
basic.show_leds("""
    . . . . .
    . # . # .
    # . . . #
    . # . # .
    . . . . .
    """)

    