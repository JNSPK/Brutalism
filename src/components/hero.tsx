import { Parallax } from 'react-scroll-parallax';

const Hero = () => {
  return (
    <>
      <h1 className='hero-title'>brutalism</h1>
      <Parallax speed={-10}>
        <h2 className='hero-title2'>brutalism</h2>
      </Parallax>
      <div className='deco'>
        <Parallax
          speed={-3}
          translateX={[200, 0]}
          translateY={[0, 0]}
          opacity={[10, 0]}
          easing={'ease'}
          className='line-container'>
          <div className='plx-bg'></div>
        </Parallax>
        <Parallax
          speed={-50}
          translateX={[70, 150]}
          translateY={[0, 0]}
          opacity={[1, 0]}
          easing={'ease'}
          className='line-container2'>
          <div className='plx-bg2'></div>
        </Parallax>
      </div>
    </>
  );
};

export default Hero;
