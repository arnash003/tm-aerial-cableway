import React from 'react';
import Layout from 'pages/Layout/Layout';


const AboutUs = () => {
    return (
        <div>
            <section>
                <h1>I am the About Us Page</h1>
            </section>
        </div>
    )
}
AboutUs.getLayout = (page) => <Layout>{page}</Layout>

// Will render on the different opa

export default AboutUs;