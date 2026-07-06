LootJS.lootTables(event => {
    event.create("etc:equipment_vault_normal", "vault")
    // 基础池
        .createPool(pool => {
            // 各式防具、盾牌、弓弩、三叉戟、鞘翅
            pool.addEntry(LootEntry.of("minecraft:diamond_sword").withWeight(10).enchantWithLevels([10, 30]).enchantRandomly().withQuality(2))
            pool.addEntry(LootEntry.of("minecraft:diamond_chestplate").withWeight(10).enchantWithLevels([10, 30]).enchantRandomly().withQuality(2))
            pool.addEntry(LootEntry.of("minecraft:diamond_leggings").withWeight(10).enchantWithLevels([10, 30]).enchantRandomly().withQuality(2))
            pool.addEntry(LootEntry.of("minecraft:diamond_boots").withWeight(10).enchantWithLevels([10, 30]).enchantRandomly().withQuality(2))
            pool.addEntry(LootEntry.of("minecraft:diamond_helmet").withWeight(10).enchantWithLevels([10, 30]).enchantRandomly().withQuality(2))
            pool.addEntry(LootEntry.of("minecraft:bow").withWeight(10).enchantWithLevels([10, 30]).enchantRandomly().withQuality(2))
            pool.addEntry(LootEntry.of("minecraft:crossbow").withWeight(10).enchantWithLevels([10, 30]).enchantRandomly().withQuality(2))
            pool.addEntry(LootEntry.of("minecraft:trident").withWeight(5).enchantWithLevels([10, 30]).enchantRandomly().withQuality(3))
            pool.addEntry(LootEntry.of("minecraft:shield").withWeight(10).withQuality(1).enchantRandomly())
            pool.addEntry(LootEntry.of("minecraft:elytra").withWeight(5).withQuality(3).enchantRandomly())
            pool.addEntry(LootEntry.of("minecraft:iron_sword").withWeight(15).enchantWithLevels([15, 30]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of("minecraft:iron_chestplate").withWeight(15).enchantWithLevels([15, 30]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of("minecraft:iron_leggings").withWeight(15).enchantWithLevels([15, 30]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of("minecraft:iron_boots").withWeight(15).enchantWithLevels([15, 30]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of("minecraft:iron_helmet").withWeight(15).enchantWithLevels([15, 30]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of("minecraft:golden_sword").withWeight(10).enchantWithLevels([25, 30]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of("minecraft:golden_chestplate").withWeight(10).enchantWithLevels([25, 30]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of("minecraft:golden_leggings").withWeight(10).enchantWithLevels([25, 30]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of("minecraft:golden_boots").withWeight(10).enchantWithLevels([25, 30]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of("minecraft:golden_helmet").withWeight(10).enchantWithLevels([25, 30]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of("minecraft:netherite_sword").withWeight(1).enchantWithLevels([25, 30]).enchantRandomly().withQuality(3))//
            pool.addEntry(LootEntry.of("minecraft:netherite_chestplate").withWeight(1).enchantWithLevels([25, 30]).enchantRandomly().withQuality(3))
            pool.addEntry(LootEntry.of("minecraft:netherite_leggings").withWeight(1).enchantWithLevels([25, 30]).enchantRandomly().withQuality(3))
            pool.addEntry(LootEntry.of("minecraft:netherite_boots").withWeight(1).enchantWithLevels([25, 30]).enchantRandomly().withQuality(3))
            pool.addEntry(LootEntry.of("minecraft:netherite_helmet").withWeight(1).enchantWithLevels([25, 30]).enchantRandomly().withQuality(3))
            // 不同材质的小刀和马铠
            pool.addEntry(LootEntry.of('kaleidoscope_cookery:iron_kitchen_knife').withWeight(5).enchantWithLevels([25, 30]).enchantRandomly().withQuality(1))       
            pool.addEntry(LootEntry.of('minecraft:iron_axe').withWeight(5).enchantWithLevels([25, 30]).enchantRandomly().withQuality(1))//
            pool.addEntry(LootEntry.of("farmersdelight:iron_knife").withWeight(5).enchantWithLevels([25, 30]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of('minecraft:iron_horse_armor').withWeight(15).withQuality(1))            
            pool.addEntry(LootEntry.of('kaleidoscope_cookery:diamond_kitchen_knife').withWeight(1).enchantWithLevels([10, 30]).enchantRandomly().withQuality(1))       
            pool.addEntry(LootEntry.of("minecraft:diamond_axe").withWeight(1).enchantWithLevels([10, 30]).enchantRandomly().withQuality(1))//
            pool.addEntry(LootEntry.of("farmersdelight:diamond_knife").withWeight(1).enchantWithLevels([10, 30]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of('minecraft:diamond_horse_armor').withWeight(5).withQuality(1))
            // 箭矢
            
            .addEntry(LootEntry.reference("etc:arrows").withWeight(5).setCount([10, 20]).withQuality(1))    
            // 附魔书
            .addEntry(LootEntry.of("minecraft:book").withWeight(3).enchantWithLevels([30,30]).withQuality(1))
            .addEntry(LootEntry.of("minecraft:enchanted_book").withWeight(2).withQuality(1).enchantRandomly())
            // 乐色
            pool.addEntry(LootEntry.of('minecraft:turtle_helmet').withWeight(1).enchantWithLevels([25, 30]).enchantRandomly().withQuality(2))
            pool.addEntry(LootEntry.of('kaleidoscope_cookery:straw_hat_flower').withWeight(1).enchantWithLevels([25, 30]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of('kaleidoscope_cookery:farmer_chest_plate').withWeight(1).enchantWithLevels([25, 30]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of('kaleidoscope_cookery:farmer_leggings').withWeight(1).enchantWithLevels([25, 30]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of('kaleidoscope_cookery:farmer_boots').withWeight(1).enchantWithLevels([25, 30]).enchantRandomly().withQuality(1))

            // 末地乐事俩刀          
            pool.addEntry(LootEntry.of('ends_delight:dragon_egg_shell_knife').withWeight(2).enchantWithLevels([25, 30]).enchantRandomly().withQuality(2))
            pool.addEntry(LootEntry.of('ends_delight:purpur_knife').withWeight(2).enchantWithLevels([25, 30]).enchantRandomly().withQuality(1))
            // 农夫乐事平底锅
            pool.addEntry(LootEntry.of('farmersdelight:skillet').withWeight(1).enchantWithLevels([25, 30]).enchantRandomly().withQuality(1))         
            pool.rolls([2,4])   // 基础抽取次数：3~5次
            pool.bonusRolls(1)  // 每级幸运值额外抽取次数：2次
            })
})