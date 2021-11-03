import {IN_DEFAULT, IN_LOGGOUT,IN_LOGIN,IN_REGISTER} from './Types'
import axios from 'axios'
import {baseUrl,keyStorage} from '../../constants/Constants'

export const login = (info) => {
    return async dispatch => {
        const response = await axios.post(baseUrl+'login',info)
        const user = response.data

        if(user){
            localStorage.setItem(keyStorage,JSON.stringify({...user}))
            dispatch({type:IN_LOGIN,payload:user})
        }

        else{
            dispatch({type:IN_LOGIN,payload:null})
        }

    }
}

export const loggout = () => {
    return dispatch => {
        localStorage.removeItem(keyStorage)
        dispatch({type:IN_LOGGOUT})
    }
}

export const register = (info) => {
    return dispatch => {
        axios.post(baseUrl+'register',info)
            .then(() => {
                alert('Usuário cadastrado')
                dispatch({type:IN_DEFAULT})
            })
            .catch(e => console.log(e))
    }
}

export const verify = () => {
    return async dispatch => {
        const info = JSON.parse(localStorage.getItem(keyStorage)) || null

        if(!info) return dispatch({type:IN_LOGGOUT})

        const response = await axios.post(baseUrl+'verify',info)

        if(response.data){
            dispatch({type:IN_LOGIN,payload:info})
        }
        else{
            localStorage.removeItem(keyStorage)
            dispatch({type:IN_LOGGOUT})
        }
    }
}

export default {
    login,
    loggout,
    register,
    verify
}