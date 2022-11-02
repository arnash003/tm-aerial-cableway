import React from 'react';
import Layout from 'pages/Layout/Layout';


const SocialMedia = () => {
    return (
        <div>
            <section>
                <h1>I am the Social Media Page</h1>
            </section>
        </div>
    )
}
SocialMedia.getLayout = (page) => <Layout>{page}</Layout>

// Will render on the different opa

export default SocialMedia;