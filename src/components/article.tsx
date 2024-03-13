import ArtistCard, { CardProps } from './artist-card';

type LinkProps = {
  link?: string;
  creditLink?: string;
};

export type ArticleProps = {
  title: string;
  content: string;
  img?: string;
  credit?: string;
  cards?: CardProps[];
  links?: LinkProps[];
  creditLink?: string;
};

const Article: React.FC<ArticleProps> = ({
  title,
  content,
  img,
  credit,
  cards,
  links,
}) => {
  return (
    <article className='article'>
      <div className='article-text-container'>
        <h2 className='article-title'>{title}</h2>
        <p className='article-content'>{content}</p>
        {credit && (
          <div className='article-credit-container'>
            <p className='article-credit-text'>{credit}</p>
          </div>
        )}
        {cards && (
          <div className='article-cards-container'>
            {cards.map((card, index) => (
              <ArtistCard key={index} {...card} />
            ))}
          </div>
        )}
        {links && (
          <div className='example-link-container'>
            Some examples :
            {links.map((link, index) => (
              <a
                key={index}
                href={link.link}
                target='blank'
                className='example-link'>
                {link.creditLink}
              </a>
            ))}
          </div>
        )}
      </div>
      {img && (
        <div className='article-image-container'>
          <img src={img} alt={title} className='article-image' />
        </div>
      )}
    </article>
  );
};

export default Article;
