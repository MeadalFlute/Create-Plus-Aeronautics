LootJS.lootTables(event => {
    event.create("etc:cardboard_suit")
        // 回传整套纸板套
        .createPool(pool => {
            pool.addEntry(LootEntry.of("create:cardboard_boots"))
            pool.rolls(1)
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("create:cardboard_leggings"))
            pool.rolls(1)
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("create:cardboard_chestplate"))
            pool.rolls(1)
        })
        .createPool(pool => {
            pool.addEntry(LootEntry.of("create:cardboard_helmet"))
            pool.rolls(1)
        })        
});