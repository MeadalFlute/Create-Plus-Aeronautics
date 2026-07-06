ServerEvents.recipes(event => {
event.custom(
  {
  "type": "create:mixing",
  "ingredients": [
    {
      "item": 'minecraft:emerald'
    },
    {
      "item": 'waystones:warp_dust'
    },
    {
      "item": 'waystones:warp_dust'
    },
    {
      "item": 'waystones:warp_dust'
    },
    {
      "item": 'waystones:warp_dust'
    }
  ],
  "results": [
    {
      "id": 'waystones:warp_stone'
    }
  ]
})


event.custom({
  "type": "create_dragons_plus:freezing",
  "ingredients": [
    {
      "item": 'minecraft:ender_eye'
    }
  ],
  "results": [
    {
      "id": 'minecraft:ender_pearl'
    }
  ]
})


event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "item": 'waystones:warp_dust'
    },
    {
      "type": "neoforge:single",
      "amount": 50,
      "fluid": 'create_enchantment_industry:experience'
    }
  ],
  "results": [
    {
      'id':'minecraft:ender_pearl'
    }
  ]
})


event.shapeless(
  Item.of('minecraft:flint', 9), 
  [
    'minecraft:flint',
    '8x minecraft:gravel'
  ]
)


})