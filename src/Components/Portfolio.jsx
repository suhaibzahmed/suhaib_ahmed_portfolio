import React, { useState, useEffect } from 'react'
import styles from "../styles/Portfolio.module.css"
import AOS from 'aos';
import "aos/dist/aos.css";
import 'font-awesome/css/font-awesome.min.css';

AOS.init();

const Portfolio = () => {

    const [solidNav, setSolidNav] = useState(false)   //Navbar initially transparent
    const [navHome, setNavHome] = useState(true)   //Navbar Home Option
    const [navAbout, setNavAbout] = useState(false)   //Navbar About Option
    const [navTech, setNavTech] = useState(false)   //Navbar Tech Option
    const [navProject, setNavProject] = useState(false)   //Navbar About Option
    const [navContact, setNavContact] = useState(false)   //Navbar Tech Option

    // Transform Navbar into solid on scroll 
    useEffect (()=>{
        document.addEventListener("scroll", e => {
            let scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 100){
                setSolidNav(true)
            } else {
                setSolidNav(false)
            }
        })
    },[])

    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);

    // console.log(navHome)
    function handleHome() {
        setNavHome(true)
        setNavAbout(false)
        setNavTech(false)
        setNavProject(false)
        setNavContact(false)
    }

    function handleAbout() {
        setNavHome(false)
        setNavAbout(true)
        setNavTech(false)
        setNavProject(false)
        setNavContact(false)
    }

    function handleTech() {
        setNavHome(false)
        setNavAbout(false)
        setNavTech(true)
        setNavProject(false)
        setNavContact(false)
    }

    function handleProject() {
        setNavHome(false)
        setNavAbout(false)
        setNavTech(false)
        setNavProject(true)
        setNavContact(false)
    }

    function handleContact() {
        setNavHome(false)
        setNavAbout(false)
        setNavTech(false)
        setNavProject(false)
        setNavContact(true)
    }

    return (
        <div className={styles.container} id="container">

            {/* Navbar */}
            <div className={solidNav ? styles.solidNavbar : styles.transparentNavbar}>
                <div className={styles.navbar_name}>SUHAIB AHMED</div>
                <div className={styles.menu_options}>
                    <div onClick={handleHome} className={navHome ? styles.underlineOpt : styles.noUnderlineOpt}><a href="#home">Home</a></div>
                    <div onClick={handleAbout} className={navAbout ? styles.underlineOpt : styles.noUnderlineOpt}><a href="#about" >About</a></div>
                    <div onClick={handleTech} className={navTech ? styles.underlineOpt : styles.noUnderlineOpt}><a href="#tech">Tech Stack</a></div>
                    <div onClick={handleProject}  className={navProject ? styles.underlineOpt : styles.noUnderlineOpt}><a href="#projects">Projects</a></div>
                    <div onClick={handleContact}  className={navContact ? styles.underlineOpt : styles.noUnderlineOpt}><a href="#contact">Contact</a></div>
                </div>
            </div>

            {/* Home Section */}
            <section className={styles.home} id="home">
                <div className={styles.homeDetails} data-aos="fade-right">
                    <p className={styles.hello}>Hello.</p>
                    <p className={styles.iam}>I Am</p>
                    <p className={styles.myName}>Suhaib Ahmed</p>
                    <p className={styles.line1}>An Aspiring Full Stack Web Developer.</p>
                </div>
                <div className={styles.about_btn} data-aos="fade-right" data-aos-delay="3000"><a href="#about" >About me</a></div>
                <div className={styles.wave}></div>            
            </section>


            {/* About Section */}
            <section className={styles.about} id="about" style={{overflow: 'hidden'}}>
                <div data-aos="fade-right" className={styles.heading}>About Me</div>
                <div data-aos="fade-left" className={styles.heading_line}></div>
                
                <div data-aos="zoom-out" className={styles.about_card}>
                    <div className={styles.about_img} data-aos="fade-right" data-aos-delay="1000"><img src="https://i.postimg.cc/rp3Pb260/my-photo.jpg"/></div>
                    <div className={styles.about_desc} data-aos="fade-left" data-aos-delay="1000">
                        A passionate and self-motivated aspiring Full Stack Web Developer skilled in MERN stack.
                        Always eager to engage in new and exciting projects. Looking forward to making a mark in the programming world.
                    </div>
                    <div className={styles.social_links}>
                        <a href = "www.linkedin.com/in/suhaib-ahmed10"><i class="fa fa-linkedin" data-aos="fade-up" data-aos-delay="1000"></i></a>
                        <a href = "https://github.com/suhaibzahmed"><i class="fa fa-github" data-aos="fade-up" data-aos-delay="1200"></i></a>
                        <a href = "www.linkedin.com/in/suhaib-ahmed10"><i class="fa fa-twitter" data-aos="fade-up" data-aos-delay="1400"></i></a>
                    </div>

                    <div className={styles.resume} data-aos="fade-up" data-aos-delay="1000"> <a href="https://drive.google.com/file/d/1MP0XIFXV0Dl5dIt-CFK_3eS0chn7V98s/view?usp=sharing" target="_blank">Download Resume</a></div>
                </div>
            </section>


            {/* Tech Stack Section */}
            <section className={styles.tech} id="tech" style={{overflow: 'hidden'}}>
                <div data-aos="fade-right" className={styles.heading}>Tech Stack</div>
                <div data-aos="fade-left" className={styles.heading_line}></div>

                <div className={styles.tech_stack}>
                    <div><img src= "https://i.postimg.cc/VLmvF7TS/html.png"/><h3>HTML</h3></div>
                    <div><img src= "https://i.postimg.cc/XNwXdM2S/css.png"/><h3>CSS</h3></div>
                    <div><img src= "https://i.postimg.cc/Y9F0dTMF/js.png"/><h3>Javascript</h3></div>
                    <div><img src= "https://i.postimg.cc/5Ng0KBds/react.png"/><h3>React</h3></div>
                    <div><img src= "https://i.postimg.cc/Hn4xg5Js/redux.png"/><h3>Redux</h3></div>
                    <div><img src= "https://i.postimg.cc/6p1QtBQR/mongo.png"/><h3>MongoDB</h3></div>
                    <div><img src= "https://i.postimg.cc/52tthXfb/mysql.png"/><h3>MySQL</h3></div>
                    <div><img src= "https://i.postimg.cc/YSZjftKk/git.png"/><h3>GIT</h3></div>
                </div>
            </section>


            {/* Proficiencies Section */}
            <section className={styles.tech} id="tech" style={{overflow: 'hidden'}}>
                <div data-aos="fade-right" className={styles.heading}>Proficiencies</div>
                <div data-aos="fade-left" className={styles.heading_line}></div>

                <div className={styles.prof}>
                    <div>
                        <img src= "https://i.postimg.cc/sxwVdCQw/front.png"/>
                        <h3>Front-end</h3>
                        <p>HTML, CSS, Javascript, React, Redux</p>
                    </div>
                    <div>
                        <img src= "https://i.postimg.cc/VLkf9vpT/back.png"/>
                        <h3>Back-end</h3>
                        <p>Express, MongoDB, MySQL</p>
                    </div>
                    <div>
                        <img src= "https://i.postimg.cc/zDjDRKtK/ds.png"/>
                        <h3>Data Structures & Algorithm</h3>
                        <p>Arrays, Stacks, Queues, Recursion, Sorting Algorithms</p>
                    </div>
                </div>
            </section>

            
            {/* Projects Section */}
            <section className={styles.project} id="projects" style={{overflow: 'hidden'}}>
                <div data-aos="fade-right" className={styles.heading}>Projects</div>
                <div data-aos="fade-left" className={styles.heading_line}></div>

                <div className={styles.project_div}>
                    <div className={styles.project_card}>
                        <img src="https://i.postimg.cc/HsyQ1bwG/cnn.png" alt="Avatar" className={styles.project_img} />
                        <div className={styles.overlay}>
                            <div className={styles.text}>
                                <h4>CNN News Website Clone</h4>
                                <p>The clone of the official CNN News website with all the current news and headlines. Has links to each headlines which shows detailed news. It has got features like search news, toggle between languages and much more.</p>
                                <div className={styles.github_link}><a href="https://github.com/MaheshFSD/ethane">
                                    <i class="fa fa-github"></i>
                                    Github Link</a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.project_tech_div}>
                            <div><img src="https://i.postimg.cc/5Ng0KBds/react.png" /></div>
                            <div><img src="https://i.postimg.cc/Hn4xg5Js/redux.png" /></div>
                            <div><img src="https://i.postimg.cc/XNwXdM2S/css.png" /></div>
                        </div>
                    </div>
                    <div className={styles.project_card}>
                        <img src="https://i.postimg.cc/63bdt0bK/boat.png" alt="Avatar" className={styles.project_img} />
                        <div className={styles.overlay}>
                            <div className={styles.text}>
                                <h4>Boat Audio Website Clone</h4>
                                <p>The clone of the official Boat Audio website. Consists of all products in each category. Features like sort products based on price implemented. Also has functionalities like change quantity and color of product. User can also add items to cart.</p>
                                <div className={styles.github_link}><a href="https://github.com/hrshrayank/Boat-Clone">
                                    <i class="fa fa-github"></i>
                                    Github Link</a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.project_tech_div}>
                            <div><img src="https://i.postimg.cc/VLmvF7TS/html.png" /></div>
                            <div><img src="https://i.postimg.cc/XNwXdM2S/css.png" /></div>
                            <div><img src="https://i.postimg.cc/Y9F0dTMF/js.png" /></div>
                        </div>
                    </div>
                    <div className={styles.project_card}>
                        <img src="https://i.postimg.cc/bJwQ7MTL/clockify.png" alt="Avatar" className={styles.project_img} />
                        <div className={styles.overlay}>
                            <div className={styles.text}>
                                <h4>Clockify Website Clone</h4>
                                <p>The clone of the official Clockify website, a time management tool. Has features like timesheet, where user can add time spent on each task, and timetracker which tracks the time from when task started. Also depicts data in graphical form for better analysis. </p>
                                <div className={styles.github_link}><a href="https://github.com/therealdrtroll/clockify-clone">
                                    <i class="fa fa-github"></i>
                                    Github Link</a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.project_tech_div}>
                            <div><img src="https://i.postimg.cc/VLmvF7TS/html.png" /></div>
                            <div><img src="https://i.postimg.cc/XNwXdM2S/css.png" /></div>
                            <div><img src="https://i.postimg.cc/Y9F0dTMF/js.png" /></div>
                        </div>
                    </div>
                    <div className={styles.project_card}>
                        <img src="https://i.postimg.cc/pr9KTF3F/wrike.png" alt="Avatar" className={styles.project_img} />
                        <div className={styles.overlay}>
                            <div className={styles.text}>
                                <h4>Wrike Website Clone</h4>
                                <p>The clone of the official Wrike website, a business management tool. A static website with basic DOM operations like checking user inputs and cool hovering effects.</p>
                                <div className={styles.github_link}><a href="https://github.com/suhaibzahmed/unit-1-eval">
                                    <i class="fa fa-github"></i>
                                    Github Link</a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.project_tech_div}>
                            <div><img src="https://i.postimg.cc/VLmvF7TS/html.png" /></div>
                            <div><img src="https://i.postimg.cc/XNwXdM2S/css.png" /></div>
                            <div><img src="https://i.postimg.cc/Y9F0dTMF/js.png" /></div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Contact Section */}
            <section className={styles.contact} id="contact" style={{overflow: 'hidden'}}>
                <div data-aos="fade-right" className={styles.heading}>Contact</div>
                <div data-aos="fade-left" className={styles.heading_line}></div>

                <div className={styles.contact_div}>
                    <div className={styles.contact_details} data-aos="flip-left">
                        <div className={styles.contact_icon}><i class="fa fa-envelope"></i></div>
                        <div className={styles.contact_info}>
                            <h3>Email: </h3>
                            <p>suhaib.z.ahmed@gmail.com</p>
                        </div>
                    </div>

                    <div className={styles.contact_details} data-aos="flip-left">
                        <div className={styles.contact_icon}><i class="fa fa-phone"></i></div>
                        <div className={styles.contact_info}>
                            <h3>Phone: </h3>
                            <p>8553841152</p>
                        </div>
                    </div>

                    <div className={styles.contact_details} data-aos="flip-left">
                        <div className={styles.contact_icon}><i class="fa fa-map-marker"></i></div>
                        <div className={styles.contact_info}>
                            <h3>Location: </h3>
                            <p>Bangalore, India</p>
                        </div>
                    </div>

                    <div className={styles.contact_details} data-aos="flip-left">
                        <div className={styles.contact_icon}><i class="fa fa-linkedin"></i></div>
                        <div className={styles.contact_info} style={{marginTop: "18px"}}>
                            <h3><a href = "www.linkedin.com/in/suhaib-ahmed10">LinkedIn</a></h3>
                        </div>
                    </div>

                    <div className={styles.contact_details} data-aos="flip-left">
                        <div className={styles.contact_icon}><i class="fa fa-github"></i></div>
                        <div className={styles.contact_info} style={{marginTop: "18px"}}>
                            <h3><a href = "https://github.com/suhaibzahmed">Github</a></h3>
                        </div>
                    </div>
                    
                </div>
                
            </section>
        </div>
    )
}

export default Portfolio