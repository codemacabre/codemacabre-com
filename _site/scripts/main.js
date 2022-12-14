const dateToNumerals = (year) => {
  const rom = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

  return Object.keys(rom).reduce(
    (acc, ch) => {
      acc.str += ch.repeat(acc.year / rom[ch])
      acc.year %= rom[ch]
      return acc
    },
    { str: '', year }
  ).str
}

const addEmail = (text) => {
  const e = 'contact'
  const at = '@'
  const d = 'codemacabre'
  const dot = '.'
  const c = 'com'
  const h = e + at + d + dot + c

  if (text === '') {
    text = h
  }

  return `<a href="mailto: ${h}">${text}</a>`
}

window.onload = () => {
  // Insert current year in numerals
  const date = document.querySelector('#date')
  if (date) {
    date.innerHTML = dateToNumerals(new Date().getFullYear())
  }

  // Insert email address
  const mail = document.querySelectorAll('.mail')
  if (mail.length > 0) {
    mail.forEach(e => {
      const text = e.textContent
      e.innerHTML = addEmail(text)
    })
  }
}
