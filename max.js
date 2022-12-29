let twoFraction = {
  fr1: { n: 1, d: 1 },
  fr2: { n: 1, d: 1 },
  display: function () {
    console.log(`${twoFraction.fr1.n}/${twoFraction.fr1.d}; ${twoFraction.fr2.n}/${twoFraction.fr2.d}`)
  },
  generate: function (a, b, c, d) {
    twoFraction.fr1.n = a
    twoFraction.fr1.d = b
    twoFraction.fr2.n = c
    twoFraction.fr2.d = d
    console.log(`${twoFraction.fr1.n}/${twoFraction.fr1.d}; ${twoFraction.fr2.n}/${twoFraction.fr2.d}`)
  },
  // LCD - lowest common divisor
  findLCD: function () {
    let x = twoFraction.fr1.d * twoFraction.fr2.d
    if (twoFraction.fr1.d <= twoFraction.fr2.d) {
      for (let i = twoFraction.fr1.d; i <= x; i++) {
        if (i % twoFraction.fr1.d == 0 && i % twoFraction.fr2.d == 0) {
          return i
        }
      }
    } else {
      for (let i = twoFraction.fr2.d; i <= x; i++) {
        if (i % twoFraction.fr1.d == 0 && i % twoFraction.fr2.d == 0) {
          return i
        }
      }
    }
  },
  getToLCD: function () {
    let lcd = twoFraction.findLCD()
    twoFraction.fr1.n *= lcd / twoFraction.fr1.d
    twoFraction.fr1.d = lcd
    twoFraction.fr2.n *= lcd / twoFraction.fr2.d
    twoFraction.fr2.d = lcd
    twoFraction.display()
  },
  addition: function () {
    let frAdd = {}
    twoFraction.getToLCD()
    frAdd.n = twoFraction.fr1.n + twoFraction.fr2.n
    frAdd.d = twoFraction.fr1.d
    console.log(`${frAdd.n}/${frAdd.d}`)
    twoFraction.reduction(frAdd)
  },
  subtraction: function () {
    let frSubtr = {}
    twoFraction.getToLCD()
    frSubtr.n = twoFraction.fr1.n - twoFraction.fr2.n
    frSubtr.d = twoFraction.fr1.d
    console.log(`${frSubtr.n}/${frSubtr.d}`)
    twoFraction.reduction(frSubtr)
  },
  multiplication: function () {
    let frMult = {}
    frMult.n = twoFraction.fr1.n * twoFraction.fr2.n
    frMult.d = twoFraction.fr1.d * twoFraction.fr2.d
    console.log(`${frMult.n}/${frMult.d}`)
    twoFraction.reduction(frMult)
  },
  divisiion: function () {
    let frDiv = {}
    frDiv.n = twoFraction.fr1.n * twoFraction.fr2.d
    frDiv.d = twoFraction.fr1.d * twoFraction.fr2.n
    console.log(`${frDiv.n}/${frDiv.d}`)
    twoFraction.reduction(frDiv)
  },
  reduction: function (obj) {
    let arr = []
    for (let i = obj.d; i > 0; i--) {
      if (obj.d % i == 0 && obj.n % i == 0)
        arr.push(i)
    }
    obj.n /= arr[0]
    obj.d /= arr[0]
    console.log(`${obj.n}/${obj.d}`)
  }
}

twoFraction.generate(2, 6, 8, 15)
twoFraction.addition()