const router = require('express').Router()
const places = require('../models/places.js')

router.get('/new',(req,res) =>{
    res.render('places/new')
})

router.get('/',(req,res) =>{
  res.render('places/index',{places})
})

router.post('/', (req,res)=>{
  console.log(req.body)
  if(!req.body.pic){
    //Default image if one is not provided
    req.body.pic = 'https://placekitten.com/400/400'
  }
  if(!req.body.city){
    req.body.city = 'Anytown'
  }
  if(!req.body.state){
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

//Show route
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place:places[id],id })
  }
})

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id,1)
    res.redirect('/places')
  }
})

//Edit route

router.get('/:id/edit',(req,res)=>{
  let id = Number(req.params.id)
  if(isNaN(id)){
    res.render('error404')
  }
  else if(!places[id]){
    res.render('error404')
  }
  else{
    res.render('places/edit', { place:places[id],id})
  }
})

router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    if(!req.body.pic){
      req.body.pic = '/images/Grilled-Meat-and-Veggies.jpg'
    }
    if(!req.body.city){
      req.body.city = 'Anytown'
    }
    if(!req.body.state){
      req.body.state = 'USA'
    }

    places[id] = req.body
    res.redirect(`/places/${req.params.id}`)
  }
})



module.exports = router