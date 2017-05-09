const IP = (data) => new Promise((resolve, reject) => {
  try {
    resolve(data)
  } catch (e) {
    reject(e)
  }
})

module.exports = {IP}
