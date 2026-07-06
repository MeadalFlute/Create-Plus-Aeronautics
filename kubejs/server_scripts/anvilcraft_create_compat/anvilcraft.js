ServerEvents.recipes(event => {
event.smelting('anvilcraft:silver_ingot', 'create:crushed_raw_silver')
event.smelting('anvilcraft:tin_ingot', 'create:crushed_raw_tin')
event.smelting('anvilcraft:lead_ingot', 'create:crushed_raw_lead')
event.smelting('anvilcraft:uranium_ingot', 'create:crushed_raw_uranium')
event.smelting('anvilcraft:tungsten_ingot', 'kubejs:crushed_raw_tungsten')
event.smelting('anvilcraft:titanium_ingot', 'kubejs:crushed_raw_titanium')
// event.shapeless(Item.of('minecraft:slime_ball'),['#c:dough','minecraft:lime_dye'])

event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": 'anvilcraft:raw_tungsten'
    }
  ],
  "processing_time": 250,
  "results": [
    {
      "count": 2,
      "id": 'kubejs:crushed_raw_tungsten'
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
      "item": 'anvilcraft:raw_tungsten_block'
    }
  ],
  "processing_time": 250,
  "results": [
    {
      "count": 18,
      "id": 'kubejs:crushed_raw_tungsten'
    },
    {
      "chance": 0.75,
      count:9,
      "id": "create:experience_nugget"
    }
  ]
})


event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": 'anvilcraft:raw_titanium'
    }
  ],
  "processing_time": 250,
  "results": [
    {
      "count": 2,
      "id": 'kubejs:crushed_raw_titanium'
    },
    {
      "chance": 0.75,
      count:1,
      "id": "create:experience_nugget"
    }
  ]
})


event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": 'anvilcraft:raw_titanium_block'
    }
  ],
  "processing_time": 250,
  "results": [
    {
      "count": 18,
      "id": 'kubejs:crushed_raw_titanium'
    },
    {
      "chance": 0.75,
      count:9,
      "id": "create:experience_nugget"
    }
  ]
})


event.shapeless(
  Item.of('anvilcraft:seeds_pack', 1), // 种子袋
  [
    'minecraft:paper',  // arg 2: the array of inputs
    '8x #c:seeds'
  ]
)
/*event.custom(
  {
  "type": "create:mixing",
  "ingredients": [
    {
      "tag": 'c:seeds'
    },
    {
      "tag": 'c:seeds'
    },
    {
      "tag": 'c:seeds'
    },
    {
      "tag": 'c:seeds'
    },
    {
      "tag": 'c:seeds'
    },
    {
      "tag": 'c:seeds'
    },
    {
      "tag": 'c:seeds'
    },
    {
      "tag": 'c:seeds'
    },
    {
      "tag": 'c:seeds'
    }
  ],
  "results": [
    {
      "id": 'anvilcraft:seeds_pack'
    }
  ]
})
*/

event.custom({
  "type": "create:splashing",
  "ingredients": [
    {
      "item": 'kubejs:crushed_raw_tungsten'
    }
  ],
  "results": [
    {
      "count": 9,
      "id": 'anvilcraft:tungsten_nugget'
    },
    {
      "chance": 0.5,
      "id": 'anvilcraft:cursed_gold_nugget'
    }
  ]
})


event.custom({
  "type": "create:splashing",
  "ingredients": [
    {
      "item": 'create:crushed_raw_lead'
    }
  ],
  "results": [
    {
      "count": 9,
      "id": "anvilcraft:lead_nugget"
    },
    {
      "chance": 0.5,
      "id": 'anvilcraft:cursed_gold_nugget'
    }
  ]
})



event.custom({
  "type": "create:splashing",
  "ingredients": [
    {
      "item": 'create:crushed_raw_uranium'
    }
  ],
  "results": [
    {
      "count": 9,
      "id": "anvilcraft:uranium_nugget"
    },
    {
      "chance": 0.5,
      "id": 'minecraft:glowstone_dust'
    }
  ]
})



event.custom({
  "type": "create:splashing",
  "ingredients": [
    {
      "item": "create:crushed_raw_silver"
    }
  ],
  "results": [
    {
      "count": 9,
      "id": "anvilcraft:silver_nugget"
    },
    {
      "chance": 0.05,
      "id": 'anvilcraft:prismarine_cluster'
    }
  ]
})


event.custom({
  "type": "create:splashing",
  "ingredients": [
    {
      "item": 'create:crushed_raw_tin'
    }
  ],
  "results": [
    {
      "count": 9,
      "id": "anvilcraft:tin_nugget"
    },
    {
      "chance": 0.5,
      "id": 'anvilcraft:lime_powder'
    }
  ]
})


