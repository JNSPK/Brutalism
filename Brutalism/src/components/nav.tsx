import { Link } from 'react-scroll';

type NavProps = {
  state: boolean;
  onClick: () => void;
};

const Nav: React.FC<NavProps> = ({ state, onClick }) => {
  return (
    <nav onClick={onClick} className={state ? 'open' : ''}>
      <div className='link-container'>
        <Link
          activeClass='active'
          to='top'
          spy={true}
          smooth={true}
          offset={-70}
          duration={900}>
          BRUTALISM
        </Link>
        <Link
          activeClass='active'
          to='articles'
          spy={true}
          smooth={true}
          offset={-70}
          duration={900}>
          Articles
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
