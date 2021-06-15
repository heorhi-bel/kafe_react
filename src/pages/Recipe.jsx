import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getMealById } from "../api/api";

function Recipe() {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();
    const { goBack } = useHistory();

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);

    return (
        <>
            <button className="btn" onClick={goBack}>
                Go Back
            </button>

            <div className="row">
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-image">
                            <img src={recipe.strMealThumb} />
                            <span className="card-title">{recipe.strMeal}</span>
                        </div>
                    </div>
                </div>
                <p>{recipe.strInstructions}</p>
            </div>

            <table className="centered">
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Measure</th>
                    </tr>
                </thead>

                <tbody>
                    {Object.keys(recipe).map((key) => {
                        if (key.includes("Ingredient") && recipe[key]) {
                            return (
                                <tr key={key}>
                                    <td>{recipe[key]}</td>
                                    <td>
                                        {recipe[`strMeasure${key.slice(13)}`]}
                                    </td>
                                </tr>
                            );
                        }
                        return null;
                    })}
                </tbody>
            </table>

            <br />

            {recipe.strYoutube ? (
                <>
                    <h1>{recipe.strMeal}</h1>
                    <iframe
                        title={id}
                        width="100%"
                        height="720px"
                        src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                            -11
                        )}`}
                        allowFullScreen
                    />
                </>
            ) : null}
        </>
    );
}

export { Recipe };
