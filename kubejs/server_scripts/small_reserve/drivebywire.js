ServerEvents.recipes(event => {
    event.shaped(
  Item.of('drivebywire:wire', 1), // arg 1: output
  [
    'AAA',
    'BCB', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'minecraft:dried_kelp',
    B: 'minecraft:redstone',  //arg 3: the mapping object
    C: 'minecraft:lightning_rod'
  }
);
    event.shapeless(
  Item.of('drivebywire:wire_cutter', 1), // arg 1: output
  [
    'minecraft:light_blue_dye',
    'minecraft:shears', 	       // arg 2: the array of inputs
    'minecraft:dried_kelp'
  ]
);
event.shapeless(
  Item.of('drivebywire:controller_hub', 1), // arg 1: output
  [
    'create:linked_controller',
    'create:brass_casing' 	       // arg 2: the array of inputs
  ]
)
})