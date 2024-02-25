import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Nav from '../src/components/nav';
import Hero from '../src/components/hero';
import Article from '../src/components/article';
import { ArticleProps } from '../src/components/article';
import { useState } from 'react';
import { Element } from 'react-scroll';

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
