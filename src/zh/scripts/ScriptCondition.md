# 地脚本条件列表    
##  Scripting(脚本)
### True.[3]
 翻译：真               
 命令字：CONDITION_TRUE                  
### Compare distance between 2 named objects.[83]
 翻译：比较一个已命名的物体与另一个已命名的物体距离&lt;、=、&gt;某数值               
 命令字：DISTANCE_BETWEEN_OBJ                  
### Compare distance between 2 teams.[84]
 翻译：比较一个队伍与另一个队伍的距离&lt;、=、&gt;某数值               
 命令字：DISTANCE_BETWEEN_TEAM                  
### Counter compared to a value.[1]
 翻译：某计数器&lt;、=、&gt;某数值               
 命令字：COUNTER                  
### Counter compared to another Counter.[81]
 翻译：某计数器与另一个某计数器相比数值               
 命令字：COUNTER_COUNTER                  
### Counter compared to time in seconds.[82]
 翻译：某计时器&lt;、=、&gt;某数值               
 命令字：COUNTER_SECONDS                  
### Flag compared to a value.[2]
 翻译：某个值的真假               
 命令字：FLAG                  
### Timer expired.[4]
 翻译：计时器已结束               
 命令字：TIMER_EXPIRED                  
##  Audio(音频)
### Music(音乐)
#### Playing Music is from Script[104]
 翻译：播放了某背景BGM               
 命令字：MUSIC_IS_PLAYING_FROM_SCRIPT                  
### Sound has completed playing.[43]
 翻译：声音播放完成               
 命令字：HAS_FINISHED_AUDIO                  
##  Camera(相机)
### Camera entered trigger area.[94]
 翻译：相机进入触发区域               
 命令字：CAMERA_ENTERED_AREA                  
### Camera following spline path hits specified waypoint.[87]
 翻译：相机跟随样条路径到达指定命名点               
 命令字：CAMERA_HIT_SPECIFIC_SPLINE_WAYPOINT                  
### Camera movement finished.[7]
 翻译：相机完成移动               
 命令字：CAMERA_MOVEMENT_FINISHED                  
##  Campaign(运动)
### Test a campaign flag.[137]
 翻译：测试运动旗帜               
 命令字：TEST_CAMPAIGN_FLAG                  
##  Game Type(游戏类型)
### Compares the number of players in game to a value.[114]
 翻译：将游戏中的玩家数值进行比较               
 命令字：COMPARE_NUM_PLAYERS_IN_GAME                  
##  Interface(界面)
### Mission Hot-Spot(任务热点)
#### Mission hot-spot has been activated.[144]
 翻译：任务热点已激活               
 命令字：MISSION_HOT_SPOT_ACTIVE                  
##  Movie(电影)
### Movie in the radar has completed playing.[41]
 翻译：雷达中的电影已完成播放               
 命令字：HAS_FINISHED_VIDEO                  
##  Object Type(物体类型)
### Area or Path(区域或者路径)
#### Named object can path to named object.[99]
 翻译：某物体走到某物体旁               
 命令字：UNIT_CAN_PATH_TO_OBJECT                  
#### Named object can path to waypoint.[98]
 翻译：某物体走到某点               
 命令字：UNIT_CAN_PATH_TO_WAYPOINT                  
#### Named object exits an area.[32]
 翻译：命名单位离开了某区域               
 命令字：NAMED_EXITED_AREA                  
#### Named object has reached the end of a specific waypoint path. (Unreliable)[28]
 翻译：命名物体已经抵达了某路径的终点               
 命令字：NAMED_REACHED_WAYPOINTS_END                  
#### Named object is inside an area.[9]
 翻译：命名物体在某区域               
 命令字：NAMED_INSIDE_AREA                  
#### Named object is outside an area.[10]
 翻译：命名物体在区域外               
 命令字：NAMED_OUTSIDE_AREA                  
### Attacked, Destroyed, or Exists(攻击.摧毁.存在)
#### Evaluate if a named object is being attacked but cannot retaliate[110]
 翻译：某物体被攻击不能反击               
 命令字：UNIT_IS_ATTACKED_AND_CANNOT_RETALIATE                  
