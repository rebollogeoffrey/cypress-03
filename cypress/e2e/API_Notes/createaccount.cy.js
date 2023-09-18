describe('Create User for Cypress 03', () => {
    it('Gérard Bouchard', () => {
        cy.visit('https://practice.expandtesting.com/notes/api/api-docs/')

        // Click on the post User to create a User
        cy.get('#operations-Users-post_users_register').click()

        cy.get('#operations-Users-post_users_register').within(($postUser) => {

            // Click On the Try Out Option
            cy.get('.try-out__btn').click()

            // Fill Name
            cy.get('[placeholder=name]').type('Gérard')
            cy.get('[placeholder=name]').then(actualValue => {
                expect(actualValue).to.have.value('Gérard')
            })

            // Fill Email
            cy.get('[placeholder=email]').type('b.gerard@gmail.com')
            cy.get('[placeholder=email]').then(actualValue => {
                expect(actualValue).to.have.value('b.gerard@gmail.com')
            })

            // Fill Password
            cy.get('[placeholder=password]').type('M0t2Passe')
            cy.get('[placeholder=password]').then(actualValue => {
                expect(actualValue).to.have.value('M0t2Passe')
            })

            // Send Info
            cy.get(".excecute").click()

            // Verify FeedBack for Positive Response
            return cy.get(".live-responses-table").within(($liveResponses) => {
                return cy.get(".response-col_status").contains("201")
            })

        })


        //  Verify that the value has been updated
        cy.get('[placeholder=name]').then(actualValue => {
            expect(actualValue).to.have.value('Bouchard')
        })

        // Get an input, type into it
        cy.get('#signup-email').type('bouchard.gersssard@hotmail.com')
        //  Verify that the value has been updated
        cy.get('input[id="signup-email"]').then(actualValue => {
            expect(actualValue).to.have.value('bouchard.gersssard@hotmail.com')
        })

        // Get an input, type into it
        cy.get('#signup-password').type('1Sacrémotdepassevraimentlongmaispascompliqué')
        //  Verify that the value has been updated
        cy.get('input[id="signup-password"]').then(actualValue => {
            expect(actualValue).to.have.value('1Sacrémotdepassevraimentlongmaispascompliqué')
        })

        // Register
        cy.get('[data-qa=signup-submit-button]').click()
        // Vérify the URL after click
        cy.url().should('include', '/dashboard')

    })
})