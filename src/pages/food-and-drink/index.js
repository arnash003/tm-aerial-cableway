import React from 'react';
import Layout from 'pages/Layout/Layout';


const FoodAndDrink = () => {
    return (
        <div>
            <section>
                <h1>I am the Food & Drink Page</h1>
            </section>
        </div>
    )
}
FoodAndDrink.getLayout = (page) => <Layout>{page}</Layout>

// Will render on the different opa

export default FoodAndDrink;