#### Named object exists and is alive.[12]
 翻译：命名单位存在且存活               
 命令字：NAMED_NOT_DESTROYED                  
#### Named object has been attacked by Player.[17]
 翻译：某命名物体被某玩家攻击               
 命令字：NAMED_ATTACKED_BY_PLAYER                  
#### Named object has killed (comparison) number of object type or type list.[149]
 翻译：某单位击杀某指定物体&lt;、&gt;、=某数值               
 命令字：NAMED_HAS_KILLED_COMPARISON_UNIT_TYPE                  
#### Named object is attacked by a specific object type.[15]
 翻译：某物体受到某一类型指定物体攻击               
 命令字：NAMED_ATTACKED_BY_OBJECTTYPE                  
#### Named object is destroyed by a specific object type.[92]
 翻译：某物体受到某一类型指定物体摧毁               
 命令字：NAMED_DESTROYED_BY_OBJECTTYPE                  
#### Named object is destroyed.[11]
 翻译：命名物体被摧毁               
 命令字：NAMED_DESTROYED                  
#### Named object is dying. (Cinematic)[47]
 翻译：命名物体处于死亡动画               
 命令字：NAMED_DYING                  
#### Named object is finished dying. (Cinematic)[48]
 翻译：命名物体的结束死亡动画               
 命令字：NAMED_TOTALLY_DEAD                  
#### Named object&#39;s health % compared to a value.[46]
 翻译：某物体生命状况&lt;、=、&gt;某百分比               
 命令字：UNIT_HEALTH                  
#### Named object&#39;s veterancy level compared to a value.[105]
 翻译：某物体经验等级&lt;、&gt;、=某数值               
 命令字：UNIT_COMPARE_RANK                  
### Experience(经验)
#### Named object has gained experience level.[85]
 翻译：某物体获得一个等级               
 命令字：UNIT_HAS_GAINED_LEVEL                  
### Garrison(驻守)
#### Evaluates if named object is currently holding passengers.[109]
 翻译：计算某物是否包含任何驻兵单位               
 命令字：UNIT_HAS_PASSENGER                  
#### Named building is garrisoned by object type owned by specific player.[142]
 翻译：某物体被某玩家的某一类型单位驻守               
 命令字：BUILDING_GARRISONNED_BY_OBJECT_TYPE                  
### Garrisoned(驻守)
#### A specific building is empty.[58]
 翻译：某物体内是空的               
 命令字：NAMED_BUILDING_IS_EMPTY                  
### Object Status(物体状态)
#### Named object has object status.[59]
 翻译：某物体有某状态               
 命令字：UNIT_HAS_OBJECT_STATUS                  
### Selected(选择)
#### Named object is currently selected.[30]
 翻译：当前已选择命名对象               
 命令字：NAMED_SELECTED                  
#### Object Type is currently selected.[135]
 翻译：当前被选中某一类型物体               
 命令字：TYPE_SELECTED                  
### Settings(设置)
#### Named object has model condition.[150]
 翻译：某物体有某模型状态               
 命令字：UNIT_HAS_MODELCONDITION                  
#### Test object flags.[136]
 翻译：某物体的被动状态               
 命令字：UNIT_TEST_OBJECT_PANEL_FLAGS                  
### Sighted(视野)
#### Named object has sighted a type of object belonging to Player.[57]
 翻译：命名物体的视野中出现属于某玩家的某类物体               
 命令字：TYPE_SIGHTED                  
#### Unit has sighted a friendly, neutral, or enemy unit belonging to Player.[45]
 翻译：单位视野内出现属于某玩家的（友好，中立，敌对）的单位               
 命令字：ENEMY_SIGHTED                  
### Special Power(特殊能力)
#### Unit&#39;s special power is ready to fire.[139]
 翻译：某物体准备好了某种特殊能力               
 命令字：UNIT_SPECIAL_POWER_READY                  
### Stance(姿态)
#### Named object is using stance.[133]
 翻译：某物体有某姿态               
 命令字：UNIT_USING_STANCE                  
