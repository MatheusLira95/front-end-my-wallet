import { Container } from "./Login";

export default function Register (){
    return(
        <>
            <Container>
            <p className="title">My Wallet</p>
                <form>
                    <input placeholder="Nome"></input>
                    <input placeholder="E-mail"></input>
                    <input placeholder="Senha"></input>
                    <input placeholder="Confirme a senha"></input>
                    <button>
                        Cadastrar
                    </button>
                </form>
                <p className="register">Já tem uma conta? Entre agora!</p>

            </Container>
        </>
    );
}