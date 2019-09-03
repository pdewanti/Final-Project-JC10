import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const Carousel = () => <UncontrolledCarousel items={items} />;

const items = [
  {
    src:'http://altfithealth.com/wp-content/uploads/2013/06/TenPilates-class-kneeling.jpg',
    altText: '',
    caption: 'Power Pilates',
    header: ' Power pilates'
  },
  {
    src:'https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_1440/https://www.pilatesinthegrove.com/wp-content/uploads/2016/10/PilatesInTheGrove-barre-to-go-class.jpg',
    altText: '',
    caption: 'Barre Body Signature',
    header: 'Barre Body Signature'
  },
  {
    src: 'https://cdn.gutensite.com/web001/site/7728/1445323/1445323-custom.jpg',
    altText: '',
    caption: 'TRX Pilates',
    header: 'TRX Pilates'
  }
];



export default Carousel;