event.custom({
  "type": "create:splashing",
  "ingredients": [
    {
      "item": 'kubejs:crushed_raw_titanium'
    }
  ],
  "results": [
    {
      "count": 9,
      "id": "anvilcraft:tin_nugget"
    },
    {
      "chance": 0.5,
      "id": 'anvilcraft:levitation_powder'
    }
  ]
})


event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "tag": 'minecraft:logs'
    }
  ],
  "processing_time": 250,
  "results": [
    {
      "count": 1,
      "id": 'anvilcraft:wood_fiber'
    },
    {
      count:1,
      "id": 'anvilcraft:resin'
    },
    {
      "chance": 0.75,
      count:1,
      "id": 'anvilcraft:resin'
    }
  ]
})
event.custom({
  "type": "create:milling",
  "ingredients": [
    {
      "tag": 'minecraft:logs'
    }
  ],
  "processing_time": 250,
  "results": [
    {
      "count": 1,
      "id": 'anvilcraft:wood_fiber'
    },
    {
      count:1,
      "id": 'anvilcraft:resin'
    },
    {
      "chance": 0.75,
      count:1,
      "id": 'anvilcraft:resin'
    }
  ]
})
event.custom({
  "type": "create:haunting",
  "ingredients": [
    {
      "item": 'anvilcraft:resin'
    }
  ],
  "results": [
    {
      "id": 'anvilcraft:amber'
    }
  ]
})
event.custom({
  "type": "create:milling",
  "ingredients": [
    {
      "item": 'anvilcraft:geode'
    }
  ],
  "processing_time": 250,
  "results": [
    {"id": 'minecraft:amethyst_shard',"count":4, "weight": 1},
    {"id": 'anvilcraft:topaz',"chance": 0.25, "weight": 1},
    {"id": 'anvilcraft:ruby', "chance": 0.25, "weight": 1},
    {"id": 'anvilcraft:sapphire', "chance": 0.25, "weight": 1}
  ]
})



event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item":'create:limestone'
    }
  ],
  "processing_time": 250,
  "results": [
    {
      "count": 1,
      "id": 'anvilcraft:lime_powder'
    },
    {
      "chance": 0.75,
      count:1,
      "id": 'anvilcraft:lime_powder'
    }
  ]
})


event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "tag": 'c:ores_in_ground/netherrack'  // 基底
  },
  "loops": 1,   //循环
  "results": [  //产物
    {
      "id": 'kubejs:raw_earth_core_shard'
    }
  ],
  "sequence": [
     {
      "type": "create:deploying",   //塞原料
      "ingredients": [
        {
          "item": 'minecraft:netherrack'   //中间产物
        },
        {
          "item": 'minecraft:nether_wart_block'   //原料
        }
      ],
      "results": [
        {
          "id": 'minecraft:netherrack' //中间产物
        }
      ]
    },
    {
      "type": "create:deploying",   //塞原料
      "ingredients": [
        {
          "item": 'minecraft:netherrack'   //中间产物
        },
        {
          "item": 'minecraft:white_dye'   //原料
        }
      ],
      "results": [
        {
          "id": 'minecraft:netherrack' //中间产物
        }
      ]
    },
    {
  "type": "create:filling",
  "ingredients": [
    {
      "item": 'minecraft:netherrack'
    },
    {
      "type": "neoforge:components",
      "amount": 250,
      "components": {
        "create:potion_fluid_bottle_type": "regular",
        "minecraft:potion_contents": {
          "potion": "minecraft:strong_slowness"
        }
      },
      "fluids": "create:potion"
    }
  ],
  "results": [
    {
      "id": 'minecraft:netherrack'
    }
  ]
},
    {
      "type": "create:pressing",    //辊压
      "ingredients": [
        {
          "item": 'minecraft:netherrack'   //中间产物
        }
      ],
      "results": [
        {
          "id": 'minecraft:netherrack' //中间产物
        }
      ]
    }
    
  ],
  "transitional_item": {    
    "id": 'minecraft:netherrack'   // 中间产物
  }
})
event.custom(
  {
  "type": "create:sandpaper_polishing",
  "ingredients": [
    {
      "item": 'kubejs:raw_earth_core_shard'
    }
  ],
  "results": [
    {
      "id": 'anvilcraft:earth_core_shard'
    }
  ]
})
event.custom({
  "type": "create:mixing",
  "heat_requirement": "superheated",
  "ingredients": [
    {
      "item":'minecraft:netherite_ingot'
    },
    {
      "item":'minecraft:netherite_ingot'
    },
    {
      "item": 'anvilcraft:earth_core_shard'
    },
    {
      "item": 'anvilcraft:earth_core_shard'
    },
    {
      "item":'minecraft:blaze_powder'
    },
    {
      "item":'minecraft:blaze_powder'
    },
    {
      "type": "neoforge:single",
      "amount": 1000,
      "fluid": "minecraft:lava"
    }
  ],
  "results": [
    {
      count:1,
      "id": 'anvilcraft:ember_metal_ingot'
    }
  ]
})
event.custom({
  "type": "create:mixing",
  "heat_requirement": "superheated",
  "ingredients": [
    {
      "item":'anvilcraft:ember_metal_ingot'
    },
    {
      "item":'anvilcraft:royal_steel_upgrade_smithing_template'
    },
    {
      "type": "neoforge:single",
      "amount": 1000,
      "fluid": "minecraft:lava"
    }
  ],
  "results": [
    {
      "id": 'anvilcraft:ember_metal_upgrade_smithing_template'
    }
  ]
})