### Unowned(未归属)
#### There are (comparison) unowned faction objects.[70]
 翻译：某玩家有一些&lt;、&gt;、=某数值未归属阵营的物体               
 命令字：SKIRMISH_UNOWNED_FACTION_UNIT_EXISTS                  
### Upgrades(升级)
#### Unit has upgrade.[138]
 翻译：某物体升级               
 命令字：UNIT_HAS_UPGRADE                  
##  Platform(平台)
### Is game running on platform.[154]
 翻译：游戏是否在平台上运行               
 命令字：CURRENT_PLATFORM                  
##  Player(玩家)
### Area(区域)
#### Player has (comparison) completely built unit types in an area.[128]
 翻译：玩家已经在某区域内完成了若干某类型单位的建造               
 命令字：PLAYER_HAS_COMPARISON_UNIT_TYPE_IN_TRIGGER_AREA_COMPLETELY_BUILT                  
#### Player has (comparison) object type in an area with a specified upgrade.[80]
 翻译：某玩家有一个&lt;、=、&gt;某数值的某物体类型在某区域升级               
 命令字：PLAYER_HAS_COMPARISON_UNIT_TYPE_IN_TRIGGER_AREA_WITH_UPGRADE                  
#### Player has (comparison) object type in an area.[55]
 翻译：玩家有若干某类型的单位在某区域               
 命令字：PLAYER_HAS_COMPARISON_UNIT_TYPE_IN_TRIGGER_AREA                  
#### Player has (comparison) object types with kindof in an area.[56]
 翻译：某玩家有一个&lt;、=、&gt;某数值的物体状态在某区域               
 命令字：PLAYER_HAS_COMPARISON_UNIT_KIND_IN_TRIGGER_AREA                  
#### Player has units in an area[72]
 翻译：某玩家有单位在某区域               
 命令字：SKIRMISH_PLAYER_HAS_UNITS_IN_AREA                  
### Attacked or Destroyed(攻击、破坏)
#### Player destroyed N or more of an opponent&#39;s buildings.[54]
 翻译：某玩家摧毁了某玩家N个数值或者更多的建筑               
 命令字：PLAYER_DESTROYED_N_BUILDINGS_PLAYER                  
#### Player has been attacked by Player.[73]
 翻译：某玩家被某玩家攻击               
 命令字：SKIRMISH_PLAYER_HAS_BEEN_ATTACKED_BY_PLAYER                  
#### Player has destroyed N or more objects of kindof.[90]
 翻译：某玩家击杀了某数值或者更多的同状态物体               
 命令字：PLAYER_HAS_KILLED_KINDOF_UNITS                  
#### Player has destroyed N or more objects of type.[91]
 翻译：某玩家击杀了某数值或者更多的某一类型物体               
 命令字：PLAYER_HAS_KILLED_TYPE_UNITS                  
#### Player has killed Named Unit[147]
 翻译：某玩家击杀了已命名的物体               
 命令字：PLAYER_HAS_KILLED_NAMED_UNIT                  
### CommandPoints(命令)
#### Player has enough command points to build a team. (May be broken. -JB)[88]
 翻译：某玩家有足够的命令点来建立某个队伍（权限，同下）               
 命令字：HAS_COMMAND_POINTS_TO_BUILD_TEAM                  
#### Player has enough command points to build object type.[89]
 翻译：某玩家有足够的命令点来建立某一类型物体               
 命令字：HAS_COMMAND_POINTS_TO_BUILD_UNIT                  
### Controlled By(控制)
#### Is player controlled by human or AI Personality.[146]
 翻译：某玩家由人类或者AI控制               
 命令字：PLAYER_IS_HUMAN_OR_AI_PERSONALITY                  
### Eva(Eva)
#### Has EVA event played recently.[126]
 翻译：最近有EVA活动吗？               
 命令字：HAS_EVA_EVENT_PLAYED_IN_LAST_N_SECONDS                  
### Experience(经验)
#### Player has object of veterancy level compared to a value.[106]
 翻译：某玩家某类型物体经验等级&lt;、&gt;、=某数值               
 命令字：PLAYER_HAS_OBJECT_OF_VETERANCY                  
