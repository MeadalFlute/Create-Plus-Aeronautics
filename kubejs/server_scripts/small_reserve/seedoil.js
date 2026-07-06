ServerEvents.recipes(event => {
    // 种子油制油脂
event.custom({
  "type": "create:mixing",
  "heat_requirement": "heated",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 50,
      "fluid": "kubejs:seeds_oil"
    }
  ],
  "results": [
    {
      "id": 'kaleidoscope_cookery:oil'
    }
  ]
}),
    // 种子油制松节油
event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 20,
      "fluid": "kubejs:seeds_oil"
    },
    {
       "tag": "c:cloth_filter"
    }
  ],
  "results": [
    {
      "amount": 1000,   // 松节油太便宜了
      "id": "createpropulsion:turpentine"
    },{
      "id": 'createfood:cloth_filter'
    }
  ]
})
})