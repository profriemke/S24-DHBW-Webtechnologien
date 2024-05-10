import { BaseSchema } from '@adonisjs/lucid/schema'
export default class extends BaseSchema {
  async up() {
    this.schema.alterTable('notes', (table) => {
      table.string('user_login').notNullable().references('login').inTable('users').onDelete('CASCADE')
    })
  }
    async down() {
    this.schema.alterTable('users', (table) => {
      table.dropForeign(['user_login'])
      table.dropColumn('user_login')
    })

  }
}