### Faction and Start Position(阵营与起始位置)
#### Player is faction.[66]
 翻译：某玩家阵营是               
 命令字：SKIRMISH_PLAYER_FACTION                  
#### Start Position.[79]
 翻译：某玩家起始位置数值是               
 命令字：START_POSITION_IS                  
### Garrisoned(驻守)
#### Player has (comparison) garrisoned buildings.[71]
 翻译：玩家驻守的建筑&lt;、&gt;、=某数值               
 命令字：SKIRMISH_PLAYER_HAS_COMPARISON_GARRISONED                  
#### Player has garrisoned a specific building.[44]
 翻译：玩家驻守某个命名的建筑               
 命令字：BUILDING_ENTERED_BY_PLAYER                  
### Owns(拥有)
#### Does Player have objects that have Toggled Weapon sets.[123]
 翻译：某玩家的某物体切换武器设置               
 命令字：UNIT_HAS_TOGGLED_WEAPON                  
#### Num objects has specified upgrade.[121]
 翻译：某玩家的某数值的单位有某种升级               
 命令字：PLAYER_HAS_NUM_UNITS_WITH_UPGRADE                  
#### Num objects leveled up during game.[120]
 翻译：某玩家有某数值个物体在游戏中获得经验               
 命令字：NUM_UNITS_LEVELED_UP                  
#### Num objects of type loaded on transport.[122]
 翻译：某玩家有某个数值的某个物体类型装载运输到某个物体类型上               
 命令字：PLAYER_HAS_NUM_UNITS_LOADED_WITH_OBJECT                  
#### Player has (comparison) number of credits.[22]
 翻译：某玩家分数&lt;、=、&gt;某数值               
 命令字：PLAYER_HAS_CREDITS                  
#### Player has (comparison) obejcts more than x distance from named object.[108]
 翻译：玩家总有若干和某命名物体距离为X的单位               
 命令字：PLAYER_HAS_NUMBER_UNITS_DISTANCE_FROM_OBJECT                  
#### Player has (comparison) object type.[49]
 翻译：某玩家拥有某物体类型&lt;、=、&gt;某数值               
 命令字：PLAYER_HAS_OBJECT_COMPARISON                  
#### Player has (comparison) object types with kindof.[155]
 翻译：某玩家拥有物体类型的状态&lt;、=、&gt;某数值               
 命令字：PLAYER_HAS_COMPARISON_UNIT_KIND                  
#### Player has (comparison) objects with a model condition.[107]
 翻译：玩家拥有若干处于某模型状态的物品               
 命令字：PLAYER_HAS_NUMBER_OBJECTS_WITH_MODELCONDITION                  
#### Player has (comparison) objects with object status[140]
 翻译：某玩家拥有物体某状态小于、等于、大于某数值               
 命令字：PLAYER_HAS_NUMBER_OBJECTS_WITH_OBJECT_STATUS                  
#### Player has built an object type.[19]
 翻译：玩家已经建造了一个某类单位               
 命令字：BUILT_BY_PLAYER                  
#### Player has lost an object of type.[76]
 翻译：某玩家失去某物体               
 命令字：PLAYER_LOST_OBJECT_TYPE                  
#### Player owns Team.[26]
 翻译：玩家拥有某队伍               
 命令字：TEAM_OWNED_BY_PLAYER                  
#### Player owns Unit.[25]
 翻译：玩家拥有某单位               
 命令字：NAMED_OWNED_BY_PLAYER                  
### Player has triggered game event[141]
 翻译：               
 命令字：PLAYER_TRIGGERED_SCRIPT_EVENT                  
### Power(电力)
#### Player has (comparison) kilowatts excess power supply.[63]
 翻译：某玩家过剩电力&lt;、&gt;、=某数值               
 命令字：PLAYER_EXCESS_POWER_COMPARE_VALUE                  
#### Player has (comparison) percent power supply to consumption.[62]
 翻译：某玩家电力百分比&lt;、&gt;、=某数值               
 命令字：PLAYER_POWER_COMPARE_PERCENT                  
#### Player&#39;s base currently has no power.[40]
 翻译：玩家的基地目前无电量               
 命令字：PLAYER_HAS_NO_POWER                  
