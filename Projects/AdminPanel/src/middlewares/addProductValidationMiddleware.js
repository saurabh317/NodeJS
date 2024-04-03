import { body, validationResult } from "express-validator"

const addProductValidate = async(req, res, next) => {
  // validate data using js
  //  const { name, price, imageUrl } = req.body

  //  let errorMessages = []
  //  if(!name || name.trim() == ''){
  //    errorMessages.push("enter a valid name!")
  //  }
  //  if(!price || parseFloat(price) < 1){
  //    errorMessages.push("enter a valid price!")
  //  }

  //  try {
  //    const url = new URL(imageUrl)
  //  } catch (e) {
  //    console.log(imageUrl)
  //    errorMessages.push("enter a valid url!")
  //  }

  // if (errorMessages.length !== 0){
  //   // console.log(errorMessages[0])
  //   res.render("newProduct", { errorMessage: errorMessages[0] })
  // } else {
  //   next()
  // }


  // using express validator package for validation
  // step1: setup the rules for validation
  const rules = [
    body('name').notEmpty().withMessage('enter a valid name'),
    body('price').isFloat({gt: 0}).withMessage('enter a valid price'),
    body('imageUrl').isURL().withMessage("enter a valid url")
  ]
  // step2: execute the rules using run function
  await Promise.all(rules.map((rule) => rule.run(req)))

  // step3: collect result => check if there is any error after running the rules
  let validationErrors = validationResult(req)

   if (!validationErrors.isEmpty()){
     res.render("newProduct", {
       errorMessage: validationErrors.array()[0].msg
     })
   } else {
     next()
   }
}

export default addProductValidate