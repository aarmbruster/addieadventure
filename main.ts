scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles12, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e e e e e e e . 
    . . . . . . d d d d d d d e e . 
    . . . . . . d f d d d d d e e . 
    . . . . . . d d d d d d d e e . 
    . . . . . . d d d d d d d e e . 
    . . . . . . d d d d d d d e e . 
    . . . . . . f f f f f f f e e . 
    . . . . . . f f f f f f f e e . 
    . . . . . . f f f f f f f e e . 
    . . . d f f f f f f f f f e e . 
    . . . . . . f f f f f f f e e . 
    . . . . . . f f f f f f f . . . 
    . . . . . . f f f f f f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
