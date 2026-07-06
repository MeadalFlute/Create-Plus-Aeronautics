ServerEvents.recipes(event => {

// 龙肉再生暂行方法
/*event.custom({
  "type": "create_dragons_plus:ending",
  "ingredients": [
    {
      "item": 'farmersdelight:minced_beef'
    }
  ],
  "results": [
    {
      "id": 'createfood:minced_dragon'
    }
  ]
})*/    


// 填馅烤马铃薯
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": 'minecraft:baked_potato'  // 基底
  },
  "loops": 1,   //循环
  "results": [  //产物
    {
      "id": 'farmersdelight:stuffed_potato'
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",   //塞原料
      "ingredients": [
        {
          "item": 'minecraft:baked_potato'    //中间产物
        },
        {
          "tag": 'c:foods/cooked_meat'   //原料
        }
      ],
      "results": [
        {
          "id": 'minecraft:baked_potato'  //中间产物
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": 'minecraft:baked_potato'
        },
        {
          "type": "neoforge:single",
          "amount": 250,
          "fluid": "minecraft:milk"
        }
      ],
      "results": [
        {
          "id": 'minecraft:baked_potato'  //中间产物
        }
      ]
    }
  ],
  "transitional_item": {    
    "id": 'minecraft:baked_potato'    // 中间产物
  }
})


// 腐肉变皮革
event.custom({
  "type": "create_dragons_plus:freezing",
  "ingredients": [
    {
      "item": 'anvilcraft:rotten_flesh_block'
    }
  ],
  "results": [
    {
      "id": 'minecraft:leather'
    }
  ]
})   


// 牛奶变奶油
event.custom({
  "type": "create:compacting",
  "ingredients": [
    {
      "item": 'minecraft:milk_bucket'
    }
  ],
  "results": [
    {
      count:4,
      "id": 'anvilcraft:cream'
    },
    {
      "id": 'minecraft:bucket'
    }
  ]
})
event.custom({
  "type": "create:compacting",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 1000,
      "fluid": "minecraft:milk"
    }
  ],
  "results": [
    {
      count:4,
      "id": 'anvilcraft:cream'
    }
  ]
})


// 种子榨油
event.custom({
  "type": "create:compacting",
  "ingredients": [
    {
      "item": 'anvilcraft:seeds_pack'
    }
  ],
  "results": [
    {
      "amount": 50,
      "id": "kubejs:seeds_oil"
    },
    {
      "id": 'kubejs:seeds_oil_residue'
    }
  ]
})


// 种子油与奶油混合制成油脂（或者黄油？）
event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 400,
      "fluid": "kubejs:seeds_oil"
    },
    {
      "item": 'anvilcraft:cream'
    }
  ],
  "results": [
    {
      "id": 'kaleidoscope_cookery:oil_block'
    }
  ]
})
event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 400,
      "fluid": "kubejs:seeds_oil"
    },
    {
      "item": 'createfood:butter'
    }
  ],
  "results": [
    {
      "id": 'kaleidoscope_cookery:oil_block'
    }
  ]
})
event.custom({
  "type": "create:mixing",
  "heat_requirement": "heated",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 50,
      "fluid": "kubejs:seeds_oil"
    }
  ],
  "results": [
    {
      "id": 'kaleidoscope_cookery:oil'
    }
  ]
})


// 油渣与泥土混合制成有机肥料
event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "item": 'kubejs:seeds_oil_residue'
    },
    {
      "item": 'kubejs:seeds_oil_residue'
    },
    {
      "item": 'kubejs:seeds_oil_residue'
    },
    {
      "item": 'kubejs:seeds_oil_residue'
    },
    {
      "item": 'kubejs:seeds_oil_residue'
    },
    {
      "item": 'kubejs:seeds_oil_residue'
    },
    {
      "item": 'kubejs:seeds_oil_residue'
    },
    {
      "item": 'kubejs:seeds_oil_residue'
    },
    {
      "item": 'minecraft:dirt'
    },
    {
      "type": "neoforge:single",
      "amount": 100,
      "fluid": "minecraft:water"
    }
  ],
  "results": [
    {
      "id": 'farmersdelight:organic_compost'
    }
  ]
})

// 种子油制肥料
/*event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 50,
      "fluid": "kubejs:seeds_oil"
    },
    {
      "tag": 'c:vegetables'
    },
    {
      "tag": 'c:vegetables'
    },
    {
      "tag": 'c:vegetables'
    },
    {
      "tag": 'c:vegetables'
    }
  ],
  "results": [
    {
      "amount":50,
      "id": "sliceanddice:fertilizer"
    }
  ]
})*/

// 种子油制作烈焰蛋糕胚
event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 250,
      "fluid": "kubejs:seeds_oil"
    },
    {
      "item": 'create:cinder_flour'
    }
  ],
  "results": [
    {
      "id": "create:blaze_cake_base"
    }
  ]
})


// 粉碎可可豆
event.custom({
  type: "create:pressing",
  ingredients: [
    {
      tag: "c:crops/cocoa_bean"
    }
  ],
  results: [
    {
      id: 'anvilcraft:cocoa_powder'
    },{
      id: 'anvilcraft:cocoa_butter'
    }
  ]
})

// 种子油注液
/*event.custom({
  type:"create:filling",
  ingredients:[
    {
      amount:1000,
      fluid:"kubejs:seeds_oil",
      type:"neoforge:single"
    },
    {item:'kaleidoscope_cookery:oil_pot'}
  ],
  results:[
    {id:"kaleidoscope_cookery:oil_pot[kaleidoscope_cookery:oil_pot_oil_count=256]"}
  ]
})*/


})


