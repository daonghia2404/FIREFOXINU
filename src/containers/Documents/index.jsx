import React, { useEffect } from 'react';
import Parallax from 'parallax-js';

import BgDocuments from '@/assets/images/bg-documents.png';
import Carousels from '@/components/Carousels';

import { dataDocuments } from './Documents.data';

import './Documents.scss';

const Documents = () => {
  const configBackground = () => {
    const scence = document.querySelectorAll('.scence');

    scence.forEach((item) => {
      const parallax = new Parallax(item, {
        relativeInput: true,
      });
    });
  };

  const handleClickDocumentItem = (data) => {
    if (data.link) window.open(data.link, '_target');
  };

  useEffect(() => {
    configBackground();
  }, []);

  return (
    <section className="Documents section" id="document">
      <div className="Documents-background scence">
        <div className="Documents-background-image" data-depth="0.2">
          <img src={BgDocuments} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="Documents-wrapper">
          <div className="Documents-title">Documents</div>
          <div className="Documents-description">Where stores all of documents about our business. Read more here!</div>

          <div className="Documents-carousel">
            <Carousels
              dots={false}
              arrows={false}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay
              responsive={[
                {
                  breakpoint: 575,
                  settings: {
                    slidesToShow: 1,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                  },
                },
              ]}
            >
              {[...dataDocuments, ...dataDocuments].map((item, index) => (
                <div key={index} className="Documents-carousel-item" onClick={() => handleClickDocumentItem(item)}>
                  <div className="Documents-carousel-item-card">
                    <div className="Documents-carousel-item-card-image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="Documents-carousel-item-card-title">{item.title}</div>
                  </div>
                </div>
              ))}
            </Carousels>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;
