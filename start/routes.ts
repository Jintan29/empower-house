// ไปเรียกใช้ route ที่เขียนไว้แยกมาทำงานตรงนี้ 
import '../routes/v1'


/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/


// *Zone นี้เอาไว้ทดลองเฉยๆ *

// import Route from '@ioc:Adonis/Core/Route'

// Route.get('/', async () => {
//   return { hello: 'world' }
// })

// ทดสอบการรับพารามิเตอร์ไปแสดง
// Route.get('/:id', async ({params}) => {
//   return {'your params is':params }
// })

// ทดสอบการเรียก Controller

// Route.get('/user','UserController.index')
// Route.post('/test2','UserController.test2')
// Route.post('/create','UserController.create')