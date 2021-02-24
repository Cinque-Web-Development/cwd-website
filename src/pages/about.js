import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import trahan from '../assets/images/team/trahan.png'
import kath from '../assets/images/team/kathleen.jpg'

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
                        <p>Cinque Web Development (pronounced SINK-ā) was created by a group of software engineers looking to build applications together and acquire new skills. What started as a desire to build passion projects in the side evolved into </p>
                        <header className="major">
                            <h1>Meet the Team</h1>
                        </header>
                        <div className="grid-wrapper">
                            <div className="col-4">
                                <header className="major">
                                    <h3 className="name">&lt; Samuel Trahan /&gt;</h3>
                                </header>
                                <img src={trahan} alt="Samuel Trahan" className="image about"/>
                                <h4>Co-Founder</h4>
                                <p>Front End Developer</p>
                                <hr/>
                            </div>
                            <div className="col-4">
                                <header className="major">
                                    <h3 className="name">&lt; Kathleen Stickel /&gt;</h3>
                                </header>
                                <img src={kath} alt="Kathleen Stickel" className="image about" />
                                <h4>Co-Founder</h4>
                                <p>Front End Developer</p>
                                <hr/>
                            </div>
                            <div className="col-4">
                                <header className="major">
                                    <h3 className="name">&lt; Samuel Gemberling /&gt;</h3>
                                </header>
                                <h4>Co-Founder</h4>
                                <p>Back End Developer</p>
                                <hr/>
                            </div>
                            <div className="col-3">
                                <header className="major">
                                    <h3 className="name">&lt; Matthew Moquin /&gt;</h3>
                                </header>
                                <p>Back End Developer</p>
                                <hr/>
                            </div>
                            <div className="col-3">
                                <header className="major">
                                    <h3 className="name">&lt; Jen Rand /&gt;</h3>
                                </header>
                                <p>UX Designer & Researcher</p>
                                <hr/>
                            </div>
                            <div className="col-3">
                                <header className="major">
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
