


ServerEvents.recipes(event => {

// event.remove({ output: 'minecraft:wooden_axe' });  移至basecraft.js

/*
event.shaped(
  Item.of('minecraft:stone', 3), // arg 1: output
  [
    'A B',
    ' C ', // arg 2: the shape (array of strings)
    'B A'
  ],
  {
    A: 'minecraft:andesite',
    B: 'minecraft:diorite',  //arg 3: the mapping object
    C: 'minecraft:granite'
  }
);



event.remove({type:'create:pressing', output:'create:iron_sheet'})


event.custom({
  type: "create:pressing",
  ingredients: [
    {
      tag: "c:ingots/iron"
    }
  ],
  results: [
    {
      id: "minecraft:heavy_weighted_pressure_plate"
    }
  ]
});
*/

event.custom({
  "type": "create:pressing",
  "ingredients": [
    {
      "tag":'c:storage_blocks/coal'
    }
  ],
  "results": [
    {
      count:3,
      "id": 'create:belt_connector'
    }
  ]
});


/*event.custom({
  "type": "create_dragons_plus:freezing",
  "ingredients": [
    {
      "tag": 'minecraft:leaves'
    }
  ],
  "results": [
    {
      "chance": 0.2,
      "id": 'minecraft:green_dye'
    }
  ]
})
event.custom(
  {
  "type": "create:sandpaper_polishing",
  "ingredients": [
    {
      "tag": 'minecraft:leaves'
    }
  ],
  "results": [
    {
      "id": 'minecraft:green_dye'
    }
  ]
})*/
event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "tag": "minecraft:leaves"
    },
    {
      "type": "neoforge:single",
      "amount": 50,
      "fluid": "minecraft:water"
    }
  ],
  "results": [
    {
      "amount": 50,
      "id": "create_dragons_plus:green_dye"
    }
  ]
})
event.custom({
  "type": "create:mixing",
    "ingredients": [
        {
            "type": "neoforge:single",
            "amount": 250,
            "fluid": "create_dragons_plus:green_dye"
        },
        {
            "tag": "c:cloth_filter"
        }
    ],
    "results": [
        {

                "id": "minecraft:green_dye"

        },
        {

                "id": "createfood:cloth_filter"

        }
    ]
})
event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 250,
      "fluid": "create_dragons_plus:green_dye"
    },
    {
      "type": "neoforge:single",
      "amount": 250,
      "fluid": "create_dragons_plus:white_dye"
    }
  ],
  "results": [
    {
      "amount": 500,
      "id": "create_dragons_plus:lime_dye"
    }
  ]
})

event.custom(
  {
  "type": "create:mixing",
  "ingredients": [
    {
      "item": 'minecraft:flint'
    },
    {
      "item": 'minecraft:snow_block'
    },
    {
      "item": 'minecraft:bucket'
    }
  ],
  "results": [
    {
      "id": 'minecraft:powder_snow_bucket'
    }
  ]
})
event.custom({
  "type": "create_dragons_plus:freezing",
  "ingredients": [
    {
      "item": "minecraft:water_bucket"
    }
  ],
  "results": [
    {
      "id": 'create_dragons_plus:dragon_breath_bucket'
    }
  ]
})


event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "tag": 'c:storage_blocks/flint'
    }
  ],
  "processing_time": 250,
  "results": [
    {
      "count": 5,
      "id": 'minecraft:gray_concrete_powder'
    },
    {
      "chance": 0.5,
      count:3,
      "id": 'minecraft:gray_concrete_powder'
    },
    {
      "chance": 0.75,
      "id": "create:experience_nugget"
    }
  ]
})


event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": 'minecraft:chorus_flower'
    }
  ],
  "processing_time": 250,
  "results": [
    {
      "count": 2,
      "id": 'minecraft:chorus_fruit'
    },
    {
      "chance": 0.5,
      count:2,
      "id": 'minecraft:chorus_fruit'
    },
    {
      "chance": 0.75,
      "id": 'anvilcraft:levitation_powder'
    }
  ]
})

/*  兼容航空学暂时移除该条目
event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": 'minecraft:end_stone'
    }
  ],
  "processing_time": 250,
  "results": [
    {
      chance:0.8,
      "id": 'anvilcraft:end_dust'
    },
    {
      chance:0.2,
      id:'anvilcraft:levitation_powder'
    }
  ]
})
*/

/*event.remove({ input:"minecraft:netherrack",type:"create:crushing",output:"create:cinder_flour" })
event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:netherrack"
    }
  ],
  "processing_time": 250,
  "results": [
    {
      id:'anvilcraft:nether_dust'
    }
  ]
})
event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": 'anvilcraft:nether_dust'
    }
  ],
  "processing_time": 250,
  "results": [
    {
      count:2,
      "id": "create:cinder_flour"
    },
    {
      "chance": 0.1,
      count:2,
      "id": "create:cinder_flour"
    }
  ]
})*/
event.custom({
  "type": "create:milling",
  "ingredients": [
    {
      "item": 'anvilcraft:nether_dust'
    }
  ],
  "processing_time": 70,
  "results": [
    {
      count:2,
      "id": "create:cinder_flour"
    },
    {
      "chance": 0.75,
      count:2,
      "id": "create:cinder_flour"
    }
  ]
})
event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "item": "create:cinder_flour"
    },
    {
      "type": "neoforge:single",
      "amount": 1,
      "fluid": "create:honey"
    }
  ],
  "results": [
    {
      "count":1,
      "id": 'anvilcraft:nether_dust'
    }
  ]
})


