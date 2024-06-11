import { BattleScene } from "./battleScene.js"
import { Enemy } from "./enemy.js"
import { Player } from "./player.js"

const myHero = new Player('Fashoo13', 100, 25)

const enemy1 = new Enemy('Shahi3d', 100, 15)
const enemy2 = new Enemy('Spamholder', 100, 30)
const enemy3 = new Enemy('MJReplica', 100, 20)

const battle = new BattleScene

battle.fight(myHero, enemy1)
battle.fight(myHero, enemy2)
battle.fight(enemy1, enemy3)