import Route from '@ioc:Adonis/Core/Route'
import User from './v1/User'
import Auth from './v1/Auth'

Route.group(() => {
    User(),
    Auth()

}).prefix('/v1')
