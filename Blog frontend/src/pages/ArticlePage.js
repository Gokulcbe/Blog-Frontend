import { parsePath, useParams } from "react-router-dom";
import articles from "./Article-Content";
import NotFoundPage from "./NotFoundPage";
import { useState, useEffect } from "react";
import axios from "axios";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";

const ArticlePage = () => {
    const [ articleInfo, setArticleInfo ] = useState({ upvotes: 0, comments: [], canUpvote: false });
    const { canUpvote } = articleInfo;
    const { articlesId } = useParams();

    const { user, isLoading} = useUser();

    useEffect(() => {
        const loadArticleInfo = async () =>{
            const token = user && await user.getIdToken();
            const headers = token ? {authtoken: token} : {};
            const response = await axios.get(`/api/articles/${articlesId}`, { headers });
            const newarticleInfo = response.data;
            setArticleInfo(newarticleInfo);
        }
        if(!isLoading){
            loadArticleInfo();
        }
    },[isLoading, user]);

    // const articlesId = Params.articlesId;

    const article = articles.find(article => article.name === articlesId);

    const addUpVote = async () => {
        const token = user && await user.getIdToken();
        const headers = token ? {authtoken: token} : {};
        const response = await axios.put(`/api/articles/${articlesId}/upvote`, null, { headers });
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }

    if(!article){
        return <NotFoundPage/>
    }

    return (
        <>
        <h1>This is the Article Page for the article with id: { articlesId }</h1>
        <h1>{article.title}</h1>
        <div className="upvotes-section">
        {user
        ? <button onClick={addUpVote}>{canUpvote ? 'Upvote' : 'Already Upvoted'}</button>
        : <button>Login to Upvote</button>}
        <p>This Article has {articleInfo.upvotes} upvotes</p>
        </div>
        {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
        {user
        ? <AddCommentForm articleName={articlesId}
            onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}/>
        : <button>Login to Comment</button>}
        <CommentsList comments={articleInfo.comments}/>
        </>
    )
}
export default ArticlePage;