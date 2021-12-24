import React from 'react'
import Topcase from './Topcase'
import "./Aboutus.css"
function Aboutus() {
    return (
        <>
            <Topcase heading="About Us" content="Here you will get to know what this website is for" />
            {/* <table>
                    <tr>
                        <th>
                            <div id="service">
                                <div className="box">
                                    <table>
                                        <tr>
                                            <th>
                                                <p className="center">
                                                    <a href="">Nimit</a>
                                                </p>
                                                <br />
                                                <p>Founder</p>
                                                <p>Contact him: -</p>
                                                <p>nimitj.ec.19@nitj.ac.in</p>

                                            </th>
                                        </tr>
                                    </table>
                                </div>

                                <div className="box">
                                    <table>
                                        <tr>
                                            <th>
                                                <p className="center">
                                                    <a href="">
                                                        Sneha
                                                    </a>
                                                </p>
                                                <br />
                                                <p>Founder</p>
                                                <p>Contact her: -</p>
                                                <p>snehab.ec.19@nitj.ac.in</p>
                                            </th>
                                        </tr>
                                    </table>
                                </div>
                                <div className="box">
                                    <table>
                                        <tr>
                                            <th>
                                                <p className="center">
                                                    <a href=""
                                                        style={{
                                                            textDecoration: "none", color: "black",
                                                            fontWeight: "bold"
                                                        }}>
                                                        Gaurang
                                                    </a>
                                                </p>
                                                <br />
                                                <p>Founder</p>
                                                <p>Contact him: -</p>
                                                <p>gaurangg.ec.19@nitj.ac.in</p>
                                            </th>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </th>

                    </tr>
                </table> */}
            <div className='aboutUs'>
                <h1 className='aboutUs__heading'>What we do</h1>
                <p align="justify" className='aboutUs__content'>Student welfare portal is an initaitive to provide information available on official website easily along with other useful information which is often hard to find.Our main goal is that everybody in college will get the necessary information as soon as possible. We developed this website so anyone an share their knowledge and resources with everybody. This webiste contains different sections like Question papers where one can find past year question papers for respective subjects, fees and other form links that are available on official website, resources provided by library etc. By subscribing to our newsletter one can get updates on resources and other updates. One can also send us pdfs of different materials like lab manuals, books, question papers etc by using the form present on the site.You can contact us by the email addresses or phone numbers present on site. We are constantly working on the website to improve user experience and we expect and appretiate constructive critisizm. You can follow us on instagram and twitter.</p>
            </div>

        </>
    )
}


export default Aboutus



