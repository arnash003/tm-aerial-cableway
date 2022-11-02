import React from 'react';
import Layout from 'pages/Layout/Layout';


const VisitorInfo = () => {
    return (
        <div>
            <section>
                <h1>I am the Visitor Information Page</h1>
            </section>
        </div>
    )
}
VisitorInfo.getLayout = (page) => <Layout>{page}</Layout>

// Will render on the different opa

export default VisitorInfo;