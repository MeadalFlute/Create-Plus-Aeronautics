ServerEvents.recipes(event => {
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": 'anvilcraft:frost_metal_ingot'  // 基底
  },
  "loops": 1,   //循环
  "results": [  //产物
    {
      "id": 'anvilcraft:abnormal_amulet'
    }
  ],
  "sequence": [
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": 'anvilcraft:frost_metal_ingot' 
        },
        {
          "type": "neoforge:single",
          "amount": 250,
          "fluid": "create_dragons_plus:dragon_breath"
        }
      ],
      "results": [
        {
          "id": 'anvilcraft:frost_metal_ingot'  //中间产物
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": 'anvilcraft:frost_metal_ingot' 
        },
        {
          "type": "neoforge:single",
          "amount": 1000,
          "fluid": "minecraft:milk"
        }
      ],
      "results": [
        {
          "id": 'anvilcraft:frost_metal_ingot'  //中间产物
        }
      ]
    },
    {
      "type": "create:pressing",    //辊压
      "ingredients": [
        {
          "item": 'anvilcraft:frost_metal_ingot'    //中间产物
        }
      ],
      "results": [
        {
          "id": 'anvilcraft:frost_metal_ingot'  //中间产物
        }
      ]
    }
  ],
  "transitional_item": {    
    "id": 'anvilcraft:frost_metal_ingot'    // 中间产物
  }
})
})