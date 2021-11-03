import './Filme.css'

const Filme = props => <div onClick={() => props.action(props.capa)} className="box-filme-single" style={{backgroundImage:`url("${props.filme}")`}}></div>
    
export default Filme