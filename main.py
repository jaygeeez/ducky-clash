@namespace
class SpriteKind:
    Heart = SpriteKind.create()
    Title = SpriteKind.create()

def on_up_pressed():
    if Ducky.tile_kind_at(TileDirection.TOP, assets.tile("""
        myTile5
    """)):
        tiles.set_current_tilemap(tilemap("""
            level2
        """))
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_b_pressed():
    global projectile
    if info.score() > 0:
        music.play(music.melody_playable(music.pew_pew),
            music.PlaybackMode.UNTIL_DONE)
        if direction == 100:
            projectile = sprites.create_projectile_from_sprite(img("""
                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . 2 2 2 2 . . . 
                                    . . . . . . . 2 2 1 1 1 1 2 . . 
                                    . . . . 2 2 3 3 1 1 1 1 1 1 . . 
                                    . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
                                    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                                    . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
                                    . . . . . . 2 2 3 1 1 1 1 2 . . 
                                    . . . . . . . . . 2 2 2 2 . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . .
                """),
                Ducky,
                250,
                0)
            animation.run_image_animation(projectile,
                [img("""
                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                                        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
                                        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                                        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                                        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
                                        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . .
                    """),
                    img("""
                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . 2 2 2 2 . . . 
                                        . . . . . . . 2 2 1 1 1 1 2 . . 
                                        . . . . 2 2 3 3 1 1 1 1 1 1 . . 
                                        . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
                                        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                                        . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
                                        . . . . . . 2 2 3 1 1 1 1 2 . . 
                                        . . . . . . . . . 2 2 2 2 . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . .
                    """),
                    img("""
                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . 1 1 3 . . . . . . 
                                        . . . . . . 1 3 . 3 3 . . . . . 
                                        . . . . . . 1 . . . 3 2 2 3 . . 
                                        . . . . . 1 3 . . . 2 2 1 3 3 . 
                                        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
                                        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
                                        . . 1 1 1 1 3 1 1 1 1 1 1 1 3 . 
                                        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
                                        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
                                        . . . . . 1 3 . . . 2 2 1 3 3 . 
                                        . . . . . . 1 . . . 3 2 2 3 . . 
                                        . . . . . . 1 3 . 3 3 . . . . . 
                                        . . . . . . . 1 1 3 . . . . . . 
                                        . . . . . . . . . . . . . . . .
                    """),
                    img("""
                        . . . . . . . . . . . . . . . . 
                                        . . . . . 3 3 . . . 3 . . . . . 
                                        . . . . 3 3 . . . . 3 3 . . . . 
                                        . . . . 3 . . . . . . 3 3 . . . 
                                        . . . . . . . . . . . . 3 . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . 3 . . . . . . . . . . . . . 
                                        . . 3 . . . . . . . . . . 3 . . 
                                        . . 3 . . . . . . . . . . 3 . . 
                                        . . . . . . . . . . . . . 3 . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . 3 . . . . . . . . . . . . 
                                        . . . 3 3 . . . . . . 3 . . . . 
                                        . . . . 3 3 . . . . 3 3 . . . . 
                                        . . . . . . . . . 3 3 . . . . . 
                                        . . . . . . . . . . . . . . . .
                    """)],
                100,
                True)
        else:
            projectile = sprites.create_projectile_from_sprite(img("""
                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . 2 2 2 2 . . . . . . . . . 
                                    . . 2 1 1 1 1 2 2 . . . . . . . 
                                    . . 1 1 1 1 1 1 3 3 2 2 . . . . 
                                    . . 1 1 1 1 1 1 1 1 3 3 3 3 . . 
                                    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                                    . . 1 1 1 1 1 1 1 3 2 2 3 3 . . 
                                    . . 2 1 1 1 1 3 2 2 . . . . . . 
                                    . . . 2 2 2 2 . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . .
                """),
                Ducky,
                -250,
                0)
            animation.run_image_animation(projectile,
                [img("""
                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                                        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
                                        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                                        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                                        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
                                        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . .
                    """),
                    img("""
                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . 2 2 2 2 . . . . . . . . . 
                                        . . 2 1 1 1 1 2 2 . . . . . . . 
                                        . . 1 1 1 1 1 1 3 3 2 2 . . . . 
                                        . . 1 1 1 1 1 1 1 1 3 3 3 3 . . 
                                        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                                        . . 1 1 1 1 1 1 1 3 2 2 3 3 . . 
                                        . . 2 1 1 1 1 3 2 2 . . . . . . 
                                        . . . 2 2 2 2 . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . .
                    """),
                    img("""
                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . 3 1 1 . . . . . . . 
                                        . . . . . 3 3 . 3 1 . . . . . . 
                                        . . 3 2 2 3 . . . 1 . . . . . . 
                                        . 3 3 1 2 2 . . . 3 1 . . . . . 
                                        . 3 1 1 1 3 2 2 . 3 1 . . . . . 
                                        . 3 1 1 1 3 3 3 3 3 1 2 2 2 . . 
                                        . 3 1 1 1 1 1 1 1 3 1 1 1 1 . . 
                                        . 3 1 1 1 3 3 3 3 3 1 2 2 2 . . 
                                        . 3 1 1 1 3 2 2 . 3 1 . . . . . 
                                        . 3 3 1 2 2 . . . 3 1 . . . . . 
                                        . . 3 2 2 3 . . . 1 . . . . . . 
                                        . . . . . 3 3 . 3 1 . . . . . . 
                                        . . . . . . 3 1 1 . . . . . . . 
                                        . . . . . . . . . . . . . . . .
                    """),
                    img("""
                        . . . . . . . . . . . . . . . . 
                                        . . . . . 3 . . . 3 3 . . . . . 
                                        . . . . 3 3 . . . . 3 3 . . . . 
                                        . . . 3 3 . . . . . . 3 . . . . 
                                        . . . 3 . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . 3 . . 
                                        . . 3 . . . . . . . . . . 3 . . 
                                        . . 3 . . . . . . . . . . 3 . . 
                                        . . 3 . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . 3 . . . 
                                        . . . . 3 . . . . . . 3 3 . . . 
                                        . . . . 3 3 . . . . 3 3 . . . . 
                                        . . . . . 3 3 . . . . . . . . . 
                                        . . . . . . . . . . . . . . . .
                    """)],
                100,
                True)
        info.change_score_by(-1)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_overlap_tile(sprite, location):
    if info.life() >= 20:
        game.game_over(True)
    else:
        Ducky.say_text("Not enough hearts :(", 2000, False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite2, location2):
    sprite2.say_text("^", 100, False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        bottom door
    """),
    on_overlap_tile2)

def on_a_pressed():
    global double_jump
    if Ducky.is_hitting_tile(CollisionDirection.BOTTOM):
        Ducky.vy = -150
    elif Ducky.is_hitting_tile(CollisionDirection.RIGHT):
        Ducky.vy = -150
    elif Ducky.is_hitting_tile(CollisionDirection.LEFT):
        Ducky.vy = -150
    elif double_jump == True:
        Ducky.start_effect(effects.bubbles, 100)
        Ducky.start_effect(effects.bubbles, 200)
        Ducky.start_effect(effects.bubbles, 500)
        Ducky.vy = -150
        double_jump = False
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_left_pressed():
    global direction
    direction = -100
    Ducky.set_image(img("""
        . . . b 5 b . . . . . . . . . . 
                . . . . b 5 b . . . . . . . . . 
                . . . . b b b b b b . . . . . . 
                . . . b 5 5 5 5 5 b b . . . . . 
                . . f d 5 5 f 1 d 5 b b . . . . 
                . . c 4 d 5 f f 1 5 5 b . . . . 
                . . 4 4 d d b f d 5 5 b . . . . 
                b 4 4 4 4 4 5 5 5 5 5 d b b b . 
                . b 4 4 4 4 4 5 5 d b b d d d b 
                . . b 5 5 5 5 5 5 b 5 5 5 d b b 
                . b 5 5 5 5 5 5 d 5 5 5 5 c d c 
                . b 5 5 5 5 5 5 b 5 5 d c d b c 
                . b d 5 5 5 5 5 d b c c d d c . 
                . . b b 5 5 5 d d d d d b c . . 
                . . . b b c c c c c c c c . . . 
                . . . . . . . . . . . . . . . .
    """))
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_on_overlap(sprite3, otherSprite):
    music.play(music.melody_playable(music.magic_wand),
        music.PlaybackMode.IN_BACKGROUND)
    sprites.destroy(otherSprite, effects.hearts, 100)
    info.change_life_by(1)
sprites.on_overlap(SpriteKind.player, SpriteKind.Heart, on_on_overlap)

def on_overlap_tile3(sprite4, location3):
    tiles.place_on_tile(sprite4, tiles.get_tile_location(1, 30))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile3
    """),
    on_overlap_tile3)

