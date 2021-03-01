import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import pic11 from '../assets/images/pic11.jpg'

const Services = () => (
    <Layout>
        <Helmet>
            <title>CWD - Services</title>
            <meta name="description" content="Services" />
        </Helmet>

        <BannerLanding title="Services" />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>About Cinque</h2>
                    </header>
                    <p>
                        Cinque Web Development consists of a team of experienced developers who have a wide range of knowledge, building websites and passion projects.
                        &nbsp;<Link to="/about">Read more about the team.</Link>
                    </p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Business Websites</h3>
                            </header>
                            <p>Our team can build you a polished and scalable website for your business, or help you implement a new feature on your existing site.</p>
                            <ul className="actions">
                                <li><Link to="/" className="button">See Examples</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Personal Websites</h3>
                            </header>
                            <p>Cinque's developers will work with you to design a website to suit your unique needs, whether you are showcasing your photography, publishing your blog, or reviewing your new favorite movie.</p>
                            <ul className="actions">
                                <li><Link to="/" className="button">See Live Demo</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Marketing Websites</h3>
                            </header>
                            <p>If you are preparing to launch a new product, our team can build you a customized landing page that will take your marketing to the next level.</p>
                            <ul className="actions">
                                <li><Link to="/" className="button">See Live Demo</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="#contact" className="image">
                        <img src={pic11} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Contact us if these options don't fit</h3>
                            </header>
                            <p>Ciqnue can build a tailor-made solution to meet your needs, even if you don't fit into the above categories. Reach out to us to discuss your idea, and learn how we can build you a customized web presence.</p>
                            <ul className="actions">
                                <li><a href="#contact" className="button">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Services