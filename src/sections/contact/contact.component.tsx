import React from 'react';
import {ImageLeftComponent, SectionImageComponent} from "../../components";
import styled from "@emotion/styled";
import {Col, Container, Row} from "react-bootstrap";
import {ScrollingAnchor} from "../../utilities";

const ContentStyled = styled(Row)`
  height: 50vh;
  min-height: 30em;
`;

const SectionStyled = styled.section`
  color: var(--bs-white);
  background-color: var(--bs-primary);
`;

export const ContactSection = () => {
    return <ScrollingAnchor anchorId={'contact'}>
        <SectionStyled>
            <Container>
                <ContentStyled className={'justify-content-md-center align-items-center'}>
                    <Col
                        lg={6}
                        md={12}
                        className={'d-flex justify-content-center'}>
                        <SectionImageComponent src={'/contact.png'} alt={'Opened mail envelope with script symbol inside the flap'} />
                    </Col>
                    <Col
                        lg={6}
                        md={12}
                    >
                        <div className={'d-flex justify-content-center'}>
                            <div className={'d-inline-block'} >
                                <h2>Contact Us</h2>

                                <p>We would love to hear from you! <br/> <a className={'text-secondary'} href={'mailto:hellocfo@gmail.com'}>hellocfo@gmail.com</a></p>

                            </div>
                        </div>
                    </Col>
                </ContentStyled>
            </Container>
        </SectionStyled>
    </ScrollingAnchor>;
}