def on_overlap_tile4(sprite5, location4):
    sprites.destroy(sprite5, effects.blizzard, 100)
scene.on_overlap_tile(SpriteKind.enemy,
    assets.tile("""
        myTile3
    """),
    on_overlap_tile4)

def on_on_overlap2(sprite6, otherSprite2):
    sprites.destroy(otherSprite2)
sprites.on_overlap(SpriteKind.enemy, SpriteKind.food, on_on_overlap2)

def on_hit_wall(sprite7, location5):
    if not (sprite7.is_hitting_tile(CollisionDirection.BOTTOM)):
        if sprite7.is_hitting_tile(CollisionDirection.RIGHT):
            sprite7.set_velocity(-50, 0)
            animation.run_image_animation(sprite7,
                [img("""
                        . . . . . . . . . . . . . . . . 
                                        . . . . c c c c . . . . . . . . 
                                        . . c c 4 4 4 4 c c . . . . . . 
                                        . c 4 4 4 4 4 4 4 4 c . . . . . 
                                        c 4 4 4 4 4 1 f 4 4 4 c . . . . 
                                        c 4 4 4 4 4 f f 4 4 4 4 c . . . 
                                        c 4 4 4 4 4 4 4 4 4 4 4 c . . . 
                                        c c b b 1 b 4 4 4 4 4 4 d c . . 
                                        c 4 3 3 3 4 4 4 4 4 d d d c . . 
                                        . b 4 4 4 4 4 4 4 4 d d d c . . 
                                        . . c b b c 4 4 b d d d d c c . 
                                        . c b b c 4 4 b b d d d d c d c 
                                        . c c c c c c d d d d d d d d c 
                                        . . . c c c c d 4 4 b d d d c . 
                                        . . c c c c c b 4 4 b c c c . . 
                                        . . c b b b c d 4 4 b c . . . .
                    """),
                    img("""
                        . . . . c c c c c . . . . . . . 
                                        . . c c 4 4 4 4 4 c . . . . . . 
                                        . c 4 4 4 4 1 f 4 4 c . . . . . 
                                        c 4 4 4 4 4 f f 4 4 4 c . . . . 
                                        c 4 4 4 4 4 4 4 4 4 4 4 c . . . 
                                        c c b b 1 b 4 4 4 4 4 4 c . . . 
                                        c 4 3 3 3 4 4 4 4 4 4 4 d c . . 
                                        c 4 3 3 3 4 4 4 4 4 d d d c . . 
                                        . c 4 4 4 4 b 4 4 4 d d d c . . 
                                        . . c b b c 4 4 b d d d d c . . 
                                        . c b b c 4 4 b b d d d d c c c 
                                        . c c c c c c d d d d d d d d c 
                                        . . . . c c c b 4 4 b d d d c . 
                                        . . . . . c d 4 4 b b c c c . . 
                                        . . . . c c c c c c c . . . . . 
                                        . . . . c b b b c . . . . . . .
                    """),
                    img("""
                        . . . . c c c c c . . . . . . . 
                                        . . c c 4 4 4 4 4 c . . . . . . 
                                        . c 4 4 4 4 1 f 4 4 c . . . . . 
                                        c 4 4 4 4 4 f f 4 4 4 c . . . . 
                                        c 4 4 4 4 4 4 4 4 4 4 4 c . . . 
                                        c c b b 1 b 4 4 4 4 4 4 c . . . 
                                        c 4 3 3 3 4 4 4 4 4 4 4 d c . . 
                                        c 4 4 4 4 4 4 4 4 4 d d d c . . 
                                        . c 4 4 4 4 b 4 4 4 d d d c . . 
                                        . . c b b c 4 4 b d d d d c . . 
                                        . c b b c 4 4 b b d d d d c c c 
                                        . c c c c c c d d d d d d d d c 
                                        . . . . c c b 4 4 b d d d c c . 
                                        . . . . c d 4 4 b b c c c . . . 
                                        . . . . c c c c c c c . . . . . 
                                        . . . . c b b b c . . . . . . .
                    """),
                    img("""
                        . . . . c c c c c . . . . . . . 
                                        . . c c 4 4 4 4 4 c . . . . . . 
                                        . c 4 4 4 4 1 f 4 4 c . . . . . 
                                        c 4 4 4 4 4 f f 4 4 4 c . . . . 
                                        c 4 4 4 4 4 4 4 4 4 4 4 c . . . 
                                        c c b b 1 b 4 4 4 4 4 4 c . . . 
                                        c 4 3 3 3 4 4 4 4 4 4 4 d c . . 
                                        c 4 4 4 4 4 4 4 4 4 d d d c . . 
                                        . c 4 4 4 4 b 4 4 4 d d d c . . 
                                        . . c b b c 4 4 b d d d d c . . 
                                        . c b b c 4 4 b b d d d d c c . 
                                        . c c c c c b b d d d d d d c c 
                                        . . . c c 4 4 b 4 4 d d d d d c 
                                        . . . . c b 4 4 b b c c c c c c 
                                        . . . . c c c c c c . . . . . . 
                                        . . . . . c b b b c . . . . . .
                    """),
                    img("""
                        . . . . . . . . . . . . . . . . 
                                        . . . . c c c c . . . . . . . . 
                                        . . c c 4 4 4 4 c c . . . . . . 
                                        . c 4 4 4 4 4 4 4 4 c . . . . . 
                                        c 4 4 4 4 4 1 f 4 4 4 c . . . . 
                                        c 4 4 4 4 4 f f 4 4 4 4 c . . . 
                                        c c b b 1 b 4 4 4 4 4 4 c . . . 
                                        c c 3 3 b b 4 4 4 4 4 4 d c . . 
                                        c 4 3 3 3 4 4 4 4 4 d d d c . . 
                                        . b 4 4 4 4 4 4 4 4 d d d c . . 
                                        . . c b b c 4 4 b d d d d c . . 
                                        . c b b c 4 4 b b d d d d c c c 
                                        . c c c c c c d d d d d d d d c 
                                        . . . c c c c d 4 4 b d d d c c 
                                        . . . c b c c b 4 4 b c c c . . 
                                        . . . c c c d 4 4 b c . . . . .
                    """),
                    img("""
                        . . . . . . . . . . . . . . . . 
                                        . . . . c c c c . . . . . . . . 
                                        . . c c 4 4 4 4 c c . . . . . . 
                                        . c 4 4 4 4 4 4 4 4 c . . . . . 
                                        c 4 4 4 4 4 1 f 4 4 4 c . . . . 
                                        c 4 4 4 4 4 f f 4 4 4 4 c . . . 
                                        c 4 4 4 4 4 4 4 4 4 4 4 c . . . 
                                        c c b b 1 b 4 4 4 4 4 4 d c . . 
                                        c 4 3 3 3 4 4 4 4 4 d d d c . . 
                                        . b 4 4 4 4 4 4 4 4 d d d c . . 
                                        . . c b b c 4 4 b d d d d c . . 
                                        . c b b c 4 4 b b d d d d c c c 
                                        . c c c c c c d d d d d d d d c 
                                        . . . c c c c d 4 4 b d d c c . 
                                        . . c b b c c c 4 4 b c c . . . 
                                        . . c c c c c d 4 4 c . . . . .
                    """)],
                100,
                True)
        elif sprite7.is_hitting_tile(CollisionDirection.LEFT):
            sprite7.set_velocity(50, 0)
            animation.run_image_animation(sprite7,
                [img("""
                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . c c c c . . . . 
                                        . . . . . . c c 4 4 4 4 c c . . 
                                        . . . . . c 4 4 4 4 4 4 4 4 c . 
                                        . . . . c 4 4 4 f 1 4 4 4 4 4 c 
                                        . . . c 4 4 4 4 f f 4 4 4 4 4 c 
                                        . . . c 4 4 4 4 4 4 4 4 4 4 4 c 
                                        . . c d 4 4 4 4 4 4 b 1 b b c c 
                                        . . c d d d 4 4 4 4 4 3 3 3 4 c 
                                        . . c d d d 4 4 4 4 4 4 4 4 b . 
                                        . c c d d d d b 4 4 c b b c . . 
                                        c d c d d d d b b 4 4 c b b c . 
                                        c d d d d d d d d c c c c c c . 
                                        . c d d d b 4 4 d c c c c . . . 
                                        . . c c c b 4 4 b c c c c c . . 
                                        . . . . c b 4 4 d c b b b c . .
                    """),
                    img("""
                        . . . . . . . c c c c c . . . . 
                                        . . . . . . c 4 4 4 4 4 c c . . 
                                        . . . . . c 4 4 f 1 4 4 4 4 c . 
                                        . . . . c 4 4 4 f f 4 4 4 4 4 c 
                                        . . . c 4 4 4 4 4 4 4 4 4 4 4 c 
                                        . . . c 4 4 4 4 4 4 b 1 b b c c 
                                        . . c d 4 4 4 4 4 4 4 3 3 3 4 c 
                                        . . c d d d 4 4 4 4 4 3 3 3 4 c 
                                        . . c d d d 4 4 4 b 4 4 4 4 c . 
                                        . . c d d d d b 4 4 c b b c . . 
                                        c c c d d d d b b 4 4 c b b c . 
                                        c d d d d d d d d c c c c c c . 
                                        . c d d d b 4 4 b c c c . . . . 
                                        . . c c c b b 4 4 d c . . . . . 
                                        . . . . . c c c c c c c . . . . 
                                        . . . . . . . c b b b c . . . .
                    """),
                    img("""
                        . . . . . . . c c c c c . . . . 
                                        . . . . . . c 4 4 4 4 4 c c . . 
                                        . . . . . c 4 4 f 1 4 4 4 4 c . 
                                        . . . . c 4 4 4 f f 4 4 4 4 4 c 
                                        . . . c 4 4 4 4 4 4 4 4 4 4 4 c 
                                        . . . c 4 4 4 4 4 4 b 1 b b c c 
                                        . . c d 4 4 4 4 4 4 4 3 3 3 4 c 
                                        . . c d d d 4 4 4 4 4 4 4 4 4 c 
                                        . . c d d d 4 4 4 b 4 4 4 4 c . 
                                        . . c d d d d b 4 4 c b b c . . 
                                        c c c d d d d b b 4 4 c b b c . 
                                        c d d d d d d d d c c c c c c . 
                                        . c c d d d b 4 4 b c c . . . . 
                                        . . . c c c b b 4 4 d c . . . . 
                                        . . . . . c c c c c c c . . . . 
                                        . . . . . . . c b b b c . . . .
                    """),
                    img("""
                        . . . . . . . c c c c c . . . . 
                                        . . . . . . c 4 4 4 4 4 c c . . 
                                        . . . . . c 4 4 f 1 4 4 4 4 c . 
                                        . . . . c 4 4 4 f f 4 4 4 4 4 c 
                                        . . . c 4 4 4 4 4 4 4 4 4 4 4 c 
                                        . . . c 4 4 4 4 4 4 b 1 b b c c 
                                        . . c d 4 4 4 4 4 4 4 3 3 3 4 c 
                                        . . c d d d 4 4 4 4 4 4 4 4 4 c 
                                        . . c d d d 4 4 4 b 4 4 4 4 c . 
                                        . . c d d d d b 4 4 c b b c . . 
                                        . c c d d d d b b 4 4 c b b c . 
                                        c c d d d d d d b b c c c c c . 
                                        c d d d d d 4 4 b 4 4 c c . . . 
                                        c c c c c c b b 4 4 b c . . . . 
                                        . . . . . . c c c c c c . . . . 
                                        . . . . . . c b b b c . . . . .
                    """),
                    img("""
                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . c c c c . . . . 
                                        . . . . . . c c 4 4 4 4 c c . . 
                                        . . . . . c 4 4 4 4 4 4 4 4 c . 
                                        . . . . c 4 4 4 f 1 4 4 4 4 4 c 
                                        . . . c 4 4 4 4 f f 4 4 4 4 4 c 
                                        . . . c 4 4 4 4 4 4 b 1 b b c c 
                                        . . c d 4 4 4 4 4 4 b b 3 3 c c 
                                        . . c d d d 4 4 4 4 4 3 3 3 4 c 
                                        . . c d d d 4 4 4 4 4 4 4 4 b . 
                                        . . c d d d d b 4 4 c b b c . . 
                                        c c c d d d d b b 4 4 c b b c . 
                                        c d d d d d d d d c c c c c c . 
                                        c c d d d b 4 4 d c c c c . . . 
                                        . . c c c b 4 4 b c c b c . . . 
                                        . . . . . c b 4 4 d c c c . . .
                    """),
                    img("""
                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . c c c c . . . . 
                                        . . . . . . c c 4 4 4 4 c c . . 
                                        . . . . . c 4 4 4 4 4 4 4 4 c . 
                                        . . . . c 4 4 4 f 1 4 4 4 4 4 c 
                                        . . . c 4 4 4 4 f f 4 4 4 4 4 c 
                                        . . . c 4 4 4 4 4 4 4 4 4 4 4 c 
                                        . . c d 4 4 4 4 4 4 b 1 b b c c 
                                        . . c d d d 4 4 4 4 4 3 3 3 4 c 
                                        . . c d d d 4 4 4 4 4 4 4 4 b . 
                                        . . c d d d d b 4 4 c b b c . . 
                                        c c c d d d d b b 4 4 c b b c . 
                                        c d d d d d d d d c c c c c c . 
                                        . c c d d b 4 4 d c c c c . . . 
                                        . . . c c b 4 4 c c c b b c . . 
                                        . . . . . c 4 4 d c c c c c . .
                    """)],
                100,
                True)
