import { useState, useEffect } from "react";
import { getAllCategories } from "../api/api.js";
import { CategoryList } from "../components/CategoryList";
import { Preloader } from "../components/Preloader";

function Home() {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().then((data) => setCatalog(data.categories));
    }, []);

    return (
        <>
            {console.log("catalog in Home return: " + catalog)}
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={catalog} />
            )}
        </>
    );
}

export { Home };
