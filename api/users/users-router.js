const express = require('express');
const router = express.Router();
const usersModel = require('./users-model')
const {validatePayload,validateLogin} = require('../../middleware/middleware')

const kullanicilar = [
  {name:"Ali", password:"1234"},
  {name:"Veli", password:"12345"},
]


router.get('/kullanicilar',(req,res)=>{
  res.json({message: usersModel.getUsers()})
})

router.post('/kayitol',(req,res)=>{
  try {
    const userInfo = req.body;
    usersModel.insertUser(userInfo)
    res.status(201).json(userInfo)
    
  } catch (error) {
    res.status(500).json({message: "Gönderiler alınamadı"})
  }
})
router.post('/giris',validatePayload,validateLogin,(req,res,next)=>{
  try {
    res.json({mesaj:`${req.name}, Siteye Hoşgeldiniz`})
  }
  catch (error) {
    res.status(500).json({message: "Gönderiler alınamadı"})
  }
})


module.exports = router;