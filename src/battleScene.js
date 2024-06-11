
class BattleScene {

  fight(character1, character2) {

    let char1Hp = character1.currentHitPoints
    let char2Hp = character2.currentHitPoints

    while(char1Hp > 0 && char2Hp >= 0) {
      char1Hp = character1.takeDamage(character2)
      char2Hp = character2.takeDamage(character1)
      
      if(char1Hp === 0 && char2Hp > 0) {
        return `${character2.name} Win!`
      }
      else if(char2Hp === 0 && char1Hp > 0) {
        return `${character1.name} Win!`
      } else if(char1Hp === 0 && char2Hp === 0) {
        return `Draw!`
      }
    }
  }
}

export { BattleScene }