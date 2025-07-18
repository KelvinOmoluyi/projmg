import ArrowBtn from '../../assets/img/btn-arrow.png';
import { motion } from "framer-motion";

import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Main = () => {
    const pagesLinks = ["Features", "Integrations", "Reviews", "Contact"];

    const title = "Project Management has never been easier and compact."
    .split(" ")
    .map(word => word.split(""));

    const smallLetters = "Organize your projects, chat with your team, and get things done — all from one simple workspace.";


    return (
        <main className="main-section wrapper" id="Home">
        <header>
            <nav>
                <div className="nav-logo">
                    <motion.div 
                    initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
                    whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 1 }}
                    className="overflow-hidden-container-inner">       
                        <a href="#Home"><h3>PROJ.MG</h3></a>
                    </motion.div>
                </div>
                <div className="nav-sections-link">
                    <ul>
                        {pagesLinks.map((pagelink, index) => (
                            <li key={index}>
                                <a href={"#"+pagelink}>
                                    <motion.p
                                    className="upRevealElement-inline"
                                    initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
                                    whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.05*index }}
                                    viewport={{ once: true, amount: 1 }}
                                    >{pagelink}</motion.p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="cta-btn-div">
                    <Link to="/pricing">
                        <motion.div
                        initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
                        whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, amount: 1 }}
                        className="cta-btn-01">
                                <p>Start Today!</p>
                                <img src={ArrowBtn} alt="button arrow" />
                        </motion.div>
                    </Link>
                </div>
            </nav>
        </header>


        <div className="main-section-content">
            <div className="main-section-content-words">
                <div className="overflow-hidden-container-outer">
                    <motion.div 
                    initial={{ y: 50 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 1 }}
                    className="main-section-content-words-snippet">
                        <p>Best Project Management Software Of 2025</p>
                    </motion.div>
                </div>
                <div className="main-section-content-words-big-words h-text-gradient">
                    {title.map((word, wordIndex) => (
                        <h1 key={wordIndex} className="word-wrapper">
                            {word.map((letter, letterIndex) => (
                                <motion.span
                                key={letterIndex}
                                initial={{ filter: "blur(10px)", opacity: 0, y: 40 }}
                                whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.015 * (wordIndex * 13 + letterIndex) }}
                                viewport={{ once: true, amount: 1 }}
                                className="upRevealElement-inline"
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </h1>
                    ))}
                </div>

                <div className="main-section-content-words-small-words">
                    <motion.p
                    className="upRevealElement-block"
                    initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
                    whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                    onViewportEnter={() => console.log("In view")}
                    >
                        {smallLetters}
                    </motion.p>
                </div>

                <div className="overflow-hidden-container-outer">                      
                    <motion.div 
                    initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
                    whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.7 }}
                    viewport={{ once: true, amount: 1 }}
                    className="cta-btn-div"
                    >             
                        <Link to="/pricing">
                            <div className="cta-btn-02">
                                <p>Start Free Trail</p>
                                <img src={ArrowBtn} alt="button arrow" />
                            </div>
                        </Link>
                        <Link to="/pricing">
                            <div className="cta-btn-01">
                                <p>Request Free Demo</p>
                            </div>
                        </Link>
                    </motion.div>
                </div>
                <div className="main-section-content-words-card-note">
                    <motion.div 
                    initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
                    whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 2 }}
                    viewport={{ once: true, amount: 1 }}
                    className="overflow-hidden-container-inner">     
                        <p><span>No Credit Card Required</span> <span>•</span> <span>Cancel Everytime</span></p>
                    </motion.div>
                </div>
            </div>

            <motion.div   
            initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
            whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0 }}
            className="main-section-content-dashboard">

            </motion.div>
        </div>
    </main>
    );
}
 
export default Main;