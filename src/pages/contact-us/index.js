import React from 'react';
import Layout from 'pages/Layout/Layout';


const ContactUs = () => {
    return (
        <div>
            <section>
                <h1>I am the Contact Us Page</h1>
            </section>
        </div>
    )
}
ContactUs.getLayout = (page) => <Layout>{page}</Layout>

// Will render on the different opa

export default ContactUs;