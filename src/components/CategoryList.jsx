import { CategoryListItem } from "./CategoryListItem";

function CategoryList(props) {
    const { catalog } = props;
    return (
        <div className="category-list">
            {catalog.map((item) => (
                <CategoryListItem
                    key={item.idCategory}
                    idCategory={item.idCategory}
                    strCategory={item.strCategory}
                    strCategoryDescription={item.strCategoryDescription}
                    strCategoryThumb={item.strCategoryThumb}
                />
            ))}
        </div>
    );
}

export { CategoryList };
