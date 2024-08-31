describe('Testa a pagina de Sign Up', ()=> {
    it("Quando clicar em 'ja tem cadastro' deve ir para a tela de login", () => {
        cy.visit('/sign-up')

        cy.contains('Ja tem cadastro ? Clique aqui!').click()
        cy.contains('Login')
    })
})