import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import hash from '@adonisjs/core/services/hash'

export default class UsersController {
    public async logout({ session, response }: HttpContext) {
        session.forget('user')
        response.redirect('/')
    }
    
    public async loginForm({ view }: HttpContext) {
        return view.render('pages/users/login')
    }

    public async loginProcess({ view, response, request, session }: HttpContext) {
        const result = await db.from('users').select('*').where('login', request.input('login')).first() 
        if(!result){
            // Fehler Nutzer existiert nicht
           return view.render('pages/users/login', {error: 'Irgendwas falsch gelaufen'})
        }
        const passwordOk = await hash.verify(result.password, request.input('password'))
        if(!passwordOk){
            // Fehler Passwort falsch
            console.log('Fehler Passwort falsch')
            return view.render('pages/users/login', {error: 'Irgendwas falsch gelaufen'})

        }
        session.put('user', {
            id: result.id,
            firstname: result.firstname,
            lastname: result.lastname        
        })
      
        return response.redirect('/')
    }

    public async registerForm({ view }: HttpContext) {
        return view.render('pages/users/register')
    }

    public async registerProcess({ request, response }: HttpContext) {
        const hashedPassword = await hash.make(request.input('password'))
        try {
        const result = await db.table('users').insert({login: request.input('login'),
         password: hashedPassword, firstname: request.input('firstname'),
         lastname: request.input('lastname')})
          console.log(result)
        } catch (error) {
            console.log(error)
            return 'Fehler beim Speichern des Nutzers'
        }
        response.redirect('/login')
    }
}