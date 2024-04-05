import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class PostsController {
    public async index({ view, session }: HttpContext) {
        const posts = await db.from('posts').select('*')
        return view.render('pages/home', { posts, user: session.get('user')})
    }

    public async createForm({ view, response, session }: HttpContext) {
        if(session.get('user') === undefined){
            return response.redirect('/login')
        }
        return view.render('pages/posts/create_form')
    }

    public async createProcess({ request, response, session }: HttpContext) {
        if(session.get('user') === undefined){
            return response.redirect('/login')
        }
        const title = request.input('title')
        const text = request.input('text')
        const result = await db.table('posts').insert({ title, text, user_id: session.get('user').id })
        console.log(result)
        return response.redirect('/')
    }

    public async show({ view, params }: HttpContext) {
        const post = await db.from('posts').select('*').where('id', params.id).first()
        const user = await db.from('users').select('*').where('id', post.user_id).first()
        return view.render('pages/posts/show',  { post, pageTitle: post.title, firstname: user.firstname, lastname: user.lastname } )
    }
}