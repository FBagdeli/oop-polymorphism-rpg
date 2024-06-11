
class BattleScene {

  fight(character1, character2) {

    let char1Hp = character1.curerentHitPoints
    let char2Hp = character2.curerentHitPoints

    while(char1Hp > 0 && char2Hp >= 0) {
      char1Hp = character1.takeDamage(character2)
      char2Hp = character2.takeDamage(character1)
      console.log(char1Hp, 'tt', char2Hp)
      if(char1Hp === 0 && char2Hp > 0) {
        return console.log(`${character2.name} Win!`)
      }
      else if(char2Hp === 0 && char1Hp > 0) {
        return console.log(`${character1.name} Win!`)
      } else if(char1Hp === 0 && char2Hp === 0) {
        return console.log(`Draw!`)
      }
    }
  }
}

export { BattleScene }