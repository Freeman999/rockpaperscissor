def on_gesture_screen_down():
    basic.show_string("score:" + str(score))
    if score >= 0:
        basic.show_icon(IconNames.HAPPY)
    else:
        basic.show_icon(IconNames.CONFUSED)
input.on_gesture(Gesture.SCREEN_DOWN, on_gesture_screen_down)

def on_button_pressed_a():
    global score
    score += 1
    basic.show_icon(IconNames.HAPPY)
    pins.analog_set_pitch_volume(82)
    for index in range(2):
        music.play_melody("G B A G C5 B A B ", 500)
    basic.show_string("" + str((score - 1)) + ">" + str(score))
    if score > 2:
        basic.show_string("win!")
        for index2 in range(5):
            music.play_melody("G B A G C5 B A B ", 500)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global hand
    basic.clear_screen()
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
    basic.pause(2000)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global score
    score += -1
    basic.show_icon(IconNames.SAD)
    for index3 in range(1):
        music.play_melody("F G E F D E C D ", 100)
    basic.show_string("" + str((score + 1)) + ">" + str(score))
    if score < -2:
        basic.show_string("looser!")
        for index4 in range(3):
            music.play_melody("F G E F D E C D ", 100)
input.on_button_pressed(Button.B, on_button_pressed_b)

hand = 0
score = 0
basic.clear_screen()
basic.show_leds("""
    # . # . #
    # . # . #
    # # # . #
    # . # . #
    # . # . #
    """)
score = 0
basic.pause(1000)
basic.show_leds("""
    . . . . .
    . # . # .
    # . . . #
    . # . # .
    . . . . .
    """)