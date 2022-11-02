import React from 'react';
import Layout from 'pages/Layout/Layout';


const ThingsToDo = () => {
    return (
        <div>
            <section>
                <h1>I am the Things To Do Page</h1>
            </section>
        </div>
    )
}
ThingsToDo.getLayout = (page) => <Layout>{page}</Layout>

// Will render on the different opa

export default ThingsToDo;