event.custom({
  "type": "create_dragons_plus:ending",
  "ingredients": [
    {
      "item": 'minecraft:lapis_lazuli'
    }
  ],
  "results": [
    {
      "id": 'create:experience_nugget'
    }
  ]
})
event.custom({
  "type": "create_dragons_plus:ending",
  "ingredients": [
    {
      "item": 'minecraft:lapis_block'
    }
  ],
  "results": [
    {
      "id": 'create:experience_block'
    }
  ]
})
event.custom({
  "type": "create_dragons_plus:ending",
  "ingredients": [
    {
      "item": 'create:experience_nugget'
    }
  ],
  "results": [
    {
      "id": 'create_enchantment_industry:super_experience_nugget'
    }
  ]
})
event.custom({
  "type": "create_dragons_plus:ending",
  "ingredients": [
    {
      "item": 'create:experience_block'
    }
  ],
  "results": [
    {
      "id": 'create_enchantment_industry:super_experience_block'
    }
  ]
})
event.custom({
  "type": "create_dragons_plus:ending",
  "ingredients": [
    {
      "tag": 'c:drinks/watery'
    }
  ],
  "results": [
    {
      "id": 'minecraft:dragon_breath'
    }
  ]
})
event.custom({
  "type": "create_dragons_plus:ending",
  "ingredients": [
    {
      "item": 'minecraft:water_bucket'
    }
  ],
  "results": [
    {
      "id": 'create_dragons_plus:dragon_breath_bucket'
    }
  ]
})


event.custom({
  "type": "create_dragons_plus:ending",
  "ingredients": [
    {
      "item": 'minecraft:wolf_armor'
    }
  ],
  "results": [
    {
      "id": 'minecraft:shulker_shell'
    }
  ]
})


event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item":'create:scoria'
    }
  ],
  "processing_time": 250,
  "results": [
    {
      "chance": 0.25,
      "count": 1,
      "id": 'minecraft:charcoal'
    },
    {
      "chance": 0.15,
      count:1,
      "id": 'minecraft:charcoal'
    }
  ]
})


event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item":'create:scorchia'
    }
  ],
  "processing_time": 250,
  "results": [
    {
      "count": 1,
      "id": "minecraft:coal"
    },
    {
      "chance": 0.15,
      count:1,
      "id": "minecraft:coal"
    }
  ]
})


// 下界岩再生
event.custom({
  "type": "create:emptying",
  "ingredients": [
    {
      "item": 'minecraft:magma_block'
    }
  ],
  "results": [
    {
      "id": 'minecraft:netherrack'
    },
    {
      "amount": 250,
      "id": "minecraft:lava"
    }
  ]
})
event.custom({
  "type": "create:filling",
  "ingredients": [
    {
      "item": 'anvilcraft:nether_dust'
    },
    {
      "type": "neoforge:single",
      "amount": 255,
      "fluid": "minecraft:lava"
    }
  ],
  "results": [
    {
      "id": 'minecraft:magma_block'
    }
  ]
})
/*
event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "tag": 'c:coal'
    }
  ],
  "processing_time": 250,
  "results": [
    {
      "count": 2,
      "id": 'kubejs:coal_dust'
    }
  ]
})
event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "tag": 'c:storage_blocks/coal'
    }
  ],
  "processing_time": 250,
  "results": [
    {
      "count": 18,
      "id": 'kubejs:coal_dust'
    }
  ]
})
*/
event.custom({
  "type": "create:mixing",
  "heat_requirement": "superheated",
  "ingredients": [
    {
      "item": 'anvilcraft:gunpowder_block'
    },
    {
      "item": 'anvilcraft:sugar_block'
    },
    {// count:1
      "item": 'mynethersdelight:pepper_powder'
    },
    {
      "type": "neoforge:single",
      "amount": 50,
      "fluid": "create_dragons_plus:red_dye"
    }
  ],
  "results": [
    {
      "count":18,
      "id": 'anvilcraft:nether_dust'
    }
  ]
})
event.custom({
  "type": "create:mixing",
  "heat_requirement": "heated",
  "ingredients": [
    {
      "item": 'anvilcraft:cinerite'
    },
    {
      "item": 'minecraft:bone_meal'
    },
    {
      "type": "neoforge:single",
      "amount": 50,
      "fluid": "create_dragons_plus:red_dye"
    }
  ],
  "results": [
    {
      "count":8,
      "id": 'anvilcraft:nether_dust'
    }
  ]
})


event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": 'create:blaze_burner'
    }
  ],
  "processing_time": 250,
  "results": [
    {
      "count": 3,
      "id": 'minecraft:blaze_powder'
    },
    {
      "count": 5,
      "id": 'anvilcraft:cursed_gold_nugget'
    },
    {
      count:1,
      "id": 'anvilcraft:nether_dust'
    },
    {
      "chance": 0.5,
      count:3,
      "id": 'minecraft:blaze_powder'
    },
    {
      "chance": 0.75,
      "id": "create:experience_nugget"
    }
  ]
})


})