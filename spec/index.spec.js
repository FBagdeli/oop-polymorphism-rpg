import { BattleScene } from "../src/battleScene.js"
import { Character } from "../src/character.js"
import { Enemy } from "../src/enemy.js"
import { Player } from "../src/player.js"

describe('Character', () => {
  let char1
  let char2
  beforeEach(() => {
    char1 = new Character('Fashoo13', 100, 25)
    char2 = new Character('Shahi3d', 100, 50)
  })

  it('should be instance of', () => {
    expect(char1).toBeInstanceOf(Character)
  })

  it('currentHitPoints should become 50', () => {
    expect(char1.takeDamage(char2)).toBe(50)
  })

  
})


describe('Battle Scene', () => {
  let battle
  let player1
  let enemy1
  beforeEach(() => {
    battle = new BattleScene
    player1 = new Player('Fashoo13', 100, 25)
    enemy1 = new Enemy('Shahi3d', 100, 50)
  })

  it('battle be instance of BattleScene', () => {
    expect(battle).toBeInstanceOf(BattleScene)
  })

  it('should char2 win the game ', () => {
    
    const result = battle.fight(player1, enemy1)
    expect(result).toBe('Shahi3d Win!')
  })
})