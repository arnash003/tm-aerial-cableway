/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Support from 'assets/feature/support.svg';
import Subscription from 'assets/feature/subscription.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Track',
    title: 'Fast Track',
    text:
      'Skip The Queue',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Media & Press',
    title: 'Responsible Tourism',
    text:
      'The Cableway focuses on the three pillars of responsible tourism – environmental, social and economic responsibility – to maximise benefits and minimise costs.',
  },
  {
    id: 3,
    imgSrc: Support,
    altText: 'Work With Us',
    title: 'Careers Portal',
    text:
      'Every year, we offer short-term job opportunities in several departments to work during the summer months, our busiest period.',
  },
  {
    id: 4,
    imgSrc: Subscription,
    altText: 'Sign Up To Our Newsletter',
    title: 'Newsletter',
    text:
      'Our purpose is to share our passion for Table Mountain by giving everyone an authentic experience of an iconic natural wonder.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }} >
      <Container>
        <SectionHeader
          slogan=""
          title=""
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>

    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
