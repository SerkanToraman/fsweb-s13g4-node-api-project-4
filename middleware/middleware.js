const usersModel = require('../api/users/users-model')

function validatePayload (req,res,next){
  try {
    const {name, password} = req.body;
    if(!name || !password){res.status(400).json({ message: "Lütfen gönderi için bir name ve password sağlayın" })}else{
    next()}
  }catch (error) {
    next(error)
  }
}

function validatePayload (req,res,next){
  try {
    const {name, password} = req.body;
    if(!name || !password){res.status(400).json({ message: "Lütfen gönderi için bir name ve password sağlayın" })}else{
    next()}
  }catch (error) {
    next(error)
  }
}

function validateLogin (req,res,next){
  try {
    const {name, password} = req.body;
    const loggedInUser = usersModel.findUser(name,password);
    if(!loggedInUser){res.status(400).json({message: "Geçerli isim ve/veya şifre giriniz"})}
    else{
      req.name = name;
      next()
    }
  }catch (error) {
    next(error)
  }
}

module.exports = {
  validatePayload,
  validateLogin
};