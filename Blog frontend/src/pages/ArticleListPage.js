import articles from "./Article-Content";
import { Link } from "react-router-dom";
import ArticlesList from "../components/ArticlesList";

const ArticleListPage = () => {
    return (
        <>
        <h1>Articles</h1>
        <ArticlesList articles={articles}/>
        </>
    )
}
export default ArticleListPage;