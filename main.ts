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
    soundExpression.hello.play()
    basic.showIcon(IconNames.Happy)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    counter = 0
    basic.showNumber(counter)
})
let counter = 0
basic.showString("HELLO")
soundExpression.hello.play()
basic.showIcon(IconNames.Happy)
counter = 0
basic.showNumber(counter)
