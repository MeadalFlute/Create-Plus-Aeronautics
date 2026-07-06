ServerEvents.recipes(event => {
    // Create:food的傻逼盐配方把药水配方顶掉了
    // 错怪它了，是Slice and dice干的，傻逼Slice and dice
    //event.remove({id:'sliceanddice:cooking/createfood/farmersdelight/cooking/salt_from_cooking_0'})
    //event.remove({not:{mod:'createfood'},output:'createfood:salt'})
    // NMD代码怎么写的就是锁定不到S&D
    // SB自动兼容
    event.remove({output:'createfood:salt'})
    
    event.custom({
        "type":"create:mixing",
        "heat_requirement":"heated",
        "ingredients":[
            {
                "type":"neoforge:single",
                "amount":83,
                "fluid":"minecraft:water"
            },
            {"tag":"c:cloth_filter"}
        ],
    "results":[
        {"id":"createfood:salt"},
        {"id":"createfood:cloth_filter"}
        ]
    })
})