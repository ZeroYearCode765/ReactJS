function Body (props) {
    return (
        <div className="card">
                    <img src="doom-eternal.jpg" alt="Doom Eternal" />

                    <div className="card-body">
                        <h2 className="card-title">{props.name}</h2>
                        <p className="card-price">{props.price}</p>
                        <p className="card-review">{props.review}</p>
                    </div>
        </div>
    )
}

export default Body;