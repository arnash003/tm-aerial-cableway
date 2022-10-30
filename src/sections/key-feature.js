/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Strategic Marketing and Communications',
    title: 'Strategic Marketing and Communications',
    text:
      'Design and Implementation of specialised integrated Marketing, Advertising, PR, and Communications strategies to support your business objectives and attract audiences',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Social Media Services, Influencer Outreach & Media Relations',
    title: 'Social Media Services, Influencer Outreach & Media Relations.',
    text:
      'Our team of journalists create online newsrooms for each of our clients that allow them to be a part of the news as it unfolds. This covers online, broadcast and print media and includes the integration of social media platforms.HWB’s digital specialists are highly skilled at the management of your online profiles, engaging with your community and working with our client services teams to manage influencer outreach and to ensure integration with other marketing and communications activities.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Media Planning and Buying: Digital Marketing and Traditional',
    title: 'Media Planning and Buying: Digital Marketing and Traditional',
    text:
      'The development of strategic media advertising plans to ensure maximum return on investment and brand reach with key target audiences.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Crisis Communication & Reputation Management',
    title: 'Crisis Communication & Reputation Management',
    text:
      'HWB is highly regarded as a Reputational Risk Management (RRM) expert and has successfully protected out clients’ reputations behind the scenes and in front of the camera. This service offering includes RRM audits, scenario planning and crisis preparedness.',
  },
];

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
