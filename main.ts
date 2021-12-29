radio.setGroup(8)
pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        radio.sendValue("F", 0)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        radio.sendValue("B", 0)
    } else if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        radio.sendValue("L", 0)
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        radio.sendValue("R", 0)
    }
})
