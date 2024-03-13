import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import architecture from '../src/img/le-corbusier.jpg'

const articles = [
  {
    title: 'Brutalism x History',
    content: `Brutalism (also called New Brutalism), narrowly defined, was the term used to describe the theory, ideas, and practice of a small number of young architects in Great Britain from 1950 to 1960. Broadly conceived, Brutalism came to describe an international approach to architecture that reflected social ideals, industrial and vernacular means, and humane goals.
    \nGiven the exigencies of building in Europe in the years immediately following World War II, namely, limited resources and unlimited demand, it was no surprise that the new generation of postwar architects saw before them not merely opportunity but the challenge to respond to circumstances that seemed unprecedented in European history. After World War I, architects seemed to approach the task of rebuilding in Europe with revolutionary idealism and an optimistic trust in mechanical technology. International Modernism seemed to represent not only all that was modern but also all that was valuable in a devalued and degraded world. The generation following World War II had less use for idealism, revolutionary or otherwise, and diminished trust in technology. It was in that context that the Brutalist apothegm “An ethic, not an aesthetic” acquired significance.
    
    The new generation embraced several precepts: first, that architecture absorbed existential weight; second, that building was the result not of reasoning but of ethical action; and finally, that International Style modernism was no more than shallow aestheticism. It was the radicalism of its approach rather than the persuasiveness of its early monuments that enabled Brutalism to force a transformation of the accepted conventions of modernism.
    
    Despite its short life as an identifiable movement, Brutalism came to occupy a central position in the redefinition of the history of 20th-century architecture.`,
    img: '../src/img/lecorbusier.jpg',
    credit: `Extract from : Sennott R.S. Encyclopedia of twentieth century
    architecture, Vol.1 (A-F). Fitzroy Dearborn., 2004.

    Photo : The Palace of Assembly in Chandigarh, India - Le Corbusier - 1962`,
  },
  {
    title: 'Key x Artists',
    content: 'Some key artists of architectural brutalism',
    cards: [
      {
        img: architecture,
        alt: 'Le Corbusier',
        name: 'Le Corbusier',
        description:
          'Charles-Édouard Jeanneret (6 October 1887 – 27 August 1965), known as Le Corbusier was a Swiss-French architect, designer, painter, urban planner and writer, who was one of the pioneers of what is now regarded as modern architecture',
        link: 'https://en.wikipedia.org/wiki/Le_Corbusier',
      },
      {
        img: '../src/img/breuer-marcel.jpg',
        alt: 'Marcel Breuer',
        name: 'Marcel Breuer',
        description: `Marcel Lajos Breuer (21 May 1902 – 1 July 1981) was a Hungarian-German modernist architect and furniture designer. He moved to the United States in 1937 and became a naturalized American citizen in 1944.
        At the Bauhaus he designed the Wassily Chair and the Cesca Chair, which The New York Times have called some of the most important chairs of the 20th century`,
        link: 'https://en.wikipedia.org/wiki/Marcel_Breuer',
      },
      {
        img: '../src/img/pei.jpg',
        alt: 'Ieoh Ming Pei',
        name: 'Ieoh Ming Pei',
        description: `Ieoh Ming Pei (April 26, 1917 – May 16, 2019) was an American architect.
        Born and raised in Shanghai in a Chinese family, Pei drew inspiration at an early age from the garden villas at Suzhou.
        In 1935, he moved to the United States and enrolled in the University of Pennsylvania's architecture school, but quickly transferred to the Massachusetts Institute of Technology.`,
        link: 'https://en.wikipedia.org/wiki/I._M._Pei',
      },
    ],
  },
  {
    title: 'Brutalism x Web',
    content: `A website's materials aren't HTML tags, CSS, or JavaScript code. Rather, they are its content and the context in which it's consumed. A website is for a visitor, using a browser, running on a computer to read, watch, listen, or perhaps to interact. A website that embraces Brutalist Web Design is raw in its focus on content, and prioritization of the website visitor.

    Brutalist Web Design is honest about what a website is and what it isn't. A website is not a magazine, though it might have magazine-like articles. A website is not an application, although you might use it to purchase products or interact with other people. A website is not a database, although it might be driven by one.
    
    A website is about giving visitors content to enjoy and ways to interact with you.

    The design guidelines outlined above—and detailed below—all are in the service of making websites more of what they are and less of what they aren't. These aren't restrictive rules to produce boring, minimalist websites. Rather these are a set of priorities that put the visitor to your site—the entire reason your website exists—front and center in all things. `,
    img: '../src/img/raw.jpg',
    links: [
      {
        link: 'https://brutalistwebsites.com/',
        creditLink: 'brutalistwebsites.com',
      },
      {
        link: 'https://www.awwwards.com/awwwards/collections/brutalism/',
        creditLink: `awwwards' collections`,
      },
      {
        link: 'https://webflow.com/made-in-webflow/brutalism',
        creditLink: 'webflow',
      },
    ],
  },
];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App articles={articles} />
);
