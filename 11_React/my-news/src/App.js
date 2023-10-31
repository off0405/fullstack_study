import './App.css';
import NewsList from './components/NewsList';
import NewsItem from './components/NewsItem';
import NewsPage from './pages/NewsPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (

    <Routes>
      {/* ?는 category값이 선택적이라는 의미
        즉  "있을 수도 있고,  없을 수도 있다" 는 뜻 */}
      <Route path='/:category?' element={<NewsPage />} />
    </Routes>
  );
}

export default App;
