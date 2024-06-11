import { Character } from "./character.js";

class Enemy extends Character {
  constructor (name , maxHitPoints, damage) {
    super (name, maxHitPoints, damage)
  }
}

export { Enemy }