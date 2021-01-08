export function validBraces(braces: string): boolean {
  let llaves: number = 0
  let corchetes: number = 0
  let para: number = 0
  let isTrueFalse: boolean

  for (let i = 0; i < braces.length; i++) {
    switch (braces[i]) {
      case '(': {
        para = para + 1
        break
      }
      case ')': {
        para = para + 1
        break
      }
      case '[': {
        corchetes = corchetes + 1
        break
      }
      case ']': {
        corchetes = corchetes + 1
        break
      }
      case '{': {
        llaves = llaves + 1
        break
      }
      case '}': {
        llaves = llaves + 1
        break
      }
      default: {
        break
      }
    }
  }
  if (para % 2 == 0 && llaves % 2 == 0 && corchetes % 2 == 0) {
    isTrueFalse = true
  } else {
    isTrueFalse = false
  }
  return isTrueFalse
}
