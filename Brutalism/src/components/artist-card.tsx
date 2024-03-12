export type CardProps = {
  img: string;
  alt: string;
  name?: string;
  description?: string;
  link?: string;
};

const ArtistCard: React.FC<CardProps> = ({
  img,
  alt,
  name,
  description,
  link,
}) => {
  return (
    <div className='card-container'>
      <div className='card-image-container'>
        <img src={img} alt={alt} className='card-image' />
      </div>{' '}
      <h3 className='card-title'>{name}</h3>
      <section className='card-description'>{description}</section>
      <a href={link} className='card-link' target='blank'>
        Read more
      </a>
    </div>
  );
};

export default ArtistCard;
