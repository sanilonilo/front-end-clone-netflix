import './Menu.css'
import {loggout} from '../../store/actions/Auth'
import {connect} from 'react-redux'

const Menu = props => {
    return(
        <div className="container-menu">
            <nav>
                <ul>
                    <li><a href="/#"><i className="fa fa-home"></i> Initial page</a></li>
                    <li><span onClick={() => props.onLoggout()}><i className="fa fa-sign-out-alt"></i> Exit</span></li>
                </ul>
            </nav>

            <footer>
                <p>Todos os direitos reservados</p>
            </footer>
        </div>
    )
}

const mapStateToProps = ({user}) => {
    return{
        nome:user && user.user && user.user.nome
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onLoggout: () => dispatch(loggout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu)