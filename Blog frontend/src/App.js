import './App.css';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import ArticleListPage from './pages/ArticleListPage.js';
import ArticlePage from './pages/ArticlePage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './pages/NavBar';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
            <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/about" element={<AboutPage/>}></Route>
            <Route path="/articles" element={<ArticleListPage/>}></Route>
            <Route path="/articles/:articlesId" element={<ArticlePage/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="/createaccount" element={<CreateAccountPage/>}></Route>
            <Route path="*" element={<NotFoundPage/>}></Route>
          </Routes>
            </div>
       </div>
      </BrowserRouter>
      
  );
}

export default App;
