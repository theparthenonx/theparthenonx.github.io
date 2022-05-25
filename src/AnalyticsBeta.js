import React from "react";
import Fade from 'react-reveal/Fade';

import BarChart from "./Components/BarChart";
import Nav from "./Components/nav";
import Footer from "./Components/Footer";


const AnalyticsBeta = () => {
    return(
        <>
        <section className="analytics-beta-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <Nav />
                        <div className="analytics-beta text-center">
                            <Fade bottom>
                                <h1 className="h1">ANALYTICS BETA</h1>
                            </Fade>
                            <Fade bottom>
                                <div className="form">
                                    <select>
                                        <option>Select</option>
                                        <option>Option1</option>
                                        <option>Option2</option>
                                        <option>Option3</option>
                                    </select>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className="chart">
                                    <BarChart />
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        <Footer />
        </>
    )
}

export default AnalyticsBeta;