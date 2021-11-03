import './Home.css'
import BannerHome from '../../components/bannerHome/BannerHome'
import Menu from '../../components/menu/Menu'
import BoxFilmes from '../../components/boxFilmes/Filmes'
import Title from '../../components/titleTarget/Title'
import Loading from '../../components/loadingBtn/Loading'
import Modal from '../../components/modalFilme/Modal'
import LogoMobile from '../../components/logoMobile/Logo'
import axios from 'axios'
import {baseUrl} from '../../constants/Constants'

import {useEffect, useState} from 'react'

const Home = props => {

    const [isMenuVisible,setMenu] = useState(false)
    const [isModal,setModal] = useState(null)
    const [page,setPage] = useState(1)
    const [list,setList] = useState([])
    const [open,setOpen] = useState(false)

    const getFilmesInit = async () => {
        if(page !== null){
            const response = await axios.get(baseUrl+`filmes?page=${page}`)
            const filmes = response.data && response.data.data

            if(Array.isArray(filmes) && filmes.length === 0 || !filmes){
                return setPage(null)
            }
            console.log(filmes)
            setList(filmes)
            setOpen(true)
            
        }
    }

    const getFilmes = async () => {
        if(page !== null && page !== 1 && open === true){
            const response = await axios.get(baseUrl+`filmes?page=${page}`)
            const filmes = response.data && response.data.data

            if(Array.isArray(filmes) && filmes.length === 0 || !filmes){
                return setPage(null)
            }
            console.log(filmes)
            setPage(page+1)
            setList(filmes)

        }
    }

    useEffect(() => {
        getFilmesInit()
    },[])

    useEffect(() => {
        getFilmes()
    },[page])
    
    return(
        <div className="container-home">
            {isMenuVisible && <Menu/>}
            <BannerHome menuAction={setMenu} menu={isMenuVisible}/>
            <LogoMobile/>
            <Title title="Mais populares"/>
            <BoxFilmes list={list.filter((item,i) => i > 3 ? false : true)} action={setModal}/>
            <Title title="Novos lançamentos"/>
            <BoxFilmes list={list.filter((item,i) => i > 3 ? false : true)} action={setModal}/>
            <Title title="Geral"/>
            <BoxFilmes list={list} action={setModal}/>
            {page && <Loading action={setPage} page={page}/>}
            {isModal && <Modal open={setModal} filme={isModal}/>}
        </div>
    )
}

export default Home