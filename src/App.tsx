import { useState } from 'react';
import { Element } from 'react-scroll';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import Article, { ArticleProps } from './components/article';
import Hero from './components/hero';
import Nav from './components/nav';

type AppProps = {
  articles: ArticleProps[];
};

const App: React.FC<AppProps> = ({ articles }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`app ${isOpen ? 'nav-open' : ''}`}>
        <Nav state={isOpen} onClick={toggleNav} />
        <div className='container'>
          <ParallaxProvider>
            <Element name='top' className='hero'>
              <Hero />
            </Element>
          </ParallaxProvider>
          <Element name='articles' className='article-container'>
            {articles.map((article, index) => (
              <Article key={index} {...article} />
            ))}
          </Element>
        </div>
      </div>
    </>
  );
};

export default App;
