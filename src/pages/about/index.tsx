import React, { useRef } from "react";
import { Footer, Layout, Seo, ContactForm, Contributor } from "../../components";
import "./about.page.scss";
import { contributors } from "../../content/contributors.content";

const AboutPage = () => {
    
    const contactSection = useRef<HTMLDivElement>(null);
    
    const scrollToContacts = () => {
        if (contactSection && contactSection.current) {
            contactSection.current.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    
    return (
        <Layout transparentHeader={false}>
            <Seo title="About"/>
            <div className="about-page">
                <div className="title-header">
                    <h1 className="text-center">About us</h1>
                </div>
                <div className="wrapper">
                    <section className="content">
                        <h2 className="text-center">Who are we?</h2>
                        <p className="text-center">
                            We are a group of friends who regularly meet to
                            hang out - usually at the same time and place. We
                            learned that for most of the time, sentence<br/>
                            <strong>»I am here, if you are free, join me.«</strong>
                            <br/>completely sufficed to arrange a meetup.
                        </p>
                        <p className="text-center">
                            Coming from more technical background, we started writing messages, containing only
                            the word »ping«. <a href="https://en.wikipedia.org/wiki/Ping_(networking_utility)"
                            target="_blank" rel="noreferrer noopener">Ping</a>, in computer networking, is a simple
                            protocol used
                            only to determine whether a computer is reachable via network or
                            not.
                            Because we were lazy, even writing the word »ping«
                            into favorite chat application was too much for us.
                            Therefore, an idea was born, to develop an app, that will handle
                            this type of communication for us.
                        </p>
                        
                        <div className="join-section">
                            <h2 className="text-center">Interested in what we do?</h2>
                            <p className="text-center">
                                If you are interested in what we do and would like to
                                contribute, don't hesitate to get in contact with us.
                            </p>
                            <div className="contact-button">
                                <button onClick={scrollToContacts}>Contact us</button>
                            </div>
                        </div>
                        
                        <div className="team-section">
                            <h2 className="text-center">Our team</h2>
                            <div className="contributors">
                                {contributors.map((contributor, index) => (
                                    <div key={index} className="contributor">
                                        <Contributor contributor={contributor}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="contact-section" ref={contactSection}>
                            <h2 className="text-center">Contact us</h2>
                            <ContactForm/>
                        </div>
                    </section>
                </div>
            
            </div>
            <Footer social/>
        </Layout>
    );
};

export default AboutPage;
