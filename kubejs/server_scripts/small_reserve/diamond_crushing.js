// 机械动力粉碎机配方：钻石装备/工具粉碎回收钻石（稳定版）
ServerEvents.recipes(event => {
    // 所有原版钻石工具 + 护甲
    const diamondItems = [
        'minecraft:diamond_sword',
        'minecraft:diamond_pickaxe',
        'minecraft:diamond_axe',
        'minecraft:diamond_shovel',
        'minecraft:diamond_hoe',
        'minecraft:diamond_helmet',
        'minecraft:diamond_chestplate',
        'minecraft:diamond_leggings',
        'minecraft:diamond_boots'
    ];

    // 为每个物品添加粉碎机配方，固定产出1颗钻石
    diamondItems.forEach(itemId => {
        // 使用KubeJS原生Create配方API，避免JSON解析错误
        event.recipes.create.crushing(
            'minecraft:diamond', // 输出物品（固定1颗）
            itemId, // 输入物品
            50 // 处理时间（tick，50=2.5秒，可自行修改）
        );
    });

    console.log('[KubeJS] 钻石装备粉碎回收配方已加载！');
});