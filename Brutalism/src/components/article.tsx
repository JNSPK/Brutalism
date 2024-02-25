import '../css/article.css';

export type ArticleProps = {
  title: string;
  content: string;
};

const Article: React.FC<ArticleProps> = ({ title, content }) => {
  return (
    <div className='article'>
      <h2 className='article-title'>{title}</h2>
      <article className='article-content'>{content}</article>
    </div>
  );
};

export default Article;