#### Player&#39;s base currently has power.[27]
 翻译：某玩家的基地建筑电量充足               
 命令字：PLAYER_HAS_POWER                  
### Red Alerts(红色警报)
#### Player activated their Red Alert.[145]
 翻译：某玩家玩家激活了他们的红色警报               
 命令字：PLAYER_RED_ALERT_ACTIVATED                  
### Sighted(看见)
#### Player has sighted another player.[75]
 翻译：某玩家看见某玩家               
 命令字：SKIRMISH_PLAYER_HAS_DISCOVERED_PLAYER                  
#### Player has sighted named object.[23]
 翻译：某玩家看见一个已命名的物体               
 命令字：NAMED_DISCOVERED                  
#### Player has sighted Team.[24]
 翻译：玩家视野中有某队伍               
 命令字：TEAM_DISCOVERED                  
### Special Power(特殊能力)
#### Player can perform special power on team location.[116]
 翻译：某玩家在某队伍上使用某种特殊能力               
 命令字：SKIRMISH_FIRE_SPECIAL_POWER_ON_TEAM                  
#### Player completed using a special power.[51]
 翻译：某玩家完成使用某种特殊能力               
 命令字：PLAYER_COMPLETED_SPECIAL_POWER                  
#### Player has &lt;comparison&gt;&lt;n&gt; power points.[151]
 翻译：某玩家技能点数&lt;、&gt;、=某数值               
 命令字：PLAYER_HAS_COMPARISON_POWER_POINTS                  
#### Player has player tech.[153]
 翻译：某玩家有某种技能               
 命令字：PLAYER_HAS_PLAYER_TECH                  
#### Player start using a special power from a named object.[52]
 翻译：玩家开始使用某命名单位的特殊能力               
 命令字：PLAYER_TRIGGERED_SPECIAL_POWER_FROM_NAMED                  
#### Player starts using a special power in trigger area.[143]
 翻译：某玩家开始使用某种技能在某区域               
 命令字：PLAYER_TRIGGERED_SPECIAL_POWER_IN_AREA                  
#### Player starts using a special power.[50]
 翻译：玩家开始使用一种特殊能力               
 命令字：PLAYER_TRIGGERED_SPECIAL_POWER                  
#### Player&#39;s special power is ready to fire.[64]
 翻译：某玩家的某种技能已准备好               
 命令字：SKIRMISH_SPECIAL_POWER_READY                  
### Upgrades and Sciences(升级和科技)
#### Player built an Upgrade.[53]
 翻译：某玩家某种升级已完成               
 命令字：PLAYER_BUILT_UPGRADE                  
### Win & Loss(胜利和失败)
#### Multiplayer local player defeat check.[39]
 翻译：多人游戏当前玩家战败检测               
 命令字：MULTIPLAYER_PLAYER_DEFEAT                  
##  Team(队伍)
### Area or Path(区域和路径)
#### One unit from team enters an area.[34]
 翻译：某队伍中的一个单位进入了某区域               
 命令字：TEAM_ENTERED_AREA_PARTIALLY                  
#### One unit from team exits an area.[36]
 翻译：某队伍中的一个单位离开了某区域               
 命令字：TEAM_EXITED_AREA_PARTIALLY                  
#### Team can path to named object.[102]
 翻译：队伍能够抵达某命名物体位置               
 命令字：TEAM_CAN_PATH_TO_OBJECT                  
#### Team can path to waypoint.[101]
 翻译：队伍能够抵达某路径点               
 命令字：TEAM_CAN_PATH_TO_WAYPOINT                  
#### Team entirely exits an area.[35]
 翻译：队伍完全离开某区域               
 命令字：TEAM_EXITED_AREA_ENTIRELY                  
#### Team has reached the end of a specific waypoint path. (Unreliable)[29]
 翻译：队伍已经抵达某路径的终点               
 命令字：TEAM_REACHED_WAYPOINTS_END                  
#### Team has units in an area.[5]
 翻译：队伍中有至少1个单位在某区域               
 命令字：TEAM_INSIDE_AREA_PARTIALLY                  
