LootJS.lootTables(event => {
    event.create("etc:arrows")  // 直接写tag会混入不可合成的药水箭，故另起一战利品表，曲线救国
        .createPool(pool => {
            pool.addEntry(LootEntry.of('minecraft:tipped_arrow[potion_contents={potion:"minecraft:strong_healing"}]').setCount([16, 32]))
            pool.addEntry(LootEntry.of('minecraft:tipped_arrow[potion_contents={potion:"minecraft:luck"}]').setCount([16, 32]))
            pool.addEntry(LootEntry.of('minecraft:tipped_arrow[potion_contents={potion:"minecraft:strong_harming"}]').setCount([16, 32]))
            pool.addEntry(LootEntry.of('minecraft:tipped_arrow[potion_contents={potion:"minecraft:strong_slowness"}]').setCount([16, 32]))
            pool.addEntry(LootEntry.of('minecraft:tipped_arrow[potion_contents={potion:"netherdepthsupgrade:lava_puffer_long_wither"}]').setCount([16, 32]))
            pool.addEntry(LootEntry.of('minecraft:spectral_arrow').setCount([16, 32]))
            pool.addEntry(LootEntry.of('minecraft:arrow').setCount([16, 32]))
            pool.addEntry(LootEntry.of('supplementaries:rope_arrow').setCount([16, 32]))
            pool.rolls([1,2])
                .bonusRolls(1)
        })
})