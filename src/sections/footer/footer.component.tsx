import styled from "@emotion/styled";

const FooterIcon = styled.img`
    width: 2em;
    height: 2em;
`;

const ContainerStyled = styled.footer`
  background-color: #333333;
`;

export const FooterComponent = () => {
    return <ContainerStyled className={'py-2 d-flex justify-content-center'}>
        <div className={'d-inline-block'} >
            <a href={'https://www.facebook.com/codefororlando'} target={'_blank'}>
                <FooterIcon src={'/facebook.svg'} className={'px-2'} />
            </a>
            <a href={'https://twitter.com/codefororlando'} target={'_blank'}>
                <FooterIcon src={'/twitter.svg'} className={'px-2'} />
            </a>
            <a href={'https://www.meetup.com/Code-For-Orlando/'} target={'_blank'}>
                <FooterIcon src={'/meetup.svg'} className={'px-2'} />
            </a>
            <a href={'https://github.com/cforlando/'} target={'_blank'}>
                <FooterIcon src={'/github.svg'} className={'px-2'} />
            </a>
            <a href={'https://www.eventbrite.com/o/code-for-orlando-33511214869'} target={'_blank'}>
                <FooterIcon src={'/eventbrite.svg'} className={'px-2'} />
            </a>
        </div>
    </ContainerStyled>
}
