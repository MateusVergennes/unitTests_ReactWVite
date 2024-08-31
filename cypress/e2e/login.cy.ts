describe('testa a pagina de login', () => {
  it('Quando clicar em login deve ir para a pagina de Dashboard', () => {
    cy.visit('/')

    cy.intercept('GET', 'http:/localhost:3000/pokemon', {
      fixture: 'pokemons.json'
    })

    cy.contains("Login").click()
    cy.contains("Dashboard")
  })
  
  it('Quando clicar em login deve ir para a pagina de Dashboard e ter um pokemon pikachu', () => {
    cy.visit('/')

    cy.intercept('GET', 'http:/localhost:3000/pokemon', {
      fixture: 'pokemons.json'
    })

    cy.contains("Login").click()
    cy.contains("Dashboard")
    cy.contains('Pikachu')
  })
  
  it('Quando clicar em Sign Up deve ir para a pagina de cadastro', () => {
    cy.visit('/')

    cy.contains("Nao tem cadastro ? Clique aqui!").click()
    cy.contains("Cadastre-se")
  })

  it("O botao deve ter 10px de margin top", () => {
    cy.visit('/sign-up')

    cy.get('div').find('button').should("have.css", "marginTop").and('match', /10px/)
})
})