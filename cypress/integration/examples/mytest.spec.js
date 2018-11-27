/// <reference types="Cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('localhost:3000/access/login')
    })

    it('.type() - type into a DOM element', () => {
        // https://on.cypress.io/type
        cy.get('input[name=email]')
            .type('neven.hristov@gmail.com').should('have.value', 'neven.hristov@gmail.com')

            // .type() with special character sequences
            .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
            .type('{del}{selectall}{backspace}')

            // .type() with key modifiers
            .type('{alt}{option}') //these are equivalent
            .type('{ctrl}{control}') //these are equivalent
            .type('{meta}{command}{cmd}') //these are equivalent
            .type('{shift}')

            // Delay each keypress by 0.1 sec
            .type('neven.hristov@gmail.com', { delay: 100 })
            .should('have.value', 'neven.hristov@gmail.com')

        cy.get('input[name=username]')
            .type('neven').should('have.value', 'neven')

            // .type() with special character sequences
            .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
            .type('{del}{selectall}{backspace}')

            // .type() with key modifiers
            .type('{alt}{option}') //these are equivalent
            .type('{ctrl}{control}') //these are equivalent
            .type('{meta}{command}{cmd}') //these are equivalent
            .type('{shift}')

            // Delay each keypress by 0.1 sec
            .type('neven', { delay: 100 })
            .should('have.value', 'neven')

        cy.get('input[name=password]')
            .type('12345678').should('have.value', '12345678')

            // .type() with special character sequences
            .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
            .type('{del}{selectall}{backspace}')

            // .type() with key modifiers
            .type('{alt}{option}') //these are equivalent
            .type('{ctrl}{control}') //these are equivalent
            .type('{meta}{command}{cmd}') //these are equivalent
            .type('{shift}')

            // Delay each keypress by 0.1 sec
            .type('12345678', { delay: 100 })
            .should('have.value', '12345678')

            cy.get('button[name=login]').click()
    });
});