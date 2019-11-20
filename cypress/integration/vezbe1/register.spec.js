

import { DATA } from '../../fixtures/register.constants'
import { authPage } from '../../page_object/register.page.js'


describe('Checking the register', function(){
    it('Does not do much!', function(){
        expect(true).to.equal(true) 
    })

    beforeEach(() => {
        cy.visit('/') // nalazio se u osnovnom it kodu prebacen u before each zbog pojednostavljenja koda.
        cy.contains('Register').click() // isto, citaj gore. 
    })

    it('register a new user', function() {
        cy.url().should('include', '/register')
        authPage.register(DATA.FIRSTNAME,DATA.LASTNAME,DATA.EMAIL,DATA.PASSWORD,DATA.PASSWORD_CONFIRMATION)
        // cy.get('input[id="first-name"]').type("Nenad")
        // cy.get('input[id="last-name"]').type("Dragan")
        // cy.get('input[id="email"]').type("dragan.nenad@gmail.com")
        // cy.get('input[id="password"]').type('dragan1nenad')
        // cy.get('input[id="password-confirmation"]').type('dragan1nenad')
        cy.get('input[type="checkbox"]').check()
        cy.get('button[type="submit"]').click();
    })
})
