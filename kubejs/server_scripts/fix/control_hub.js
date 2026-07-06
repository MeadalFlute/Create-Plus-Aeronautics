// 修复 drivebywire:controller_hub 方块 挖掘方式 + 掉落自身
ServerEvents.tags('block', event => {
    // 1. 添加【镐子可挖掘】标签（核心：让镐子能挖动）
    event.add('mineable/pickaxe', 'drivebywire:controller_hub')
})

BlockEvents.broken('drivebywire:controller_hub', event => {
        event.block.dropItem('drivebywire:controller_hub') // 破坏时掉落自身
    })