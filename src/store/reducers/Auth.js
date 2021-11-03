import {IN_LOGGOUT,IN_LOGIN,IN_DEFAULT} from '../actions/Types'

const initial = {
    user:undefined
}

const reducer = (state=initial,action) => {
    switch(action.type){
        case IN_LOGIN:
            return{
                user:action.payload
            }

        case IN_LOGGOUT:
            return{
                user:null
            } 

        case IN_DEFAULT:
            return{
                user:null
            }    
            
        default: return state    
    }
}

export default reducer