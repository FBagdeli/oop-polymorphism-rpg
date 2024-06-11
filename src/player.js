import { Character } from "./character.js";

class Player extends Character {
  constructor (name, maxHitPoints, damage) {
    super(name, maxHitPoints, damage)
  }
}

export { Player }