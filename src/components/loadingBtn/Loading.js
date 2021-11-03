import './Loading.css'

const Loading = props => <div className="loading-btn-box">
    <button onClick={() => props.action(props.page+1)}><i className="fa fa-plus-circle"></i></button>
    </div>

export default Loading    