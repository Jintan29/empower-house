import Route from '@ioc:Adonis/Core/Route'

function secureRoute() {
  Route.group(() => {
    Route.post('/register','AuthController.register')
    Route.post('/login','AuthController.login')
    
  })
  
}




export default () => {
  Route.group(() => {
    secureRoute()
    
  }).prefix('/auth')
}
