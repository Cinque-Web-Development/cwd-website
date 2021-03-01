import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

export default function about() {
    return (
        <Layout>
            <Helmet>
                <title>CWD - About Us</title>
                <meta name="description" content="About Us" />
            </Helmet>

            <BannerLanding title="About Us" />

            <div id="main" className="alt">
                <section id="one">
                    <div className="inner">
                        <p>Cinque Web Development (pronounced SINK-ā) was created by a group of software engineers looking to build applications 
                            and acquire new skills. What started as a desire to build small side projects together evolved into a small business serving 
                            other small businesses and individuals. At Cinque, our mission is to continuously learn new skills and technologies in 
                            order to create the best products for our clients.</p>
                        <header className="major">
                            <h1>Meet the Team</h1>
                        </header>
                        <div className="grid-wrapper">
                            <div className="col-4 about-col">
                                <header className="major name-wrapper">
                                    <h3 className="name">&lt; Samuel Trahan /&gt;</h3>
                                </header>
                                <h4>Co-Founder</h4>
                                <p>Front End Developer</p>
                                <hr/>
                            </div>
                            <div className="col-4 about-col">
                                <header className="major name-wrapper">
                                    <h3 className="name">&lt; Kathleen Stickel /&gt;</h3>
                                </header>
                                <h4>Co-Founder</h4>
                                <p>Front End Developer</p>
                                <hr/>
                            </div>
                            <div className="col-4 about-col">
                                <header className="major name-wrapper">
                                    <h3 className="name">&lt; Samuel Gemberling /&gt;</h3>
                                </header>
                                <h4>Co-Founder</h4>
                                <p>Back End Developer</p>
                                <hr/>
                            </div>
                            <div className="col-4 about-col">
                                <header className="major name-wrapper">
                                    <h3 className="name">&lt; Matthew Moquin /&gt;</h3>
                                </header>
                                <p>Back End Developer</p>
                                <hr/>
                            </div>
                            <div className="col-4 about-col">
                                <header className="major name-wrapper">
                                    <h3 className="name">&lt; Jen Rand /&gt;</h3>
                                </header>
                                <p>UX Designer & Researcher</p>
                                <hr/>
                            </div>
                            <div className="col-4 about-col">
                                <header className="major name-wrapper">
                                    <h3 className="name">&lt; Esteban Favetto /&gt;</h3>
                                </header>
                                <p>UX Designer & Researcher</p>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}
