import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import styled from "@emotion/styled";

const PartnersContainerStyled = styled(Container)`
    min-height: 40vh;
  
    h2 {
      margin-bottom: 3em;
    }
`;

const PartnerImageStyled = styled.img`
    height: 100%;
    max-height: 20vh;
`;

const PartnerImageContainer = styled(Col)`
  margin-top: 5vh;
  margin-bottom: 5vh;
`;

export const PartnersSection = () => {
    return <section id={'partners'} className={'about-us d-flex align-items-center position-relative'}>
        <PartnersContainerStyled>
            <h2>Partners</h2>
            <Row>
                <PartnerImageContainer
                    className={'px-5'}
                    md={{
                        span: 6,
                    }}
                    xs={{
                        span: 12,
                    }}
                >
                    <PartnerImageStyled
                        src={'/code_for_america.svg'}
                        alt={'Code for America'}
                    />
                </PartnerImageContainer>
                <PartnerImageContainer
                    className={'px-5'}
                    md={{
                        span: 6,
                    }}
                    xs={{
                        span: 12,
                    }}
                >
                    <PartnerImageStyled
                        src={'/code_for_america.svg'}
                        alt={'Code for America'}
                    />
                </PartnerImageContainer>
            </Row>
        </PartnersContainerStyled>
    </section>
}
