class Character {
  constructor(name, maxHitPoints, damage) {
    this.name = name
    this.maxHitPoints = maxHitPoints
    this.curerentHitPoints = maxHitPoints
    this.damage = damage
  }

  takeDamage(attacker) {
    this.curerentHitPoints -= attacker.damage
    if(this.curerentHitPoints < 0) {
      this.curerentHitPoints = 0
    }
    return this.curerentHitPoints
  }
}

export { Character }