ServerEvents.recipes(event => {
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "anvilcraft:royal_steel_ingot" },
    "loops": 1,
    "results": [
      {"id": 'anvilcraft:multitool' },
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "anvilcraft:royal_steel_ingot" },
          { "item": 'anvilcraft:magnet' }//1.手持磁铁
        ],
        "results": [{ "id": "anvilcraft:royal_steel_ingot" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "anvilcraft:royal_steel_ingot" },
          { "item": 'minecraft:spyglass' }//2.望远镜
        ],
        "results": [{ "id": "anvilcraft:royal_steel_ingot" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "anvilcraft:royal_steel_ingot" },
          { "item": 'minecraft:fishing_rod' }//8.钓鱼竿
        ],
        "results": [{ "id": "anvilcraft:royal_steel_ingot" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "anvilcraft:royal_steel_ingot" },
          { "item": 'minecraft:brush' }//5.刷子
        ],
        "results": [{ "id": "anvilcraft:royal_steel_ingot" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "anvilcraft:royal_steel_ingot" },
          { "item": 'minecraft:flint_and_steel' }//6.打火石
        ],
        "results": [{ "id": "anvilcraft:royal_steel_ingot" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "anvilcraft:royal_steel_ingot" },
          { "item": 'minecraft:shears' }//7.剪刀
        ],
        "results": [{ "id": "anvilcraft:royal_steel_ingot" }]
      }
    ],
    "transitional_item": { "id": "anvilcraft:royal_steel_ingot" }
  })

event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "anvilcraft:royal_steel_ingot" },
    "loops": 1,
    "results": [
      {  "id": 'anvilcraft:magnet' },
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "anvilcraft:royal_steel_ingot" },
          { "item": 'supplementaries:cog_block' }
        ],
        "results": [{ "id": "anvilcraft:royal_steel_ingot" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "anvilcraft:royal_steel_ingot" },
          { "item": 'immersive_aircraft:industrial_gears' }
        ],
        "results": [{ "id": "anvilcraft:royal_steel_ingot" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "anvilcraft:royal_steel_ingot" },
          { "item": 'minecraft:ender_pearl' }
        ],
        "results": [{ "id": "anvilcraft:royal_steel_ingot" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          { "item": "anvilcraft:royal_steel_ingot" }
        ],
        "results": [{ "id": "anvilcraft:royal_steel_ingot" }]
      }
    ],
    "transitional_item": { "id": "anvilcraft:royal_steel_ingot" }
  })

})