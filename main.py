old: game.LedSprite = None
block: game.LedSprite = None
_this = 0
basic.clear_screen()
game.set_score(0)

def on_forever():
    global _this, block, old
    _this = 0
    block = game.create_sprite(randint(0, 4), 0)
    old = game.create_sprite(6, 6)
    while block.get(LedSpriteProperty.Y) < 4:
        basic.pause(500)
        block.change(LedSpriteProperty.Y, 1)
        if block.is_touching(old):
            game.game_over()
    old = game.create_sprite(block.get(LedSpriteProperty.X),
        block.get(LedSpriteProperty.Y))
basic.forever(on_forever)
