import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import MainRoutes from "../routes"

describe("Testa o componente MainRoutes", () => {
    test("Deve renderizar a pagina de Login", async () => {
        render(<MemoryRouter initialEntries={['/']} >
            <MainRoutes />
        </MemoryRouter>)

        const title = await screen.getByText('Sign In')

        expect(title).toBeInTheDocument()
    })
    
    test("Deve renderizar a pagina de Cadastro", async () => {
        render(<MemoryRouter initialEntries={['/sign-up']} >
            <MainRoutes />
        </MemoryRouter>)

        const title = await screen.findByRole('heading', {
            name: "Cadastre-se"
        })

        expect(title).toBeInTheDocument()
    })
    
    test("Deve renderizar a pagina de Dashboard", async () => {
        render(<MemoryRouter initialEntries={['/dashboard']} >
            <MainRoutes />
        </MemoryRouter>)

        const title = await screen.getByText('Dashboard')

        expect(title).toBeInTheDocument()
    })
    
    test("Deve renderizar sem rota", async () => {
        render(<MemoryRouter initialEntries={['/qualquerrota']} >
            <MainRoutes />
        </MemoryRouter>)

        const title = await screen.getByText('404 Page Not Found')

        expect(title).toBeInTheDocument()
    })
})