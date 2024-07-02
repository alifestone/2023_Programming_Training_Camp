let 仙人掌2: game.LedSprite = null
let 仙人掌: game.LedSprite = null
basic.clearScreen()
let block = game.createSprite(1, 4)
basic.forever(function () {
    仙人掌 = game.createSprite(4, 4)
    仙人掌2 = game.createSprite(4, 3)
    for (let index = 0; index < 5; index++) {
        basic.pause(500)
        仙人掌.change(LedSpriteProperty.X, -1)
        仙人掌2.change(LedSpriteProperty.X, -1)
        if (仙人掌.isTouching(block) || 仙人掌2.isTouching(block)) {
            game.gameOver()
        }
    }
    仙人掌.delete()
    仙人掌2.delete()
    basic.pause(randint(500, 1500))
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        block.change(LedSpriteProperty.Y, -1)
        basic.pause(50)
        block.change(LedSpriteProperty.Y, -1)
        basic.pause(50)
        block.change(LedSpriteProperty.Y, -1)
        basic.pause(400)
        block.change(LedSpriteProperty.Y, 1)
        basic.pause(50)
        block.change(LedSpriteProperty.Y, 1)
        basic.pause(50)
        block.change(LedSpriteProperty.Y, 1)
    }
})
