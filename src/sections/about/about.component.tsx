import React, {useRef} from 'react';
import {ImageRightComponent} from "../../components";
import styled from "@emotion/styled";
import {Col, Container} from "react-bootstrap";
import {useScrollingAnchor} from "../../utilities";

const ContentStyled = styled(ImageRightComponent)`
  height: 70vh;
  min-height: 70vh;
`;

const FloatingIconBg = styled.img`
  position: absolute;
  max-width: 30em;
  max-height: 90%;
  right: -5vw;
  top: 20%;
  opacity: 0.2;
  color: var(--bs-white);
`;

const BgWatermark = styled.img`
  position: absolute;
  max-width: 85vw;
  width: 85vw;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
  opacity: 0.2;
`;

export const AboutSection = () => {
    const ref = useRef(null);
    useScrollingAnchor('about', ref);

    return <section ref={ref} className={'about-us position-relative'}>
        <FloatingIconBg alt={''} role={'presentation'} className={'d-none d-md-inline-block'} src={'/about_us.svg'} />
        <BgWatermark alt={''} role={'presentation'} className={'d-md-none'} src={'/about_us.svg'} />
        <Container>
            <ContentStyled className={'hide-section-image-md align-items-center'} imageData={{src: '/about_us.svg', alt: 'Sketch of techie-person writing some notes'}} >
                <h2>ABOUT US</h2>

                <p>
                    Code for Orlando, a local Code for America brigade, brings the community together to improve
                    Orlando through technology. We are a group of “civic hackers” from various disciplines who are
                    committed to volunteering our talents to make a difference. We unite to improve the way residents
                    and local government experience Orlando.
                </p>
            </ContentStyled>
        </Container>
    </section>
}
