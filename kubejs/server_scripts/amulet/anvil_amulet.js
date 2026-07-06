ServerEvents.recipes(event => {
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": 'anvilcraft:royal_steel_ingot'  // 基底
  },
  "loops": 4,   //循环9次
  "results": [  //产物
    {
      "chance": 20.0,   //目标产物
      "id": 'anvilcraft:anvil_amulet'
    },
    {
      "chance": 8.0,    //返还基底
      "id": 'anvilcraft:royal_steel_ingot'
    },
    {
      "chance": 8.0,    //原料返还·大
      "id": 'minecraft:iron_block'
    },
    {
      "chance": 4.0,    //原料返还·小
      "id": 'minecraft:iron_ingot'
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",   //塞原料
      "ingredients": [
        {
          "item": "kubejs:incomplete_anvil_amulet"    //中间产物
        },
        {
          "item": 'minecraft:iron_block'   //原料
        }
      ],
      "results": [
        {
          "id": "kubejs:incomplete_anvil_amulet"  //中间产物
        }
      ]
    },
    {
      "type": "create:deploying",   //塞原料
      "ingredients": [
        {
          "item": "kubejs:incomplete_anvil_amulet"    //中间产物
        },
        {
          "item": 'minecraft:iron_ingot'   //原料
        }
      ],
      "results": [
        {
          "id": "kubejs:incomplete_anvil_amulet"  //中间产物
        }
      ]
    },
    {
      "type": "create:pressing",    //辊压
      "ingredients": [
        {
          "item": "kubejs:incomplete_anvil_amulet"    //中间产物
        }
      ],
      "results": [
        {
          "id": "kubejs:incomplete_anvil_amulet"  //中间产物
        }
      ]
    }
  ],
  "transitional_item": {    
    "id": "kubejs:incomplete_anvil_amulet"    // 中间产物
  }
})





})