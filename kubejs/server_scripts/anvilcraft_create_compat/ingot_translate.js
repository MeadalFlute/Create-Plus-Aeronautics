ServerEvents.recipes(event => {
    // 铁 注液 迅捷 银
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "tag": 'c:ingots/iron'
            },
            {
                "type": "neoforge:components",
                "amount": 100,
                "components": {
                    "create:potion_fluid_bottle_type": "regular",
                    "minecraft:potion_contents": {
                        "potion": "minecraft:swiftness"
                    }
                },
                "fluids": "create:potion"
            }
        ],
        "results": [
            {
                "id": 'anvilcraft:silver_ingot'
            }
        ]
    })
    // 银 注液 跳跃提升 钛 
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
            "tag": 'c:ingots/silver'
            },
            {
            "type": "neoforge:components",
            "amount": 100,
            "components": {
                "create:potion_fluid_bottle_type": "regular",
                "minecraft:potion_contents": {
                "potion": "minecraft:leaping"
                }
            },
            "fluids": "create:potion"
            }
        ],
        "results": [
            {
            "id": 'anvilcraft:titanium_ingot'
            }
        ]
    })
    // 银 注液 发光 钛 
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
            "tag": 'c:ingots/silver'
            },
            {
            "type": "neoforge:components",
            "amount": 25,
            "components": {
                "create:potion_fluid_bottle_type": "regular",
                "minecraft:potion_contents": {
                "potion": "netherdepthsupgrade:glowdine_glowing"
                }
            },
            "fluids": "create:potion"
            }
        ],
        "results": [
            {
            "id": 'anvilcraft:titanium_ingot'
            }
        ]
    })
    // 铁 注液 缓慢 铅
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
            "tag": 'c:ingots/iron'
            },
            {
            "type": "neoforge:components",
            "amount": 100,
            "components": {
                "create:potion_fluid_bottle_type": "regular",
                "minecraft:potion_contents": {
                "potion": "minecraft:slowness"
                }
            },
            "fluids": "create:potion"
            }
        ],
        "results": [
            {
            "id": 'anvilcraft:lead_ingot'
            }
        ]
    })
    // 铅 注液 抗火 钨
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
            "tag": 'c:ingots/lead'
            },
            {
            "type": "neoforge:components",
            "amount": 100,
            "components": {
                "create:potion_fluid_bottle_type": "regular",
                "minecraft:potion_contents": {
                "potion": "minecraft:fire_resistance"
                }
            },
            "fluids": "create:potion"
            }
        ],
        "results": [
            {
            "id": 'anvilcraft:tungsten_ingot'
            }
        ]
    })
    // 辊压钨
    event.custom({
        type: "create:pressing",
        ingredients: [
            {
            tag: "c:ingots/tungsten"
            }
        ],
        results: [
            {
            id: 'anvilcraft:tungsten_pressure_plate'
            }
        ]
        })
    // 晶核 注液 神龟 残骸 
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
            "item": 'anvilcraft:netherite_crystal_nucleus'
            },
            {
            "type": "neoforge:components",
            "amount": 100,
            "components": {
                "create:potion_fluid_bottle_type": "regular",
                "minecraft:potion_contents": {
                "potion": "minecraft:turtle_master"//'minecraft:potion[potion_contents={potion:"minecraft:turtle_master"}]'
                }
            },
            "fluids": "create:potion"
            }
        ],
        "results": [
            {
            "count":2,
            "id": 'minecraft:ancient_debris'
            }
        ]
    })
    // 晶核 注液 顽石 残骸 
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
            "item": 'anvilcraft:netherite_crystal_nucleus'
            },
            {
            "type": "neoforge:components",
            "amount": 25,
            "components": {
                "create:potion_fluid_bottle_type": "regular",
                "minecraft:potion_contents": {
                "potion": "netherdepthsupgrade:obsidianfish_resistance"//'minecraft:potion[potion_contents={potion:"netherdepthsupgrade:obsidianfish_resistance"}]'
                }
            },
            "fluids": "create:potion"
            }
        ],
        "results": [
            {
            "count":2,
            "id": 'minecraft:ancient_debris'
            }
        ]
    })
    // 粉碎残骸增产（改为给予两份残骸，给予研究铁砧工艺的玩家获得4倍增产作为采用复杂增产手段的奖励）
    /*event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
            "item": 'minecraft:ancient_debris'
            }
        ],
        "processing_time": 250,
        "results": [
            {
            "count": 2,
            "id": 'minecraft:netherite_scrap'
            },
            {
            "chance": 0.25,
            "count":1,
            "id": 'anvilcraft:netherite_crystal_nucleus'
            },
            {
            "chance": 0.75,
            "count":2,
            "id": "create:experience_nugget"
            }
        ]
    })
    */
    // 红石 注液 瞬间伤害 铀
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
            "item": 'minecraft:redstone_block'
            },
            {
            "type": "neoforge:components",
            "amount": 100,
            "components": {
                "create:potion_fluid_bottle_type": "regular",
                "minecraft:potion_contents": {
                "potion": "minecraft:harming"//'minecraft:potion[potion_contents={potion:"minecraft:harming"}]'
                }
            },
            "fluids": "create:potion"
            }
        ],
        "results": [
            {
            "id": 'anvilcraft:uranium_ingot'
            }
        ]
    })
    // 漂浮粉 注液 蓄风 负物质粒
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
            "item": 'anvilcraft:levitation_powder'
            },
            {
            "type": "neoforge:components",
            "amount": 100,
            "components": {
                "create:potion_fluid_bottle_type": "regular",
                "minecraft:potion_contents": {
                "potion": "minecraft:wind_charged"//'minecraft:potion[potion_contents={potion:"minecraft:wind_charged"}]'
                }
            },
            "fluids": "create:potion"
            }
        ],
        "results": [
            {
            "id": 'anvilcraft:negative_matter_nugget'
            }
        ]
    })
    // 浮霜金属锭
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
            "item": 'minecraft:powder_snow_bucket'
            },
            {
            "item": 'anvilcraft:silver_ingot'
            },
            {
            "item": 'anvilcraft:titanium_ingot'
            },
            {
            "tag": 'c:ingots/iron'
            },
            {
            "item": 'minecraft:nether_star'
            }
        ],
        "results": [
            {
            "id": 'anvilcraft:frost_metal_ingot'
            },
            {
            "id": 'minecraft:bucket'
            },
            {
            "id": 'minecraft:nether_star'
            }
        ]
    })
    // 蘑菇
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
            "item": 'minecraft:brown_mushroom'
            },
            {
            "type": "neoforge:single",
            "amount": 2,
            "fluid": "sliceanddice:fertilizer"
            }
        ],
        "results": [
            {
            "count":2,
            "id": 'minecraft:brown_mushroom'
            }
        ]
    })
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
            "item": 'minecraft:red_mushroom'
            },
            {
            "type": "neoforge:single",
            "amount": 2,
            "fluid": "sliceanddice:fertilizer"
            }
        ],
        "results": [
            {
            "count":2,
            "id": 'minecraft:red_mushroom'
            }
        ]
    })
    // 水洗可控沙产铜和锌
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
            "item": 'anvilcraft:controllable_sand'
            }
        ],
        "results": [
            {
            "chance": 0.5,
            "id": 'minecraft:clay_ball'
            },
            {
            "chance": 0.25,
            "id": 'create:copper_nugget'
            },
            {
            "chance": 0.25,
            "id": 'create:zinc_nugget'
            }
        ]
    })
    //闪长岩——>石英砂——>铜
    event.remove({input:'#create:stone_types/diorite',type:'create:crushing',output:'minecraft:quartz'})
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
            "tag": 'create:stone_types/diorite'
            }
        ],
        "processing_time": 250,
        "results": [
            {
            "count": 1,
            "id": 'anvilcraft:quartz_sand'
            },{
            chance:0.5,
            "count": 1,
            "id": 'anvilcraft:quartz_sand'
            }
        ]
    })
    event.custom({
        type:"create:splashing",
        ingredients:[
            {item:'anvilcraft:quartz_sand'}
        ],
        results:[
            {
                chance:1,
                count:1,
                id:'minecraft:quartz'
            },{
                chance:0.25,
                count:1,
                id:'create:zinc_nugget'
            }
        ]
    })
    //石英砂——>皓蓝石
    event.custom({
        "type": "create:mixing",
        "heat_requirement": "superheated",
        "ingredients": [
            {
            "item": 'anvilcraft:quartz_sand'
            },
            {
            "type": "neoforge:single",
            "amount": 10,
            "fluid": "create_dragons_plus:blue_dye"
            },
            {
            "type": "neoforge:single",
            "amount": 1,
            "fluid": "create:honey"
            }
        ],
        "results": [
            {
            "id": 'create:asurine'
            }
        ]
    })
    //-安山岩-&凝灰岩——>火山灰——>锌
    /*event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
            "tag": 'create:stone_types/andesite'
            }
        ],
        "processing_time": 250,
        "results": [
            {
            "count": 1,
            "id": 'anvilcraft:cinerite'
            },{
            chance:0.5,
            "count": 1,
            "id": 'anvilcraft:cinerite'
            }
        ]
    })*/
    // 石灰 + 缓慢 = 火山灰-凝灰岩-
    event.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            {
            "item": 'anvilcraft:lime_powder'
            },{
            "item": 'anvilcraft:lime_powder'
            },{
            "item": 'anvilcraft:lime_powder'
            },{
            "item": 'anvilcraft:lime_powder'
            },
            {
            "type": "neoforge:components",
            "amount": 10,
            "components": {
                "create:potion_fluid_bottle_type": "regular",
                "minecraft:potion_contents": {
                "potion": "minecraft:slowness"
                }
            },
            "fluids": "create:potion"
            }
        ],
        "results": [
            {
            "id":'anvilcraft:cinerite'//"id": 'minecraft:tuff'
            }
        ]
    })
    // 可选使用骨粉代替石灰
    event.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            {
            "item": 'minecraft:bone_meal'
            },{
            "item": 'minecraft:bone_meal'
            },{
            "item": 'minecraft:bone_meal'
            },{
            "item": 'minecraft:bone_meal'
            },
            {
            "type": "neoforge:components",
            "amount": 10,
            "components": {
                "create:potion_fluid_bottle_type": "regular",
                "minecraft:potion_contents": {
                "potion": "minecraft:slowness"
                }
            },
            "fluids": "create:potion"
            }
        ],
        "results": [
            {
            "id":'anvilcraft:cinerite'//"id": 'minecraft:tuff'
            }
        ]
    })
    /*event.remove({input:'#create:stone_types/tuff',type:'create:crushing'})
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
            "tag": 'create:stone_types/tuff'
            }
        ],
        "processing_time": 250,
        "results": [
            {
            "count": 1,
            "id": 'anvilcraft:cinerite'
            },{
            chance:0.5,
            "count": 1,
            "id": 'anvilcraft:cinerite'
            }
        ]
    })*/
    event.custom({
        type:"create:splashing",
        ingredients:[
            {item:'anvilcraft:cinerite'}
        ],
        results:[
            {
                chance:0.1,
                count:1,
                id:'create:copper_nugget'
            },{
                chance:0.15,
                count:1,
                id:'minecraft:gunpowder'
            },{
                chance:0.02,
                count:1,
                id:'minecraft:iron_nugget'
            },{
                chance:0.02,
                count:1,
                id:'create:zinc_nugget'
            }
        ]
    })
    //火山灰——>辉绿岩
    event.custom({
        "type": "create:mixing",
        "heat_requirement": "superheated",
        "ingredients": [
            {
            "item": 'anvilcraft:cinerite'
            },
            {
            "type": "neoforge:single",
            "amount": 10,
            "fluid": "create_dragons_plus:green_dye"
            },
            {
            "type": "neoforge:single",
            "amount": 1,
            "fluid": "create:honey"
            }
        ],
        "results": [
            {
            "id": 'create:veridium'
            }
        ]
    })
    //可选使用方解石
    event.custom({
        "type": "create:mixing",
        "heat_requirement": "superheated",
        "ingredients": [
            {
            "tag": 'create:stone_types/calcite'
            },
            {
            "type": "neoforge:single",
            "amount": 10,
            "fluid": "create_dragons_plus:green_dye"
            },
            {
            "type": "neoforge:single",
            "amount": 1,
            "fluid": "create:honey"
            }
        ],
        "results": [
            {
            "id": 'create:veridium'
            }
        ]
    })
    //可选使用末地石
    event.custom({
        "type": "create:mixing",
        "heat_requirement": "superheated",
        "ingredients": [
            {
            "item": 'minecraft:end_stone'
            },
            {
            "type": "neoforge:single",
            "amount": 10,
            "fluid": "create_dragons_plus:green_dye"
            },
            {
            "type": "neoforge:single",
            "amount": 1,
            "fluid": "create:honey"
            }
        ],
        "results": [
            {
            "id": 'create:veridium'
            }
        ]
    })


    // 燧石产铁
    event.custom({
        "type": "create:mixing",
        "heat_requirement": "superheated",
        "ingredients": [
            {
            "item": 'minecraft:gravel'
            },
            {
            "type": "neoforge:single",
            "amount": 10,
            "fluid": "create_dragons_plus:red_dye"
            },
            {
            "type": "neoforge:single",
            "amount": 1,
            "fluid": "create:honey"
            }
        ],
        "results": [
            {
            "id": 'create:crimsite'
            }
        ]
    })

    // 红沙产金
    event.custom({
        "type": "create:mixing",
        "heat_requirement": "superheated",
        "ingredients": [
            {
            "item": 'minecraft:red_sand'
            },
            {
            "type": "neoforge:single",
            "amount": 10,
            "fluid": "create_dragons_plus:yellow_dye"
            },
            {
            "type": "neoforge:single",
            "amount": 1,
            "fluid": "create:honey"
            }
        ],
        "results": [
            {
            "id": 'create:ochrum'
            }
        ]
    })
    // 石灰产岩浆
    event.custom({
        "type": "create:mixing",
        "heat_requirement": "superheated",
        "ingredients": [
            {
            "item": 'anvilcraft:lime_powder',
            "count": 4
            }
            /*,
            {
            "type": "neoforge:single",
            "amount": 50,
            "fluid": "minecraft:lava"
            }*/
        ],
        "results": [
            {
            //"type": "neoforge:single",
            "amount": 200,
            "id": "minecraft:lava"
            }
        ]
    })


    // 金铁 注液 渗浆 锌
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
            "item": 'kubejs:mixed_iron_and_gold_ingot'
            },
            {
            "type": "neoforge:components",
            "amount": 100,
            "components": {
                "create:potion_fluid_bottle_type": "regular",
                "minecraft:potion_contents": {
                "potion": "minecraft:oozing"//'minecraft:potion[potion_contents={potion:"minecraft:oozing"}]'
                }
            },
            "fluids": "create:potion"
            }
        ],
        "results": [
            {
            "id": 'create:zinc_ingot'
            }
        ]
    })
    // 金铁 注液 虚弱 铜
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
            "item": 'kubejs:mixed_iron_and_gold_ingot'
            },
            {
            "type": "neoforge:components",
            "amount": 100,
            "components": {
                "create:potion_fluid_bottle_type": "regular",
                "minecraft:potion_contents": {
                "potion": "minecraft:weakness"//'minecraft:potion[potion_contents={potion:"minecraft:weakness"}]'
                }
            },
            "fluids": "create:potion"
            }
        ],
        "results": [
            {
            "id": 'minecraft:copper_ingot'
            }
        ]
    })
    // 灰烬
    event.smoking('4x supplementaries:ash','#minecraft:planks').xp(0.35)
    // 金铁
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
            "tag": 'c:ingots/iron'
            },
            {
            "tag": 'c:ingots/gold'
            },
            {
            "item": 'supplementaries:soap'
            }
        ],
        "results": [
            {
            "count":2,
            "id": 'kubejs:mixed_iron_and_gold_ingot'
            }
        ]
    })


})