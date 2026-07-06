ServerEvents.recipes(event => {
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": 'anvilcraft:frost_metal_ingot'  // 基底
  },
  "loops": 1,   //循环
  "results": [  //产物
    {
      "id": 'anvilcraft:gem_amulet'
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",   //塞原料
      "ingredients": [
        {
          "item": 'anvilcraft:frost_metal_ingot'   //中间产物
        },
        {
          "item": "anvilcraft:emerald_amulet"   //原料
        }
      ],
      "results": [
        {
          "id": 'anvilcraft:frost_metal_ingot' //中间产物
        }
      ]
    },
    {
      "type": "create:deploying",   //塞原料
      "ingredients": [
        {
          "item": 'anvilcraft:frost_metal_ingot'   //中间产物
        },
        {
          "item": 'anvilcraft:ruby_amulet'   //原料
        }
      ],
      "results": [
        {
          "id": 'anvilcraft:frost_metal_ingot' //中间产物
        }
      ]
    },
    {
      "type": "create:deploying",   //塞原料
      "ingredients": [
        {
          "item": 'anvilcraft:frost_metal_ingot'   //中间产物
        },
        {
          "item": 'anvilcraft:topaz_amulet'   //原料
        }
      ],
      "results": [
        {
          "id": 'anvilcraft:frost_metal_ingot' //中间产物
        }
      ]
    },
    {
      "type": "create:deploying",   //塞原料
      "ingredients": [
        {
          "item": 'anvilcraft:frost_metal_ingot'   //中间产物
        },
        {
          "item": 'anvilcraft:sapphire_amulet'   //原料
        }
      ],
      "results": [
        {
          "id": 'anvilcraft:frost_metal_ingot' //中间产物
        }
      ]
    },
    {
      "type": "create:pressing",    //辊压
      "ingredients": [
        {
          "item": 'anvilcraft:frost_metal_ingot'   //中间产物
        }
      ],
      "results": [
        {
          "id": 'anvilcraft:frost_metal_ingot' //中间产物
        }
      ]
    }
  ],
  "transitional_item": {    
    "id": 'anvilcraft:frost_metal_ingot'   // 中间产物
  }
})


event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": 'anvilcraft:frost_metal_ingot'  // 基底
  },
  "loops": 1,   //循环
  "results": [  //产物
    {
      "id": 'anvilcraft:nature_amulet'
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",   //塞原料
      "ingredients": [
        {
          "item": 'anvilcraft:frost_metal_ingot'   //中间产物
        },
        {
          "item": "anvilcraft:silence_amulet"   //原料
        }
      ],
      "results": [
        {
          "id": 'anvilcraft:frost_metal_ingot' //中间产物
        }
      ]
    },
    {
      "type": "create:deploying",   //塞原料
      "ingredients": [
        {
          "item": 'anvilcraft:frost_metal_ingot'   //中间产物
        },
        {
          "item": 'anvilcraft:feather_amulet'   //原料
        }
      ],
      "results": [
        {
          "id": 'anvilcraft:frost_metal_ingot' //中间产物
        }
      ]
    },
    {
      "type": "create:deploying",   //塞原料
      "ingredients": [
        {
          "item": 'anvilcraft:frost_metal_ingot'   //中间产物
        },
        {
          "item": 'anvilcraft:dog_amulet'   //原料
        }
      ],
      "results": [
        {
          "id": 'anvilcraft:frost_metal_ingot' //中间产物
        }
      ]
    },
    {
      "type": "create:deploying",   //塞原料
      "ingredients": [
        {
          "item": 'anvilcraft:frost_metal_ingot'   //中间产物
        },
        {
          "item": 'anvilcraft:cat_amulet'   //原料
        }
      ],
      "results": [
        {
          "id": 'anvilcraft:frost_metal_ingot' //中间产物
        }
      ]
    },
    {
      "type": "create:pressing",    //辊压
      "ingredients": [
        {
          "item": 'anvilcraft:frost_metal_ingot'   //中间产物
        }
      ],
      "results": [
        {
          "id": 'anvilcraft:frost_metal_ingot' //中间产物
        }
      ]
    }
  ],
  "transitional_item": {    
    "id": 'anvilcraft:frost_metal_ingot'   // 中间产物
  }
})


})