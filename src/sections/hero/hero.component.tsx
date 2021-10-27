import React from 'react';
import {Container} from "react-bootstrap";
import {SectionStyled, FloatingIconBg, ContentStyled, AnchorStyled} from "./hero.styles";

export const HeroSection = () => {
    return <SectionStyled className={'hero position-relative'}>
        <FloatingIconBg alt={''} role={'presentation'} src={'/logo_small_orange.svg'} />
        <Container>
            <ContentStyled className={'content align-items-center'} isHero imageData={{src: '/person_sketch.png', alt: 'Sketch of techie-person writing some notes'}} >
                <h1>CODE FOR ORLANDO</h1>

                <p>
                    A brigade of <AnchorStyled rel={'noreferrer'} href={'https://www.codeforamerica.org/'} target={'_blank'}>Code for America</AnchorStyled>{' '}
                    based in <AnchorStyled rel={'noreferrer'} href={'https://www.orlando.gov'} target={'_blank'}>Orlando, Florida - The City
                    Beautiful</AnchorStyled>. We are civic techies looking for people of any skill set whose interested to improve
                    our community and governmental services.
                </p>
            </ContentStyled>
        </Container>
    </SectionStyled>
}
