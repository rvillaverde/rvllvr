const bcrypt = require('bcrypt')
const SALT_ROUNDS = 8

module.exports = {
  encrypt: (text) => {
    return new Promise((resolve) => {
      bcrypt.hash(text, SALT_ROUNDS, function(err, hash) {
        if (err) {
          resolve(false)
        }
        resolve(hash)
      })
    })
  },
  
  compare: (text, hash) => {
    return new Promise((resolve) => {
      bcrypt.compare(text, hash, function(err, result) {
        if (result == true) {
          resolve(true)
        } else {
          resolve(false)
        }
      })
    })
  }
}
