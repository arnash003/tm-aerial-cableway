import React from 'react';
import Layout from 'pages/Layout/Layout';


const TermsAndConditions = () => {
    return (
        <div>
            <section>
                <h1>I am the Terms and Conditions Page</h1>
            </section>
        </div>
    )
}
TermsAndConditions.getLayout = (page) => <Layout>{page}</Layout>

// Will render on the different opa

export default TermsAndConditions;