import { fireEvent, render, screen } from "@testing-library/react"
import Dashboard from "."
import { fetchPokemonList } from "../../services/PokemonService"
import { faker } from '@faker-js/faker'

const mockFetchListPokemonFn = vi
    .fn(fetchPokemonList)
    .mockImplementation(async () => {
        return [
            {
                "id": 1,
                "name": "Pikachu",
                "image": faker.image.urlPlaceholder(),
                "type": "Electric"
            },
            {
                "id": 2,
                "name": "Rotom",
                "image": faker.image.urlPlaceholder(),
                "type": "Electric"
            }
        ]
    })

const navigateMock = vi.fn()

describe("Testa o component Dashboard", () => {

    vi.mock('react-router-dom', () => {
        return {
            useNavigate() {
                return navigateMock
            }
        }
    })

    test("Deve haver um titulo n pagina", async () => {
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />)

        const title = await screen.findByRole('heading')

        expect(title).toHaveTextContent("Dashboard")
    })

    test("Deve haver uma Lista com 10 pokemons", async () => {
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />)

        const items = await screen.findAllByRole("listitem")

        expect(items).toHaveLength(2)
    })
    
    test("Deve haver um pikachu na lista", async () => {
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />)

        const pikachu = await screen.findByText("Pikachu")

        expect(pikachu).toBeInTheDocument()
    })
    
    test("Deve ser possivel clicar no li para abrir a pagina de detalhes", async () => {
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />)

        const link = await screen.findByText("Pikachu")
        fireEvent.click(link)
        expect(navigateMock).toHaveBeenCalledTimes(1)
    })
})