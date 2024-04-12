import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import app from '@adonisjs/core/services/app'
import { cuid } from '@adonisjs/core/helpers'

export default class PostsController {
    public async index({ view, session }: HttpContext) {
        const posts = await db.from('posts').select('*')
        return view.render('pages/home', { posts, user: session.get('user')})
    }

    public async createForm({ view, response, session }: HttpContext) {
        if(session.get('user') === undefined){
            return view.render('pages/users/login', {error: 'Bitte einloggen'})
        }
        return view.render('pages/posts/create_form')
    }

    public async createProcess({ request, response, session, view }: HttpContext) {
        if(session.get('user') === undefined){
            return response.redirect('/login')
        }

        const image = request.file('image',{ size: '5mb', extnames: ['jpg', 'png', 'jpeg']})
        if(image === null){
            return view.render('pages/posts/create_form', {error: 'Bitte Bild hochladen'})
        }
       
        if(!image.isValid){
            console.log(image.errors)
            return view.render('pages/posts/create_form', {error: 'Bild Fehler: ' + image.errors[0].message})
        }
        console.log(image)
        // für öffentlichen Ordner: await image.move(app.publicPath('uploads'))
        await image.move(app.makePath('uploads'),{ name: `${cuid()}.${image.extname}`})  
        console.log(image.fileName)


        const title = request.input('title')
        const text = request.input('text')
        const result = await db.table('posts').insert({ title, text, user_id: session.get('user').id, image: image.fileName})
        console.log(result)
        return response.redirect('/')
    }

    public async show({ view, params }: HttpContext) {
        const post = await db.from('posts').select('*').where('id', params.id).first()
        const user = await db.from('users').select('*').where('id', post.user_id).first()
        return view.render('pages/posts/show',  { post, pageTitle: post.title, firstname: user.firstname, lastname: user.lastname } )
    }
}