import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class PostsController {
    public async index({ view }: HttpContext) {
        const posts = await db.from('posts').select('*')
        return view.render('pages/home', { posts })
    }
}