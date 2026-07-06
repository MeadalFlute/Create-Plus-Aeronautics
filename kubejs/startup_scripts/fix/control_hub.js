// 修复 drivebywire:controller_hub 方块 挖掘方式 + 掉落自身

BlockEvents.modification(event => {
        // 2. 修改方块基础属性（金属材质、需要正确工具掉落）
        event.modify('drivebywire:controller_hub', block => {
            block.destroySpeed = 3.5 // 挖掘速度（和机械动力方块一致）
            //block.requiresTool(false) // 失效
        })
})
