import styled from 'styled-components';

export const MainView = styled.div`

    width: 100%;
    scroll-behavior: smooth;
    /* height: 100vh; */
    background: #F2F5EC;
    color: #25291C;
`;

export const CenterView = styled.div`
    width: 100%;
    margin: 0 auto;
`;


/**
 * HELLO VIEW
 * 
 * Here are the styling of the HELLO VIEW
 */
export const HelloView = styled.div`
    width: 100%;
    height: calc(100vh);
`;

export const HelloViewCenter = styled.div`
    width: 70%;
    margin: 0 auto;
    height: 100%;
    /* background: green; */
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HelloAbilities = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    margin-left: 8%;
`;

export const HelloAbilitiesText = styled.div`
    @keyframes transitate {
        from { 
            opacity: 0;
            font-weight: bold;
        }
        to {
            opacity: 1;
            font-weight: bold;
        }
    }
    opacity: 1;
    font-size: 20px;
    font-weight: bold;
    animation: 2.5s transitate;
`;

export const HelloInfo = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background: red; */
    font-size: 20px;
    font-weight: bold;
    margin-top: auto;
`;

export const HelloInfoTitle = styled.div`
    @keyframes transitate {
        from { 
            opacity: 0;
            font-weight: unset;
        }
        to {
            opacity: 1;
            font-weight: bold;
        }
    }
    opacity: 1;
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
    color: #8C8C80;
    animation: 2.5s transitate;
`;

export const HelloInfoText = styled.div`
    @keyframes transitate {
        from { 
            opacity: 0;
        }
        to {
            opacity: 1;
            font-weight: bold;
        }
    }
    text-align: center;
    font-size: 50px;
    opacity: 1;
    font-weight: bold;
    animation: 2.5s transitate;
`;

export const HelloInfoFooter = styled.div`
    @keyframes transitate {
        from { 
            opacity: 0;
            font-weight: unset;
        }
        to {
            opacity: 1;
            font-weight: bold;
        }
    }
    color: #8C8C80;
    text-align: center;
    font-size: 20px;
    opacity: 1;
    font-weight: bold;
    margin-top: 20px;
    animation: 2.5s transitate;
`;

/**
 * ABOUT VIEW
 * 
 * Here are the styling of the HELLO VIEW
 */
export const AboutView = styled.div`
    width: 100%;
    margin: 0 auto;
    height: 100vh;
    background: #25291C;
    color: #fff;
`;

export const AboutViewCenter = styled.div`
    width: 70%;
    margin: 0 auto;
    height: 100%;
    /* min-height: 1080px; */
    display: flex;
    align-items: center;
    /* flex-wrap: wrap; */
`;

export const AboutAbilities = styled.div`
    width: 50%;
    min-width: 240px;
    height: 40%;
    display: flex;
    align-items: left;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 8%;
`;

export const AboutAbilitiesTitle = styled.div`
    @keyframes transitate {
        from { 
            opacity: 0;
            font-weight: unset;
        }
        to {
            opacity: 1;
            font-weight: bold;
        }
    }
    margin-bottom: 30px;
    opacity: 1;
    font-size: 20px;
    text-align: left;
    font-weight: bold;
    margin-bottom: auto;
    color: #fff;
    animation: 2.5s transitate;
`;

export const AboutAbilitiesSkills = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const AboutInfo = styled.div`
    width: 50%;
    min-width: 240px;
    height: 40%;
    display: flex;
    align-items: left;
    justify-content: space-between;
    flex-direction: column;
    /* background: red; */
    font-size: 20px;
    font-weight: bold;
`;

export const AboutInfoTitle = styled.div`
    @keyframes transitate {
        from { 
            opacity: 0;
            font-weight: unset;
        }
        to {
            opacity: 1;
            font-weight: bold;
        }
    }
    font-weight: bold;
    margin-bottom: 30px;
    opacity: 1;
    font-size: 20px;
    text-align: left;
    color: #fff;
    animation: 2.5s transitate;
`;

export const AboutInfoText = styled.div`
    @keyframes transitate {
        from { 
            opacity: 0;
        }
        to {
            opacity: 1;
            font-weight: bold;
        }
    }
    color: #ff;
    text-align: left;
    font-size: 43px;
    opacity: 1;
    font-weight: bold;
    animation: 2.5s transitate;
`;

export const AboutInfoFooter = styled.div`
    @keyframes transitate {
        from { 
            opacity: 0;
            font-weight: unset;
        }
        to {
            opacity: 1;
            font-weight: bold;
        }
    }
    color: #ff;
    text-align: left;
    font-size: 20px;
    opacity: 1;
    font-weight: bold;
    margin-top: 20px;
    animation: 2.5s transitate;
`;

/**
 * ABOUT VIEW
 * 
 * Here are the styling of the HELLO VIEW
 */
 export const ContactView = styled.div`
    width: 100%;
    margin: 0 auto;
    height: 100vh;
    color: #25291C;
    /* display: flex; */
`;

export const ContactViewCenter = styled.div`
    width: 70%;
    margin: 0 auto;
    height: 90%;
    /* min-height: 1080px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* flex-wrap: wrap; */
`;

export const ContactViewTitle = styled.div`
    font-size: 50px;
    text-align: center;
`;

export const ContactViewFooter = styled.div`
    width: 100%;
    height: 100px;
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: #25291C;
`;

export const BoxTransparent = styled.div`
    width:100%;
    height: 10%;
`;