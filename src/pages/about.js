import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import trahan from '../assets/images/team/trahan.png'
import stickel from '../assets/images/team/stickel.png'
import gemberling from '../assets/images/team/gemberling.png'
import matt from '../assets/images/team/matt.png'
import jen from '../assets/images/team/jen.png'
import esteban from '../assets/images/team/esteban.png'

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
                                <img src={trahan} className="image fit" alt="Samuel Trahan, Co-Founder, Front End Developer"/>
                            </div>
                            <div className="col-4 about-col">
                                <img src={stickel} className="image fit" alt="Kathleen Stickel, Co-Founder, Front End Developer"/>
                            </div>
                            <div className="col-4 about-col">
                                <img src={gemberling} className="image fit" alt="Samuel Gemberling, Co-Founder, Back End Developer"/>
                            </div>
                            <div className="col-4 about-col">
                                <img src={matt} className="image fit" alt="Matthew Moquin, Back End Developer"/>
                            </div>
                            <div className="col-4 about-col">
                                <img src={jen} className="image fit" alt="Jen Rand, UX Designer and Researcher"/>
                            </div>
                            <div className="col-4 about-col">
                                <img src={esteban} className="image fit" alt="Esteban Favetto, UX Designer and Researcher"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}
