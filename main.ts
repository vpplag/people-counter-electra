input.onButtonPressed(Button.A, function () {
    if (counter > 0) {
        counter += -1
        basic.showNumber(counter)
    } else {
        counter = 0
        basic.showNumber(counter)
    }
})
input.onButtonPressed(Button.B, function () {
    counter += 1
    basic.showNumber(counter)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("HELLO")
    basic.showIcon(IconNames.Happy)
    soundExpression.happy.play()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    counter = 0
    basic.showNumber(counter)
})
let counter = 0
counter = 0
basic.showNumber(counter)
