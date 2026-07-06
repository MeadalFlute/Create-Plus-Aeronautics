StartupEvents.registry('fluid', event => {
  event.create("seeds_oil","thin")
    //.tint(0xEFB00B) 过时
    //.bucketColor(0xEFB00B)  过时
    //.flowingTexture("kubejs:block/seeds_oil/flow")
    //.stillTexture("kubejs:block/seeds_oil/still")
    //.bucketItem.displayName() 改用lang文件
    .tint(0xEFB00B)
    .displayName("种子油")
    //.noBlock()
    

})
