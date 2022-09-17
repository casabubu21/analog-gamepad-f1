let JoyX = 0
radio.setGroup(8)
pins.setPull(DigitalPin.P8, PinPullMode.PullNone)
pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
let _321via = false
let stop = false
let Turbo = false
let countRadio = false
let front = false
let back = false
let left = false
let right = false
basic.forever(function () {
    JoyX = pins.analogReadPin(AnalogPin.P1)
    serial.writeNumber(JoyX)
    serial.writeString("")
    basic.pause(1000)
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        front = true
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        back = true
    } else if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        left = true
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        right = true
    } else if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        _321via = true
    }
    if (input.buttonIsPressed(Button.A)) {
        stop = true
    }
    if (input.buttonIsPressed(Button.B)) {
        Turbo = true
    }
})
basic.forever(function () {
    if (front == true) {
        radio.sendValue("F", 0)
        front = false
    } else if (back == true) {
        radio.sendValue("B", 0)
        back = false
    } else if (left == true) {
        radio.sendValue("L", 0)
        left = false
    } else if (right == true) {
        radio.sendValue("R", 0)
        right = false
    } else if (stop == true) {
        radio.sendValue("S", 0)
        stop = false
    } else if (Turbo == true) {
        radio.sendValue("T", 0)
        Turbo = false
    }
    basic.pause(100)
})
basic.forever(function () {
    if (_321via == true) {
        basic.showString("3")
        basic.pause(500)
        basic.clearScreen()
        basic.showString("2")
        basic.pause(500)
        basic.clearScreen()
        basic.showString("1")
        basic.pause(500)
        basic.clearScreen()
        basic.showString("VIA")
        basic.pause(500)
        basic.clearScreen()
        _321via = false
    }
})
