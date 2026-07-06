ServerEvents.recipes(event => {
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "anvilcraft:royal_steel_ingot" },
    "loops": 16,
    "results": [
      { "chance": 20.0, "id": "anvilcraft:cat_amulet" },
      { "chance": 8.0, "id": "anvilcraft:royal_steel_ingot" },
      { "chance": 8.0, "id": "minecraft:cod" },
      { "chance": 4.0, "id": "minecraft:salmon" }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_cat_amulet" },
          { "item": "minecraft:cod" }
        ],
        "results": [{ "id": "kubejs:incomplete_cat_amulet" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          { "item": "kubejs:incomplete_cat_amulet" },
          { "item": "minecraft:salmon" }
        ],
        "results": [{ "id": "kubejs:incomplete_cat_amulet" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          { "item": "kubejs:incomplete_cat_amulet" }
        ],
        "results": [{ "id": "kubejs:incomplete_cat_amulet" }]
      }
    ],
    "transitional_item": { "id": "kubejs:incomplete_cat_amulet" }
  })
})