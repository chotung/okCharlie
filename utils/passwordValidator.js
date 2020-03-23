const passwordChecker = password => {
  const checkLength = new RegExp(/.{8,16}$/, "g").exec(password)
  const checkLowerCase = new RegExp(/^(?=.*[a-z])/, "g").exec(password)
  const checkUpperCase = new RegExp(/(?=.*[A-Z])/, "g").exec(password)
  const checkNumber = new RegExp(/(?=.*\d)/, "g").exec(password)
  const checkSpecialChars = new RegExp(/(?=.*[#$^+=!*()@%&])/, "g").exec(password)

  const message = {
    len: null,
    lowerCase: null,
    upperCase: null,
    num: null,
    specialChars: null,
    goodPassword: null
  }

  if (!checkLength) {
    message.len = "Must be between 8 - 16 characters"
  } else if (!checkLowerCase) {
    message.lowerCase = "need a lowercase"
  } else if (!checkUpperCase) {
    message.upperCase = "need uppercase"
  } else if (!checkNumber) {
    message.num = "need a number"
  } else if (!checkSpecialChars) {
    message.specialChars = "need a special chars"
  } else {
    message.goodPassword = "Good Password"
  }
  return message
}
//Will return to this to dry the code ukp

passwordChecker("Password1!")