import "./App.css";
import image from "./assets/images/backimg.png";
image;
import "./fonts.css";
import image2 from "./assets/images/logotip.png";
import img1 from "./assets/images/img1.png";
import img2 from "./assets/images/img2.png";
import img3 from "./assets/images/img3.png";

function App() {
    return (
        <div className="app">
            <div className="header">
                <div className="container head-container">
                    <div className="head-top">
                        <div className="top-same">
                            <img src={image2} alt="" />
                            <div className="same-links">
                                <a href="#" className="link1">
                                    home
                                </a>
                                <a href="#" className="link2">
                                    about
                                </a>
                            </div>
                        </div>
                        <button className="btn-head">contact us</button>
                    </div>
                    <div className="head-midle">
                        <div className="head-left">
                            <div className="mid-desc">
                                Find the best <span>talent</span>
                            </div>
                        </div>
                        <div className="head-right">
                            <div className="head-thing"></div>
                            <div className="head-title">
                                Finding the right people and building high
                                performing teams can be hard. Most companies
                                aren’t tapping into the abundance of global
                                talent. We’re about to change that.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="midle">
                <div className="container mid-container">
                    <div className="mid-left">
                        <div className="mid-thing"></div>
                        <div className="mid-bigdesc">
                            Build & manage <br /> distributed teams <br />
                            like no one else.
                        </div>
                    </div>
                    <div className="mid-right">
                        <div className="skil1">
                            <img src={img1} alt="image" />
                            <div className="skil1-same">
                                <div className="skil1-desc">
                                    Experienced Individuals
                                </div>
                                <div className="skil1-title">
                                    Our network is made up of highly experienced
                                    professionals <br /> who are passionate
                                    about what they do.
                                </div>
                            </div>
                        </div>
                        <div className="skil2">
                            <img src={img2} alt="image" />
                            <div className="skil2-same">
                                <div className="skil2-desc">
                                    Easy to Implement
                                </div>
                                <div className="skil2-title">
                                    Our processes have been refined over years
                                    of implementation <br /> meaning our teams
                                    always deliver.
                                </div>
                            </div>
                        </div>
                        <div className="skil3">
                            <img src={img3} alt="image" />
                            <div className="skil3-same">
                                <div className="skil3-desc">
                                    Enhanced Productivity
                                </div>
                                <div className="skil3-title">
                                    Our customized platform with in-built
                                    analytics helps you <br /> manage your distributed
                                    teams.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;
