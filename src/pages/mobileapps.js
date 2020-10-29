import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic12 from '../assets/images/pic12.jpg'

const MobileApps = (props) => (
    <Layout>
        <Helmet>
            <title>CWD - Mobile Apps</title>
            <meta name="description" content="Mobile Apps Services" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Mobile Applications</h1>
                    </header>
                    <span className="image main"><img src={pic12} alt="" /></span>
                    <p>If you would like to make your website into a mobile application or have an idea for an app, but are unsure of how to get it done. 
                        <br/>
                        Please contact us for further information on Mobile Applications.
                    </p>
                </div>
            </section>
        </div>

    </Layout>
)

export default MobileApps