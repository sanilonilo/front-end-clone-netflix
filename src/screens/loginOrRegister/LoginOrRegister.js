import './LoginOrRegister.css'
import {useState,useEffect} from 'react'
import {login,register} from '../../store/actions/Auth'
import {connect} from 'react-redux'

const LoginOrRegister = props => {

    const [isLogin,setLogin] = useState(true)
    const [nome,setNome] = useState('')
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')

    const clickLogin = () => {

        if(email === '' || senha === '') return

        const dados = {
            email,
            senha
        }

        props.onLogin(dados)
    }

    const clickRegister = () => {

        if(nome === '' || email === '' || senha === '') return

        const dados = {
            nome,
            email,
            senha
        }

        props.onRegister(dados)
    }


    return(
        <div className="container-auth">
            <div className="overlay">
                <div className="form">
                    <div className="logo">
                        <img src="https://i0.wp.com/elias.praciano.com/wp-content/uploads/2017/02/netflix-logo-icon-65798.png" alt="img"/>
                    </div>

                    <div className="actions">
                        {!isLogin && <input onChange={e => setNome(e.target.value)} type="text" placeholder="Nome"/>}
                        <input onChange={e => setEmail(e.target.value)} type="text" placeholder="E-mail"/>
                        <input onChange={e => setSenha(e.target.value)} type="password" placeholder="Senha"/>
                        <button onClick={() => isLogin ? clickLogin() : clickRegister()}>{isLogin ? "Entrar" : "Registrar"}</button>
                    </div>

                    <div className="toggle"><span onClick={() => setLogin(!isLogin)}>{isLogin ? "Não tem conta? Registre-se" : "Já tem conta? Faça login"}</span></div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: info => dispatch(login(info)),
        onRegister: info => dispatch(register(info))
    }
}

export default connect(null,mapDispatchToProps)(LoginOrRegister)