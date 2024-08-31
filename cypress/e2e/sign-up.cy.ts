describe('Testa a pagina de Sign Up', ()=> {
    it("Quando clicar em 'ja tem cadastro' deve ir para a tela de login", () => {
        cy.visit('/sign-up')

        cy.contains('Ja tem cadastro ? Clique aqui!').click()
        cy.contains('Login')
    })
    
    it("O botao deve ter 10px de margin top", () => {
        cy.visit('/sign-up')

        cy.get('div').find('button').should("have.css", "marginTop").and('match', /10px/)
    })
})