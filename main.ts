radio.setGroup(8)
pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
let count = 0
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        radio.sendValue("F", 0)
        count += 1
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        radio.sendValue("B", 0)
        count += 1
    } else if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        radio.sendValue("L", 0)
        count += 1
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        radio.sendValue("R", 0)
        count += 1
    }
    led.plotBarGraph(
    count,
    10000
    )
})
basic.forever(function () {
    if (true) {
        radio.sendValue("F", 0)
        count += 1
    } else if (false) {
        radio.sendValue("B", 0)
        count += 1
    } else if (false) {
        radio.sendValue("L", 0)
        count += 1
    } else if (false) {
        radio.sendValue("R", 0)
        count += 1
    }
})
