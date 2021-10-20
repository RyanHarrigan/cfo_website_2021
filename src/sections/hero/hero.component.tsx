import React from 'react';
import {ImageRightComponent} from "../../components";
import styled from "@emotion/styled";
import {Container} from "react-bootstrap";

const ContentStyled = styled(ImageRightComponent)`
  height: 70vh;
  min-height: 30em;
`;

const FloatingIconBg = styled.img`
  position: absolute;
  max-width: 80vw;
  height: 90%;
  right: -3vw;
  top: -5%;
  opacity: 0.2;
  color: var(--bs-white);
  z-index: -2;
`;

export const HeroSection = () => {
    return <section className={'position-relative'}>
        <FloatingIconBg src={'/logo_small_orange.svg'} />
        <Container>
            <ContentStyled className={'hero-section align-items-center'} imageData={{src: '/person_sketch.png', alt: 'Sketch of techie-person writing some notes'}} >
                <h1>Code for Orlando</h1>

                <p>
                    A brigade of <a href={'https://www.codeforamerica.org/'} target={'_blank'}>Code for America</a> based in Orlando, Florida - The City Beautiful. We are
                    civic techies looking for people any skill set interested to improve community and governmental
                    services.
                </p>
            </ContentStyled>
        </Container>
    </section>
}
