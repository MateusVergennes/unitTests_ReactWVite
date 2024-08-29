import { fireEvent, render, screen } from "@testing-library/react"
import SignUp from './index'

const navigateMock = vi.fn()

describe("Testa o component SignUp", () => {

    vi.mock('react-router-dom', () => ({
        useNavigate() {
            return navigateMock
        },
        Link: vi.fn().mockImplementation((props) => (props.children))
    }))

    test("Devem haver 3 inputs na tela", async () => {
        render(<SignUp />)

        const inputs = await screen.findAllByRole("textbox")

        expect(inputs).toHaveLength(3)
    })

    test("Deve haver inputs para nome, email e senha", async () => {
        render(<SignUp />)

        const inputName = await screen.findByPlaceholderText("Insira seu nome")
        const inputEmail = await screen.findByPlaceholderText("Insira seu e-mail")
        const inputPassword = await screen.findByPlaceholderText("Insira sua senha")

        expect(inputName).toBeInTheDocument()
        expect(inputEmail).toBeInTheDocument()
        expect(inputPassword).toBeInTheDocument()
    })

    test("Deve haver 1 botao", async () => {
        render(<SignUp />)

        const button = await screen.findByRole("button")

        expect(button).toHaveTextContent("Sign Up")

    })

    test("Deve haver um titulo 'Cadastre-se'", async () => {
        render(<SignUp />)

        const title = await screen.findByRole("heading", {
            level: 3//level do <hXXXX>
        })

        expect(title).toHaveTextContent("Cadastre-se")

    })

    test("Deve navegar para a pagina de dashboard", async () => {
        render(<SignUp />)

        const button = await screen.findByRole("button")
        fireEvent.click(button)

        expect(navigateMock).toHaveBeenCalledTimes(1)
    })
    
    test("Deve haver um Link para a pagina de Login", async () => {
        render(<SignUp />)

        const link = screen.getByText("Ja tem cadastro ? Clique aqui!")
        fireEvent.click(link)

        expect(link).toBeInTheDocument()
    })
})