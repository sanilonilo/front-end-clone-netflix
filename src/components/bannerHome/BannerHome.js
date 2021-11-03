import './BannerHome.css'

const BannerHome = props => {
    return(
        <div className={props.menu ? "banner-home isMenuActive" : "banner-home"}>
            <div className="overlay">
                <header>
                    <img src="https://i0.wp.com/elias.praciano.com/wp-content/uploads/2017/02/netflix-logo-icon-65798.png" alt="img"/>

                    <div className="box-navegacao">
                        <span><i className="fa fa-search"></i></span>
                        <span onClick={() => props.menuAction(!props.menu)}><i className="fa fa-bars"></i></span>
                    </div>
                </header>

                <div className="info-banner">
                    <div className="title">
                        <h1>Marvel corporation it presents <br></br><span>Black Widow</span></h1>
                    </div>
                    <div className="descricao">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>

                    <div className="button">
                        <button>Trailer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerHome