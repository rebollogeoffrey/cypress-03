describe('Create User for Cypress 03', () => {

    let user = require('../../fixtures/userData.json')

    it(user.name, () => {
        cy.visit('https://practice.expandtesting.com/notes/api/api-docs/')

        // Click on the post User to create a User
        cy.get('#operations-Users-post_users_register').click()

        cy.get('#operations-Users-post_users_register').within(($postUser) => {

            // Click On the Try Out Option
            cy.get('.try-out__btn').click()

            // Fill Name
            cy.get('[placeholder=name]').type(user.name)
            cy.get('[placeholder=name]').then(actualValue => {
                expect(actualValue).to.have.value(user.name)
            })

            // Fill Email
            cy.get('[placeholder=email]').type(user.email)
            cy.get('[placeholder=email]').then(actualValue => {
                expect(actualValue).to.have.value(user.email)
            })

            // Fill Password
            cy.get('[placeholder=password]').type(user.password)
            cy.get('[placeholder=password]').then(actualValue => {
                expect(actualValue).to.have.value(user.password)
            })

            // Send Info
            cy.get(".execute").click()

            // Verify FeedBack for Positive Response
            return cy.get(".live-responses-table").within(($liveResponses) => {
                return cy.get(".response-col_status").contains("201")
            })
        })
    })
})