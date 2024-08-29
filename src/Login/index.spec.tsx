import { fireEvent, render, screen } from "@testing-library/react"
import Login from "."

const navigateMock = vi.fn()

describe('Testa o componente de Login', () => { 
    vi.mock("react-router-dom", () => ({
        useNavigate() {
            return navigateMock
        }
    }))

    test("Deve haver um titulo escrito 'Sign In'", async () => {
        render(<Login />)

        const title = await screen.findByRole('heading', {
            name: "Sign In"
        })

        expect(title).toBeInTheDocument()
    })
    
    test("Devem haver 2 inputs na minha tela", async () => {
        render(<Login />)

        const inputs = await screen.findAllByRole('textbox')//pq quero encontrar quantos tem

        expect(inputs).toHaveLength(2)
    })
    
    test("Deve haver 1 botao na tela", async () => {
        render(<Login />)

        const button = await screen.findByRole('button')

        expect(button.textContent).toBe('Login')
    })
    
    test("Deve haver 1 input para e-mail", async () => {
        render(<Login />)

        const inputEmail = await screen.findByPlaceholderText('Insira seu e-mail')

        expect(inputEmail).toBeInTheDocument()
    })
    test("Deve haver 1 input para senha", async () => {
        render(<Login />)

        const inputPassword = await screen.findByPlaceholderText('Insira sua senha')

        expect(inputPassword).toBeInTheDocument()
    })
    
    test("botao com acao", async () => {
        render(<Login />)

        const button = await screen.findByRole('button')
        fireEvent.click(button)

        expect(navigateMock).toHaveBeenCalledTimes(1)
    })
 })