scene.on_hit_wall(SpriteKind.enemy, on_hit_wall)

def on_right_pressed():
    global direction
    direction = 100
    Ducky.set_image(img("""
        . . . . . . . . . . b 5 b . . . 
                . . . . . . . . . b 5 b . . . . 
                . . . . . . b b b b b b . . . . 
                . . . . . b b 5 5 5 5 5 b . . . 
                . . . . b b 5 d 1 f 5 5 d f . . 
                . . . . b 5 5 1 f f 5 d 4 c . . 
                . . . . b 5 5 d f b d d 4 4 . . 
                . b b b d 5 5 5 5 5 4 4 4 4 4 b 
                b d d d b b d 5 5 4 4 4 4 4 b . 
                b b d 5 5 5 b 5 5 5 5 5 5 b . . 
                c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
                c b d c d 5 5 b 5 5 5 5 5 5 b . 
                . c d d c c b d 5 5 5 5 5 d b . 
                . . c b d d d d d 5 5 5 b b . . 
                . . . c c c c c c c c b b . . . 
                . . . . . . . . . . . . . . . .
    """))
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_life_zero():
    Ducky.start_effect(effects.disintegrate, 500)
    sprites.destroy(Ducky, effects.ashes, 5000)
    game.game_over(False)
info.on_life_zero(on_life_zero)

