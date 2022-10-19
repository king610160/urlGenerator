//將任意password的函式放在function之外
function sample(array) {
  let index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generatePassword(options) {
  // define things user might want
  const all = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  let collection = []

  // start generating password
  let password = ''
  for (let i = 1; i <= 6; i++) {
    password += sample(all)
  }
  return password //傳到外部要用return

}

module.exports = generatePassword  //將函式載到外部的方法