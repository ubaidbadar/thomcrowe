import React from 'react'

export default function Footer() {
    return (
        <>
            <footer>
                {/* <!-- FOOTER --> */}
                <div className="cavani_tm_footer">
                    <div className="copyright">
                        <p>Copyright &copy; 2022</p>
                    </div>
                    <div className="social">
                        <ul>
                            <li><a href="#"><img className="svg" src="img/svg/social/mastodon.svg" alt="https://mastodon.online/@thomcrowe" /></a></li>
                            <li><a href="#"><img className="svg" src="img/svg/social/instagram.svg" alt="https://instagram.com/thomcrowe" /></a></li>
                            <li><a href="#"><img className="svg" src="img/svg/social/twitter.svg" alt="https://twitter.com/thomcrowe" /></a></li> 
                        </ul>
                    </div>
                </div>
                {/* <!-- /FOOTER --> */}
            </footer>
        </>
    )
}
