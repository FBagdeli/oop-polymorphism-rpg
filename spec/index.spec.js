import { Character } from "../src/character.js"

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