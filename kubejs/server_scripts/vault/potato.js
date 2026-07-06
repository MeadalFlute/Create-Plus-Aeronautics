LootJS.lootTables(event => {
    event.create("etc:potato")
        // 基础池：确保至少1个条目有效
        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:potato")
                .withWeight(1) // 必选权重
                .setCount([1, 5]) // 必选数量（用setCount）
            );
            pool.rolls([7, 12]); 
        })
        
});