#### Team is completely inside an area.[13]
 翻译：队伍完全在某区域               
 命令字：TEAM_INSIDE_AREA_ENTIRELY                  
#### Team is completely outside an area.[14]
 翻译：队伍完全在某区域外               
 命令字：TEAM_OUTSIDE_AREA_ENTIRELY                  
### Attacked, Destroyed, or Exists(攻击、破坏、存在)
#### Evaluate if all members of a team being attacked cannot retaliate[112]
 翻译：某队伍的所有成员被攻击并且不反击               
 命令字：TEAM_IS_ATTACKED_AND_CANNOT_RETALIATE_ALL                  
#### Evaluate if any member of a team is being attacked but cannot retaliate[111]
 翻译：某队伍的任何一个成员被攻击并且不反击               
 命令字：TEAM_IS_ATTACKED_AND_CANNOT_RETALIATE_ANY                  
#### Team has (comparison) number of objects.[148]
 翻译：队伍中若干数量的某种单位               
 命令字：TEAM_COMPARE_NUM_MEMBERS                  
#### Team has been attacked by Player.[18]
 翻译：队伍被某玩家攻击               
 命令字：TEAM_ATTACKED_BY_PLAYER                  
#### Team has been created.[21]
 翻译：队伍已经被创建               
 命令字：TEAM_CREATED                  
#### Team has fewer than X units left of KindOf.[115]
 翻译：队伍中有少于X个某类型的单位               
 命令字：TEAM_HAS_FEWER_THAN_X_UNITS_WITH_KINDOF                  
#### Team has units.[8]
 翻译：队伍中有至少1个单位               
 命令字：TEAM_HAS_UNITS                  
#### Team is attacked by a specific object type.[16]
 翻译：某队伍受到特定类型单位攻击               
 命令字：TEAM_ATTACKED_BY_OBJECTTYPE                  
#### Team is destroyed.[6]
 翻译：队伍已经被摧毁               
 命令字：TEAM_DESTROYED                  
### CommandButton(某玩家的某队伍所有成员准备好了某种技能)
#### Team&#39;s CommandButton ability is ready - all.[68]
 翻译：               
 命令字：SKIRMISH_COMMAND_BUTTON_READY_ALL                  
#### Team&#39;s CommandButton ability is ready - partial[69]
 翻译：               
 命令字：SKIRMISH_COMMAND_BUTTON_READY_PARTIAL                  
### Health(健康值)
#### Team health level compared to a value.[118]
 翻译：队伍的生命值百分比等于某个数值               
 命令字：EVAL_TEAM_HEALTH                  
### Object Status(物体状态)
#### Team has object status - all.[60]
 翻译：某队伍全体有某种状态               
 命令字：TEAM_ALL_HAS_OBJECT_STATUS                  
#### Team has object status - partial.[61]
 翻译：某队伍部分有某种状态               
 命令字：TEAM_SOME_HAVE_OBJECT_STATUS                  
### Sighted(视野)
#### Team has sighted a friendly, neutral, or enemy unit belonging to Player.[95]
 翻译：队伍的视野内出现属于某玩家的(友好，中立，敌对)的单位               
 命令字：ENEMY_SIGHTED_BY_TEAM                  
##  Tutorial(辅助)
### Camera(相机)
#### Camera reset.[132]
 翻译：相机已复位               
 命令字：CAMERA_RESET                  
#### Camera rotate distance.[130]
 翻译：相机旋转了某角度               
 命令字：CAMERA_ROTATE_DISTANCE                  
#### Camera scroll distance.[129]
 翻译：相机缩放了某高度               
 命令字：CAMERA_SCROLL_DISTANCE                  
#### Camera zoom distance.[131]
 翻译：相机变焦了某数值               
 命令字：CAMERA_ZOOM_DISTANCE                  
### Player(玩家)
#### Player has issued a formation order.[134]
 翻译：玩家发送了一个信号指令               
 命令字：PLAYER_ISSUED_FORMATION_ORDER                  
### UI state proposition is true.[152]
 翻译：某指令为真               
 命令字：UI_STATE_PROPOSITION_STATE                  
