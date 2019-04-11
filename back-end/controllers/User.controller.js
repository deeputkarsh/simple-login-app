const User = require('../models/User.model')

module.exports = {
  signup: async (userInfo) => {
    let newUser = new User({
      name: userInfo.name,
      email: userInfo.email,
      mobile: userInfo.mobile
    })
    newUser.password = newUser.generateHash(userInfo.password)
    const queryResult = await newUser.save()
    return new Promise((resolve, reject) => {
      if (queryResult._id) {
        resolve({
          id: queryResult._id,
          name: userInfo.name,
          email: userInfo.email,
          mobile: userInfo.mobile
        })
      } else {
        reject(queryResult)
      }
    })
  },
  getUserData: async (id) => {
    return new Promise((resolve, reject) => {
      User.findById(id, (err, user) => {
        if (err) {
          reject(err)
        } else {
          resolve({
            id: user._id,
            name: user.name,
            email: user.email,
            mobile: user.mobile
          })
        }
      })
    })
  },
  authenticateUser: async (data) => {
    const user = await User.findOne({ mobile: data.mobile })
    if (!user.validPassword(data.password)) {
      throw new Error('Invalid Password')
    } else {
      return {
        id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile
      }
    }
  },
  updateUserData: async (data) => {
    return new Promise((resolve, reject) => {
      User.findByIdAndUpdate(data.id, data, (err) => {
        if (err) {
          reject(err)
        } else {
          resolve('Item Updated')
        }
      })
    })
  }
}
