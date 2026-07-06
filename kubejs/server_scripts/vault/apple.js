LootJS.lootTables(event => {
    event.create("etc:apple", "vault")
        // 基础池：确保至少1个条目有效
        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:apple")
                .withWeight(1) // 必选权重
                .setCount([1, 1]) // 必选数量（用setCount）
            );
            pool.rolls([1, 1]); // 固定1次抽取
        })
        // 幸运额外池：-全部没生效oao-搞定了
        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:gold_ingot")
                .withWeight(1)
                .setCount([1, 1])
            );
            pool.rolls(0); // 基础
            /*pool.bonusRolls(ctx => {
                const luckLevel = ctx.getLuck() || 0
                if (luckLevel <= 1) return 1;
                console.log("玩家幸运值:", ctx.getLuck())
                return luckLevel
            }); */
            pool.bonusRolls(1);
            //pool.when(conditions => conditions.luck(Range.atLeast(0.1)));
        })
        // 稀有池：loot指令调用正常，但实际上也没生效oao
        // conditions.luck有问题，return 1 可以运行这个表
        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:nether_star")
                .withWeight(1)
                .setCount([1, 1])
            );
            pool.rolls([1]);
            pool.when(conditions => {
                conditions.luck(Range.atLeast(1)); //给range和[]都不行
                
            });
                
        });
});