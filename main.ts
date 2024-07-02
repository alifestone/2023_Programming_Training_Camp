let old: game.LedSprite = null
let block: game.LedSprite = null
let _this = 0
basic.clearScreen()
game.setScore(0)
basic.forever(function () {
    _this = 0
    block = game.createSprite(randint(0, 4), 0)
    old = game.createSprite(6, 6)
    while (block.get(LedSpriteProperty.Y) < 4) {
        basic.pause(500)
        block.change(LedSpriteProperty.Y, 1)
        if (block.isTouching(old)) {
            game.gameOver()
        }
    }
    old = game.createSprite(block.get(LedSpriteProperty.X), block.get(LedSpriteProperty.Y))
})
