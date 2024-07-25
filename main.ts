namespace SpriteKind {
    export const Heart = SpriteKind.create()
    export const Title = SpriteKind.create()
    export const Treasure = SpriteKind.create()
    export const BOSS = SpriteKind.create()
    export const TrueEnding = SpriteKind.create()
    export const FirstEnding = SpriteKind.create()
    export const Invincible = SpriteKind.create()
}
function spawnBoss () {
    BOSS = sprites.create(img`
        ........................
        ........................
        ...........ccc..........
        ...........cccc.........
        .......ccc..ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        ......cb55555555ff55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb13bbc.
        ...cccd55ddddd555b3335c.
        .....bdddddddddd55b335c.
        ..cccdddddb55bbddd5555c.
        ..cccdddddb555bbbbcccc..
        ...ccddddddb5555cbcdc...
        ccccbdddddd5cb55cbcc....
        cddddddddd5555ccbbc.....
        .cddddddbdd555bbbcc.....
        ..ccdddbbbdd55cbcdc.....
        ....ccbbcbddddccdddcc...
        ......cccdd555dcccccc...
        ........cccccccc........
        `, SpriteKind.BOSS)
    BOSS.setVelocity(randint(-20, 20), 0)
    BOSS.ay = 400
    tiles.placeOnTile(BOSS, tiles.getTileLocation(18, 9))
    BOSS.setBounceOnWall(false)
    scaling.scaleByPercent(BOSS, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    statusbar = statusbars.create(25, 5, StatusBarKind.Health)
    statusbar.attachToSprite(BOSS)
    animation.runImageAnimation(
    BOSS,
    [img`
        ........................
        ........................
        ...........cc...........
        .........cccc...........
        .....ccccccc...cc.......
        ...cc555555cccccc.......
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555551ff555555bccc.....
        c55d55ff55555555bcc.....
        c5555555555555555b......
        .cbb31bb55555d555b..c...
        .c5333bb55ddddd55dccc...
        .c533b55ddddddddddbc....
        .c5555ddddb55bdddddccc..
        ..ccccbbbb555bdddddccc..
        ...cdcbc5555bddddddcc...
        ....ccbc55bcdddddddbcccc
        .....cbbccbd55dddddddddc
        .....ccbbbd555ddddddddbc
        ...ccbdcbb555ddbbdddbcc.
        ...cbdddcc55ddbbbbccc...
        ...cccccccbdddbccc......
        ........cd555ddc........
        `,img`
        ........................
        ........................
        ..........ccc...........
        .........cccc...........
        .....ccccccc..ccc.......
        ...cc555555cccccc.......
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555551ff555555bccc.....
        c55d55ff55555555bc......
        c5555555555555555b......
        .cbb31bb5555dd555b.cc...
        .c5333b555ddddd55dccc...
        .c533b55ddddddddddb.....
        .c5555dddbb55bdddddccc..
        ..ccccbbbb555bdddddccc..
        ...cdcbc5555bddddddcc...
        ....ccbc55bc5ddddddbcccc
        .....cbbcc5555dddddddddc
        .....ccbbb555ddbddddddc.
        .....cdcbc55ddbbbdddcc..
        ...ccdddccddddbcbbcc....
        ...ccccccd555ddccc......
        ........cccccccc........
        `,img`
        ........................
        ..........cc............
        .........ccc............
        .....ccccccc.ccc........
        ...cc555555ccccc........
        ..c5555555555bcc........
        .c55551ff55555b.ccc.....
        c55555ff5555555bccc.....
        c55d555555555555bc......
        c55555bb555555555b.c....
        .cbb31b5555ddd555bcc....
        .c5333b555ddddd55dcc....
        .c533b55ddddddd5ddc.....
        ..c555dbbb555bddddb.c...
        ...cccb55555bbdddddcc...
        ....ccb555ccdddddddcc...
        ..ccccbcccbddddddddcc...
        ..c55cbbbbd55dddddddbcc.
        ...c5ccbbd555dddddddddcc
        ....cccbb555ddbbbddddddc
        ......ccb55ddbbbbddddcc.
        ....ccddcbdddbbbbbccc...
        ....ccccd555ddccccc.....
        ........cccccc..........
        `,img`
        ........................
        ..........cc............
        .........ccc............
        .....ccccccc.ccc........
        ...cc555555ccccc........
        ..c5555555555bcc........
        .c55551ff55555b.ccc.....
        c55555ff5555555bccc.....
        c55d555555555555bc......
        c55555bb555555555b.c....
        .cbb31b5555ddd555bcc....
        .c5333b555ddddd55dcc....
        .c533b55ddddddd5ddc.....
        ..c555dbbb555bddddb.c...
        ...cccb55555bbdddddcc...
        ....ccb555ccdddddddcc...
        ..ccccbcccdddddddddcccc.
        ..c55cbbbd55ddddddddcdc.
        ...c5cccd555ddddddddddc.
        ....cc555d5ddbbbbddddbc.
        ......5555ddbbbbbdddbc..
        ......c5555dbbbbbbccc...
        .......c555cccccccc.....
        ........ccc.............
        `,img`
        ........................
        ..........cc............
        .........ccc............
        .....ccccccc.ccc........
        ...cc555555ccccc........
        ..c5555555555bcc........
        .c55551ff55555b.ccc.....
        c55555ff5555555bccc.....
        c55d555555555555bc......
        c55555bb555555555b.c....
        .cbb31b5555ddd555bcc....
        .c5333b555ddddd55dcc....
        .c533b55ddddddd5ddc.....
        ..c555dbbb555bddddb.c...
        ...cccb555555bdddddcc...
        ....ccb5555ccddddddccc..
        ..ccccbcccbddddddddccdc.
        ..c55cbbbbdddddddddbddc.
        ...c5cbbbd55ddddddddddc.
        ....cccbdd55dbbbbddddbc.
        .....cccd555dbbbbdddbc..
        .....c555dddbbbbbbccc...
        .....c55555dbcccccc.....
        ......c5555cc...........
        `,img`
        ........................
        ..........cc............
        .........ccc............
        .....ccccccc..cc........
        ...cc555555ccccc........
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555551ff555555bccc.....
        c55d55ff55555555bc......
        c5555555555555555b......
        .cbb31bb5555dd555b.cc...
        .c5333b555ddddd55dccc...
        .c533b55ddddddd5ddcc....
        .c5555ddddb55bddddb.....
        ..ccccbbbbb55bdddddccc..
        ..ccccbc5555bddddddcccc.
        ..c55cbc555cdddddddccdc.
        ...c5cbbcccdddddddddddc.
        ....cccbbbbd55dddddddbc.
        ....cbcbbbd555ddddddbcc.
        .....cccbb555dbbbddccc..
        .......cc555dbbbbbcc....
        .......cbddddbcccc......
        ......cd5555dc..........
        `],
    100,
    true
    )
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Ducky.tileKindAt(TileDirection.Center, assets.tile`bottom door0`)) {
        level += -1
        levelScreen2(level)
        colourCheck()
    } else if (Ducky.tileKindAt(TileDirection.Top, assets.tile`myTile5`)) {
        level += 1
        levelScreen(level)
        colourCheck()
    } else if (Ducky.tileKindAt(TileDirection.Top, assets.tile`myTile9`)) {
        if (level == 2 && info.life() >= 10) {
            level += 1
            levelScreen(level)
            colourCheck()
        } else if (level == 6 && info.life() >= 20) {
            level += 1
            levelScreen(level)
            colourCheck()
        } else if (level == 0 && info.life() >= 50) {
            level += -1
            levelScreen(level)
            colourCheck()
        } else {
            Ducky.sayText("Not enough hearts :(", 1000, true)
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (fireQUACKer == true) {
        if (info.score() > 0) {
            music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
            if (direction == 100) {
                projectile = sprites.createProjectileFromSprite(img`
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
                    `, Ducky, 250, 0)
                animation.runImageAnimation(
                projectile,
                [img`
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
                    `,img`
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
                    `,img`
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
                    `,img`
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
                    `],
                100,
                true
                )
            } else {
                projectile = sprites.createProjectileFromSprite(img`
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
                    `, Ducky, -250, 0)
                animation.runImageAnimation(
                projectile,
                [img`
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
                    `,img`
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
                    `,img`
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
                    `,img`
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
                    `],
                100,
                true
                )
            }
            projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
            info.changeScoreBy(-1)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BOSS, function (sprite, otherSprite) {
    takeDamage()
    scene.cameraShake(4, 500)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
    colourCheck()
    pause(1000)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.BOSS, function (sprite, otherSprite) {
    statusbar.value += -1
    BOSS.setImage(img`
        ........................
        ........................
        ..........ccc...........
        .........cccc...........
        .....ccccccc..ccc.......
        ...cc444444cccccc.......
        ..c4444444444bcc........
        .c444444444444b..cc.....
        c444441ff444444bccc.....
        c44d44ff44444444bc......
        c4444444444444444b......
        .cbb31bb4444dd444b.cc...
        .c4333b444ddddd44dccc...
        .c433b44ddddddddddb.....
        .c4444dddbb44bdddddccc..
        ..ccccbbbb444bdddddccc..
        ...cdcbc4444bddddddcc...
        ....ccbc44bc4ddddddbcccc
        .....cbbcc4444dddddddddc
        .....ccbbb444ddbddddddc.
        .....cdcbc44ddbbbdddcc..
        ...ccdddccddddbcbbcc....
        ...ccccccd444ddccc......
        ........cccccccc........
        `)
    pause(200)
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
    BOSS.setImage(img`
        ........................
        ........................
        ..........ccc...........
        .........cccc...........
        .....ccccccc..ccc.......
        ...cc555555cccccc.......
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555551ff555555bccc.....
        c55d55ff55555555bc......
        c5555555555555555b......
        .cbb31bb5555dd555b.cc...
        .c5333b555ddddd55dccc...
        .c533b55ddddddddddb.....
        .c5555dddbb55bdddddccc..
        ..ccccbbbb555bdddddccc..
        ...cdcbc5555bddddddcc...
        ....ccbc55bc5ddddddbcccc
        .....cbbcc5555dddddddddc
        .....ccbbb555ddbddddddc.
        .....cdcbc55ddbbbdddcc..
        ...ccdddccddddbcbbcc....
        ...ccccccd555ddccc......
        ........cccccccc........
        `)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Ducky.isHittingTile(CollisionDirection.Bottom)) {
        Ducky.vy = -150
    } else if (Ducky.isHittingTile(CollisionDirection.Right) && DUCK_Tape == true) {
        Ducky.vy = -150
    } else if (Ducky.isHittingTile(CollisionDirection.Left) && DUCK_Tape == true) {
        Ducky.vy = -150
    } else if (refresh == true && BUBBLE_Jump == true) {
        Ducky.startEffect(effects.bubbles, 100)
        Ducky.startEffect(effects.bubbles, 200)
        Ducky.startEffect(effects.bubbles, 500)
        Ducky.vy = -150
        if (Ducks_can_fly == false) {
            refresh = false
        }
    }
})
function levelScreen2 (num: number) {
    if (num == 0) {
        tiles.setCurrentTilemap(tilemap`level9`)
        checkpoint = tiles.getTileLocation(30, 10)
    } else if (num == 1) {
        tiles.setCurrentTilemap(tilemap`level13`)
        checkpoint = tiles.getTileLocation(30, 1)
    } else if (num == 2) {
        tiles.setCurrentTilemap(tilemap`level16`)
        checkpoint = tiles.getTileLocation(22, 4)
    } else if (num == 3) {
        tiles.setCurrentTilemap(tilemap`level30`)
        checkpoint = tiles.getTileLocation(14, 2)
    } else if (num == 4) {
        tiles.setCurrentTilemap(tilemap`level32`)
        checkpoint = tiles.getTileLocation(2, 2)
    } else if (num == 5) {
        tiles.setCurrentTilemap(tilemap`level37`)
        checkpoint = tiles.getTileLocation(2, 2)
    } else if (num == 6) {
        tiles.setCurrentTilemap(tilemap`level39`)
        checkpoint = tiles.getTileLocation(4, 4)
    } else if (num == 7) {
        tiles.setCurrentTilemap(tilemap`Room 1`)
        checkpoint = tiles.getTileLocation(29, 2)
    } else if (num == 8) {
        tiles.setCurrentTilemap(tilemap`level3`)
        checkpoint = tiles.getTileLocation(2, 1)
    } else if (num == 9) {
        tiles.setCurrentTilemap(tilemap`level43`)
        checkpoint = tiles.getTileLocation(21, 14)
        sprites.destroyAllSpritesOfKind(SpriteKind.Treasure)
        sprites.destroyAllSpritesOfKind(SpriteKind.TrueEnding)
        sprites.destroyAllSpritesOfKind(SpriteKind.FirstEnding)
    }
    tiles.placeOnTile(Ducky, checkpoint)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = -100
    animation.runImageAnimation(
    Ducky,
    [img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        . . . b b 5 5 5 d d d c c . . . 
        . . . . b b c c c c c c . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Heart, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
    sprites.destroy(otherSprite, effects.hearts, 100)
    info.changeLifeBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.placeOnTile(sprite, checkpoint)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
    takeDamage()
    colourCheck()
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile3`, function (sprite, location) {
    sprites.destroy(sprite, effects.blizzard, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FirstEnding, function (sprite, otherSprite) {
    otherSprite.sayText("Hi, thanks for playing!", 2000, false)
    pause(1000)
    otherSprite.sayText("Maybe you can find your way to the true ending? ;)", 5000, false)
    pause(5000)
})
function takeDamage () {
    if (level == 9) {
        info.changeLifeBy(-2)
    } else {
        info.changeLifeBy(-1)
    }
    scene.cameraShake(4, 500)
    scene.setBackgroundColor(10)
}
// Colour is set back to regular background colour after taking damage.
function colourCheck () {
    if (level <= 2) {
        scene.setBackgroundColor(11)
    } else if (level <= 6) {
        scene.setBackgroundColor(6)
    } else {
        scene.setBackgroundColor(12)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile`)
    if (level == 1) {
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        game.showLongText("You have acquired FireQUACKer!", DialogLayout.Bottom)
        game.showLongText("Press B to shoot a red beam.", DialogLayout.Bottom)
        game.showLongText("Look out for pink bottles for ammo!", DialogLayout.Bottom)
        fireQUACKer = true
        info.setScore(10)
    } else if (level == 4) {
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        game.showLongText("You have acquired DUCK Tape!", DialogLayout.Bottom)
        game.showLongText("Press A while against a wall to jump up!", DialogLayout.Bottom)
        DUCK_Tape = true
    } else if (level == 7) {
        checkpoint = tiles.getTileLocation(29, 13)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        game.showLongText("You have acquired BUBBLE Jump!", DialogLayout.Bottom)
        game.showLongText("Press A while airborne to jump again.", DialogLayout.Bottom)
        game.showLongText("You can even jump after a wall jump!", DialogLayout.Bottom)
        BUBBLE_Jump = true
    } else if (level == -1) {
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        game.showLongText("You have acquired THE KNOWLEDGE.", DialogLayout.Bottom)
        game.showLongText("You can fly.", DialogLayout.Bottom)
        game.showLongText("Just press A.", DialogLayout.Bottom)
        game.showLongText("You always had it in you to fly :)", DialogLayout.Bottom)
        Ducks_can_fly = true
    }
    tiles.setTileAt(location, assets.tile`transparency16`)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    BOSS.setVelocity(0, 0)
    BOSS.ay = 0
    BOSS.setBounceOnWall(false)
    scene.cameraShake(4, 5000)
    sprites.destroy(BOSS, effects.disintegrate, 5000)
    music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.UntilDone)
    effects.bubbles.startScreenEffect(5000)
    bossCounter += 1
    pause(3000)
    tiles.setTileAt(tiles.getTileLocation(21, 13), assets.tile`myTile5`)
    tiles.setTileAt(tiles.getTileLocation(21, 14), assets.tile`bottom door`)
    for (let index = 0; index <= 7; index++) {
        tiles.setTileAt(tiles.getTileLocation(5 + index * 2, 14), assets.tile`myTile0`)
    }
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    if (!(sprite.isHittingTile(CollisionDirection.Bottom))) {
        if (sprite.isHittingTile(CollisionDirection.Right)) {
            sprite.setVelocity(-50, 0)
            animation.runImageAnimation(
            sprite,
            [img`
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
                `,img`
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
                `,img`
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
                `,img`
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
                `,img`
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
                `,img`
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
                `],
            100,
            true
            )
        } else if (sprite.isHittingTile(CollisionDirection.Left)) {
            sprite.setVelocity(50, 0)
            animation.runImageAnimation(
            sprite,
            [img`
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
                `,img`
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
                `,img`
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
                `,img`
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
                `,img`
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
                `,img`
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
                `],
            100,
            true
            )
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 100
    animation.runImageAnimation(
    Ducky,
    [img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        . . c b d d d d 5 5 5 5 b b . . 
        . . . c c d d d d 5 5 b b . . . 
        . . . . c c c c c c b b . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.TrueEnding, function (sprite, otherSprite) {
    otherSprite.sayText("Hi, its me Josh, the guy who made the game!", 3000, false)
    pause(500)
    otherSprite.sayText("Thank you for playing this long enough to find me lol", 5000, false)
    pause(5000)
    otherSprite.sayText("Bye bye!", 5000, false)
    game.showLongText("Game over! :)", DialogLayout.Full)
    game.reset()
})
function levelScreen (num: number) {
    if (num == 0) {
        tiles.setCurrentTilemap(tilemap`level9`)
        checkpoint = tiles.getTileLocation(1, 10)
    } else if (num == 1) {
        tiles.setCurrentTilemap(tilemap`level13`)
        checkpoint = tiles.getTileLocation(1, 14)
        if (fireQUACKer == false) {
            tiles.setTileAt(tiles.getTileLocation(28, 1), sprites.dungeon.chestClosed)
        } else {
            tiles.setTileAt(tiles.getTileLocation(28, 1), assets.tile`myTile`)
        }
    } else if (num == 2) {
        tiles.setCurrentTilemap(tilemap`level16`)
        checkpoint = tiles.getTileLocation(1, 4)
    } else if (num == 3) {
        tiles.setCurrentTilemap(tilemap`level30`)
        checkpoint = tiles.getTileLocation(1, 14)
    } else if (num == 4) {
        tiles.setCurrentTilemap(tilemap`level32`)
        checkpoint = tiles.getTileLocation(2, 11)
        if (DUCK_Tape == false) {
            tiles.setTileAt(tiles.getTileLocation(7, 6), sprites.dungeon.chestClosed)
        } else {
            tiles.setTileAt(tiles.getTileLocation(7, 6), assets.tile`myTile`)
        }
    } else if (num == 5) {
        tiles.setCurrentTilemap(tilemap`level37`)
        checkpoint = tiles.getTileLocation(2, 30)
    } else if (num == 6) {
        tiles.setCurrentTilemap(tilemap`level39`)
        checkpoint = tiles.getTileLocation(12, 12)
    } else if (num == 7) {
        tiles.setCurrentTilemap(tilemap`Room 1`)
        checkpoint = tiles.getTileLocation(2, 1)
        if (BUBBLE_Jump == false) {
            tiles.setTileAt(tiles.getTileLocation(29, 13), sprites.dungeon.chestClosed)
        } else {
            tiles.setTileAt(tiles.getTileLocation(29, 13), assets.tile`myTile`)
        }
    } else if (num == 8) {
        tiles.setCurrentTilemap(tilemap`level3`)
        checkpoint = tiles.getTileLocation(1, 30)
    } else if (num == 9) {
        tiles.setCurrentTilemap(tilemap`level43`)
        checkpoint = tiles.getTileLocation(21, 3)
    } else if (num == 10) {
        tiles.setCurrentTilemap(tilemap`level45`)
        checkpoint = tiles.getTileLocation(1, 30)
        nonTrue = sprites.create(img`
            ...........cccccc...........................
            ..........ccbbbbcc..........................
            .........ccbbbbbbcc.........................
            .........cbbbbbbbbc.........................
            .........cddddddddc.........................
            .........cddddddddc.........................
            .........cdbbdddddc..ccc....................
            .........cddddbbddcccbbcc...................
            .........cddddddddccccbbcc..................
            .........cdbbdddddcccccbddc.................
            .........cddddbbddccccccddc.................
            ...cccccccddddddddcdddddddc.................
            ..ccccccccddddbbddcdddddddc.................
            .cccccccccddddddddbddbdbddcccc..............
            ccccccccccdbbdbbddbddbdbddbcccc.............
            bddddddddcddddddddbdddddddbccccc............
            bddddddddcdbbdbbddbddddbddbccbbc............
            bdbbdbbddcddddddddbddbdbdddcbbbb............
            bddddddddcddddbbddbddddddbdcbbbcc...........
            bdddddddccdbbddddcbddbdddbdbbcccc...........
            bdbbdddccdddddddcccbdbdbdccccccc...cc.......
            bddddddcdddddddcccccdddcc555555cccccc.......
            bddddbbbdddbbdbbdddbbdc5555555555bcc........
            bbcccbbbddddddbdddddbc555555555555b..cc.....
            bccbccbbdddbbdbdbdbdc555551ff555555bccc.....
            ccbbbccbddddddbdddddc55d55ff55555555bcc.....
            cbbbbbbbddddddbdbdbdc5555555555555555b......
            cbbbbbbddddbbdbdddddbcbb31bb55555d555b..c...
            cbbbbbbdddddddbdbdbdbc5333bb55ddddd55dccc...
            bbbbbbbdddddddbdddddbc533b55ddddddddddbc....
            bbbbbbbdddddddbdddddbc5555ddddb55bdddddccc..
            ......................ccccbbbb555bdddddccc..
            .......................cdcbc5555bddddddcc...
            ........................ccbc55bcdddddddbcccc
            .........................cbbccbd55dddddddddc
            .........................ccbbbd555ddddddddbc
            .......................ccbdcbb555ddbbdddbcc.
            .......................cbdddcc55ddbbbbccc...
            .......................cccccccbdddbccc......
            ............................cd555ddc........
            `, SpriteKind.FirstEnding)
        tiles.placeOnTile(nonTrue, tiles.getTileLocation(13, 29))
        True = sprites.create(img`
            ....................................................fffffffff......................
            ...................................................ff1111111ff.....................
            ..................................................ff111111111f.....................
            .................................................ff1111111111ff....................
            ................................................ff111111bbb11ff....................
            ................................................f1111111bbdb11f....................
            ................................................f1111111bbdd11ff...................
            ................................................fc1111ccccdd111f...................
            ................................................fccccccddddd111ff..................
            ...............................................f11cccdddddcc1111f..................
            ...............................................ff11cdddddcc11111ff.................
            ................................................ffffffffff1111111f.................
            .........................................................ff111111ff................
            ..........................................................f1111111f................
            .........................................fffffffff........ff111111f................
            .......................................fff1111111fff.......f111111ff...............
            ......................................ff11111111111ff......fb111111f...............
            .....................................ff1111111111111ff.....fb111111f...............
            .....................................f11111111cc11111f.....fb11111df...............
            ....................................ff1cc11111cc11111ff....fbd111ddf...............
            ....................................f11cc11111cc111111f....fdddddddf...............
            ....................................f11cc11111bb111111f...fbbddddddf...............
            ....................................f11bb1111111111111f..ff1bbdddddf...............
            ....................................f1111111111b111111f.ff111bbdddff...............
            ....fffffff.........................f111b11111bb111111fff11111bbdff................
            ...ff11111ff........................f1111cccccc1111111ff1111111bff.................
            ..ff1111111ff.......................f11111ccc33111111cc111111111ff.................
            .ff111bbb111ff......................f111111c333111111cb1111111111f.................
            ff11111bbb111ff.....................f111111c33311111cc1b11111111ff.................
            f1111cccbb1111f.....................ff11111133111111c11b1111111ff..................
            f111cc11111111f......................f1111111111111cc111b11111ff...................
            f111c111111111f......................ff111111111111c1111b1111ff....................
            f111ccccc11111f.......................ff1111111111cc11111b11ff.....................
            ff111bbdc11111ff.......................fcc1111111cc1111111bff......................
            .fffbbdddb11111f.......................fccccccccc1b11111111ff......................
            ...ffdddddbb111ff.....................ffb1111b1111b11111111ff......................
            ....ffdddd111111f....................ffb11111b111b111111111ff......................
            .....fffff111111ff..................ffbb111111bbb1111111111ffffffff................
            .........f1111111f.................ffdb11111111111111111111ffffffffff..............
            .........ff111111ff......fffffffffffddb1111111111111111111cc1111111fff.............
            ..........ff111111f....fff1111111cccddb11111111111161111cc11111111111ff............
            ..........ff111111ff..ff11111111111ccdd1111111111166111cc1111111111111ff...........
            ...........f1111111f.ff1111111111111ccd1111161611166111c111111111111111ff..........
            ...........ffd11111fff111111111111111cc111166666111611cc111111111111111ff..........
            ............fdd111b1ff111111111111111cc111116161111611c11111111133133111f..........
            ............ffddddb1f11111111111111111c111166666111611c11111111133333111ff.........
            .............fdddb11f1cc11111111111111cc11116161116661c13313311133333111ff.........
            .............ffdbb11f1cc11111111111111cc11111111111111c13333311113331111ff.........
            ..............fccb11f1cc11111111111111ff11111111111111c13333311111311111ff.........
            ..............fcc111f1bb11111cc1111111ff11111111111661c11333111111111111ff.........
            ..............fcc111f11111111cc1111111fff1166616611616c1113111111b111111ff.........
            ..............fc1111f11b11111cc1111111fff1161116161616c11111b1111b111111ff.........
            ..............f11111f11b111b1bb1111111fff1166616661616c111111cccc1111111ff.........
            ..............f11111f111cccb1111111111f.ff161116161616cc111111111111111cf..........
            ...............f11111c11b331111111111ff.ff1611161611111c111111111111111cffff.......
            ...............ff1111c113331111111111f..ff1111111111111cc1111111111111ccddfff......
            ................ff1111c1333111111111ff...f11111111111111cc11111111111ccddbddff.....
            .................ff1111c11111111111ff....f11111111111111cccc1111111cccddbbdddff....
            ..................ff11b1cc1111111cccf....f111111111111bcc11ccccccccc1111b11dddff...
            ...................ff1b11bcccccccbdcff...f1111111111bbcc1111111111111111b1111dff...
            ....................ff111bb11111bbddfff..f111111bbbbbcc111111111ccc1111cc111111ff..
            ....................ff1111bb111bbddddfff.fbbbbbbbbbbbcd111111111c1cc11cc1c11111ff..
            .....................f11111bbbbbddddddffffbbbbbbbbbbccd111cc111c111cc1c11c111111ff.
            .....................f111111ddddddddddbfffbbbbbbbbbbcdd11c1cc11c1111ccc11c111111ff.
            .....................f1111111ddddddddbbdfffbbbbbbbbccdd11c11c1c111111cc11c111111bff
            .....................f11161611dd6dddbbdddffcbbbbbbbccdd11c11ccc1111111111c11111bbff
            .....................f11666661166dddbdddddccbbbbbbbcddd11c11ccc1111111111c1111bbddf
            .....................f111616111661ddbddddddccbbbbbbcddd11c1111cc111111111ccc1bbdddf
            .....................ff1666661116111bdddddd1cbbbbbbccbbd1c11111cc1111111111ccccdddd
            .....................ff1161611116111b1dddd11ccbbbbbcddbbcc111111cc111111111111ccccd
            ......................f1111111116111b11111111cbbbbbcdddcc11111111ccc1111111111111cc
            ......................f1111111166611b11111111ccbbbbcddcc111111111ccccc1111111111111
            ......................f1166611111111bb11111111cbbbccdcc11111111ccc111ccc11111111111
            ......................f11611166111111b11111111cbbbcccc111111cccc1111111ccc111111111
            ......................ff1666161616611b1111111ccbbbccc1111111c111111111111ccc1111111
            ......................ff1611166616161b111111bcccbbcc1111111cc11111111111111ccc11111
            .......................f16111616161611b111bbb1ccbbc11111111c11111111111111111fcc111
            .......................f11111616161611bbbbb111cccbc1111111cc11111111111111111ffccff
            .......................f1111111111111111b111111cccc111111cc1111111111111111111f....
            .......................f1111111111111111b111111cccc11111cc11111111111111111111f....
            `, SpriteKind.Treasure)
        tiles.placeOnTile(True, tiles.getTileLocation(12, 4))
        True2 = sprites.create(img`
            . . . f f f f f . . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f . . 
            f c f f c c f f f c c f f 
            f c c f f f f e f f f f f 
            f f f f f f f e e f f f . 
            f f e e f b f e e f f . . 
            . f e 4 e 1 f 4 4 f . . . 
            . f f f e 4 4 4 4 f . . . 
            . . f e e e e e f f . . . 
            . . e 4 4 e 7 7 7 f . . . 
            . . e 4 4 e 7 7 7 f . . . 
            . . f e e f 6 6 6 f . . . 
            . . . f f f f f f . . . . 
            . . . . f f f . . . . . . 
            `, SpriteKind.TrueEnding)
        tiles.placeOnTile(True2, tiles.getTileLocation(4, 6))
    } else if (num == -1) {
        tiles.setCurrentTilemap(tilemap`level47`)
        checkpoint = tiles.getTileLocation(2, 7)
        if (Ducks_can_fly == false) {
            tiles.setTileAt(tiles.getTileLocation(14, 2), sprites.dungeon.chestClosed)
        } else {
            tiles.setTileAt(tiles.getTileLocation(14, 2), assets.tile`myTile`)
        }
    }
    tiles.placeOnTile(Ducky, checkpoint)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
}
info.onLifeZero(function () {
    music.stopAllSounds()
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.InBackground)
    game.showLongText("Game Over :(", DialogLayout.Top)
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    sprites.destroy(otherSprite, effects.confetti, 200)
    info.changeScoreBy(5)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`bottom door`, function (sprite, location) {
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
    sprites.destroy(sprite, effects.warmRadial, 100)
    sprites.destroy(otherSprite, effects.ashes, 100)
    heart = sprites.create(img`
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
        `, SpriteKind.Heart)
    tiles.placeOnTile(heart, sprite.tilemapLocation())
    animation.runMovementAnimation(
    heart,
    animation.animationPresets(animation.bobbing),
    5000,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    takeDamage()
    scene.cameraShake(4, 500)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
    colourCheck()
    pause(1000)
})
let kaiju: Sprite = null
let projectile2: Sprite = null
let bossAttacks = 0
let ammo: Sprite = null
let heart: Sprite = null
let True2: Sprite = null
let True: Sprite = null
let nonTrue: Sprite = null
let checkpoint: tiles.Location = null
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let BOSS: Sprite = null
let direction = 0
let refresh = false
let Ducks_can_fly = false
let BUBBLE_Jump = false
let DUCK_Tape = false
let fireQUACKer = false
let level = 0
let Ducky: Sprite = null
scene.setBackgroundColor(12)
music.setVolume(202)
music.play(music.createSong(hex`003c000408020300001c00010a006400f4016400000400000000000000000000000000050000042a0000000400012918001a0001291b001c00012a1e001f00012c2000240001293800390001293c003d00012706001c00010a006400f401640000040000000000000000000000000000000002600000000400010f06000700010a08000c00010a0e000f00010f12001300010f16001700010a18001c00010a1c002000010f20002400010d26002700010828002c0001082e002f00010d32003300010d3600370001083800390001083c004000010d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80090000000010001000400050001070600070001000800090001000a000b0001070e000f0001001000110001001200130001071600170001001800190001001c001d0001071e001f0001002000210001002400250001072600270001002800290001002a002b0001072e002f0001003000310001003200330001073600370001003800390001003c003d0001073e003f000100`), music.PlaybackMode.LoopingInBackground)
let Title = sprites.create(img`
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
    `, SpriteKind.Title)
Title.setPosition(80, 41)
let text_list = [
"Start!",
"quack!",
"duck, but not really.",
"play the game!",
"clash!"
]
Ducky = sprites.create(img`
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
    `, SpriteKind.Player)
Ducky.setPosition(76, 96)
animation.runImageAnimation(
Ducky,
[img`
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
    `,img`
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
    `,img`
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
    `,img`
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
    `,img`
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
    `,img`
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
    . c d d c c b 5 5 5 5 5 5 d b . 
    . . c b d d d d 5 5 5 5 b b . . 
    . . . c c d d d d 5 5 b b . . . 
    . . . . c c c c c c b b . . . . 
    `],
100,
true
)
game.setDialogFrame(img`
    ..................................................................
    ....33.......33...........dddd............dddd............aaa.....
    ...a533.....393....ddddddd1111d....ddddddd1111d....3333...a35a....
    ...a553aaa339993.dd1111dd111111dddd1111dd111111dd.39393aaa3553aa..
    ..a355555a3999993d11911111111111dd11911111111111d339993a555555553.
    .a555555333399933119991111111111111999111111111113999993a55555533.
    .a355555333393931111911111115511111191111111551111399933a3555533..
    .aa355555a1333311111111111115511111111111111551111339331a55555a...
    ...a55355a1111111111111111111111111111111111111111133311a55335a...
    ...a5aaaaa1111191111111111111111111111111111111111111111aaa33aa...
    ...aa3311115511111111111111111111111111111111111119111111113333...
    ..3339331115511111111111111111111111111111111111111111551133393...
    ..39999331111111111111111111111111111111111111111111115511399993..
    ..339999311111111111111111111111111111111111111111111111113399993.
    ..399993311111111111111111111111111111111111111111111111113999933.
    ...339331191111111111111111111111111111111111111111111119113393...
    ....3311111111111111111111111111111111111111111111111111111133....
    ...dd11111111111111111111111111111111111111111111111111111111dd...
    ...d1111111111111111111111111111111111111111111111111111111111d...
    ..d111111111111111111111111111111111111111111111111111111111911d..
    .d1111551111111111111111111111111111111111111111111111111119991d..
    .d1111551111111111111111111111111111111111111111111111111111911d..
    .d1111111111111111111111111111111111111111111111111111111111111d..
    .d111111111111111111111111111111111111111111111111111111111111dd..
    ..d11111111111111111111111111111111111111111111111111111111111dd..
    ..dd11111111111111111111111111111111111111111111111111111111111d..
    ..dd111111111111111111111111111111111111111111111111111111111111d.
    ..d1111111111111111111111111111111111111111111111111111111111111d.
    ..d1191111111111111111111111111111111111111111111111111111551111d.
    ..d1999111111111111111111111111111111111111111111111111111551111d.
    ..d119111111111111111111111111111111111111111111111111111111111d..
    ...d1111111111111111111111111111111111111111111111111111111111d...
    ...dd11111111111111111111111111111111111111111111111111111111dd...
    ...dd11111111111111111111111111111111111111111111111111111111dd...
    ...d1111111111111111111111111111111111111111111111111111111111d...
    ..d111111111111111111111111111111111111111111111111111111111911d..
    .d1111551111111111111111111111111111111111111111111111111119991d..
    .d1111551111111111111111111111111111111111111111111111111111911d..
    .d1111111111111111111111111111111111111111111111111111111111111d..
    .d111111111111111111111111111111111111111111111111111111111111dd..
    ..d11111111111111111111111111111111111111111111111111111111111dd..
    ..dd11111111111111111111111111111111111111111111111111111111111d..
    ..dd111111111111111111111111111111111111111111111111111111111111d.
    ..d1111111111111111111111111111111111111111111111111111111111111d.
    ..d1191111111111111111111111111111111111111111111111111111551111d.
    ..d1999111111111111111111111111111111111111111111111111111551111d.
    ..d119111111111111111111111111111111111111111111111111111111111d..
    ...d1111111111111111111111111111111111111111111111111111111111d...
    ...dd11111111111111111111111111111111111111111111111111111111dd...
    ....3311111111111111111111111111111111111111111111111111111133....
    ...393311911111111111111111111111111111111111111111111191133933...
    .339999311111111111111111111111111111111111111111111111113399993..
    .399993311111111111111111111111111111111111111111111111113999933..
    ..39999311551111111111111111111111111111111111111111111113399993..
    ...3933311551111111111111111111111111111111111111111155111339333..
    ...3333111111119111111111111111111111111111111111111155111133aa...
    ...aa33aaa1111111111111111111111111111111111111111911111aaaaa5a...
    ...a53355a1133311111111111111111111111111111111111111111a55355a...
    ...a55555a1339331111551111111111111155111111111111133331a555553aa.
    ..3355553a339993111155111111191111115511111119111139393333555553a.
    .33555555a399999311111111111999111111111111199911339993333555555a.
    .355555555a399933d11111111111911dd11111111111911d3999993a555553a..
    ..aa3553aaa39393.dd111111dd1111dddd111111dd1111dd.399933aaa355a...
    ....a53a...3333....d1111ddddddd....d1111ddddddd....393.....335a...
    .....aaa............dddd............dddd...........33.......33....
    ..................................................................
    `)
game.showLongText("Press A to " + text_list[randint(0, 4)], DialogLayout.Bottom)
Ducky.sayText("Let's GO!", 1000, true)
music.stopAllSounds()
scene.setBackgroundColor(9)
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
music.play(music.createSong(assets.song`JERSEY`), music.PlaybackMode.LoopingInBackground)
sprites.destroy(Title)
scene.setBackgroundColor(11)
level = 0
let bossCounter = 0
fireQUACKer = false
DUCK_Tape = false
BUBBLE_Jump = false
Ducks_can_fly = false
refresh = true
direction = 100
levelScreen(level)
info.setLife(5)
controller.moveSprite(Ducky, 100, 0)
Ducky.setStayInScreen(true)
Ducky.ay = 400
scene.cameraFollowSprite(Ducky)
game.onUpdate(function () {
    if (!(Ducky.isHittingTile(CollisionDirection.Bottom))) {
        if (Ducky.isHittingTile(CollisionDirection.Right) && DUCK_Tape == true) {
            Ducky.setImage(img`
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
                `)
            refresh = true
        } else if (Ducky.isHittingTile(CollisionDirection.Left) && DUCK_Tape == true) {
            Ducky.setImage(img`
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
                `)
            refresh = true
        }
    } else {
        refresh = true
    }
    Ducky.ay = 400
})
game.onUpdateInterval(5000, function () {
    if (fireQUACKer == true) {
        ammo = sprites.create(img`
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
            `, SpriteKind.Food)
        ammo.lifespan = 15000
        tiles.placeOnRandomTile(ammo, assets.tile`transparency16`)
        tiles.placeOnRandomTile(ammo, sprites.dungeon.darkGroundCenter)
        animation.runMovementAnimation(
        ammo,
        animation.animationPresets(animation.bobbing),
        5000,
        true
        )
    }
})
game.onUpdateInterval(1000, function () {
    if (level == 9 && bossCounter == 1) {
        bossAttacks = randint(0, 2)
        if (bossAttacks == 0) {
            BOSS.setVelocity(randint(-20, 20), 150)
            BOSS.setBounceOnWall(true)
        } else if (bossAttacks == 1) {
            projectile2 = sprites.createProjectileFromSprite(img`
                ..............ccccccccc........
                ............cc555555555cc......
                ...........c5555555555555c.....
                ..........c55555555555555dc....
                .........c555555555555b5bdc....
                .........555bc1555555555bdcccc.
                ........c555ccc55555555bbdccddc
                ........c555bcb5555555ccddcdddc
                .......c555555555551ccccddbdddc
                .......c555555b555c1cccbddbbdbc
                .......c5555555bbc33333ddddbcc.
                .......c555555555bc333555ddbc..
                .......c5555555555555555555c...
                .......cd555555555555cccc555c..
                .......cd55555555555c555c555c..
                .......cdd555555555b5555b555c..
                .......cddd55555ddbb555bb555c..
                .......cdddd55555555555b5555c..
                .......cddddd5555555ddb5555dc..
                c......cdddddd555555555555dcc..
                cc...ccddddddd555555555555dc...
                cdccccdddddd555555d55555ddcc...
                cdddddddddbd5555555ddddddccccc.
                ccdddddddbb55555555bddddccbddc.
                .ccddddddbd55555555bdddccdddc..
                ..cccddddbd5555555cddcccddbc...
                ....ccccccd555555bcccc.cccc....
                .........cc555555bc............
                .........cc55555555c...........
                ..........cccccccccc...........
                `, BOSS, 20, 20)
            projectile2.setKind(SpriteKind.Enemy)
            scaling.scaleToPercent(projectile2, 40, ScaleDirection.Uniformly, ScaleAnchor.Middle)
            projectile2.follow(Ducky)
        } else {
            for (let index = 0; index <= 2; index++) {
                if (Ducky.x > BOSS.x) {
                    animation.runImageAnimation(
                    BOSS,
                    [img`
                        ........................
                        ........................
                        ...........cc...........
                        ...........cccc.........
                        .......cc...ccccccc.....
                        .......cccccc555555cc...
                        ........ccb5555555555c..
                        .....cc..b555555555555c.
                        .....cccb555555ff155555c
                        .....ccb55555555ff55d55c
                        ......b5555555555555555c
                        ...c..b555d55555bb13bbc.
                        ...cccd55ddddd55bb3335c.
                        ....cbdddddddddd55b335c.
                        ..cccdddddb55bdddd5555c.
                        ..cccdddddb555bbbbcccc..
                        ...ccddddddb5555cbcdc...
                        ccccbdddddddcb55cbcc....
                        cddddddddd55dbccbbc.....
                        cbdddddddd555dbbbcc.....
                        .ccbdddbbdd555bbcdbcc...
                        ...cccbbbbdd55ccdddbc...
                        ......cccbdddbccccccc...
                        ........cdd555dc........
                        `,img`
                        ........................
                        ........................
                        ...........ccc..........
                        ...........cccc.........
                        .......ccc..ccccccc.....
                        .......cccccc555555cc...
                        ........ccb5555555555c..
                        .....cc..b555555555555c.
                        .....cccb555555ff155555c
                        ......cb55555555ff55d55c
                        ......b5555555555555555c
                        ...cc.b555dd5555bb13bbc.
                        ...cccd55ddddd555b3335c.
                        .....bdddddddddd55b335c.
                        ..cccdddddb55bbddd5555c.
                        ..cccdddddb555bbbbcccc..
                        ...ccddddddb5555cbcdc...
                        ccccbdddddd5cb55cbcc....
                        cddddddddd5555ccbbc.....
                        .cddddddbdd555bbbcc.....
                        ..ccdddbbbdd55cbcdc.....
                        ....ccbbcbddddccdddcc...
                        ......cccdd555dcccccc...
                        ........cccccccc........
                        `,img`
                        ........................
                        ............cc..........
                        ............ccc.........
                        ........ccc.ccccccc.....
                        ........ccccc555555cc...
                        ........ccb5555555555c..
                        .....ccc.b55555ff15555c.
                        .....cccb5555555ff55555c
                        ......cb555555555555d55c
                        ....c.b555555555bb55555c
                        ....ccb555ddd5555b13bbc.
                        ....ccd55ddddd555b3335c.
                        .....cdd5ddddddd55b335c.
                        ...c.bddddb555bbbd555c..
                        ...ccdddddbb55555bccc...
                        ...ccdddddddcc555bcc....
                        ...ccddddddddbcccbcccc..
                        .ccbddddddd55dbbbbc55c..
                        ccddddddddd555dbbcc5c...
                        cddddddbbbdd555bbccc....
                        .ccddddbbbbdd55bcc......
                        ...cccbbbbbdddbcddcc....
                        .....cccccdd555dcccc....
                        ..........cccccc........
                        `,img`
                        ........................
                        ............cc..........
                        ............ccc.........
                        ........ccc.ccccccc.....
                        ........ccccc555555cc...
                        ........ccb5555555555c..
                        .....ccc.b55555ff15555c.
                        .....cccb5555555ff55555c
                        ......cb555555555555d55c
                        ....c.b555555555bb55555c
                        ....ccb555ddd5555b13bbc.
                        ....ccd55ddddd555b3335c.
                        .....cdd5ddddddd55b335c.
                        ...c.bddddb555bbbd555c..
                        ...ccdddddbb55555bccc...
                        ...ccdddddddcc555bcc....
                        .ccccdddddddddcccbcccc..
                        .cdcdddddddd55dbbbc55c..
                        .cdddddddddd555dccc5c...
                        .cbddddbbbbdd5d555cc....
                        ..cbdddbbbbbdd5555......
                        ...cccbbbbbbd5555c......
                        .....cccccccc555c.......
                        .............ccc........
                        `,img`
                        ........................
                        ............cc..........
                        ............ccc.........
                        ........ccc.ccccccc.....
                        ........ccccc555555cc...
                        ........ccb5555555555c..
                        .....ccc.b55555ff15555c.
                        .....cccb5555555ff55555c
                        ......cb555555555555d55c
                        ....c.b555555555bb55555c
                        ....ccb555ddd5555b13bbc.
                        ....ccd55ddddd555b3335c.
                        .....cdd5ddddddd55b335c.
                        ...c.bddddb555bbbd555c..
                        ...ccdddddb555555bccc...
                        ..cccddddddcc5555bcc....
                        .cdccddddddddbcccbcccc..
                        .cddbdddddddddbbbbc55c..
                        .cdddddddddd55dbbbc5c...
                        .cbddddbbbbd55ddbccc....
                        ..cbdddbbbbd555dccc.....
                        ...cccbbbbbbddd555c.....
                        .....ccccccbd55555c.....
                        ...........cc5555c......
                        `,img`
                        ........................
                        ............cc..........
                        ............ccc.........
                        ........cc..ccccccc.....
                        ........ccccc555555cc...
                        ........ccb5555555555c..
                        .....cc..b555555555555c.
                        .....cccb555555ff155555c
                        ......cb55555555ff55d55c
                        ......b5555555555555555c
                        ...cc.b555dd5555bb13bbc.
                        ...cccd55ddddd555b3335c.
                        ....ccdd5ddddddd55b335c.
                        .....bddddb55bdddd5555c.
                        ..cccdddddb55bbbbbcccc..
                        .ccccddddddb5555cbcccc..
                        .cdccdddddddc555cbc55c..
                        .cdddddddddddcccbbc5c...
                        .cbddddddd55dbbbbccc....
                        .ccbdddddd555dbbbcbc....
                        ..cccddbbbd555bbccc.....
                        ....ccbbbbbd555cc.......
                        ......ccccbddddbc.......
                        ..........cd5555dc......
                        `],
                    100,
                    true
                    )
                    projectile2 = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 4 4 4 4 . . . . . . 
                        . . . . 4 4 4 5 5 4 4 4 . . . . 
                        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                        . . . . 4 4 2 2 2 2 4 4 . . . . 
                        . . . . . . 4 4 4 4 . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, BOSS, 100, 0)
                } else {
                    animation.runImageAnimation(
                    BOSS,
                    [img`
                        ........................
                        ........................
                        ...........cc...........
                        .........cccc...........
                        .....ccccccc...cc.......
                        ...cc555555cccccc.......
                        ..c5555555555bcc........
                        .c555555555555b..cc.....
                        c555551ff555555bccc.....
                        c55d55ff55555555bcc.....
                        c5555555555555555b......
                        .cbb31bb55555d555b..c...
                        .c5333bb55ddddd55dccc...
                        .c533b55ddddddddddbc....
                        .c5555ddddb55bdddddccc..
                        ..ccccbbbb555bdddddccc..
                        ...cdcbc5555bddddddcc...
                        ....ccbc55bcdddddddbcccc
                        .....cbbccbd55dddddddddc
                        .....ccbbbd555ddddddddbc
                        ...ccbdcbb555ddbbdddbcc.
                        ...cbdddcc55ddbbbbccc...
                        ...cccccccbdddbccc......
                        ........cd555ddc........
                        `,img`
                        ........................
                        ........................
                        ..........ccc...........
                        .........cccc...........
                        .....ccccccc..ccc.......
                        ...cc555555cccccc.......
                        ..c5555555555bcc........
                        .c555555555555b..cc.....
                        c555551ff555555bccc.....
                        c55d55ff55555555bc......
                        c5555555555555555b......
                        .cbb31bb5555dd555b.cc...
                        .c5333b555ddddd55dccc...
                        .c533b55ddddddddddb.....
                        .c5555dddbb55bdddddccc..
                        ..ccccbbbb555bdddddccc..
                        ...cdcbc5555bddddddcc...
                        ....ccbc55bc5ddddddbcccc
                        .....cbbcc5555dddddddddc
                        .....ccbbb555ddbddddddc.
                        .....cdcbc55ddbbbdddcc..
                        ...ccdddccddddbcbbcc....
                        ...ccccccd555ddccc......
                        ........cccccccc........
                        `,img`
                        ........................
                        ..........cc............
                        .........ccc............
                        .....ccccccc.ccc........
                        ...cc555555ccccc........
                        ..c5555555555bcc........
                        .c55551ff55555b.ccc.....
                        c55555ff5555555bccc.....
                        c55d555555555555bc......
                        c55555bb555555555b.c....
                        .cbb31b5555ddd555bcc....
                        .c5333b555ddddd55dcc....
                        .c533b55ddddddd5ddc.....
                        ..c555dbbb555bddddb.c...
                        ...cccb55555bbdddddcc...
                        ....ccb555ccdddddddcc...
                        ..ccccbcccbddddddddcc...
                        ..c55cbbbbd55dddddddbcc.
                        ...c5ccbbd555dddddddddcc
                        ....cccbb555ddbbbddddddc
                        ......ccb55ddbbbbddddcc.
                        ....ccddcbdddbbbbbccc...
                        ....ccccd555ddccccc.....
                        ........cccccc..........
                        `,img`
                        ........................
                        ..........cc............
                        .........ccc............
                        .....ccccccc.ccc........
                        ...cc555555ccccc........
                        ..c5555555555bcc........
                        .c55551ff55555b.ccc.....
                        c55555ff5555555bccc.....
                        c55d555555555555bc......
                        c55555bb555555555b.c....
                        .cbb31b5555ddd555bcc....
                        .c5333b555ddddd55dcc....
                        .c533b55ddddddd5ddc.....
                        ..c555dbbb555bddddb.c...
                        ...cccb55555bbdddddcc...
                        ....ccb555ccdddddddcc...
                        ..ccccbcccdddddddddcccc.
                        ..c55cbbbd55ddddddddcdc.
                        ...c5cccd555ddddddddddc.
                        ....cc555d5ddbbbbddddbc.
                        ......5555ddbbbbbdddbc..
                        ......c5555dbbbbbbccc...
                        .......c555cccccccc.....
                        ........ccc.............
                        `,img`
                        ........................
                        ..........cc............
                        .........ccc............
                        .....ccccccc.ccc........
                        ...cc555555ccccc........
                        ..c5555555555bcc........
                        .c55551ff55555b.ccc.....
                        c55555ff5555555bccc.....
                        c55d555555555555bc......
                        c55555bb555555555b.c....
                        .cbb31b5555ddd555bcc....
                        .c5333b555ddddd55dcc....
                        .c533b55ddddddd5ddc.....
                        ..c555dbbb555bddddb.c...
                        ...cccb555555bdddddcc...
                        ....ccb5555ccddddddccc..
                        ..ccccbcccbddddddddccdc.
                        ..c55cbbbbdddddddddbddc.
                        ...c5cbbbd55ddddddddddc.
                        ....cccbdd55dbbbbddddbc.
                        .....cccd555dbbbbdddbc..
                        .....c555dddbbbbbbccc...
                        .....c55555dbcccccc.....
                        ......c5555cc...........
                        `,img`
                        ........................
                        ..........cc............
                        .........ccc............
                        .....ccccccc..cc........
                        ...cc555555ccccc........
                        ..c5555555555bcc........
                        .c555555555555b..cc.....
                        c555551ff555555bccc.....
                        c55d55ff55555555bc......
                        c5555555555555555b......
                        .cbb31bb5555dd555b.cc...
                        .c5333b555ddddd55dccc...
                        .c533b55ddddddd5ddcc....
                        .c5555ddddb55bddddb.....
                        ..ccccbbbbb55bdddddccc..
                        ..ccccbc5555bddddddcccc.
                        ..c55cbc555cdddddddccdc.
                        ...c5cbbcccdddddddddddc.
                        ....cccbbbbd55dddddddbc.
                        ....cbcbbbd555ddddddbcc.
                        .....cccbb555dbbbddccc..
                        .......cc555dbbbbbcc....
                        .......cbddddbcccc......
                        ......cd5555dc..........
                        `],
                    100,
                    true
                    )
                    projectile2 = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 4 4 4 4 . . . . . . 
                        . . . . 4 4 4 5 5 4 4 4 . . . . 
                        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                        . . . . 4 4 2 2 2 2 4 4 . . . . 
                        . . . . . . 4 4 4 4 . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, BOSS, -100, 0)
                }
                projectile2.setKind(SpriteKind.Enemy)
                projectile2.y = BOSS.y + index * 10
            }
            music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        }
        if (Math.percentChance(35)) {
            BOSS.setVelocity(randint(-20, 20), 0)
            BOSS.setBounceOnWall(false)
        }
    }
})
game.onUpdateInterval(1500, function () {
    if (level >= 1 || BUBBLE_Jump == true) {
        if (level <= 8) {
            kaiju = sprites.create(img`
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
                `, SpriteKind.Enemy)
            kaiju.lifespan = 20000
            kaiju.ay = 400
            kaiju.setVelocity(50, 0)
            animation.runImageAnimation(
            kaiju,
            [img`
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
                `,img`
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
                `,img`
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
                `,img`
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
                `,img`
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
                `,img`
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
                `],
            100,
            true
            )
            tiles.placeOnRandomTile(kaiju, assets.tile`transparency16`)
        }
    }
    // Boss Counter
    // 0: Pre boss, before boss room
    // 1: Fighting boss in room
    // 2: Post boss
    if (level == 9 && bossCounter == 0) {
        spawnBoss()
        bossCounter += 1
    } else if (level == 9 && bossCounter >= 2) {
        tiles.setTileAt(tiles.getTileLocation(21, 13), assets.tile`myTile5`)
        tiles.setTileAt(tiles.getTileLocation(21, 14), assets.tile`bottom door`)
        for (let index = 0; index <= 7; index++) {
            tiles.setTileAt(tiles.getTileLocation(5 + index * 2, 14), assets.tile`myTile0`)
        }
    }
})