def on_on_overlap3(sprite8, otherSprite3):
    music.play(music.melody_playable(music.power_up),
        music.PlaybackMode.IN_BACKGROUND)
    sprites.destroy(otherSprite3, effects.confetti, 200)
    info.change_score_by(10)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap3)

def on_on_overlap4(sprite9, otherSprite4):
    global heart
    music.play(music.melody_playable(music.thump),
        music.PlaybackMode.IN_BACKGROUND)
    sprites.destroy(sprite9, effects.warm_radial, 100)
    sprites.destroy(otherSprite4, effects.ashes, 100)
    heart = sprites.create(img("""
            ....................
                    ....................
                    ....................
                    ....................
                    ....................
                    ....................
                    .......22...22......
                    ......2322.2222.....
                    ......232222222.....
                    ......222222222.....
                    .......22222b2......
                    ........222b2.......
                    .........222........
                    ..........2.........
                    ....................
                    ....................
                    ....................
                    ....................
                    ....................
                    ....................
        """),
        SpriteKind.Heart)
    tiles.place_on_tile(heart, sprite9.tilemap_location())
    animation.run_movement_animation(heart,
        animation.animation_presets(animation.bobbing),
        5000,
        True)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap4)

def on_on_overlap5(sprite10, otherSprite5):
    info.change_life_by(-1)
    scene.camera_shake(4, 500)
    scene.set_background_color(8)
    music.play(music.melody_playable(music.zapped),
        music.PlaybackMode.UNTIL_DONE)
    scene.set_background_color(10)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap5)

