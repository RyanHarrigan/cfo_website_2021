import React, {useRef} from 'react';
import {ImageLeftComponent} from "../../components";
import styled from "@emotion/styled";
import {Button, Container} from "react-bootstrap";
import {useScrollingAnchor} from "../../utilities";

const ContentStyled = styled(ImageLeftComponent)`
  height: 50vh;
  min-height: 30em;
  position: relative;
  z-index: 1;
`;

const SectionStyled = styled.section`
  color: var(--bs-white);
  z-index: 1;
  position: relative;
  margin-bottom: 5em;
  
  &:before {
    content: '';
    position: absolute;
    z-index: 0;
    width: 180%;
    left: -40%;
    height: 120%;
    top: -10%;
    border-radius: 50% / 40%;
    background-color: var(--bs-primary);
    background: linear-gradient(90deg, rgb(245, 178, 49) 0%, rgb(245, 178, 49) 6%, rgb(241, 138, 33) 100%);
  }
`;

const FloatingLeaf = styled.img`
  position: absolute;
  z-index: -1;
  width: 30vw;
  max-width: 30em;
  height: auto;
  left: 3vw;
  top: -26%;
  opacity: 0.2;
`;

const ButtonImage = styled.img`
  margin-right: 0.25em;
  height: 100%;
  padding: 0.2em;
  display: inline-block;
`;

const FloatingIconBg = styled.img`
  position: absolute;
  max-width: 80vw;
  height: 90%;
  left: -15vw;
  top: -5%;
  opacity: 0.2;
  color: var(--bs-white);
`;

export const EventsSection = () => {
    const ref = useRef(null);
    useScrollingAnchor('events', ref);

    return <SectionStyled ref={ref}>
        <FloatingLeaf className={'d-lg-none'} src={'/leaf.svg'} />
        <FloatingIconBg src={'/calendar.svg'} />
        <Container>
            <ContentStyled className={'hide-section-image-md align-items-center'} imageData={{src: '/calendar.svg', alt: 'Calendar symbol'}} >
                <h2>Events</h2>

                <p>
                    Join us! We have groups that you can most likely join. The pandemic hasn't stopped us from
                    holding regular virtual meetings. We still host Eventbrite and Meetup events.
                </p>

                <div className={"my-4 d-flex flex-wrap justify-content-center"}>
                    <Button className={'d-flex my-3 align-items-center mx-3'} variant="meetup" size="lg" href={'https://www.meetup.com/Code-For-Orlando'} target={'_blank'}>
                        <ButtonImage src={'/meetup.svg'} width={40} height={40} /><span className={'px-2'}>Meetup</span>
                    </Button>
                    <Button className={'d-flex my-3 align-items-center mx-3'} variant="eventbrite" size="lg" href={'https://www.eventbrite.com/o/code-for-orlando-33511214869'} target={'_blank'}>
                        <ButtonImage src={'/eventbrite.svg'} width={40} height={40} /><span className={'px-2'}>Eventbrite</span>
                    </Button>
                    <Button className={'d-flex my-3 align-items-center mx-3'} variant="get-involved" size="lg" href={'https://docs.google.com/forms/d/e/1FAIpQLSdb15ewHn06IMLzaWPrqqrEsfh7Xso2A5N4OIkHDpYJ7Z2ajA/viewform'} target={'_blank'}>
                        <ButtonImage src={'/logo_small_white.svg'} width={40} height={40} /><span className={'px-2'}>Get Involved</span>
                    </Button>
                </div>
            </ContentStyled>
        </Container>
    </SectionStyled>
}
