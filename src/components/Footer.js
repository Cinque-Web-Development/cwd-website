import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a target="_blank" href="https://twitter.com/cinquewebdev" className="icon alt fa-twitter" rel='noreferrer'><span className="label">Twitter</span></a></li>
                <li><a target="_blank" href="https://github.com/Cinque-Web-Development" className="icon alt fa-github" rel='noreferrer'><span className="label">GitHub</span></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/company/cinque-web-dev" className="icon alt fa-linkedin" rel='noreferrer'><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; Cinque Web Development</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer
