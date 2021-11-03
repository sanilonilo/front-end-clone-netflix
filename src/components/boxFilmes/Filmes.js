import './Filmes.css'
import Filme from '../boxFilmeSingle/Filme'

const Filmes = props => {

    const arr = props.list

    const generateFilmes = () => arr.map(item => <Filme action={props.action} key={item.id} capa={item.filme} {...item}/>)

    return(
        <div className="box-filmes">
           {generateFilmes()}
        </div>
    )
}

export default Filmes