event.custom({
  "type": "create:mixing",
  "heat_requirement": "heated",
  "ingredients": [
    {
      "tag":'c:ingots/iron'
    },
    {
      "tag":'c:ingots/iron'
    },
    {
      "tag":'c:ingots/iron'
    },
    {
      "item":'minecraft:amethyst_shard'
    },
    {
      "item":'minecraft:diamond'
    },
    {
      "tag":'anvilcraft:gems'
    },
    {
      "type": "neoforge:single",
      "amount": 1000,
      "fluid": "minecraft:water"
    }
  ],
  "results": [
    {
      "id": 'anvilcraft:royal_steel_ingot'
    }
  ]
})
event.custom({
  "type": "create:mixing",
  "heat_requirement": "heated",
  "ingredients": [
    {
      "tag":'anvilcraft:templates'
    },
    {
      "tag":'anvilcraft:gem_blocks'
    },
    {
      "tag":'anvilcraft:gem_blocks'
    },
    {
      "tag":'anvilcraft:gem_blocks'
    },
    {
      "item":'anvilcraft:royal_steel_ingot'
    },
    {
      "item":'anvilcraft:royal_steel_ingot'
    },
    {
      "item":'anvilcraft:royal_steel_ingot'
    },
    {
      "item":'anvilcraft:royal_steel_ingot'
    },
    {
      "type": "neoforge:single",
      "amount": 1000,
      "fluid": "minecraft:water"
    }
  ],
  "results": [
    {
      "id": 'anvilcraft:royal_steel_upgrade_smithing_template'
    }
  ]
})


event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": 'minecraft:shulker_shell'  // 基底
  },
  "loops": 3,   //循环
  "results": [  //产物
    {
      "id": "kubejs:incomplete_transcendium_ingot"
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",   //塞原料
      "ingredients": [
        {
          "item": 'minecraft:shulker_shell'    //中间产物
        },
        {
          "item": 'anvilcraft:heavy_iron_block'   //原料
        }
      ],
      "results": [
        {
          "id": 'minecraft:shulker_shell'  //中间产物
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": 'minecraft:shulker_shell'
        },
        {
          "type": "neoforge:components",
          "amount": 250,
          "components": {
            "create:potion_fluid_bottle_type": "regular",
            "minecraft:potion_contents": {
              "potion": "minecraft:strength"
            }
          },
          "fluids": "create:potion"
        }
      ],
      "results": [
        {
          "id": 'minecraft:shulker_shell'
        }
      ]
    },
    {
      "type": "create:deploying",   //塞原料
      "ingredients": [
        {
          "item": 'minecraft:shulker_shell'    //中间产物
        },
        {
          "item": 'anvilcraft:cursed_gold_block'   //原料
        }
      ],
      "results": [
        {
          "id": 'minecraft:shulker_shell'  //中间产物
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": 'minecraft:shulker_shell' 
        },
        {
          "type": "neoforge:single",
          "amount": 250,
          "fluid": "create_enchantment_industry:experience"
        }
      ],
      "results": [
        {
          "id": 'minecraft:shulker_shell'  //中间产物
        }
      ]
    },
    {
      "type": "create:pressing",    //辊压
      "ingredients": [
        {
          "item": 'minecraft:shulker_shell'    //中间产物
        }
      ],
      "results": [
        {
          "id": 'minecraft:shulker_shell'  //中间产物
        }
      ]
    }
  ],
  "transitional_item": {    
    "id": 'minecraft:shulker_shell'    // 中间产物
  }
})


