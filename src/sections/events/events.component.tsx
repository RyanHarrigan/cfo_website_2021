import React from 'react';
import {ImageLeftComponent} from "../../components";
import styled from "@emotion/styled";
import {Button, Container} from "react-bootstrap";
import {ScrollingAnchor} from "../../utilities";

const ContentStyled = styled(ImageLeftComponent)`
  height: 50vh;
  min-height: 30em;
  position: relative;
  z-index: 1;
`;

const SectionStyled = styled.div`
  color: var(--bs-white);
  background-color: var(--bs-primary);
  position: relative;
  overflow: hidden;
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

const ButtonStyled = styled(Button)`
  min-width: 15em;
`;

export const EventsSection = () => {
    return <ScrollingAnchor anchorId={'events'}>
        <SectionStyled>
            <FloatingIconBg src={'/calendar.svg'} />
            <Container>
                <ContentStyled className={'hide-section-image-md align-items-center'} imageData={{src: '/calendar.svg', alt: 'Calendar symbol'}} >
                    <h2>Events</h2>

                    <p>
                        Meeting with local developers (or anyone interested in web development) is an essential part of
                        what makes us special. We cherish community, and enjoy fostering a unique culture of creatives,
                        developers and individuals interested in tech. Join us on Meetup for upcoming events and online
                        meetings.
                    </p>

                    <div className={"my-4 d-flex flex-wrap justify-content-center"}>
                        <Button className={'d-flex my-3 align-items-center mx-3'} variant="meetup" size="lg" href={'https://www.meetup.com/Code-For-Orlando/'} target={'_blank'}>
                            <ButtonImage src={'/meetup.svg'} width={40} height={40} /><span className={'px-2'}>Meet us!</span>
                        </Button>
                        <Button className={'d-flex my-3 align-items-center'} variant="get-involved" size="lg" href={'https://docs.google.com/forms/d/e/1FAIpQLSdb15ewHn06IMLzaWPrqqrEsfh7Xso2A5N4OIkHDpYJ7Z2ajA/viewform'} target={'_blank'}>
                            <ButtonImage src={'/logo_small_white.svg'} width={40} height={40} /><span className={'px-2'}>Get Involved</span>
                        </Button>
                    </div>
                </ContentStyled>
            </Container>
        </SectionStyled>
    </ScrollingAnchor>
}
