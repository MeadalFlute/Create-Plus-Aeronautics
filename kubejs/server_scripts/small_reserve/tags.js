ServerEvents.tags('item', event => {
  event.add('create:crushed_raw_materials', 'kubejs:crushed_raw_titanium')
  event.add('create:crushed_raw_materials', 'kubejs:crushed_raw_tungsten')

  event.add('anvilcraft:templates', 'create_dragons_plus:blaze_upgrade_smithing_template')
  event.add('anvilcraft:templates', 'kaleidoscope_end:ender_dragon_smithing_template')
  
  event.add('c:tools/knife', '#anvilcraft:tools/heavy_halberd')
  event.add('c:tools/knife','#kaleidoscope_cookery:kitchen_knife')
//  event.add('kaleidoscope_cookery:kitchen_knife','#farmersdelight:tools/knives')
  event.add('kaleidoscope_cookery:kitchen_knife','#anvilcraft:tools/heavy_halberd')

  event.add("c:seeds",'#kaleidoscope_cookery:cookery_mod_seeds')
  /*event.add('c:seeds', [
    'minecraft:kelp',
    'minecraft:cactus',
    'minecraft:bamboo',
    'minecraft:sugar_cane'
  ])*/

  event.add('kaleidoscope_cookery:raw_dough','#c:foods/dough')
})