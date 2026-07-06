ServerEvents.recipes(event => {
    event.replaceOutput({output:'minecraft:wooden_axe'}, 'minecraft:wooden_axe','minecraft:stone_axe')  // 将木斧替换为石斧
    event.replaceInput({input:'minecraft:wooden_axe'}, 'minecraft:wooden_axe','minecraft:stone_axe')
    event.shapeless(Item.of("stone_axe"),"minecraft:wooden_axe")  // 将木斧合成石斧
})