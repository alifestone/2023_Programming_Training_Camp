input.onButtonPressed(Button.A, function () {
    速度 = -2
    while (速度 < 0) {
        block.change(LedSpriteProperty.Y, 速度)
        速度 += 1
        basic.pause(130)
    }
    while (block.get(LedSpriteProperty.Y) < 4) {
        block.change(LedSpriteProperty.Y, 速度)
        速度 += 1
        basic.pause(130)
    }
})
input.onButtonPressed(Button.B, function () {
    while (true) {
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
    }
})
let 仙人掌2: game.LedSprite = null
let 仙人掌: game.LedSprite = null
let 速度 = 0
let block: game.LedSprite = null
basic.clearScreen()
block = game.createSprite(1, 4)
