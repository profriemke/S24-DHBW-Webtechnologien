/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'



router.get('/', async ( { view })=>{
    console.log(await view.render('pages/start'))
    return  view.render('pages/start', { gruss: 'Hallo', name: 'Riemke'})
})
router.get('/namen', async ( { view })=>{

    return  view.render('pages/namen', { namen: ['Malte', 'Susi','Friedbert']})
})

router.get('/namen2', async ( { view })=>{

    return  view.render('pages/namen2', 
        { isLoggedIn: false, 
            personen: [
              {vorname:'Malte', nachname: 'Müller'},
              {vorname:'Susi', nachname: 'Schmidt'},
        ]
    })
})

router.get('/about', async ()=>{
  
    return 'Seite vom Riemke'
})
router.get('/test2', async ()=>{
    const name = 'Riemke'
    return 'Konstante ist: '+ name
})

router.get('/test', async ({ response })=>{
    return response.redirect('/about')
})

router.get('context', async (ctx)=>{
    return ctx
})

router.get('/nutzer', async({ view })=>{
    return view.render('pages/nutzer')
})

router.post('/nutzer/anzeigen', async({ request, view })=>{
    const vorname = request.input('vorname')
    const nachname = request.input('nachname')
    if(nachname===null || vorname === null){
        return view.render('pages/nutzer',{error: 'Bitte geben Sie einen Vornamen und Nachnamen ein'})
    }

    return view.render('pages/nutzer_anzeigen', { vorname, nachname})
})