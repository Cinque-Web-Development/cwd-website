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
                        <header className="major">
                            <h1>Meet the Team</h1>
                        </header>
                        <p>Praesent ac adipiscing ullamcorper semper ut amet ac risus. Lorem sapien ut odio odio nunc. Ac adipiscing nibh porttitor erat risus justo adipiscing adipiscing amet placerat accumsan. Vis. Faucibus odio magna tempus adipiscing a non. In mi primis arcu ut non accumsan vivamus ac blandit adipiscing adipiscing arcu metus praesent turpis eu ac lacinia nunc ac commodo gravida adipiscing eget accumsan ac nunc adipiscing adipiscing.</p>
                        <div className="grid-wrapper">
                            <div className="col-6">
                                <header className="major">
                                    <h3 className="name">&lt; Samuel Trahan /&gt;</h3>
                                </header>
                                <p>Samuel is a full stack software engineer with a penchant for front end development and one of Cinque's founders. I could probably write his bio for him, but I'll let him do it becase he likes to talk about himself.</p>
                            </div>
                            <div className="col-6">
                                <header className="major">
                                    <h3 className="name">&lt; Kathleen Stickel /&gt;</h3>
                                </header>
                                <p>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor. Ante commodo blandit adipiscing integer semper orci eget. Faucibus commodo adipiscing mi eu nullam accumsan morbi arcu ornare odio mi adipiscing nascetur lacus ac interdum morbi accumsan vis mi accumsan ac praesent.</p>
                            </div>
                            <div className="col-4">
                                <header className="major">
                                    <h3 className="name">&lt; Samuel Gemberling /&gt;</h3>
                                </header>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            </div>
                            <div className="col-4">
                                <header className="major">
                                    <h3 className="name">&lt; Matthew Moquin /&gt;</h3>
                                </header>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            </div>
                            <div className="col-4">
                                <header className="major">
                                    <h3 className="name">&lt; Jen? Esteban? /&gt;</h3>
                                </header>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}
