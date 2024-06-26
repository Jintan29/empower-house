import Route from '@ioc:Adonis/Core/Route'
import User from './v1/User'


Route.group(() => {
    User()

}).prefix('/v1')
