
import "./Error.css"

const Error = ({onClick}) => {
    return (
        <div className="error">
            <p>Ошибка загрузки</p>
            <button onClick={onClick}>Обновить</button>
        </div>
    )
}

export default Error;