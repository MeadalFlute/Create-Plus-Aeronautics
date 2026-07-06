LootJS.lootTables(event => {
    event.create("etc:anvilcraft_vault", "vault")
    
        .createPool(pool => {
            // 武器工具
            pool.addEntry(LootEntry.of("anvilcraft:frost_metal_sword").withWeight(5).setCount(1).withQuality(2).enchantWithLevels([15,60]).enchantRandomly())
            pool.addEntry(LootEntry.of("anvilcraft:frost_metal_hoe").withWeight(5).setCount(1).withQuality(2).enchantWithLevels([15,60]).enchantRandomly())
            pool.addEntry(LootEntry.of("anvilcraft:frost_metal_shovel").withWeight(5).setCount(1).withQuality(2).enchantWithLevels([15,60]).enchantRandomly())
            pool.addEntry(LootEntry.of("anvilcraft:frost_metal_axe").withWeight(5).setCount(1).withQuality(2).enchantWithLevels([15,60]).enchantRandomly())
            pool.addEntry(LootEntry.of("anvilcraft:frost_metal_pickaxe").withWeight(5).setCount(1).withQuality(2).enchantWithLevels([15,60]).enchantRandomly())
            pool.addEntry(LootEntry.of("anvilcraft:ember_metal_sword").withWeight(5).setCount(1).withQuality(2).enchantWithLevels([15,60]).enchantRandomly())
            pool.addEntry(LootEntry.of("anvilcraft:ember_metal_hoe").withWeight(5).setCount(1).withQuality(2).enchantWithLevels([15,60]).enchantRandomly())
            pool.addEntry(LootEntry.of("anvilcraft:ember_metal_shovel").withWeight(5).setCount(1).withQuality(2).enchantWithLevels([15,60]).enchantRandomly())
            pool.addEntry(LootEntry.of("anvilcraft:ember_metal_axe").withWeight(5).setCount(1).withQuality(2).enchantWithLevels([15,60]).enchantRandomly())
            pool.addEntry(LootEntry.of("anvilcraft:ember_metal_pickaxe").withWeight(5).setCount(1).withQuality(2).enchantWithLevels([15,60]).enchantRandomly())
            pool.addEntry(LootEntry.of("anvilcraft:royal_steel_sword").withWeight(15).setCount(1).withQuality(1).enchantWithLevels([15,60]).enchantRandomly())
            pool.addEntry(LootEntry.of("anvilcraft:royal_steel_hoe").withWeight(15).setCount(1).withQuality(1).enchantWithLevels([15,60]).enchantRandomly())
            pool.addEntry(LootEntry.of("anvilcraft:royal_steel_shovel").withWeight(15).setCount(1).withQuality(1).enchantWithLevels([15,60]).enchantRandomly())
            pool.addEntry(LootEntry.of("anvilcraft:royal_steel_axe").withWeight(15).setCount(1).withQuality(1).enchantWithLevels([15,60]).enchantRandomly())
            pool.addEntry(LootEntry.of("anvilcraft:royal_steel_pickaxe").withWeight(15).setCount(1).withQuality(1).enchantWithLevels([15,60]).enchantRandomly())
            pool.addEntry(LootEntry.of("anvilcraft:multitool").withWeight(5).setCount(1).withQuality(2))
            pool.addEntry(LootEntry.of("anvilcraft:dragon_rod").withWeight(5).setCount(1).withQuality(2))
            // 杂项
            pool.addEntry(LootEntry.of("anvilcraft:amulet_box").withWeight(5).setCount(1).withQuality(2))
            pool.addEntry(LootEntry.of("anvilcraft:totem_of_rage").withWeight(5).setCount(1).withQuality(2))
            pool.addEntry(LootEntry.of("anvilcraft:totem_of_recovery").withWeight(5).setCount(1).withQuality(2))
            pool.addEntry(LootEntry.of("anvilcraft:topaz_amulet").withWeight(5).setCount(1).withQuality(2))
            pool.addEntry(LootEntry.of("anvilcraft:ruby_amulet").withWeight(5).setCount(1).withQuality(2))
            pool.addEntry(LootEntry.of("anvilcraft:comrade_amulet").withWeight(5).setCount(1).withQuality(2))
            pool.addEntry(LootEntry.of("anvilcraft:silence_amulet").withWeight(5).setCount(1).withQuality(2))
            pool.addEntry(LootEntry.of("anvilcraft:capacitor").withWeight(10).setCount([1,4]).withQuality(1))
            // 资源和时尚小垃圾
            pool.addEntry(LootEntry.of("anvilcraft:frost_metal_ingot").withWeight(10).setCount([4,8]).withQuality(1))
            pool.addEntry(LootEntry.of("anvilcraft:ember_metal_ingot").withWeight(10).setCount([4,8]).withQuality(1))
            pool.addEntry(LootEntry.of("anvilcraft:royal_steel_ingot").withWeight(15).setCount([4,8]).withQuality(1))
            pool.addEntry(LootEntry.of("anvilcraft:topaz").withWeight(15).setCount([4,8]).withQuality(1))
            pool.addEntry(LootEntry.of("anvilcraft:ruby").withWeight(15).setCount([4,8]).withQuality(1))
            pool.addEntry(LootEntry.of("anvilcraft:sapphire").withWeight(15).setCount([4,8]).withQuality(1))
            pool.addEntry(LootEntry.of("anvilcraft:circuit_board").withWeight(15).setCount([4,8]).withQuality(1))
            pool.addEntry(LootEntry.of("anvilcraft:prismarine_cluster").withWeight(15).setCount([16,32]).withQuality(1))
            pool.addEntry(LootEntry.of("anvilcraft:tungsten_ingot").withWeight(15).setCount([16,32]).withQuality(1))
            pool.addEntry(LootEntry.of("anvilcraft:titanium_ingot").withWeight(15).setCount([16,32]).withQuality(1))
            pool.addEntry(LootEntry.of("anvilcraft:magnet_block").withWeight(15).setCount([16,32]).withQuality(1))
            pool.addEntry(LootEntry.of("anvilcraft:giant_anvil").withWeight(5).setCount(1).withQuality(2))
            pool.addEntry(LootEntry.of("anvilcraft:tin_can").withWeight(15).setCount([4,8]).withQuality(1))
            pool.addEntry(LootEntry.of("anvilcraft:spectral_anvil").withWeight(15).setCount([4,8]).withQuality(2))
            pool.addEntry(LootEntry.of("anvilcraft:royal_anvil").withWeight(5).setCount([1,2]).withQuality(3))
            pool.addEntry(LootEntry.of("anvilcraft:overseer").withWeight(5).setCount(1).withQuality(3))
            pool.addEntry(LootEntry.of("anvilcraft:menger_sponge").withWeight(5).setCount(1).withQuality(3))
            pool.addEntry(LootEntry.of("anvilcraft:lead_block").withWeight(15).setCount(1).withQuality(2))
            pool.rolls([3,5])   // 基础抽取次数：3~5次
            pool.bonusRolls(2)  // 每级幸运值额外抽取次数：2次
        })
        .createPool(pool => {
            // 低概率获得传说级物品
            pool.addEntry(LootEntry.of("anvilcraft:transcendium_block").withWeight(2).setCount(1).withQuality(5))
            pool.addEntry(LootEntry.of("anvilcraft:creative_generator").withWeight(1).setCount(1).withQuality(10)).when(condition => {
                condition.randomChance(0.2) // 20%的概率添加该项目，实际权重为0.2
            })
            pool.addEntry(LootEntry.of("anvilcraft:overseer").withWeight(10).setCount(1).withQuality(3))
            pool.addEntry(LootEntry.of("anvilcraft:menger_sponge").withWeight(15).setCount(1).withQuality(3))
            pool.addEntry(LootEntry.of("anvilcraft:large_cake").withWeight(15).setCount(1).withQuality(3))
            pool.addEntry(LootEntry.of("anvilcraft:transcendium_ingot").withWeight(15).setCount(1).withQuality(3))
            pool.addEntry(LootEntry.of('minecraft:heavy_core').withWeight(5).setCount(1).withQuality(3))
            pool.rolls(0)   // 基础抽取次数
            pool.bonusRolls(1)  // 每级幸运值额外抽取次数
            // pool.when(conditions => {conditions.randomChance(0.2)}) 触发几率
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("anvilcraft:lead_block").withWeight(15).setCount(1).withQuality(2))
            pool.rolls(0)   // 基础抽取次数
            pool.bonusRolls(1)  // 每级幸运值额外抽取次数
        })
        // 特殊池
        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:cookie").withWeight(2).withQuality(4).setName("§e幸运饼干"))
            
                
            pool.rolls(0)
            pool.bonusRolls(1)
        })           
    
})