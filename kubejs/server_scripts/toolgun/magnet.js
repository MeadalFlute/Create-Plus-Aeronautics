ServerEvents.recipes(event => {

  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "minecraft:iron_block" },       // 基底
      { "item": "anvilcraft:topaz" }            // 手持消耗
    ],
    "results": [
      { "id": "anvilcraft:hollow_magnet_block" }
    ]
  })

  event.custom({
    "type": "create:deploying",
    "ingredients": [
      { "item": "minecraft:iron_block" },                // 基底
      { "item": "anvilcraft:topaz_block" }               // 手持不消耗
    ],
    "keep_held_item": true,                                  // 保持手持物不被消耗
    "results": [
      { "id": "anvilcraft:hollow_magnet_block" },
    ]
  })


  event.remove({ output: 'create_aeronautics_toolgun:magnetic_gun' })
  event.shaped(
    Item.of('create_aeronautics_toolgun:magnetic_gun'), // arg 1: output
    [
      'ABA',
      'CDC', // arg 2: the shape (array of strings)
      'FGF'
    ],
    {
      A: '#c:plates/copper',
      B: 'create:electron_tube',  //arg 3: the mapping object
      C: '#anvilcraft:capacitor',
      D: 'create:extendo_grip',
      F: 'create:precision_mechanism',
      G: 'create:railway_casing'
    }
  )
  event.remove({ output: 'create_aeronautics_toolgun:survival_structure_tool' })
  event.shaped(
    Item.of('create_aeronautics_toolgun:survival_structure_tool'), // arg 1: output
    [
      ' A ',
      'EDC', // arg 2: the shape (array of strings)
      ' A '
    ],
    {
      A: 'create:electron_tube',  //arg 3: the mapping object
      E: '#c:plates/brass',
      D: 'create:extendo_grip',
      C: 'create:precision_mechanism',
    }
  )

event.replaceInput(
  { output: 'create_aeronautics_toolgun:portable_structure_container' },         // Arg 1: the filter
  'minecraft:iron_ingot',                    // Arg 2: the item to replace
  Ingredient.of('anvilcraft:magnet_ingot')  // Arg 3: the item to replace it with 
  // Do /kjs hand with the items you want to use to see all their tags.
)
event.shaped(
  Item.of('create_aeronautics_toolgun:disposable_vehicle_container'), // arg 1: output
  [
    'ABA',
    'BCB',
    'ABA'
  ],
  {
    A: 'anvilcraft:magnet_ingot',
    B: 'create:transmitter',  //arg 3: the mapping object
    C: '#anvilcraft:capacitor'
  }
)

})