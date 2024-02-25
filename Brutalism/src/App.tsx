import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Nav from '../src/components/nav';
import Hero from '../src/components/hero';
import Article from '../src/components/article';
import { ArticleProps } from '../src/components/article';

type AppProps = {
  articles: ArticleProps[];
};

const App: React.FC<AppProps> = ({ articles }) => {
  return (
    <>
      <div className='app'>
        <Nav />
        <div className='container'>
          <ParallaxProvider>
            <Hero />
          </ParallaxProvider>
          <div className='article-container'>
            {articles.map((article, index) => (
              <Article key={index} {...article} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
