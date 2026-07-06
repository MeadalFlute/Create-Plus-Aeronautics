PlayerEvents.loggedIn(event =>{
    const player = event.player;
    const stageName = 'received_quest_book'
    // 检查玩家是否已领取
  if (!player.stages.has(stageName)) {
    // 给予任务书
    player.give('ftbquests:book');
    
    // 标记玩家已领取
    player.stages.add(stageName);
    
    // 发送提示消息
    player.tell(Text.gold('右键打开任务书以查看任务'));
  }
})
