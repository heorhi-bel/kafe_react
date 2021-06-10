import { Meal } from "../components/Meal";

function MealList({ meals }) {
    return (
        <div className="list">
            {meals.map((meal) => (
                <Meal
                    key={meal.idMeal}
                    strMeal={meal.strMeal}
                    idMeal={meal.idMeal}
                    strMealThumb={meal.strMealThumb}
                />
            ))}
        </div>
    );
}

export { MealList };
