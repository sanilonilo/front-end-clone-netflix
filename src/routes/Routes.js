import {HashRouter,Switch,Route,Redirect} from 'react-router-dom'
import Home from '../screens/home/Home'
import Auth from '../screens/loginOrRegister/LoginOrRegister'
import {verify} from '../store/actions/Auth'
import {connect} from 'react-redux'
import axios from 'axios'

import {useState,useEffect} from 'react'

const Routes = props => {

    const clickVerify = async () => await props.onVerify()

    useEffect(() => {
        clickVerify()
    },[])
    
    const app = () => {
        if(props.user){
            axios.defaults.headers.common['Authorization'] = `bearer ${props.user.token}`
            return (
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Redirect to="/"/>
                </Switch>
            )
        }


        else if(props.user === null) {
           
            return (<Switch>
                <Route path="/auth" exact component={Auth}/>
                <Redirect to="/auth"/>
            </Switch>)
        }

        else return false
    }

    return(
        <HashRouter>
            {app()}
        </HashRouter>
    )
}

const mapStateToProps = ({user}) => {
    return{
        user:user.user
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onVerify: () => dispatch(verify())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Routes)