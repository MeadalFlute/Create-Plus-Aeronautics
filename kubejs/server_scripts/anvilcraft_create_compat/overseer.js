ServerEvents.recipes(event => {
    event.remove({output: 'anvilcraft:overseer'})
    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": false,
        "category": "misc",
        "key": {
            "A": {
            "item": "minecraft:ender_eye"
            },
            "O": {
            "item": "minecraft:crying_obsidian"
            },
            "R": {
            "item": 'anvilcraft:royal_steel_ingot'
            },
            "C": {
            "item": 'create_power_loader:brass_chunk_loader'
            },
            "E": {
            "item": 'minecraft:echo_shard'
            }

        },
        "pattern": [
            " OOO ",
            " OAO ",
            " ACA ",
            " OAO ",
            "RRERR"
        ],
        "result": {
            "count": 1,
            "id": 'anvilcraft:overseer'
        },
        "show_notification": false
    })


    event.custom({
        "type": "create_dragons_plus:ending",
        "ingredients": [
            {
            "item": 'minecraft:obsidian'
            }
        ],
        "results": [
            {
            "id": 'minecraft:crying_obsidian'
            }
        ]
    })


})