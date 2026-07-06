ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": false,
        "category": "misc",
        "key": {
            "A": {
                "tag": 'c:plates/brass'
            },
            "B": {
                "item": 'create:shaft'
            },
            "C": {
                "item": 'create:precision_mechanism'
            },
            "D": {
                "item": 'create:copper_backtank'
            },
            "E": {
                "item": 'create:chute'
            },
            "F": {
                "item": 'anvilcraft:feather_amulet'
            }
        },
        "pattern": [
            " ABA ",
            "ACDCA",
            "AEFEA",
            " E E "
        ],
        "result": {
            "count": 1,
            "id": 'create_jetpack:jetpack'
        },
        "show_notification": false
        })
})
