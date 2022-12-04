const router = require('express').Router()


router.get('/new', (req, res) => {
    res.render('places/new')
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })  


// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'Bennys Breakfast',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Breakfast',
        pic: '/images/BennysBreakfast.jpg'
      }, {
        name: 'Bennys Burgers',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Burgers, Beers',
        pic: '/images/BennysBurgers.jpg'
      }]      
    res.render('places/index', { places })
  })
  

module.exports = router
