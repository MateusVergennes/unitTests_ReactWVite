describe('Testa a Pagina de Dashboard', () => {
    it('Deve Carregar uma lista com 3 pokemons', () => {
        cy.visit('/dashboard')

        cy.intercept('GET', 'http://localhost:3000/pokemon', {
            fixture: 'pokemons.json'
        })

        cy.contains("Pikachu")
        cy.contains("Rotom")
        cy.contains("Charmander")
    })
    
    it('Quando clicar em um pokemon, deve abrir a pagina de detalhes do pokemon', () => {
        cy.visit('/dashboard')

        cy.intercept('GET', 'http://localhost:3000/pokemon', {
            fixture: 'pokemons.json'
        })
        
        cy.intercept('GET', 'http://localhost:3000/pokemon/1', {
            fixture: 'pokemon-detail.json'
        })

        cy.contains("Pikachu").click()
        cy.contains("Voltar")
    })
    
    it('Quando clicar em um pokemon, deve abrir a pagina de detalhes do pokemon e voltar para a pagina de dashboard', () => {
        cy.visit('/dashboard')

        cy.intercept('GET', 'http://localhost:3000/pokemon', {
            fixture: 'pokemons.json'
        })
        
        cy.intercept('GET', 'http://localhost:3000/pokemon/1', {
            fixture: 'pokemon-detail.json'
        })

        cy.contains("Pikachu").click()
        cy.contains("Voltar").click()
        cy.contains("Pikachu")
        cy.contains("Rotom")
        cy.contains("Charmander")
    })
})