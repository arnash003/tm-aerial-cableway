import React from 'react';
import Layout from 'pages/Layout/Layout';


const NewsLetter = () => {
    return (
        <div>
            <section>
                <h1>I am the NewsLetter Page</h1>
            </section>
        </div>
    )
}
NewsLetter.getLayout = (page) => <Layout>{page}</Layout>

// Will render on the different opa

export default NewsLetter;