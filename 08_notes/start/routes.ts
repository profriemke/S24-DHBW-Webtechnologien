/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import User from '#models/user'
import Note from '#models/note'
import router from '@adonisjs/core/services/router'

//router.on('/').render('pages/home')

router.get('/', async ({ response }) => {
    const user = new User()
    user.login = 'riemke'
    user.password = '123'
    await user.save()
    return response.send('User created')


})

router.get('/notes', async ({ response }) => {
    const note = new Note()
    note.title = 'My first note'
    note.text = 'This is my first note'
    note.userLogin = 'riemke'
    await note.save()
    await note.fill({title: 'My first note', text: 'This is my first note'}).save()
    return response.send('Hello Notes')
})

router.get('shownotes',async ({response}) => {
    //const notes = await Note.all()
    //const notes= await Note.find(4)
    const notes = await Note.findManyBy('userLogin','riemke')
    return response.send(notes)
})

router.get('/api/notes', async ({response}) => {
    const notes = await Note.all()
    return response.send(notes)
})