import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import Note from '#models/note'


export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {login:'riemke', password: '123'},
      {login:'jane', password: '123'},
    ])
   await Note.createMany([
    {id: 1, title: 'First note', text: 'This is the first note', userLogin: 'riemke'},
      {id: 2, title: 'Second note', text: 'This is the second note', userLogin: 'riemke'},
      {id: 3, title: 'Third note', text: 'This is the third note', userLogin: 'jane'},
    ])

  }
}