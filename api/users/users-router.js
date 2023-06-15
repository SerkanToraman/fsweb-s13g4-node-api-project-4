const express = require('express');
const router = express.Router();
//const kullanicilar= require('../../data/usersData')

const kullanicilar = [
  {name:"Ali", password:"1234"},
  {name:"Veli", password:"12345"},
]


router.get('/kullanicilar',(req,res)=>{
  res.json({message: kullanicilar})
})

router.post('/kayitol',(req,res)=>{
  try {
    const userInfo = req.body;
    kullanicilar.push(userInfo)
    res.status(201).json(userInfo)
    
  } catch (error) {
    res.status(500).json({message: "Gönderiler alınamadı"})
  }
})
router.post('/giris',(req,res)=>{
  try {
    const {name,password} = req.body;
    const findUser =kullanicilar.filter((item) => item.name == name)
    if (!name || !password){
      res.status(400).json({ message: "Lütfen gönderi için bir name ve password sağlayın" })
    } else if (findUser.length==1 && findUser[0].password === password){
      res.json("Siteye hosgeldiniz")
    }
    else{
      res.status(400).json({message: "Geçerli Şifre Giriniz"})
    }
  }
  catch (error) {
    res.status(500).json({message: "Gönderiler alınamadı"})
  }
})





module.exports = router;