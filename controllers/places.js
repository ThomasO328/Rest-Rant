const router = require('express').Router()

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
