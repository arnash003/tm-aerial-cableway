import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
// import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
// import CoreFeature from '../sections/core-feature';
// import WorkFlow from '../sections/workflow';
// import Package from '../sections/package';
// import TeamSection from '../sections/team-section';
// import TestimonialCard from '../sections/testimonial';
import ThingsToDo from 'sections/thingstodo';
import AwardsAndAccolades from 'sections/awardsandaccolades';
import Pricing from 'components/pricing';



export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Table Mountain Aerial Cableway" />
        <Banner />
        <KeyFeature />
        <Pricing />
        {/* <ServiceSection /> */}
        <Feature />
        {/* <CoreFeature /> */}
        {/* <WorkFlow /> */}
        {/* <Package /> */}
        {/* <TeamSection /> */}
        <ThingsToDo />
        <AwardsAndAccolades />
      </Layout>
    </ThemeProvider>
  );
}