strawberry: Sprite = None
kaiju: Sprite = None
heart: Sprite = None
projectile: Sprite = None
double_jump = False
direction = 0
Ducky: Sprite = None
scene.set_background_color(12)
Title2 = sprites.create(img("""
        ....................................................................................................
            ....................................................................................................
            ....................................................................................................
            .ffffffffffffff......fffffff.....fffffff.fffffffffffffffffff.fffffff.....fffffff.fffffff.....fffffff
            .f555555555555f......f55555f.....f55555f.f55555555555555555f.f55555f.....f55555f.f55555f.....f55555f
            .f555555555555f......f55555f.....f55555f.f55555555555555555f.f55555f.....f55555f.f55555f.....f55555f
            .f555555555555ffffff.f55555f.....f55555f.f55555555555555555f.f55555f.....f55555f.f55555f.....f55555f
            .f55555555555555555f.f55555f.....f55555f.f55555555555555555f.f55555f.....f55555f.f55555f.....f55555f
            .f55555555555555555f.f55555f.....f55555f.f55555555555555555f.f55555f....f555555f.f55555f.....f55555f
            .f55555fffff5555555f.f55555f.....f55555f.f55555fffffff55555f.f55555f...f5555555f.f55555f.....f55555f
            .f55555f...f5555555f.f55555f.....f55555f.f55555f.....f55555f.f55555f..f55555555f.f55555f.....f55555f
            .f55555f...f5555555f.f55555f.....f55555f.f55555f.....f55555f.f55555f.f555555555f.f55555f.....f55555f
            .f55555f...f5555555f.f55555f.....f55555f.f55555f.....f55555f.f55555ff5555555555f.f55555f.....f55555f
            .f55555f...fff55555f.f55555f.....f55555f.f55555f.....f55555f.f55555f55555555555f.f55555f.....f55555f
            .f55555f.....f55555f.f55555f.....f55555f.f55555f.....f55555f.f55555f55555555555f.f55555f.....f55555f
            .f55555f.....f55555f.f55555f.....f55555f.f55555f.....fffffff.f5555555555555fffff.f55555f.....f55555f
            .f55555f.....f55555f.f55555f.....f55555f.f55555f.............f5555555555555f.....f55555f.....f55555f
            .f55555f.....f55555f.f55555f.....f55555f.f55555f.............f555555555555f......f55555f.....f55555f
            .f55555f.....f55555f.f55555f.....f55555f.f55555f.............f55555555555f.......f55555f.....f55555f
            .f55555f.....f55555f.f55555f.....f55555f.f55555f.............f5555555555f........f55555f.....f55555f
            .f55555f.....f55555f.f55555f.....f55555f.f55555f.............f555555555f.........f55555f.....f55555f
            .f55555f.....f55555f.f55555f.....f55555f.f55555f.............f55555555f..........f55555f.....f55555f
            .f55555f.....f55555f.f55555f.....f55555f.f55555f.............f55555555f..........f55555fffffff55555f
            .f55555f.....f55555f.f55555f.....f55555f.f55555f.............f55555555f..........f55555555555555555f
            .f55555f.....f55555f.f55555f.....f55555f.f55555f.............f55555555f..........f55555555555555555f
            .f55555f.....f55555f.f55555f.....f55555f.f55555f.............f55555555f..........f55555555555555555f
            .f55555f.....f55555f.f55555f.....f55555f.f55555f.............f55555555f..........f55555555555555555f
            .f55555f.....f55555f.f55555f.....f55555f.f55555f.............f55555555f..........f55555555555555555f
            .f55555f.....f55555f.f55555f.....f55555f.f55555f.............f55555555f..........fffffffffffff55555f
            .f55555f.....f55555f.f55555f.....f55555f.f55555f.............f55555555f......................f55555f
            .f55555f.....f55555f.f55555f.....f55555f.f55555f.............f555555555f.....................f55555f
            .f55555f.....f55555f.f55555f.....f55555f.f55555f.............f5555555555f....................f55555f
            .f55555f.....f55555f.f55555f.....f55555f.f55555f.............f55555555555f...................f55555f
            .f55555f.....f55555f.f55555f.....f55555f.f55555f.............f555555555555f..................f55555f
            .f55555f.....f55555f.f55555f.....f55555f.f55555f.............f5555555555555f.................f55555f
            .f55555f.....f55555f.f55555f.....f55555f.f55555f.............f55555f5555555fffff.............f55555f
            .f55555f.....f55555f.f55555f.....f55555f.f55555f.............f55555f55555555555f.............f55555f
            .f55555f.....f55555f.f55555f.....f55555f.f55555f.....fffffff.f55555ff5555555555f.fffffff.....f55555f
            .f55555f...fff55555f.f55555f.....f55555f.f55555f.....f55555f.f55555f.f555555555f.f55555f.....f55555f
            .f55555f...f5555555f.f55555f.....f55555f.f55555f.....f55555f.f55555f..f55555555f.f55555f.....f55555f
            .f55555f...f5555555f.f55555f.....f55555f.f55555f.....f55555f.f55555f...f5555555f.f55555f.....f55555f
            .f55555fffff5555555f.f55555fffffff55555f.f55555fffffff55555f.f55555f....f555555f.f55555fffffff55555f
            .f55555555555555555f.f55555555555555555f.f55555555555555555f.f55555f.....f55555f.f55555555555555555f
            .f55555555555555555f.f55555555555555555f.f55555555555555555f.f55555f.....f55555f.f55555555555555555f
            .f55555555555555555f.f55555555555555555f.f55555555555555555f.f55555f.....f55555f.f55555555555555555f
            .f555555555555ffffff.f55555555555555555f.f55555555555555555f.f55555f.....f55555f.f55555555555555555f
            .f555555555555f......f55555555555555555f.f55555555555555555f.f55555f.....f55555f.f55555555555555555f
            .ffffffffffffff......fffffffffffffffffff.fffffffffffffffffff.fffffff.....fffffff.fffffffffffffffffff
            ....................................................................................................
            ...ffffffffffffffffff.ffffff.............ffffffffffffffffff.ffffffffffffffffff.ffffff......ffffff...
            ...f4444444444444444f.f4444f.............f4444444444444444f.f4444444444444444f.f4444f......f4444f...
            ...f4444444444444444f.f4444f.............f4444444444444444f.f4444444444444444f.f4444f......f4444f...
            ...f4444444444444444f.f4444f.............f4444ffffffff4444f.f444fffffffff4444f.f4444f......f4444f...
            ...f4444444444444444f.f4444f.............f4444f......f4444f.f444f.......ffffff.f4444f......f4444f...
            ...f4444444444444444f.f4444f.............f4444f......f4444f.f444f..............f4444f......f4444f...
            ...f4444444444444444f.f4444f.............f4444f......f4444f.f444ffffffffffffff.f4444ffffffff4444f...
            ...f4444fffffffffffff.f4444f.............f4444ffffffff4444f.f4444444444444444f.f4444444444444444f...
            ...f4444f.............f4444f.............f4444444444444444f.f4444444444444444f.f4444444444444444f...
            ...f4444f.............f4444f.............f4444444444444444f.ffffffffffffff444f.f4444444444444444f...
            ...f4444fffffffffffff.f4444fffffffffffff.f4444444444444444f..............f444f.f4444444444444444f...
            ...f4444444444444444f.f4444444444444444f.f4444ffffffff4444f.ffffffffffffff444f.f4444444444444444f...
            ...f4444444444444444f.f4444444444444444f.f4444f......f4444f.f4444444444444444f.f4444ffffffff4444f...
            ...f4444444444444444f.f4444444444444444f.f4444f......f4444f.f4444444444444444f.f4444f......f4444f...
            ...f4444444444444444f.f4444444444444444f.f4444f......f4444f.f4444444444444444f.f4444f......f4444f...
            ...f4444444444444444f.f4444444444444444f.f4444f......f4444f.f4444444444444444f.f4444f......f4444f...
            ...f4444444444444444f.f4444444444444444f.f4444f......f4444f.f4444444444444444f.f4444f......f4444f...
            ...ffffffffffffffffff.ffffffffffffffffff.ffffff......ffffff.ffffffffffffffffff.ffffff......ffffff...
            ....................................................................................................
            ....................................................................................................
            ....................................................................................................
    """),
    SpriteKind.Title)
text_list = ["Start!",
    "quack!",
    "duck, but not really.",
    "play the game already.",
    "clash!"]
Title2.set_position(80, 41)
game.show_long_text("Press A to " + text_list[randint(0, 4)],
    DialogLayout.BOTTOM)
sprites.destroy(Title2)
music.play(music.create_song(assets.song("""
        JERSEY
    """)),
    music.PlaybackMode.LOOPING_IN_BACKGROUND)
