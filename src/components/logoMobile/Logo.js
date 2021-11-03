import './Logo.css'
import {useState} from 'react'
import {connect} from 'react-redux'
import {loggout} from '../../store/actions/Auth'

const Logo = props => {

       const [menu,setMenu] = useState(false)

       return ( <div className="logo-mobile">
             <img src="https://i0.wp.com/elias.praciano.com/wp-content/uploads/2017/02/netflix-logo-icon-65798.png" alt="img"/>
             <span onClick={() => setMenu(!menu)}><i className="fa fa-bars"></i></span>
             {menu && <button onClick={() => props.onLoggout()} className="loggout"><i className="fa fa-sign-out-alt"></i> Sair</button>}
        </div>)
}

const mapDispatchToProps = dispatch => {
    return{
        onLoggout: () => dispatch(loggout())
    }
}

export default connect(null,mapDispatchToProps)(Logo)