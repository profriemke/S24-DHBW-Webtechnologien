import type { HttpContext } from '@adonisjs/core/http'

export default class NamesController {
    public async index({ view }: HttpContext) {
        view.render('pages/namen', { namen: ['Malte', 'Susi','Friedbert']})
    }
}