tiles.set_current_tilemap(tilemap("""
    level2
"""))
tiles.set_current_tilemap(tilemap("""
    level3
"""))
Ducky = sprites.create(img("""
        . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            . b b b d 5 5 5 5 5 4 4 4 4 4 b 
            b d d d b b d 5 5 4 4 4 4 4 b . 
            b b d 5 5 5 b 5 5 5 5 5 5 b . . 
            c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
            c b d c d 5 5 b 5 5 5 5 5 5 b . 
            . c d d c c b d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.player)
tiles.place_on_tile(Ducky, tiles.get_tile_location(1, 13))
tiles.place_on_tile(Ducky, tiles.get_tile_location(1, 30))
Ducky.set_stay_in_screen(True)
controller.move_sprite(Ducky, 100, 0)
Ducky.ay = 400
scene.camera_follow_sprite(Ducky)
direction = 100
double_jump = True
info.set_score(10)
info.set_life(5)

def on_on_update():
    global double_jump
    if not (Ducky.is_hitting_tile(CollisionDirection.BOTTOM)):
        if direction == 100:
            animation.run_image_animation(Ducky,
                [img("""
                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . b 5 5 b . . . 
                                        . . . . . . b b b b b b . . . . 
                                        . . . . . b b 5 5 5 5 5 b . . . 
                                        . b b b b b 5 5 5 5 5 5 5 b . . 
                                        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
                                        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
                                        . . b d 5 5 b 1 f f 5 4 4 c . . 
                                        b b d b 5 5 5 d f b 4 4 4 4 b . 
                                        b d d c d 5 5 b 5 4 4 4 4 4 4 b 
                                        c d d d c c b 5 5 5 5 5 5 5 b . 
                                        c b d d d d d 5 5 5 5 5 5 5 b . 
                                        . c d d d d d d 5 5 5 5 5 d b . 
                                        . . c b d d d d d 5 5 5 b b . . 
                                        . . . c c c c c c c c b b . . .
                    """),
                    img("""
                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . b 5 b . . . 
                                        . . . . . . . . . b 5 b . . . . 
                                        . . . . . . b b b b b b . . . . 
                                        . . . . . b b 5 5 5 5 5 b . . . 
                                        . b b b b b 5 5 5 5 5 5 5 b . . 
                                        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
                                        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
                                        . . b d 5 5 b 1 f f 5 4 4 c . . 
                                        b b d b 5 5 5 d f b 4 4 4 4 4 b 
                                        b d d c d 5 5 b 5 4 4 4 4 4 b . 
                                        c d d d c c b 5 5 5 5 5 5 5 b . 
                                        c b d d d d d 5 5 5 5 5 5 5 b . 
                                        . c d d d d d d 5 5 5 5 5 d b . 
                                        . . c b d d d d d 5 5 5 b b . . 
                                        . . . c c c c c c c c b b . . .
                    """),
                    img("""
                        . . . . . . . . . . b 5 b . . . 
                                        . . . . . . . . . b 5 b . . . . 
                                        . . . . . . . . . b c . . . . . 
                                        . . . . . . b b b b b b . . . . 
                                        . . . . . b b 5 5 5 5 5 b . . . 
                                        . . . . b b 5 d 1 f 5 5 d f . . 
                                        . . . . b 5 5 1 f f 5 d 4 c . . 
                                        . . . . b 5 5 d f b d d 4 4 . . 
                                        b d d d b b d 5 5 5 4 4 4 4 4 b 
                                        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
                                        b d c 5 5 5 5 d 5 5 5 5 5 b . . 
                                        c d d c d 5 5 b 5 5 5 5 5 5 b . 
                                        c b d d c c b 5 5 5 5 5 5 5 b . 
                                        . c d d d d d d 5 5 5 5 5 d b . 
                                        . . c b d d d d d 5 5 5 b b . . 
                                        . . . c c c c c c c c b b . . .
                    """),
                    img("""
                        . . . . . . . . . . b 5 b . . . 
                                        . . . . . . . . . b 5 b . . . . 
                                        . . . . . . b b b b b b . . . . 
                                        . . . . . b b 5 5 5 5 5 b . . . 
                                        . . . . b b 5 d 1 f 5 d 4 c . . 
                                        . . . . b 5 5 1 f f d d 4 4 4 b 
                                        . . . . b 5 5 d f b 4 4 4 4 b . 
                                        . . . b d 5 5 5 5 4 4 4 4 b . . 
                                        . . b d d 5 5 5 5 5 5 5 5 b . . 
                                        . b d d d d 5 5 5 5 5 5 5 5 b . 
                                        b d d d b b b 5 5 5 5 5 5 5 b . 
                                        c d d b 5 5 d c 5 5 5 5 5 5 b . 
                                        c b b d 5 d c d 5 5 5 5 5 5 b . 
                                        . b 5 5 b c d d 5 5 5 5 5 d b . 
                                        b b c c c d d d d 5 5 5 b b . . 
                                        . . . c c c c c c c c b b . . .
                    """),
                    img("""
                        . . . . . . . . . . b 5 b . . . 
                                        . . . . . . . . . b 5 b . . . . 
                                        . . . . . . b b b b b b . . . . 
                                        . . . . . b b 5 5 5 5 5 b . . . 
                                        . . . . b b 5 d 1 f 5 d 4 c . . 
                                        . . . . b 5 5 1 f f d d 4 4 4 b 
                                        . . . . b 5 5 d f b 4 4 4 4 b . 
                                        . . . b d 5 5 5 5 4 4 4 4 b . . 
                                        . b b d d d 5 5 5 5 5 5 5 b . . 
                                        b d d d b b b 5 5 5 5 5 5 5 b . 
                                        c d d b 5 5 d c 5 5 5 5 5 5 b . 
                                        c b b d 5 d c d 5 5 5 5 5 5 b . 
                                        c b 5 5 b c d d 5 5 5 5 5 5 b . 
                                        b b c c c d d d 5 5 5 5 5 d b . 
                                        . . . . c c d d d 5 5 5 b b . . 
                                        . . . . . . c c c c c b b . . .
                    """),
                    img("""
                        . . . . . . . . . . b 5 b . . . 
                                        . . . . . . . . . b 5 b . . . . 
                                        . . . . . . b b b b b b . . . . 
                                        . . . . . b b 5 5 5 5 5 b . . . 
                                        . . . . b b 5 d 1 f 5 5 d f . . 
                                        . . . . b 5 5 1 f f 5 d 4 c . . 
                                        . . . . b 5 5 d f b d d 4 4 . . 
                                        . b b b d 5 5 5 5 5 4 4 4 4 4 b 
                                        b d d d b b d 5 5 4 4 4 4 4 b . 
                                        b b d 5 5 5 b 5 5 5 5 5 5 b . . 
                                        c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
                                        c b d c d 5 5 b 5 5 5 5 5 5 b . 
                                        . c d d c c b d 5 5 5 5 5 d b . 
                                        . . c b d d d d d 5 5 5 b b . . 
                                        . . . c c c c c c c c b b . . . 
                                        . . . . c c c c c c c c . . . .
                    """)],
                100,
                False)
        else:
            animation.run_image_animation(Ducky,
                [img("""
                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . b 5 5 b . . . . . . . . . 
                                        . . . . b b b b b b . . . . . . 
                                        . . . b 5 5 5 5 5 b b . . . . . 
                                        . . b 5 5 5 5 5 5 5 b b b b b . 
                                        . . b 5 5 5 5 5 5 5 5 b 5 d b . 
                                        . . f 4 d 5 f 1 d 5 b 5 5 b . . 
                                        . . c 4 4 5 f f 1 b 5 5 d b . . 
                                        . b 4 4 4 4 b f d 5 5 5 b d b b 
                                        b 4 4 4 4 4 4 5 b 5 5 d c d d b 
                                        . b 5 5 5 5 5 5 5 b c c d d d c 
                                        . b 5 5 5 5 5 5 5 d d d d d b c 
                                        . b d 5 5 5 5 5 d d d d d d c . 
                                        . . b b 5 5 5 d d d d d b c . . 
                                        . . . b b c c c c c c c c . . .
                    """),
                    img("""
                        . . . . . . . . . . . . . . . . 
                                        . . . b 5 b . . . . . . . . . . 
                                        . . . . b 5 b . . . . . . . . . 
                                        . . . . b b b b b b . . . . . . 
                                        . . . b 5 5 5 5 5 b b . . . . . 
                                        . . b 5 5 5 5 5 5 5 b b b b b . 
                                        . . b 5 5 5 5 5 5 5 5 b 5 d b . 
                                        . . f 4 d 5 f 1 d 5 b 5 5 b . . 
                                        . . c 4 4 5 f f 1 b 5 5 d b . . 
                                        b 4 4 4 4 4 b f d 5 5 5 b d b b 
                                        . b 4 4 4 4 4 5 b 5 5 d c d d b 
                                        . b 5 5 5 5 5 5 5 b c c d d d c 
                                        . b 5 5 5 5 5 5 5 d d d d d b c 
                                        . b d 5 5 5 5 5 d d d d d d c . 
                                        . . b b 5 5 5 d d d d d b c . . 
                                        . . . b b c c c c c c c c . . .
                    """),
                    img("""
                        . . . b 5 b . . . . . . . . . . 
                                        . . . . b 5 b . . . . . . . . . 
                                        . . . . . c b . . . . . . . . . 
                                        . . . . b b b b b b . . . . . . 
                                        . . . b 5 5 5 5 5 b b . . . . . 
                                        . . f d 5 5 f 1 d 5 b b . . . . 
                                        . . c 4 d 5 f f 1 5 5 b . . . . 
                                        . . 4 4 d d b f d 5 5 b . . . . 
                                        b 4 4 4 4 4 5 5 5 d b b d d d b 
                                        . b 4 4 4 4 4 5 5 b 5 5 5 d b b 
                                        . . b 5 5 5 5 5 d 5 5 5 5 c d b 
                                        . b 5 5 5 5 5 5 b 5 5 d c d d c 
                                        . b 5 5 5 5 5 5 5 b c c d d b c 
                                        . b d 5 5 5 5 5 d d d d d d c . 
                                        . . b b 5 5 5 d d d d d b c . . 
                                        . . . b b c c c c c c c c . . .
                    """),
                    img("""
                        . . . b 5 b . . . . . . . . . . 
                                        . . . . b 5 b . . . . . . . . . 
                                        . . . . b b b b b b . . . . . . 
                                        . . . b 5 5 5 5 5 b b . . . . . 
                                        . . c 4 d 5 f 1 d 5 b b . . . . 
                                        b 4 4 4 d d f f 1 5 5 b . . . . 
                                        . b 4 4 4 4 b f d 5 5 b . . . . 
                                        . . b 4 4 4 4 5 5 5 5 d b . . . 
                                        . . b 5 5 5 5 5 5 5 5 d d b . . 
                                        . b 5 5 5 5 5 5 5 5 d d d d b . 
                                        . b 5 5 5 5 5 5 5 b b b d d d b 
                                        . b 5 5 5 5 5 5 c d 5 5 b d d c 
                                        . b 5 5 5 5 5 5 d c d 5 d b b c 
                                        . b d 5 5 5 5 5 d d c b 5 5 b . 
                                        . . b b 5 5 5 d d d d c c c b b 
                                        . . . b b c c c c c c c c . . .
                    """),
                    img("""
                        . . . b 5 b . . . . . . . . . . 
                                        . . . . b 5 b . . . . . . . . . 
                                        . . . . b b b b b b . . . . . . 
                                        . . . b 5 5 5 5 5 b b . . . . . 
                                        . . c 4 d 5 f 1 d 5 b b . . . . 
                                        b 4 4 4 d d f f 1 5 5 b . . . . 
                                        . b 4 4 4 4 b f d 5 5 b . . . . 
                                        . . b 4 4 4 4 5 5 5 5 d b . . . 
                                        . . b 5 5 5 5 5 5 5 d d d b b . 
                                        . b 5 5 5 5 5 5 5 b b b d d d b 
                                        . b 5 5 5 5 5 5 c d 5 5 b d d c 
                                        . b 5 5 5 5 5 5 d c d 5 d b b c 
                                        . b 5 5 5 5 5 5 d d c b 5 5 b c 
                                        . b d 5 5 5 5 5 d d d c c c b b 
                                        . . b b 5 5 5 d d d c c . . . . 
                                        . . . b b c c c c c . . . . . .
                    """),
                    img("""
                        . . . b 5 b . . . . . . . . . . 
                                        . . . . b 5 b . . . . . . . . . 
                                        . . . . b b b b b b . . . . . . 
                                        . . . b 5 5 5 5 5 b b . . . . . 
                                        . . f d 5 5 f 1 d 5 b b . . . . 
                                        . . c 4 d 5 f f 1 5 5 b . . . . 
                                        . . 4 4 d d b f d 5 5 b . . . . 
                                        b 4 4 4 4 4 5 5 5 5 5 d b b b . 
                                        . b 4 4 4 4 4 5 5 d b b d d d b 
                                        . . b 5 5 5 5 5 5 b 5 5 5 d b b 
                                        . b 5 5 5 5 5 5 d 5 5 5 5 c d c 
                                        . b 5 5 5 5 5 5 b 5 5 d c d b c 
                                        . b d 5 5 5 5 5 d b c c d d c . 
                                        . . b b 5 5 5 d d d d d b c . . 
                                        . . . b b c c c c c c c c . . . 
                                        . . . . c c c c c c c c . . . .
                    """)],
                100,
                False)
        if Ducky.is_hitting_tile(CollisionDirection.RIGHT):
            Ducky.set_image(img("""
                . . . . . . . . . b 5 b . . . . 
                                . . . . . . . . . b 5 b . . . . 
                                . . . . . . b b b b b b . . . . 
                                . . . . . b b 5 5 5 5 5 b . . . 
                                . . . . b b 5 b c 5 5 d 4 c . . 
                                . b b b b 5 5 5 b f d d 4 4 4 b 
                                . b d 5 b 5 5 b c b 4 4 4 4 b . 
                                . . b 5 5 b 5 5 5 4 4 4 4 b f f 
                                . . b d 5 5 b 5 5 5 5 5 5 b f f 
                                . b d b 5 5 5 d 5 5 5 5 5 5 f f 
                                b d d c d 5 5 b 5 5 5 5 5 5 f f 
                                c d d d c c b 5 5 5 5 5 5 5 f f 
                                c b d d d d d 5 5 5 5 5 5 5 f f 
                                . c d d d d d d 5 5 5 5 5 d f f 
                                . . c b d d d d d 5 5 5 b b . . 
                                . . . c c c c c c c c b b . . .
            """))
            double_jump = True
        elif Ducky.is_hitting_tile(CollisionDirection.LEFT):
            Ducky.set_image(img("""
                . . . . b 5 b . . . . . . . . . 
                                . . . . b 5 b . . . . . . . . . 
                                . . . . b b b b b b . . . . . . 
                                . . . b 5 5 5 5 5 b b . . . . . 
                                . . c 4 d 5 5 c b 5 b b . . . . 
                                b 4 4 4 d d f b 5 5 5 b b b b . 
                                . b 4 4 4 4 b c b 5 5 b 5 d b . 
                                . . b 4 4 4 4 5 5 5 b 5 5 b . . 
                                f f b 5 5 5 5 5 5 b 5 5 d b . . 
                                f f 5 5 5 5 5 5 d 5 5 5 b d b . 
                                f f 5 5 5 5 5 5 b 5 5 d c d d b 
                                f f 5 5 5 5 5 5 5 b c c d d d c 
                                f f 5 5 5 5 5 5 5 d d d d d b c 
                                f f d 5 5 5 5 5 d d d d d d c . 
                                . . b b 5 5 5 d d d d d b c . . 
                                . . . b b c c c c c c c c . . .
            """))
            double_jump = True
    else:
        double_jump = True
    Ducky.ay = 400
game.on_update(on_on_update)

def on_update_interval():
    global kaiju
    kaiju = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . c c c c . . . . . . . . 
                    . . c c 4 4 4 4 c c . . . . . . 
                    . c 4 4 4 4 4 4 4 4 c . . . . . 
                    c 4 4 4 4 4 1 f 4 4 4 c . . . . 
                    c 4 4 4 4 4 f f 4 4 4 4 c . . . 
                    c 4 4 4 4 4 4 4 4 4 4 4 c . . . 
                    c c b b 1 b 4 4 4 4 4 4 d c . . 
                    c 4 3 3 3 4 4 4 4 4 d d d c . . 
                    . b 4 4 4 4 4 4 4 4 d d d c . . 
                    . . c b b c 4 4 b d d d d c c . 
                    . c b b c 4 4 b b d d d d c d c 
                    . c c c c c c d d d d d d d d c 
                    . . . c c c c d 4 4 b d d d c . 
                    . . c c c c c b 4 4 b c c c . . 
                    . . c b b b c d 4 4 b c . . . .
        """),
        SpriteKind.enemy)
    tiles.place_on_random_tile(kaiju, assets.tile("""
        transparency16
    """))
    kaiju.ay = 400
    kaiju.set_velocity(50, 0)
    animation.run_image_animation(kaiju,
        [img("""
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . c c c c . . . . 
                        . . . . . . c c 4 4 4 4 c c . . 
                        . . . . . c 4 4 4 4 4 4 4 4 c . 
                        . . . . c 4 4 4 f 1 4 4 4 4 4 c 
                        . . . c 4 4 4 4 f f 4 4 4 4 4 c 
                        . . . c 4 4 4 4 4 4 4 4 4 4 4 c 
                        . . c d 4 4 4 4 4 4 b 1 b b c c 
                        . . c d d d 4 4 4 4 4 3 3 3 4 c 
                        . . c d d d 4 4 4 4 4 4 4 4 b . 
                        . c c d d d d b 4 4 c b b c . . 
                        c d c d d d d b b 4 4 c b b c . 
                        c d d d d d d d d c c c c c c . 
                        . c d d d b 4 4 d c c c c . . . 
                        . . c c c b 4 4 b c c c c c . . 
                        . . . . c b 4 4 d c b b b c . .
            """),
            img("""
                . . . . . . . c c c c c . . . . 
                        . . . . . . c 4 4 4 4 4 c c . . 
                        . . . . . c 4 4 f 1 4 4 4 4 c . 
                        . . . . c 4 4 4 f f 4 4 4 4 4 c 
                        . . . c 4 4 4 4 4 4 4 4 4 4 4 c 
                        . . . c 4 4 4 4 4 4 b 1 b b c c 
                        . . c d 4 4 4 4 4 4 4 3 3 3 4 c 
                        . . c d d d 4 4 4 4 4 3 3 3 4 c 
                        . . c d d d 4 4 4 b 4 4 4 4 c . 
                        . . c d d d d b 4 4 c b b c . . 
                        c c c d d d d b b 4 4 c b b c . 
                        c d d d d d d d d c c c c c c . 
                        . c d d d b 4 4 b c c c . . . . 
                        . . c c c b b 4 4 d c . . . . . 
                        . . . . . c c c c c c c . . . . 
                        . . . . . . . c b b b c . . . .
            """),
            img("""
                . . . . . . . c c c c c . . . . 
                        . . . . . . c 4 4 4 4 4 c c . . 
                        . . . . . c 4 4 f 1 4 4 4 4 c . 
                        . . . . c 4 4 4 f f 4 4 4 4 4 c 
                        . . . c 4 4 4 4 4 4 4 4 4 4 4 c 
                        . . . c 4 4 4 4 4 4 b 1 b b c c 
                        . . c d 4 4 4 4 4 4 4 3 3 3 4 c 
                        . . c d d d 4 4 4 4 4 4 4 4 4 c 
                        . . c d d d 4 4 4 b 4 4 4 4 c . 
                        . . c d d d d b 4 4 c b b c . . 
                        c c c d d d d b b 4 4 c b b c . 
                        c d d d d d d d d c c c c c c . 
                        . c c d d d b 4 4 b c c . . . . 
                        . . . c c c b b 4 4 d c . . . . 
                        . . . . . c c c c c c c . . . . 
                        . . . . . . . c b b b c . . . .
            """),
            img("""
                . . . . . . . c c c c c . . . . 
                        . . . . . . c 4 4 4 4 4 c c . . 
                        . . . . . c 4 4 f 1 4 4 4 4 c . 
                        . . . . c 4 4 4 f f 4 4 4 4 4 c 
                        . . . c 4 4 4 4 4 4 4 4 4 4 4 c 
                        . . . c 4 4 4 4 4 4 b 1 b b c c 
                        . . c d 4 4 4 4 4 4 4 3 3 3 4 c 
                        . . c d d d 4 4 4 4 4 4 4 4 4 c 
                        . . c d d d 4 4 4 b 4 4 4 4 c . 
                        . . c d d d d b 4 4 c b b c . . 
                        . c c d d d d b b 4 4 c b b c . 
                        c c d d d d d d b b c c c c c . 
                        c d d d d d 4 4 b 4 4 c c . . . 
                        c c c c c c b b 4 4 b c . . . . 
                        . . . . . . c c c c c c . . . . 
                        . . . . . . c b b b c . . . . .
            """),
            img("""
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . c c c c . . . . 
                        . . . . . . c c 4 4 4 4 c c . . 
                        . . . . . c 4 4 4 4 4 4 4 4 c . 
                        . . . . c 4 4 4 f 1 4 4 4 4 4 c 
                        . . . c 4 4 4 4 f f 4 4 4 4 4 c 
                        . . . c 4 4 4 4 4 4 b 1 b b c c 
                        . . c d 4 4 4 4 4 4 b b 3 3 c c 
                        . . c d d d 4 4 4 4 4 3 3 3 4 c 
                        . . c d d d 4 4 4 4 4 4 4 4 b . 
                        . . c d d d d b 4 4 c b b c . . 
                        c c c d d d d b b 4 4 c b b c . 
                        c d d d d d d d d c c c c c c . 
                        c c d d d b 4 4 d c c c c . . . 
                        . . c c c b 4 4 b c c b c . . . 
                        . . . . . c b 4 4 d c c c . . .
            """),
            img("""
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . c c c c . . . . 
                        . . . . . . c c 4 4 4 4 c c . . 
                        . . . . . c 4 4 4 4 4 4 4 4 c . 
                        . . . . c 4 4 4 f 1 4 4 4 4 4 c 
                        . . . c 4 4 4 4 f f 4 4 4 4 4 c 
                        . . . c 4 4 4 4 4 4 4 4 4 4 4 c 
                        . . c d 4 4 4 4 4 4 b 1 b b c c 
                        . . c d d d 4 4 4 4 4 3 3 3 4 c 
                        . . c d d d 4 4 4 4 4 4 4 4 b . 
                        . . c d d d d b 4 4 c b b c . . 
                        c c c d d d d b b 4 4 c b b c . 
                        c d d d d d d d d c c c c c c . 
                        . c c d d b 4 4 d c c c c . . . 
                        . . . c c b 4 4 c c c b b c . . 
                        . . . . . c 4 4 d c c c c c . .
            """)],
        100,
        True)
game.on_update_interval(2000, on_update_interval)

def on_update_interval2():
    global strawberry
    strawberry = sprites.create(img("""
            ....................
                    ....................
                    ....................
                    ....................
                    ....................
                    ....................
                    ........1133........
                    ........3333........
                    .........44.........
                    ........1111........
                    ........1111........
                    .......111111.......
                    .......111111.......
                    .......111111.......
                    .......333333.......
                    .......333333.......
                    .......333333.......
                    ........3333........
                    ........4444........
                    ....................
        """),
        SpriteKind.food)
    tiles.place_on_random_tile(strawberry, assets.tile("""
        transparency16
    """))
    animation.run_movement_animation(strawberry,
        animation.animation_presets(animation.bobbing),
        5000,
        True)
game.on_update_interval(10000, on_update_interval2)
