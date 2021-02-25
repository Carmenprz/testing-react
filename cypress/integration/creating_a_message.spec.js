describe('Creating a message', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })
    
    it('Displays the title list', () => {
        cy.get('h1')
        
        cy.contains('My List')
    })
    
    it('Displays the message in the list', () => {
        cy.get('[data-testid="messageText"]')
            .type('New message');
        
        cy.get('[data-testid="sendButton"]')
            .click(); 

        cy.get('[data-testid="messageText"]')
            .should('have.value', '');

        cy.contains('New message')
    })
})