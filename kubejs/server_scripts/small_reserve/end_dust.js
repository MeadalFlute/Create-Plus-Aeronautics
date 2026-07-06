ServerEvents.recipes(event => {
    event.recipes.create.haunting('anvilcraft:levitation_powder','aeronautics:end_stone_powder')
    event.custom({
    "type": "create:filling",
    "ingredients": [
        {
        "item": 'anvilcraft:levitation_powder'
        },
        {
        "type": "neoforge:single",
        "amount": 10,
        "fluid": "minecraft:water"
        }
    ],
    "results": [
        {
        "id": 'aeronautics:end_stone_powder'
        }
    ]
    })
})