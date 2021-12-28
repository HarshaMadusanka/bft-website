import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/all';
import AboutImg from '../../assets/images/img-2.jpg';
import AboutImg1 from '../../assets/images/img-1.jpg';

export const About = () => {

       const aboutDetails = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        var t1 = new gsap.timeline();

        var anim=  t1.from(".about__details",{
            xPercent:200,
            opacity:0,
            ease:'Power1.out',
            ease:'none',
            yoyo:true
        })

        t1.from(".about__details__title",{
            x:-300,
            opacity:0,
            ease:'Power1.out',
            yoyo:true
        })

        t1.from('.about__details__description',{
            x:300,
            opacity:0,
            ease:'Power1.out',
            yoyo:true
        })
        
        t1.from(".about__details__2",{
            xPercent:200,
            opacity:0,
            ease:'Power1.out',
            ease:'none',
            yoyo:true
        });

        t1.to(".about__details",{
            xPercent:-200,
            opacity:0,
            ease:'Power1.out',
            ease:'none',
            yoyo:true,
        })

        t1.from(".about__details__title__2",{
            x:300,
            opacity:0,
            ease:'Power1.out',
            yoyo:true
        })

        t1.from('.about__details__description__2',{
            x:-300,
            opacity:0,
            ease:'Power1.out',
            yoyo:true
        })

    

        ScrollTrigger.create({
            trigger:".about__details",
            animation:anim,
            start:'top 200px',
            // end:'bottom 80px',
            pin:'.about',
            scrub:true
        })
    },[])

    return (
        <section className="about">
            <div className="overlay"></div>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="about__details" ref={aboutDetails}>
                            
                            <div className="about__details__container">
                            <h1 className="about__details__title">LAID BACK Llamas</h1>
                            <p className="about__details__description">Deep in the digital mountains of the Metaverse lies a herd of 7,000 exceptional llamas. They represent confidence, tranquility, and different personalities that boast style with every stride. These fresh-looking llamas have been exploring the rolling hills of the digital landscape in search of good vibes and good vibes only. They got the swag, the funk, the jazz, with each llama more laid back than the next. This exquisite herd only breeds the finest of llamas with the fluffiest fur and the sickest</p>
                            </div>

                            <img src={AboutImg} alt="" />
                        </div>
                        <div className="about__details__2" ref={aboutDetails}>
                        <img src={AboutImg1} alt="" />
                            
                            <div className="about__details__container">
                            <h1 className="about__details__title__2">LAID BACK Llamas</h1>
                            <p className="about__details__description__2">Deep in the digital mountains of the Metaverse lies a herd of 7,000 exceptional llamas. They represent confidence, tranquility, and different personalities that boast style with every stride. These fresh-looking llamas have been exploring the rolling hills of the digital landscape in search of good vibes and good vibes only. They got the swag, the funk, the jazz, with each llama more laid back than the next. This exquisite herd only breeds the finest of llamas with the fluffiest fur and the sickest</p>
                            </div>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="overlay overlay-2"></div>
        </section>
    )
}
