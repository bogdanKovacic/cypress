
import { EMAIL } from '../../fixtures/constants'
import { authPage } from '../../page_object/login.page'
const alert = ' .alert-danger'





describe('My first Test', function(){
    it('Does not do much!', function(){
        expect(true).to.equal(true)
    })
  /*  it('Visits the Kitchen Sin', function(){
        cy.visit('https://example.cypress.io') // cy. sve komande sa cy su ugradne funkcije cypress-a
        cy.contains('type').click() // mora se pisati tacno kako pise na sajtu sa malim slovom (case sensitive "type"). click()- otvara type
        cy.url().should('include', '/commands/actions') // url hvata aktivni browser, a ne koji se nalazi u visit
    }) */


  /*  it('register cheching', function(){
        cy.visit('/')
        cy.contains('Register').click()
        cy.url().should('include', '/register')
    })

    it('login cheching', function(){
        cy.visit('/')
        cy.contains('Login').click()
        cy.url().should('include', '/login')
    })

    it('TC -01 login to gallery app', function(){ // only -vrti samo ovaj test
        cy.visit('/')
        cy.contains('Login').click()
        cy.url().should('include', '/login')
        cy.get('input[id="email"]').type('boki@gmail.com')
        cy.get('input[id="password"]').type('boki1234')
        cy.get('button[type=submit]').click()
    })

    it('TC -02 login to gallery app invalid credentials invalid password', function(){ // only -vrti samo ovaj test
        cy.visit('/')
        cy.contains('Login').click()
        cy.url().should('include', '/login')
        cy.get('input[id="email"]').type('boki@gmail.com')
        cy.get('input[id="password"]').type('boki12345')
        cy.get('button[type=submit]').click()
        cy.get(' .alert-danger').should('have.text', 'Bad Credentials') // have.text - za proveru teksta unutar. Za slucaj kada proveravamo negativan rezultalt
    }) */
    // dodatni zadaci

    beforeEach(()=> { // jednako sa strelicom menja function()
        cy.visit('/')
        cy.contains('Login').click()
    })

    before (() => { // vriti se samo sa jedim it, posle ne vazi

    })


    it('TC -03 login to gallery app invalid credentials', function(){ // only -vrti samo ovaj test
        cy.url().should('include', '/login')
        authPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)

        //authPage.email.type(EMAIL.EXISTING)
        //authPage.password.type(EMAIL.PASSWORD)
        //authPage.submit.click()
        authPage.alert.should('have.text', 'Bad Credentials') // have.text - za proveru teksta unutar. Za slucaj kada proveravamo negativan rezultalt
    })

    it('TC -04 login to gallery app invalid credentials invalid email', function(){ // only -vrti samo ovaj test
        cy.url().should('include', '/login')
        authPage.login('aaa@gmail', 'sifra')
        authPage.submit.click()
        cy.get(alert).should('have.text', 'Bad Credentials') // have.text - za proveru teksta unutar. Za slucaj kada proveravamo negativan rezultalt
    })

    it('TC -05 login to gallery app invalid credentials empty', function(){ // only -vrti samo ovaj test
        cy.url().should('include', '/login')
        authPage.email.type('boki@gmialllllll.com')
        authPage.password.type(' ')
        authPage.submit.click()
        cy.get(' .alert-danger').should('have.text', 'Bad Credentials') // have.text - za proveru teksta unutar. Za slucaj kada proveravamo negativan rezultalt
    })


    it('TC -06 login to gallery app invalid credentials empty', function(){ // only -vrti samo ovaj test
        cy.url().should('include', '/login')
        authPage.email.type('boki@gmialllllll.com')
        authPage.password.type(' ')
        authPage.submit.click()
        cy.get(' .alert-danger').should('have.text', 'Bad Credentials') // have.text - za proveru teksta unutar. Za slucaj kada proveravamo negativan rezultalt
    })



})
