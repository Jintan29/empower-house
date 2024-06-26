import Route from '@ioc:Adonis/Core/Route'

// function secureRoute() {
//   Route.group(() => {
//     Route.get('/', 'UserController.get')
//     Route.post('/', 'UserController.create')

//     //GET USER BY ROLE
//     Route.get('/role/:role', 'UserController.getByRole')

//     //CONFIRM USER IDENTITY
//     Route.post('/complete-setup', 'UserController.completedSetup')

//     //ACTION WITH ID
//     Route.group(() => {
//       Route.get('/', 'UserController.getById')
//       Route.put('/', 'UserController.upsert')
//       Route.patch('/', 'UserController.update')
//       Route.delete('/', 'UserController.delete')

//       Route.patch('/activate', 'UserController.activate')
//       Route.patch('/deactivate', 'UserController.deactivate')
//     }).prefix('/:id')
//   }).middleware(['auth'])
  
// }

// function register(){
//   Route.post('/create', 'UserController.create')
// }

// * TEST *
function register(){
    Route.post('/create','UserController.create')
}

export default () => {
  Route.group(() => {
    // secureRoute()
    register()
  }).prefix('/users')
}