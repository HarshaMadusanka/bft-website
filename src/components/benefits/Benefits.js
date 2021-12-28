import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BenefitsImg_1 from '../../assets/images/img-4.jpg';
import './Benefits.css'

export const Benefits = () => {
    const benefits = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        var t2 = new gsap.timeline();
        var t3 = new gsap.timeline();

        var anim_2 = t2.from("#b_c_1 .benefits__container",{
            x:-500,
            opacity:0,
            ease:'Power1.out',
            yoyo:true,
        })

        t2.from("#b_c_1 .benefits__container h2",{
            x:500,
            opacity:0,
            ease:'Power1.out',
            yoyo:true,
        })

        t2.from("#b_c_1 .benefits__container li",{
            x:-500,
            opacity:0,
            ease:'Power1.out',
            stagger:0.1,
            yoyo:true,
        })

         var anim_3 = t3.from("#b_c_2 .benefits__container",{
            x:-500,
            opacity:0,
            ease:'Power1.out',
            yoyo:true,
        })

        t3.from("#b_c_2 .benefits__container h2",{
            x:500,
            opacity:0,
            ease:'Power1.out',
            yoyo:true,
        })

        t3.from("#b_c_2 .benefits__container li",{
            x:-500,
            opacity:0,
            ease:'Power1.out',
            stagger:0.1,
            yoyo:true,
        })

        ScrollTrigger.create({
            trigger:"#b_c_1 .benefits__container",
            animation:anim_2,
            start:'top 200px',
            // end:'bottom 300px',
            pin:true,
            
            scrub:true
        })

        ScrollTrigger.create({
            trigger:"#b_c_2 .benefits__container",
            animation:anim_3,
            start:'top 200px',
            end:'bottom 80px',
            // pin:'.benefits',
            pin:true,
            scrub:true
        })
    },[])


    return (
        <section className="benefits">
            <Container>
                <Row>
                    <Col md={12}  className="benefits__col" id="b_c_1">
                        <div className="col-md-12 benefits__container" ref={benefits}>
                            <Row>
                                <Col md={4}>
                                    <img src={BenefitsImg_1} alt="" />
                                </Col>
                                <Col md={8}>
                                    <h2>Laid Back Llamas Benefits</h2>
                                    <ul>
                                        <li>7,000 provably-rare Laid Back Llamas</li>
                                        <li>Each holder given ownership and commercial usage rights of their NFT(s)</li>
                                        <li>Endorsement opportunities with brands for LBL holders</li>
                                        <li>NFT Airdrops for random LBL holders</li>
                                        <li>Whitelist opportunities into popular projects from our partners</li>
                                        <li>Holders will receive royalties for their Llama casted in LBL TV series</li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col md={12}  className="benefits__col" id='b_c_2'>
                        <div className="col-md-12 benefits__container" ref={benefits}>
                            <Row>
                            <Col md={8}>
                                    <h2>Laid Back Llamas Benefits</h2>
                                    <ul>
                                        <li>7,000 provably-rare Laid Back Llamas</li>
                                        <li>Each holder given ownership and commercial usage rights of their NFT(s)</li>
                                        <li>Endorsement opportunities with brands for LBL holders</li>
                                        <li>NFT Airdrops for random LBL holders</li>
                                        <li>Whitelist opportunities into popular projects from our partners</li>
                                        <li>Holders will receive royalties for their Llama casted in LBL TV series</li>
                                    </ul>
                                </Col>
                                <Col md={4}>
                                    <img src={BenefitsImg_1} alt="" />
                                </Col>
                                
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
