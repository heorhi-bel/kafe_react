import { Link } from "react-router-dom";

function CategoryListItem({
    idCategory,
    strCategoryThumb,
    strCategoryDescription,
    strCategory,
}) {
    return (
        <div className="">
            <div className="col s12 m7 l4">
                <div className="card medium">
                    <div className="card-image">
                        <img src={strCategoryThumb} />
                        <span className="card-title black-text">
                            {strCategory}
                        </span>
                    </div>
                    <div className="card-content">
                        <p>{strCategoryDescription}</p>
                    </div>
                    <div className="card-action">
                        <Link to={`/category/${strCategory}`} className="btn">
                            To see category
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { CategoryListItem };
