function JouerSon (num: number) {
    if (num == 0) {
        music.playMelody("C5 B A G F E D C ", 120)
    } else if (num == 1) {
        music.playMelody("C D E F G A B C5 ", 120)
    } else if (num == 2) {
        music.playMelody("E B C5 A B G A F ", 120)
    } else if (num == 3) {
        music.playMelody("A F E F D G E F ", 120)
    } else if (num == 4) {
        music.playMelody("C5 A B G A F G E ", 120)
    } else if (num == 5) {
        music.playMelody("G B A G C5 B A B ", 120)
    } else if (num == 6) {
        music.playMelody("B A G A G F A C5 ", 120)
    } else if (num == 7) {
        music.playMelody("G F G A - F E D ", 120)
    } else if (num == 8) {
        music.playMelody("E D G F B A C5 B ", 120)
    } else {
        music.playMelody("C5 G B A F A C5 B ", 120)
    }
}
input.onButtonPressed(Button.A, function () {
    if (I < 9) {
        I += 1
    } else {
        I = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (I > 0) {
        I += -1
    } else {
        I = 9
    }
})
input.onGesture(Gesture.Shake, function () {
    I = randint(0, 9)
    JouerSon(I)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    JouerSon(I)
})
let I = 0
I = 0
basic.forever(function () {
    basic.showNumber(I)
})
