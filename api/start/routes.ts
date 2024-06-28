/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import UsersController from "#controllers/users_controller";
import SessionController from "#controllers/session_controller";
import {middleware} from "#start/kernel";

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/api/v1/users', UsersController).apiOnly()
router.post('/api/v1/login', [SessionController, 'store'])
router.post('/api/v1/logout', [SessionController, 'update']).use(middleware.auth())
