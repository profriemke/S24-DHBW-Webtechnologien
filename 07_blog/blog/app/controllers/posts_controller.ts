import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class PostsController {
    public async index({ view }: HttpContext) {
        const posts = await db.from('posts').select('*')
        return view.render('pages/home', { posts })
    }

    public async createForm({ view }: HttpContext) {
        return view.render('pages/posts/create_form')
    }

    public async createProcess({ request, response }: HttpContext) {
        const title = request.input('title')
        const text = request.input('text')
        const result = await db.table('posts').insert({ title, text, user_id: 1 })
        console.log(result)
        return response.redirect('/')
    }

    public async show({ view, params }: HttpContext) {
        const post = await db.from('posts').select('*').where('id', params.id).first()
        return view.render('pages/posts/show',  { post } )
    }
}