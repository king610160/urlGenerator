function sample(array) {
  let index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateURL(length) {
  const all = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'

  let password = ''
  for (let i = 1; i <= 5; i++) {
    password += sample(all)
  }
  return password //傳到外部要用return

}

module.exports = generateURL  //將函式載到外部的方法