##  Unused or Obsolete(未使用、过时的)
### Check if a gate is open. (False, if not a gate, or closed)[97]
 翻译：               
 命令字：GATE_IS_OPEN                  
### Check unit Webbed Status.[119]
 翻译：改变某物体的网络状态               
 命令字：IS_UNIT_WEBBED                  
### Does Player have Units that are in alternate formation.[125]
 翻译：某玩家有某物体目前处于交替形成阶段               
 命令字：UNIT_IN_ALT_FORMATION                  
### Does Player have Units that have triggered auto pickup.[124]
 翻译：某玩家有某物体触发了自动拾取               
 命令字：UNIT_USING_AUTOPICKUP                  
### Experience(命名物体处于某经验等级)
#### Named object is at experience level.[86]
 翻译：               
 命令字：UNIT_IS_AT_LEVEL                  
### False.[0]
 翻译：假               
 命令字：CONDITION_FALSE                  
### Is game in a skirmish or multiplayer game.[113]
 翻译：判断游戏处于遭遇战模式或多人游戏模式               
 命令字：IS_GAME_IN_SKIRMISH_OR_MULTIPLAYER                  
### Is number of units belonging to player near EVA event&#39;s last played location greater than, less than, or equal to a fixed value.[127]
 翻译：某玩家单位数量在某距离以内的某EVA事件位置&lt;、&gt;、=某数值               
 命令字：IS_NUM_OF_UNITS_BELONGING_TO_PLAYER_NEAR_EVA_EVENT_LAST_PLAYED_LOCATION_COMPARISON_INT                  
### Multiplayer allied defeat.[38]
 翻译：多人游戏盟友战败               
 命令字：MULTIPLAYER_ALLIED_DEFEAT                  
### Multiplayer allied victory.[37]
 翻译：多人游戏盟友获胜               
 命令字：MULTIPLAYER_ALLIED_VICTORY                  
### Named object can path into (Player&#39;s) nearest base or is already inside it.[100]
 翻译：某命名物体可以抵达最近的某玩家的基地位置               
 命令字：UNIT_CAN_PATH_INTO_PLAYERS_NEAREST_BASE                  
### Named object is rank level or above.[117]
 翻译：命名物体的等级=或高于某等级               
 命令字：NAMED_RANK_LEVEL                  
### Player currently controls N or fewer bases.[93]
 翻译：玩家目前控制了少于=某数量的基地               
 命令字：PLAYER_HAS_N_OR_FEWER_BASES                  
### Player doesn&#39;t have units in an area.[74]
 翻译：               
 命令字：SKIRMISH_PLAYER_IS_OUTSIDE_AREA                  
### Player has (comparison) threat level in area.[65]
 翻译：某玩家有&lt;、&gt;、=某数值的威胁等级在某区域               
 命令字：SKIRMISH_VALUE_IN_AREA                  
### Speech has completed playing.[42]
 翻译：语音已完成播放               
 命令字：HAS_FINISHED_SPEECH                  
### Supplies are within specified distance.[67]
 翻译：               
 命令字：SKIRMISH_SUPPLIES_VALUE_WITHIN_DISTANCE                  
### Supply source is attacked.[78]
 翻译：               
 命令字：SUPPLY_SOURCE_ATTACKED                  
### Supply source is safe.[77]
 翻译：               
 命令字：SUPPLY_SOURCE_SAFE                  
### Team can path into (Player&#39;s) nearest base or is already inside it.[103]
 翻译：某队伍可以抵达最近的某玩家的基地位置               
 命令字：TEAM_CAN_PATH_INTO_PLAYERS_NEAREST_BASE                  
### Team entirely enters an area.[33]
 翻译：某队伍完全进入一个某个区域               
 命令字：TEAM_ENTERED_AREA_ENTIRELY                  
### There are (comparison) trees in an area.[96]
 翻译：某区域有&lt;、=、&gt;某数值的树               
 命令字：COMPARISON_TREES_IN_TRIGGER_AREA                  
### Unit enters an area.[31]
 翻译：某单位进入了某区域               
 命令字：NAMED_ENTERED_AREA                  
### Unit has been created.[20]
 翻译：某物体的引用单元               
 命令字：NAMED_CREATED                  
