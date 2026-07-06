LootJS.lootTables(event => {
    event.create("etc:spawn_equipment")
    // 基础池
        // 低概率不死图腾
        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:totem_of_undying")
                .withWeight(10))
            pool.rolls(1)
            pool.when(condition => {condition.randomChance(0.1)})
        })
        // 1. 武器池
        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:diamond_sword")
                .withWeight(10)
                .enchantWithLevels([10, 30]))
            pool.addEntry(LootEntry.of("minecraft:trident")
                .withWeight(5)
                .enchantWithLevels([10, 30]))
            pool.addEntry(LootEntry.of("minecraft:iron_sword")
                .withWeight(15)
                .enchantWithLevels([15, 30]))
            pool.addEntry(LootEntry.of("minecraft:golden_sword")
                .withWeight(10)
                .enchantWithLevels([25, 30]))
            pool.addEntry(LootEntry.of("minecraft:netherite_sword")
                .withWeight(5)
                .enchantWithLevels([25, 30]))
            pool.addEntry(LootEntry.empty().withWeight(10)) // 空白条目
            pool.rolls(1);
        })

        // 2. 头盔池
        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:diamond_helmet")
                .withWeight(10)
                .enchantWithLevels([10, 30]))
            pool.addEntry(LootEntry.of("minecraft:iron_helmet")
                .withWeight(15)
                .enchantWithLevels([15, 30]))
            pool.addEntry(LootEntry.of("minecraft:golden_helmet")
                .withWeight(10)
                .enchantWithLevels([25, 30]))
            pool.addEntry(LootEntry.of("minecraft:netherite_helmet")
                .withWeight(5)
                .enchantWithLevels([25, 30]))
            pool.addEntry(LootEntry.empty().withWeight(10)) // 空白条目
            pool.rolls(1);
        })

        // 3. 胸甲池
        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:diamond_chestplate")
                .withWeight(10)
                .enchantWithLevels([10, 30]))
            pool.addEntry(LootEntry.of("minecraft:iron_chestplate")
                .withWeight(15)
                .enchantWithLevels([15, 30]))
            pool.addEntry(LootEntry.of("minecraft:golden_chestplate")
                .withWeight(10)
                .enchantWithLevels([25, 30]))
            pool.addEntry(LootEntry.of("minecraft:netherite_chestplate")
                .withWeight(5)
                .enchantWithLevels([25, 30]))
            pool.addEntry(LootEntry.empty().withWeight(10)) // 空白条目
            pool.rolls(1);
        })

        // 4. 护腿池
        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:diamond_leggings")
                .withWeight(10)
                .enchantWithLevels([10, 30]))
            pool.addEntry(LootEntry.of("minecraft:iron_leggings")
                .withWeight(15)
                .enchantWithLevels([15, 30]))
            pool.addEntry(LootEntry.of("minecraft:golden_leggings")
                .withWeight(10)
                .enchantWithLevels([25, 30]))
            pool.addEntry(LootEntry.of("minecraft:netherite_leggings")
                .withWeight(5)
                .enchantWithLevels([25, 30]))
            pool.addEntry(LootEntry.empty().withWeight(10)) // 空白条目
            pool.rolls(1);
        })

        // 5. 靴子池
        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:diamond_boots")
                .withWeight(10)
                .enchantWithLevels([10, 30]))
            pool.addEntry(LootEntry.of("minecraft:iron_boots")
                .withWeight(15)
                .enchantWithLevels([15, 30]))
            pool.addEntry(LootEntry.of("minecraft:golden_boots")
                .withWeight(10)
                .enchantWithLevels([25, 30]))
            pool.addEntry(LootEntry.of("minecraft:netherite_boots")
                .withWeight(5)
                .enchantWithLevels([25, 30]))
            pool.addEntry(LootEntry.empty().withWeight(10)) // 空白条目
            pool.rolls(1);
        })
    
})