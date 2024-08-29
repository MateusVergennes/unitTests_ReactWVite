import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { FormEvent } from "react";

const index = () => {
    const navigate = useNavigate()

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        navigate("/dashboard")
    }

    return (
        <div className={styles.container}>
            <h3>Cadastre-se</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Insira seu nome' />
                <input type='text' placeholder='Insira seu e-mail' />
                <input type='text' placeholder='Insira sua senha' />
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default index