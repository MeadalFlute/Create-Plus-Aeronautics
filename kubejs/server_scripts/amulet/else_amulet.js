ServerEvents.recipes(event => {
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "anvilcraft:royal_steel_ingot" },
    "loops": 16,
    "results": [
      { "chance": 20.0, "id": "anvilcraft:dog_amulet" },
      { "chance": 8.0, "id": "anvilcraft:royal_steel_ingot" },
      { "chance": 8.0, "id": "minecraft:bone_block" },
      { "chance": 4.0, "id": 'anvilcraft:rotten_flesh_block' }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_dog_amulet" },
          { "tag": "c:bones" }
        ],
        "results": [{ "id": "kubejs:incomplete_dog_amulet" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_dog_amulet" },
          { "tag": "c:foods/raw_meat" }
        ],
        "results": [{ "id": "kubejs:incomplete_dog_amulet" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          { "item": "kubejs:incomplete_dog_amulet" }
        ],
        "results": [{ "id": "kubejs:incomplete_dog_amulet" }]
      }
    ],
    "transitional_item": { "id": "kubejs:incomplete_dog_amulet" }
  })
// anvilcraft:cogwheel_amulet已被移除
/*  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "anvilcraft:royal_steel_ingot" },
    "loops": 4,
    "results": [
      { "chance": 20.0, "id": "anvilcraft:cogwheel_amulet" },
      { "chance": 8.0, "id": "anvilcraft:royal_steel_ingot" },
      { "chance": 8.0, "id": 'create_compressed:mechanism_block' },
      { "chance": 4.0, "id": "create:precision_mechanism" }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_cogwheel_amulet" },
          { "item": "create_compressed:mechanism_block" }
        ],
        "results": [{ "id": "kubejs:incomplete_cogwheel_amulet" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          { "item": "kubejs:incomplete_cogwheel_amulet" }
        ],
        "results": [{ "id": "kubejs:incomplete_cogwheel_amulet" }]
      }
    ],
    "transitional_item": { "id": "kubejs:incomplete_cogwheel_amulet" }
  })*/

event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "anvilcraft:royal_steel_ingot" },
    "loops": 4,
    "results": [
      { "id": "anvilcraft:comrade_amulet" }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_comrade_amulet" },
          { "item": "minecraft:name_tag" }
        ],
        "results": [{ "id": "kubejs:incomplete_comrade_amulet" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          { "item": "kubejs:incomplete_comrade_amulet" }
        ],
        "results": [{ "id": "kubejs:incomplete_comrade_amulet" }]
      }
    ],
    "transitional_item": { "id": "kubejs:incomplete_comrade_amulet" }
  })
event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "anvilcraft:royal_steel_ingot" },
    "loops": 8,
    "results": [
      { "chance": 20.0, "id": "anvilcraft:feather_amulet" },
      { "chance": 8.0, "id": "anvilcraft:royal_steel_ingot" },
      { "chance": 8.0, "id": "minecraft:phantom_membrane" },
      { "chance": 4.0, "id": "minecraft:feather" }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_feather_amulet" },
          { "item": "minecraft:phantom_membrane" }
        ],
        "results": [{ "id": "kubejs:incomplete_feather_amulet" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_feather_amulet" },
          { "item": "minecraft:feather" }
        ],
        "results": [{ "id": "kubejs:incomplete_feather_amulet" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          { "item": "kubejs:incomplete_feather_amulet" }
        ],
        "results": [{ "id": "kubejs:incomplete_feather_amulet" }]
      }
    ],
    "transitional_item": { "id": "kubejs:incomplete_feather_amulet" }
  })

  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "anvilcraft:royal_steel_ingot" },
    "loops": 9,
    "results": [
      { "chance": 20.0, "id": "anvilcraft:ruby_amulet" },
      { "chance": 8.0, "id": "anvilcraft:royal_steel_ingot" },
      { "chance": 8.0, "id": "anvilcraft:ruby_block" },
      { "chance": 4.0, "id": "anvilcraft:ruby" }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_ruby_amulet" },
          { "item": "anvilcraft:ruby" }
        ],
        "results": [{ "id": "kubejs:incomplete_ruby_amulet" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          { "item": "kubejs:incomplete_ruby_amulet" }
        ],
        "results": [{ "id": "kubejs:incomplete_ruby_amulet" }]
      }
    ],
    "transitional_item": { "id": "kubejs:incomplete_ruby_amulet" }
  })
event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "anvilcraft:royal_steel_ingot" },
    "loops": 9,
    "results": [
      { "chance": 20.0, "id": "anvilcraft:sapphire_amulet" },
      { "chance": 8.0, "id": "anvilcraft:royal_steel_ingot" },
      { "chance": 8.0, "id": "anvilcraft:sapphire_block" },
      { "chance": 4.0, "id": "anvilcraft:sapphire" }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_sapphire_amulet" },
          { "item": "anvilcraft:sapphire" }
        ],
        "results": [{ "id": "kubejs:incomplete_sapphire_amulet" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          { "item": "kubejs:incomplete_sapphire_amulet" }
        ],
        "results": [{ "id": "kubejs:incomplete_sapphire_amulet" }]
      }
    ],
    "transitional_item": { "id": "kubejs:incomplete_sapphire_amulet" }
  })
event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "anvilcraft:royal_steel_ingot" },
    "loops": 16,
    "results": [
      { "id": "anvilcraft:silence_amulet" }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_silence_amulet" },
          { "item": "minecraft:echo_shard" }
        ],
        "results": [{ "id": "kubejs:incomplete_silence_amulet" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_silence_amulet" },
          { "item": "minecraft:sculk" }
        ],
        "results": [{ "id": "kubejs:incomplete_silence_amulet" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          { "item": "kubejs:incomplete_silence_amulet" }
        ],
        "results": [{ "id": "kubejs:incomplete_silence_amulet" }]
      }
    ],
    "transitional_item": { "id": "kubejs:incomplete_silence_amulet" }
  })
event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "anvilcraft:royal_steel_ingot" },
    "loops": 9,
    "results": [
      { "chance": 20.0, "id": "anvilcraft:topaz_amulet" },
      { "chance": 8.0, "id": "anvilcraft:royal_steel_ingot" },
      { "chance": 8.0, "id": "anvilcraft:topaz_block" },
      { "chance": 4.0, "id": "anvilcraft:topaz" }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_topaz_amulet" },
          { "item": "anvilcraft:topaz" }
        ],
        "results": [{ "id": "kubejs:incomplete_topaz_amulet" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          { "item": "kubejs:incomplete_topaz_amulet" }
        ],
        "results": [{ "id": "kubejs:incomplete_topaz_amulet" }]
      }
    ],
    "transitional_item": { "id": "kubejs:incomplete_topaz_amulet" }
  })
})

