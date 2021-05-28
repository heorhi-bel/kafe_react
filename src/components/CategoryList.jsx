import { CategoryListItem } from "./CategoryListItem";

function CategoryList(catalog) {
    return (
        <div className="categor-list">
            {catalog.map((item) => (
                <CategoryListItem key={item.id} />
            ))}
        </div>
    );
}

export { CategoryList };
