ServerEvents.recipes(event => {
     
    event.recipes.create.milling(['kubejs:coal_dust',CreateItem.of('kubejs:coal_dust', 0.5)], 'minecraft:coal')

    event.custom({
        type:'create:crushing',
        ingredients:[
            {item:'minecraft:coal_block'}
        ],
        "processing_time": 250,
        results:[
            {'id':'kubejs:coal_dust','count':9},
            {'id':'kubejs:coal_dust','count':9,'chance':0.5}
        ]
     })

     event.custom({
        type:'create:compacting',
        ingredients:[
            {item:'kubejs:coal_dust'},
            {
                "type": "neoforge:single",
                "amount": 10,
                "fluid": "kubejs:seeds_oil"
            }
        ],
        results:[
            {'id':'minecraft:dried_kelp','count':2},
        ]
    })

    event.recipes.create.haunting('minecraft:coal', 'minecraft:charcoal')
    event.recipes.create.haunting('minecraft:tuff', 'anvilcraft:cinerite')

    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
            "item": "create:belt_connector"
            }
        ],
        "result": [
            {
                "item": {
                    "count": 3,
                    "id": 'minecraft:dried_kelp'
                }
            }
        ],
        "tool": {
            "tag": "c:tools/knife"
        }
    })

})