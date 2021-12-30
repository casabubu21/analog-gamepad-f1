radio.setGroup(8)
pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
let count = 0
let front = false
let back = false
let left = false
let right = false
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        front = true
        count += 1
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        back = true
        count += 1
    } else if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        left = true
        count += 1
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        right = true
        count += 1
    }
    led.plotBarGraph(
    count,
    10000
    )
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
    }
    basic.pause(300)
})
