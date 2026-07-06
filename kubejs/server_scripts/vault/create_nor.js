LootJS.lootTables(event => {
    event.create("etc:create_vault_normal", "vault")
    // 基础池
        .createPool(pool => {
            // 资源
            pool.addEntry(LootEntry.of("create:andesite_alloy_block").withWeight(10).setCount([4,8]).withQuality(1))
            pool.addEntry(LootEntry.of("minecraft:copper_block").withWeight(10).setCount([4,8]).withQuality(1))
            pool.addEntry(LootEntry.of("create:brass_block").withWeight(10).setCount([4,8]).withQuality(1))
            pool.addEntry(LootEntry.of("create:bound_cardboard_block").withWeight(2).setCount([4,8]).withQuality(1))
            pool.addEntry(LootEntry.of("create:zinc_block").withWeight(10).setCount([4,8]).withQuality(2))
            pool.addEntry(LootEntry.of("create:crimsite").withWeight(10).setCount([64,128]).withQuality(2))
            pool.addEntry(LootEntry.of("create:asurine").withWeight(10).setCount([64,128]).withQuality(2))
            pool.addEntry(LootEntry.of("create:ochrum").withWeight(10).setCount([64,128]).withQuality(2))
            pool.addEntry(LootEntry.of("create:veridium").withWeight(10).setCount([64,128]).withQuality(2))
            pool.addEntry(LootEntry.of("create:scorchia").withWeight(10).setCount([64,128]).withQuality(2))
            pool.addEntry(LootEntry.of("create:scoria").withWeight(10).setCount([64,128]).withQuality(2))
            pool.addEntry(LootEntry.of("create:limestone").withWeight(10).setCount([64,128]).withQuality(1))
            pool.addEntry(LootEntry.of("create:precision_mechanism").withWeight(10).setCount([16,32]).withQuality(2))
            pool.addEntry(LootEntry.of("create:sturdy_sheet").withWeight(10).setCount([32,64]).withQuality(1))
            pool.addEntry(LootEntry.of("create:polished_rose_quartz").withWeight(10).setCount([16,64]).withQuality(1))            
            // 装备
            pool.addEntry(LootEntry.of("create:copper_diving_boots").withWeight(5).enchantWithLevels([15,30]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of("create:copper_diving_helmet").withWeight(5).enchantWithLevels([15,30]).enchantRandomly().withQuality(1))
            pool.addEntry(LootEntry.of('create:copper_backtank[create:banktank_air=900]').withWeight(5).enchantWithLevels([5,30]).enchantRandomly().withQuality(2))
            pool.addEntry(LootEntry.of("create:netherite_diving_boots").withWeight(2).enchantWithLevels([25,30]).enchantRandomly().withQuality(3))
            pool.addEntry(LootEntry.of("create:netherite_diving_helmet").withWeight(2).enchantWithLevels([25,30]).enchantRandomly().withQuality(3))
            pool.addEntry(LootEntry.of('create:netherite_backtank[create:banktank_air=900]').withWeight(2).enchantWithLevels([5,30]).enchantRandomly().withQuality(2))
            pool.addEntry(LootEntry.of("create:cardboard_sword").withWeight(5).enchantWithLevels([5,30]).enchantRandomly().withQuality(2))
            // 调取整套纸板套——enchant在这里可能有问题
            pool.addEntry(LootEntry.reference("etc:cardboard_suit").enchantWithLevels([15,30]).withWeight(5).withQuality(2))            
            
            pool.addEntry(LootEntry.of('create_jetpack:jetpack[create:banktank_air=900]').withWeight(2).enchantWithLevels([15,30]).enchantRandomly().withQuality(3))
            pool.addEntry(LootEntry.of('create_jetpack:netherite_jetpack[create:banktank_air=900]').withWeight(1).enchantWithLevels([25,30]).enchantRandomly().withQuality(5))   

            pool.addEntry(LootEntry.of("create:potato_cannon").withWeight(5).enchantWithLevels([15,30]).enchantRandomly().withQuality(2))
            pool.addEntry(LootEntry.of("create:extendo_grip").withWeight(3).withQuality(2))
            pool.addEntry(LootEntry.of("create:wand_of_symmetry").withWeight(3).withQuality(2))
            // 元件
            //pool.addEntry(LootEntry.of("create_factory_logistics:network_link").withWeight(5).setCount([16,32]).withQuality(2))    
            //pool.addEntry(LootEntry.of("create_factory_logistics:factory_fluid_gauge").withWeight(5).setCount([16,32]).withQuality(2))
            //pool.addEntry(LootEntry.of("create_factory_logistics:fluid_mechanism").withWeight(5).setCount([16,32]).withQuality(2))
            pool.addEntry(LootEntry.of("create:factory_gauge").withWeight(5).setCount([16,32]).withQuality(2))
            pool.addEntry(LootEntry.of("create:sequenced_gearshift").withWeight(5).setCount([16,32]).withQuality(2))
            pool.addEntry(LootEntry.of("create:stock_link").withWeight(5).setCount([16,32]).withQuality(2))
            pool.addEntry(LootEntry.of("create:item_vault").withWeight(5).setCount([32,128]).withQuality(2))
            pool.addEntry(LootEntry.of("create:stockpile_switch").withWeight(5).setCount([16,32]).withQuality(2))
            pool.addEntry(LootEntry.of("create:content_observer").withWeight(5).setCount([16,32]).withQuality(2))
            pool.addEntry(LootEntry.of("create:blaze_cake").withWeight(5).setCount([16,32]).withQuality(2))
            pool.addEntry(LootEntry.of("create_integrated_farming:chicken_roost").withWeight(5).setCount([1,2]).withQuality(2))
            pool.addEntry(LootEntry.of("create_dragons_plus:blaze_upgrade_smithing_template").withWeight(5).setCount(1).withQuality(2))
            pool.addEntry(LootEntry.of("create_enchantment_industry:experience_cake").withWeight(5).setCount([16,32]).withQuality(2))
            pool.addEntry(LootEntry.of("create_integrated_farming:fishing_net").withWeight(5).setCount([16,32]).withQuality(2))
            pool.addEntry(LootEntry.of("create_integrated_farming:lava_fishing_net").withWeight(5).setCount([16,32]).withQuality(2))
            pool.addEntry(LootEntry.of("create:schematicannon").withWeight(5).setCount(1).withQuality(2))
            pool.addEntry(LootEntry.of("create:transmitter").withWeight(5).setCount([16,32]).withQuality(2))
            pool.rolls([2,4])   
            pool.bonusRolls(1)  



        })
})