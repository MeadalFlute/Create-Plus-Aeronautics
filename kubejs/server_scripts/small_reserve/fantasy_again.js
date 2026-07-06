ServerEvents.recipes(event => {
  // 紧凑风力引擎
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "simulated:red_portable_engine"
    },
    "loops": 2,
    "results": [
      {
        "id": "create_fantasizing:compact_wind_engine"
      }
    ],
    "sequence": [
      // ① 螺旋桨
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "simulated:red_portable_engine" },
          { "item": 'create_fantasizing:prismarine_fan_blades' }
        ],
        "results": [{ "id": "simulated:red_portable_engine" }]
      },
      // ② 黄玉
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "simulated:red_portable_engine" },
          { "item": "anvilcraft:topaz" }
        ],
        "results": [{ "id": "simulated:red_portable_engine" }]
      },
      // ③ 注液 氧化剂 1000mb
      {
        "type": "create:filling",
        "ingredients": [
          { "item": "simulated:red_portable_engine" },
          {
            "type": "neoforge:single",
            "amount": 1000,
            "fluid": "createpropulsion:oxidizer"
          }
        ],
        "results": [{ "id": "simulated:red_portable_engine" }]
      }
    ],
    "transitional_item": {
      "id": "simulated:red_portable_engine"
    }
  })

  // 紧凑液压引擎
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "simulated:red_portable_engine"
    },
    "loops": 2,
    "results": [
      {
        "id": "create_fantasizing:compact_hydraulic_engine"
      }
    ],
    "sequence": [
      // ① 螺旋桨
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "simulated:red_portable_engine" },
          { "item": 'create_fantasizing:prismarine_fan_blades' }
        ],
        "results": [{ "id": "simulated:red_portable_engine" }]
      },
      // ② 蓝宝石
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "simulated:red_portable_engine" },
          { "item": "anvilcraft:sapphire" }
        ],
        "results": [{ "id": "simulated:red_portable_engine" }]
      },
      // ③ 注液 氧化剂 1000mb
      {
        "type": "create:filling",
        "ingredients": [
          { "item": "simulated:red_portable_engine" },
          {
            "type": "neoforge:single",
            "amount": 1000,
            "fluid": "createpropulsion:oxidizer"
          }
        ],
        "results": [{ "id": "simulated:red_portable_engine" }]
      }
    ],
    "transitional_item": {
      "id": "simulated:red_portable_engine"
    }
  })

  //方块放置器
  event.custom({
  "type": "create:mechanical_crafting",
  "accept_mirrored": true,
  "category": "misc",
  "key": {
    "A": {
      "item": "create:sturdy_sheet"
    },
    "B": {
      "item": "create:precision_mechanism"
    },
    "C": {
      "item": "create_aeronautics_toolgun:disposable_vehicle_container"
    },
    "D": {
      "item": "anvilcraft:induction_light"
    },
    "E": {
      "item": "create:andesite_alloy"
    },
    "F": {
      "tag": "c:ingots/brass"
    }
  },
  "pattern": [
    "AAABC",
    "  DEF"
  ],
  "result": {
    "count": 1,
    "id": 'create_fantasizing:block_placer'
  },
  "show_notification": false
})
})