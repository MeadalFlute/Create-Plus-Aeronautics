LootJS.lootTables(event => {
    event.create("etc:equipment_vault", "vault")
    // 基础池
        .createPool(pool => {
            // 各式防具、盾牌、弓弩、三叉戟、鞘翅
            pool.addEntry(LootEntry.of("minecraft:diamond_sword").withWeight(10).enchantWithLevels([10, 60]).enchantRandomly().withQuality(2))
            pool.addEntry(LootEntry.of("minecraft:diamond_chestplate").withWeight(10).enchantWithLevels([10, 60]).enchantRandomly().withQuality(2))
            pool.addEntry(LootEntry.of("minecraft:diamond_leggings").withWeight(10).enchantWithLevels([10, 60]).enchantRandomly().withQuality(2))
            pool.addEntry(LootEntry.of("minecraft:diamond_boots").withWeight(10).enchantWithLevels([10, 60]).enchantRandomly().withQuality(2))
            pool.addEntry(LootEntry.of("minecraft:diamond_helmet").withWeight(10).enchantWithLevels([10, 60]).enchantRandomly().withQuality(2))
            pool.addEntry(LootEntry.of("minecraft:bow").withWeight(10).enchantWithLevels([10, 60]).enchantRandomly().withQuality(2))
            pool.addEntry(LootEntry.of("minecraft:crossbow").withWeight(10).enchantWithLevels([10, 60]).enchantRandomly().withQuality(2))
            pool.addEntry(LootEntry.of("minecraft:trident").withWeight(5).enchantWithLevels([10, 60]).enchantRandomly().withQuality(3))
            pool.addEntry(LootEntry.of("minecraft:shield").withWeight(10).withQuality(1).enchantRandomly())
            pool.addEntry(LootEntry.of("minecraft:elytra").withWeight(5).withQuality(3).enchantRandomly())
            pool.addEntry(LootEntry.of("minecraft:iron_sword").withWeight(15).enchantWithLevels([15, 60]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of("minecraft:iron_chestplate").withWeight(15).enchantWithLevels([15, 60]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of("minecraft:iron_leggings").withWeight(15).enchantWithLevels([15, 60]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of("minecraft:iron_boots").withWeight(15).enchantWithLevels([15, 60]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of("minecraft:iron_helmet").withWeight(15).enchantWithLevels([15, 60]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of("minecraft:golden_sword").withWeight(1).enchantWithLevels([25, 60]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of("minecraft:golden_chestplate").withWeight(1).enchantWithLevels([25, 60]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of("minecraft:golden_leggings").withWeight(1).enchantWithLevels([25, 60]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of("minecraft:golden_boots").withWeight(1).enchantWithLevels([25, 60]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of("minecraft:golden_helmet").withWeight(1).enchantWithLevels([25, 60]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of("minecraft:netherite_sword").withWeight(15).enchantWithLevels([25, 60]).enchantRandomly().withQuality(3))//
            pool.addEntry(LootEntry.of("minecraft:netherite_chestplate").withWeight(15).enchantWithLevels([25, 60]).enchantRandomly().withQuality(3))
            pool.addEntry(LootEntry.of("minecraft:netherite_leggings").withWeight(15).enchantWithLevels([25, 60]).enchantRandomly().withQuality(3))
            pool.addEntry(LootEntry.of("minecraft:netherite_boots").withWeight(15).enchantWithLevels([25, 60]).enchantRandomly().withQuality(3))
            pool.addEntry(LootEntry.of("minecraft:netherite_helmet").withWeight(15).enchantWithLevels([25, 60]).enchantRandomly().withQuality(3))
            // 附魔书
            .addEntry(LootEntry.of("minecraft:book").withWeight(3).enchantWithLevels([30,60]).withQuality(1))
            .addEntry(LootEntry.of("minecraft:enchanted_book").withWeight(2).withQuality(1).enchantRandomly())
            pool.rolls([3,5])   // 基础抽取次数：3~5次
            pool.bonusRolls(2)  // 每级幸运值额外抽取次数：2次
            })
    // 核心池
        .createPool(pool => {     
           // 稀有物品
            pool.addEntry(LootEntry.of('minecraft:heavy_core').withWeight(1).withQuality(10))
            pool.addEntry(LootEntry.of('minecraft:totem_of_undying').withWeight(5).withQuality(3))
            pool.addEntry(LootEntry.of('minecraft:nether_star').withWeight(2).withQuality(4))
            pool.rolls(1)
            pool.bonusRolls(1)
            pool.when(conditions => {conditions.randomChance(0.2)}) // 20%几率触发   
        })
    // 特殊池
        .createPool(pool => {
            pool.addEntry(LootEntry.of("minecraft:cookie").withWeight(2).withQuality(4).setName("§e幸运饼干")
)
            
            
            pool.rolls(0)
            pool.bonusRolls(1)
        })
})