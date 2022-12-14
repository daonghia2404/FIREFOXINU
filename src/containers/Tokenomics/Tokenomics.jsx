import React from 'react';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import ImageTokenomicsChart from '@/assets/images/image-tokenomics-chart.png';
import Particles from '@/components/Particles';
import { EIconColor } from '@/components/Icon';

import './Tokenomics.scss';

const Tokenomics = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <section className="Tokenomics" ref={ref} id="tokenomics">
      <div className="container">
        <div className={classNames('Tokenomics-bg', { active: inView })}>
          <Particles id="TokenomicsParticles" color={EIconColor.AZURE_RADIANCE} />
        </div>
        <div className="Tokenomics-wrapper">
          <div className="Tokenomics-header">
            <AnimationOnScroll animateIn="animate__slideInDown">
              <div className="Tokenomics-title bebas-neue-font">Tokenomics Distribution</div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__slideInDown">
              <div className="Tokenomics-description">The FFE Token is a Bep-20 token on Binance Smart Chain</div>
            </AnimationOnScroll>
          </div>

          <div className="Tokenomics-body">
            <div className="Tokenomics-table">
              <table>
                <thead>
                  <tr>
                    <th>Tokenomics distribution</th>
                    <th>Tournament Fund</th>
                    <th>Developing</th>
                    <th>Community</th>
                    <th>Add Liquidity</th>
                    <th>Marketing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Allocation</td>
                    <td>25%</td>
                    <td>10%</td>
                    <td>50%</td>
                    <td>5%</td>
                    <td>10%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <AnimationOnScroll animateIn="animate__rotateIn">
              <div className="Tokenomics-chart">
                <img src={ImageTokenomicsChart} alt="" />
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