/*event.custom({
  "type": "create_dragons_plus:ending",
  "ingredients": [
    {
      "item": 'minecraft:golden_carrot'
    }
  ],
  "results": [
    {
      "id": 'anvilcraft:cursed_gold_ingot'
    }
  ]
})
event.custom({
  "type": "create_dragons_plus:ending",
  "ingredients": [
    {
      "item": 'minecraft:golden_apple'
    }
  ],
  "results": [
    {
      "id": 'anvilcraft:cursed_gold_block'
    }
  ]
})
event.custom({
  "type": "create:mixing",
    "ingredients": [
        {
            "type": "neoforge:single",
            "amount": 10,
            "fluid": "create_dragons_plus:dragon_breath",
        },
        {
            "item": 'minecraft:enchanted_golden_apple'
        }
    ],
    "results":[
    {
      "count":9,
      "id": 'anvilcraft:cursed_gold_block',
    }
  ]
})*/
event.custom({
  "type": "create:mixing",
  "heat_requirement": "heated",
  "ingredients": [
        {
            "type": "neoforge:single",
            "amount": 100,
            "fluid":"create:chocolate"
        }, 
        {
            "tag":'c:dumplings'
        },
        {
            "tag":"c:storage_blocks/gold"
        }
    ],
  "results":[
    {
      "count":1,
      "id": 'anvilcraft:cursed_gold_block'
    },
    {
      "count":1,
      "id":"supplementaries:ash"
    }
  ]
})
event.custom({
  "type": "create:mixing",
  "heat_requirement": "heated",
  "ingredients": [
        {
            "type": "neoforge:single",
            "amount": 100,
            "fluid":"create:chocolate"
        }, 
        {
            "tag":'c:pizza_dough'
        },
        {
            "tag":"c:ingots/gold"
        }
    ],
  "results":[
    {
      "count":1,
      "id": 'anvilcraft:cursed_gold_ingot'
    },
    {
      "count":1,
      "id":"supplementaries:ash"
    }
  ]
})


event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "kubejs:incomplete_transcendium_ingot"  // 基底
  },
  "loops": 1,   //循环
  "results": [  //产物
    {
      "id": "anvilcraft:transcendium_ingot"
    }
  ],
  "sequence": [
     {
      "type": "create:deploying",   //塞原料
      "ingredients": [
        {
          "item": "kubejs:incomplete_transcendium_ingot"   //中间产物
        },
        {
          "item": 'anvilcraft:ember_metal_ingot'   //原料
        }
      ],
      "results": [
        {
          "id": "kubejs:incomplete_transcendium_ingot" //中间产物
        }
      ]
    },
    {
      "type": "create:deploying",   //塞原料
      "ingredients": [
        {
          "item": "kubejs:incomplete_transcendium_ingot"   //中间产物
        },
        {
          "item": 'minecraft:shulker_shell'   //原料
        }
      ],
      "results": [
        {
          "id": "kubejs:incomplete_transcendium_ingot" //中间产物
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "kubejs:incomplete_transcendium_ingot"
        },
        {
          "type": "neoforge:components",
          "amount": 250,
          "components": {
            "create:potion_fluid_bottle_type": "regular",
            "minecraft:potion_contents": {
              "potion": "minecraft:regeneration"
            }
          },
          "fluids": "create:potion"
        }
      ],
      "results": [{"id":"kubejs:incomplete_transcendium_ingot"}]
    },
    {
      "type": "create:pressing",    //辊压
      "ingredients": [
        {
          "item": "kubejs:incomplete_transcendium_ingot"   //中间产物
        }
      ],
      "results": [
        {
          "id": "kubejs:incomplete_transcendium_ingot" //中间产物
        }
      ]
    }
  ],
  "transitional_item": {    
    "id": "kubejs:incomplete_transcendium_ingot"   // 中间产物
  }
})

/*event.smithing(
  'anvilcraft:frost_metal_ingot',
  'anvilcraft:frost_metal_upgrade_smithing_template', 
  'anvilcraft:royal_steel_ingot',
  'minecraft:blue_ice'
)//.modifyResult(event =>{event.player.give('minecraft:bucket')})
*/
event.custom(
  {
  "type": "create:mixing",
  "ingredients": [
    {
      "item": 'minecraft:powder_snow_bucket'
    },
    {
      "item": 'anvilcraft:royal_steel_upgrade_smithing_template'
    },
    {
      "item": 'anvilcraft:cursed_gold_block'
    },
    {
      "item": 'minecraft:nether_star'
    }
  ],
  "results": [
    {
      "id": 'anvilcraft:frost_metal_upgrade_smithing_template'
    },
    {
      "id": 'minecraft:bucket'
    },
    {
      "id": 'minecraft:nether_star'
    }
  ]
})


