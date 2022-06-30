input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    Sí += 1
    basic.showNumber(Sí)
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("\"Mostrar la pregunta\"")
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Yes)
    basic.showNumber(Sí)
    basic.pause(1000)
    basic.showIcon(IconNames.No)
    basic.showNumber(No)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    No += 1
    basic.showNumber(No)
    basic.pause(1000)
    basic.clearScreen()
})
let No = 0
let Sí = 0
basic.showIcon(IconNames.Happy)
Sí = 0
No = 0
