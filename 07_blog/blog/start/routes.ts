/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import PostsController from '../app/controllers/posts_controller.js'
import UsersController from '../app/controllers/users_controller.js'

router.get('/', [PostsController, 'index'])

router.get('/posts', [PostsController, 'createForm'])
router.post('/posts', [PostsController, 'createProcess'])

router.get('/post/:id', [PostsController, 'show'])

router.get('/register', [UsersController, 'registerForm'])
router.post('/register', [UsersController, 'registerProcess'])

router.get('/login', [UsersController, 'loginForm'])
router.post('/login', [UsersController, 'loginProcess'])
router.get('/logout', [UsersController, 'logout'])

// Demo-Zeugs

router.get('/session/a', async ({ session }) => {
    session.put('text', 'Hello World')
    return 'Session set'
})
router.get('/session/b', async ({ session }) => {
    return session.get('text')
})

router.get('/count', async ({ session }) => {
    let count = session.get('count') || 0
    console.log(count)
    session.put('count', ++count)
    return count
})