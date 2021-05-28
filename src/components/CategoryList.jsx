import { CategoryListItem } from "./CategoryListItem";

function CategoryList(catalog) {
    return (
        <div className="category-list">
            {catalog.map((item) => (
                <CategoryListItem key={item.idCategory} />
            ))}
        </div>
    );
}

export { CategoryList };
