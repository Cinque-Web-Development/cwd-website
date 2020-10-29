import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Websites = (props) => (
    <Layout>
        <Helmet>
            <title>CWD - Websites</title>
            <meta name="description" content="Website building services" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Websites</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <h4> CWD React Website</h4>
                    <p>Building website in React allows for easier scalability and feature implemention, so your website can grow as your business grows.<br />
                    If you site needs to store user data then React sites are the right choice.</p>
                    
                    <h4>CWD Gatsby Website</h4>
                    <p>If you need to get a site up and running quickly for your business. Then Gatsby websites is a perfect option for your business.</p>
                    <h4>CWD Business Website</h4>
                    <p>Built with HTML and CSS, CWD websites will give you a less complex site for your business. Making it easier for you to customize your own site. </p>
                    <h4>CWD Personal Website</h4>
                    <p>If you are looking to build a personal website, any of the above options can work for you.  Please contact us to find which option is the best fit.</p>
                    <h2>If you are unsure or have questions about which website option is right for you, please contact us to schedule a meeting.</h2>
                </div>
            </section>
        </div>

    </Layout>
)

export default Websites