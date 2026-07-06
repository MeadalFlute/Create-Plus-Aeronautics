ItemEvents.modification(event=>{
    // 合成时返还空桶
    event.modify('minecraft:powder_snow_bucket',item=>{
        item.craftingRemainder = Item.of('minecraft:bucket').item;
    });
    event.modify('kubejs:seeds_oil_bucket',item=>{
        item.craftingRemainder = Item.of('minecraft:bucket').item;
        item.burnTime = 20000
    })
})