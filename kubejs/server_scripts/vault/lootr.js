LootJS.lootTables(event => {
    // 创建宝库战利品表（ID：etc:test_vault，类型：vault）
    event.create("etc:test_vault", "vault")

    // ========== 基础掉落池：3~5次基础抽取 ==========
    .createPool(pool => {
        // 关键：用链式调用将所有方法关联到当前pool
        pool.rolls([3,5]) // 基础抽取次数：3~5次
            pool.addEntry(LootEntry.of("minecraft:gold_ingot")
                .withWeight(5)
                .setCount([4, 8]) // 数量范围
            )
            .addEntry(LootEntry.of("minecraft:diamond")
                .withWeight(5)
                .setCount([1, 3])
            )
            .addEntry(LootEntry.of("minecraft:emerald")
                .withWeight(5)
                .setCount([2, 5])
            )
            .addEntry(LootEntry.tag("minecraft:arrows")
                .withWeight(5)
                .setCount([10, 20])
            )
    })
})