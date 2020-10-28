import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'


class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Gatsby Starter - Forty"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Trippin'</h3>
                                <p>Click to start planning trips</p>
                            </header>
                            <a target="_blank" href="https://trippin-cwd.herokuapp.com" className="link primary"></a>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Caddie</h3>
                                <p>Click to start searching for golf courses</p>
                            </header>
                            <a target="_blank" href="https://www.caddie-golf.com" className="link primary"></a>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Collect the Cosmos</h3>
                                <p>Click to explore the most beautiful images the universe has to offer.</p>
                            </header>
                            <a target="_blank" href="https://collect-the-cosmos.herokuapp.com/" className="link primary"></a>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>PokeFaves</h3>
                                <p>Click to collect pokemon and build your best teams.</p>
                            </header>
                            <a target="_blank" href="https://pokefaves.herokuapp.com/" className="link primary"></a>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Let's build a website</h2>
                            </header>
                            <p>Explore our different options of web applications to fit any of your website needs, from upgrading your current site to building an new application from scratch.
            
                            <br/> See how Cinque can build you a customized web presence. </p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex