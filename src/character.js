class Character {
  constructor(name, maxHitPoints, damage) {
    this.name = name
    this.maxHitPoints = maxHitPoints
    this.currentHitPoints = maxHitPoints
    this.damage = damage
  }

  takeDamage(attacker) {
    this.currentHitPoints -= attacker.damage
    if(this.currentHitPoints < 0) {
      this.currentHitPoints = 0
    }
    return this.currentHitPoints
  }
}

export { Character }