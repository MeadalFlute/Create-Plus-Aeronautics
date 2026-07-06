StartupEvents.registry('block', event => {

  // 纯摆看，还没用。
  event.create('food_collector')
      //.soundType('minecraft:netherite_block')
      .hardness(3.0)
      .displayName('食物收集器')
      .tagBlock('minecraft:mineable/pickaxe') // 用镐子开采
      .tagBlock('minecraft:mineable/axe')
      //.model('kubejs:block/food_collector')   // 模型路径与材质都还没准备好
      .renderType('solid') // 实体渲染
      .lightLevel(6)      // 发光等级
      .noValidSpawns(true)
      .defaultCutout()
    })