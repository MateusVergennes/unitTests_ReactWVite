describe("testa a pagina de detalhes do pokemon", () => {
    it("Deve renderizar um pokemon na tela", () => {
        cy.visit("/pokemon-detail/1")

        cy.intercept("GET", "http://localhost:3000/pokemon/1", {
            fixture: "pokemon-detail.json"
        })

        cy.contains('Pikachu')
        cy.contains('Electric')
        cy.get('img').should('have.attr', 'src', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png')//para ver se tem o atributo da imagem

        cy.get('div').find('div').should(($div) => {
            expect($div).to.have.length(2)//consultar a quantidade de div

            const className = $div[0].className
            expect(className).to.match(/container/)//verifica se tem a classe 'container' na primeira div
        }).then(($div) => {
            expect($div).to.have.css('display', 'flex')
        })
    })
})