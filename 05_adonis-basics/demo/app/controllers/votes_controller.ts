// import type { HttpContext } from '@adonisjs/core/http'

export default class VotesController {
    public async index({ view }) {
        return view.render('votes/index')
    }
}