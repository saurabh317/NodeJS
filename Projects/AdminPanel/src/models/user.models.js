export class UserModel {
  constructor(name, email, password){
    this.name = name,
    this.email = email,
    this.password = password
  }

  static addUser(userDetails){
    const { name, email, password } = userDetails
    const newUser = new UserModel(name, email, password)
    users.push(newUser)
  }

  static verifyUser(userDetails){
    const { email, password } = userDetails
    const index = users.findIndex((user) => (user.email === email && user.password === password))
    if (index >= 0) {
      return true
    } else {
      return false
    }
  }

  static getAllUsers() {
    return users
  }
}

const users= []