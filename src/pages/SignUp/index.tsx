import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { FormEvent } from "react";
import { Link } from "react-router-dom";

const index = () => {
    const navigate = useNavigate()

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        navigate("/dashboard")
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <h3>Cadastre-se</h3>
                <input type='text' placeholder='Insira seu nome' />
                <input type='text' placeholder='Insira seu e-mail' />
                <input type='text' placeholder='Insira sua senha' />
                <button>Sign Up</button>

                <Link to="/">Ja tem cadastro ? Clique aqui!</Link>
            </form>
        </div>
    )
}

export default index