event.custom({
  "type": "create:mixing",
    "heat_requirement": "superheated",
    "ingredients": [
        {
            "type": "neoforge:single",
            "amount": 1000,
            "fluid": "create_dragons_plus:dragon_breath",
        },
        {
            "item": 'anvilcraft:frost_metal_block'
        },
        {
            "item": 'anvilcraft:ember_metal_block'
        }
    ],
    "results":[
    {
      "id": 'anvilcraft:multiphase_matter',
      "count":4
    }
  ]
})

event.custom({
  type: "create:pressing",
  ingredients: [
    {
      tag: "c:ingots/tin"
    }
  ],
  results: [
    {
      id: 'anvilcraft:tin_pressure_plate'
    }
  ]
})
event.custom({

  "type": "create:deploying",
  "ingredients": [
    {
      "item": 'anvilcraft:tin_pressure_plate'
    },
    {
      "item": 'anvilcraft:royal_steel_ingot'
    }
  ],
  "keep_held_item": true,
  "results": [
    {
      "id": 'anvilcraft:tin_can'
    }
  ]

})
event.custom({
  "type": "create:mixing",
  "heat_requirement": "heated",
  "ingredients": [
    {
      "tag":'c:ingots/iron'
    },
    {
      "item":'anvilcraft:lime_powder'
    }
  ],
  "results": [
    {
      "id": 'anvilcraft:tin_ingot'
    }
  ]
})


event.custom({
  "type": "create:mixing",
  "heat_requirement": "heated",
  "ingredients": [
    {
      "tag": 'anvilcraft:gem_blocks'
    }
  ],
  "results": [
    {
      "amount": 1000,
      "id": "anvilcraft:melt_gem"
    }
  ]
})
event.custom({
  "type": "create:compacting",
  "ingredients": [
    {
      "item": 'anvilcraft:sapphire'
    },
    {
      "type": "neoforge:single",
      "amount": 1000,
      "fluid": "anvilcraft:melt_gem"
    }
  ],
  "results": [
        {

                "id": 'anvilcraft:sapphire_block'

        }
    ]
})
event.custom({
  "type": "create:compacting",
  "ingredients": [
    {
      "item": 'anvilcraft:ruby'
    },
    {
      "type": "neoforge:single",
      "amount": 1000,
      "fluid": "anvilcraft:melt_gem"
    }
  ],
  "results": [
        {

                "id": 'anvilcraft:ruby_block'

        }
    ]
})
event.custom({
  "type": "create:compacting",
  "ingredients": [
    {
      "item": 'anvilcraft:topaz'
    },
    {
      "type": "neoforge:single",
      "amount": 1000,
      "fluid": "anvilcraft:melt_gem"
    }
  ],
  "results": [
        {

                "id": 'anvilcraft:topaz_block'

        }
    ]
})


event.custom({
  "type": "create:compacting",
  "ingredients": [
    {
      "item": 'anvilcraft:sea_heart_shell_shard'
    },
    {
      "type": "neoforge:single",
      "amount": 250,
      "fluid": "anvilcraft:melt_gem"
    }
  ],
  "results": [
        {

                "id": 'anvilcraft:sea_heart_shell'

        }
    ]
})
event.custom(
  {
  "type": "create:mixing",
  "ingredients": [
    {
      "item": 'minecraft:powder_snow_bucket'
    },
    {
      "item": 'anvilcraft:sea_heart_shell_shard'
    }
  ],
  "results": [
    {
      "id": 'minecraft:bucket'
    },
    {
      "id":'anvilcraft:prismarine_cluster'
    }
  ]
})
event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": 'minecraft:heart_of_the_sea'
    }
  ],
  "processing_time": 250,
  "results": [
    {
      count:2,
      "id": 'anvilcraft:sea_heart_shell_shard'
    },
    {
      count:1,
      "id": 'anvilcraft:royal_steel_nugget'
    },
    {
      "chance": 0.5,
      count:4,
      "id": 'anvilcraft:sea_heart_shell_shard'
    }
  ]
})
event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": 'anvilcraft:prismarine_cluster'
    }
  ],
  "processing_time": 250,
  "results": [
    {
      count:2,
      "id": 'minecraft:prismarine_crystals'
    },
    {
      count:1,
      "id": 'minecraft:prismarine_shard'
    },
    {
      "chance": 0.5,
      count:1,
      "id": 'minecraft:prismarine_crystals'
    },
    {
      "chance": 0.15,
      count:1,
      "id": 'anvilcraft:prismarine_blade'
    }
  ]
})


})