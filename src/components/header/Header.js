import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Facebook, Instagram, Twitter, ViewList } from "@mui/icons-material";
import { ToggleButton } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import $ from 'jquery';
import Logo from '../../assets/images/laidbacklogo.png'

import "./Header.css";

export const Header = () => {


    const showHeaderHandler = () =>{
        $('.header').toggleClass('active');
        $('.span-1').toggleClass('animation_1');
        $('.span-2').toggleClass('animation_3');
        $('.span-3').toggleClass('animation_2');
    }

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <div className="header__toggleNav">
                <ul><li><img src={Logo} alt="" /></li></ul>
              
              <button className="header__toggler" onClick={showHeaderHandler}>
                <span class="span-1"></span>
                <span class="span-2"></span>
                <span class="span-3"></span>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="header">
        <Container>
          <Row>
            <Col>
              <nav>
                <li class="website__logo"><img src={Logo} alt="" /></li>
                <ul>
                  <li>Laid Back Llamas</li>
                  <li>Boss Llamas</li>
                  <li>Roadmap</li>
                  <li>Team</li>
                  <li>FAQ</li>
                  <li>More</li>
                </ul>
                <ul class="header__socialLinks">
                  <li>
                    <Facebook />
                  </li>
                  <li>
                    <Instagram />
                  </li>
                  <li>
                    <Twitter />
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
