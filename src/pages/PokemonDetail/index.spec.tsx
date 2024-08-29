import { render, screen } from "@testing-library/react"
import PokemonDetail from './index'
import { fetchPokemonDetail } from "../../services/PokemonService"
import { faker } from "@faker-js/faker"
import * as rrd from 'react-router-dom'

const mockFn = vi.fn(fetchPokemonDetail)
const mockfetchPokemonDetailFn = mockFn.mockImplementation(async () => {
    return {
        id: 1,
        image: faker.image.urlPlaceholder(),
        name: "Pikachu",
        type: "Eletrico"
    }
})

describe("Testa o componente Pokemon Detail", ()=> {
    vi.mock('react-router-dom', () => {
        return {
            useParams: () => ({
                id: 1
            }),
            Link: vi.fn().mockImplementation((props) => props.children)
        }
    })

    test("Deve haver um titulo na pagina", async () => {
        render(<PokemonDetail fetchPokemonDetail={mockfetchPokemonDetailFn}/>)

        const pikachu = await screen.findByText('Pikachu')
        expect(pikachu).toBeInTheDocument()
    })
    
    test("Deve haver um Link para voltar", async () => {
        render(<PokemonDetail fetchPokemonDetail={mockfetchPokemonDetailFn}/>)

        const linkBack = await screen.findByText('Voltar')
        expect(linkBack).toBeInTheDocument()
    })
    
    test("Deve validade quando nao vier parametro na rota", async () => {
        vi.spyOn(rrd, "useParams").mockImplementationOnce(()=>({ id: "0" }))
        
        render(<PokemonDetail fetchPokemonDetail={mockfetchPokemonDetailFn}/>)


        const errorText = await screen.findByText("O id nao eh valido!")
        expect(errorText).toBeInTheDocument()
    })
})