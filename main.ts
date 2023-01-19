I2C_LCD1602.LcdInit(30)
let estado_pulsador = false
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        while (input.buttonIsPressed(Button.A)) {
            basic.pause(20)
        }
    }
})
