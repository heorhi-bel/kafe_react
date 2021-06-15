import { Link } from "react-router-dom";

function Meal(props) {
    const { strMeal, idMeal, strMealThumb } = props;

    return (
        <div className="">
            <div className="col s12 m7 l4">
                <div className="card medium">
                    <div className="card-image">
                        <img src={strMealThumb} />
                        <span className="card-title">{strMeal}</span>
                    </div>

                    <div className="card-action">
                        <Link to={`/meal/${idMeal}`} className="btn">
                            To see recipe
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Meal };
