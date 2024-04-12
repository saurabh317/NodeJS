import { UserModel } from "../models/user.models.js"

export class UserController {

  getRegisterForm(req, res){
    return res.render("register")
  }

  postRegister(req, res){
    const { name, email, password } = req.body
    const userDetails = {name, email, password }
    UserModel.addUser(userDetails)
    res.redirect('/login')
    console.log(UserModel.getAllUsers())
  }

  getLoginForm(req, res){
    return res.render("login")
  }

  postLogin(req, res){
    const verified = UserModel.verifyUser(req.body)
    verified ? res.redirect('/') : alert('enter a valid email and password')
  }
}