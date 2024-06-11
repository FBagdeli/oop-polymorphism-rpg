
class BattleScene {
  constructor(character1, character2) {
    fight(character1, character2)
  }

  fight(character1, character2) {
    char1Hp = character1.currentHitPoints
    char2Hp = character2.currentHitPoints
    while(char1Hp <= 0 || char2Hp <= 0) {
      char1Hp--
      console.log(char1Hp)
    }
  }
}


// character1.takeDamage(character2)
//   character2.takeDamage(character1)