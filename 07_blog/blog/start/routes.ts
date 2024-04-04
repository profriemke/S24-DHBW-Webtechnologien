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

router.get('/', [PostsController, 'index'])

router.get('/posts', [PostsController, 'createForm'])
router.post('/posts', [PostsController, 'createProcess'])

router.get('/post/:id', [PostsController, 'show'])