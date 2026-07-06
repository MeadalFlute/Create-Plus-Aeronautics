LootJS.modifiers((event) => {
    event
        .addEntityModifier('minecraft:endermite')
        .matchEquip("mainhand","#c:tools/knife")    
        .addLoot('createfood:ground_endermite')

    event
        .addEntityModifier(["minecraft:villager"])
        .randomChanceWithEnchantment("minecraft:looting",[0, 0.005, 0.010, 0.015])
        .addLoot('anvilcraft:emerald_amulet')

    event
        .addEntityModifier(["minecraft:villager"])
        .randomChanceWithEnchantment("minecraft:looting",[0, 0.5, 1.2, 2])
        .addLoot('minecraft:emerald')

})
