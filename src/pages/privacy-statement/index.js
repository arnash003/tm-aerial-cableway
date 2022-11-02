import React from 'react';
import Layout from 'pages/Layout/Layout';


const PrivacyStatement = () => {
    return (
        <div>
            <section>
                <h1>I am the Privacy Statement Page</h1>
            </section>
        </div>
    )
}
PrivacyStatement.getLayout = (page) => <Layout>{page}</Layout>

// Will render on the different opa

export default PrivacyStatement;