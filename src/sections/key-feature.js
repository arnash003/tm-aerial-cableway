/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';
import Link from "next/link";



export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container sx={styles.grid}>

        <SectionHeader
          slogan="About Us"
          title="Since October 4, 1929, we have been providing visitors with a world-class cableway experience when accessing Table Mountain. As the Table Mountain Aerial Cableway Company, we operate in a National Park and World Heritage Site. The mountain’s magnetism has a way of drawing people in, compelling them to reach the summit either by hike or by cableway."
        />

        <SectionHeader
          slogan="Getting Here"
          title="Public Transport - The MyCiTi Bus, City Sightseeing's Hop-On, Hop-Off Bus, Meter Taxi's, and Uber or Bolt. Find out more here..."
        />
        <SectionHeader
          slogan="Fast Track"
          title="Skip the Queue with Fast Track Ticket"
        />
        <SectionHeader
          slogan="Food & Drink"
          title="Relax and enjoy a meal or refreshments on top of Table Mountain. From snacks and ice creams in the sunshine to special meal dinners with loved ones, you’re sure to find the perfect dining experience to complement your visit. There are a few locations on Table Mountain that offer food and beverage."
        />
        <SectionHeader
          slogan="Travel & Health Safety"
          title="As a leading attraction in Africa and the Indian Ocean, we believe that it is our duty to act responsibly as a tourism operator and take the necessary precautions to mitigate the spread of Covid-19. Find out more..."
        />
        {/* <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid> */}
      </Container>

    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
