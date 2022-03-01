import styled from 'styled-components';

export const MainView = styled.div`
    @media (max-width: 700px) {
        flex-direction: column;
        width: 100%;
        position: unset;
    }
    a {
        text-decoration: none;
        color: #25291C;
        transition: color ease-in-out 1s;
    }
    scroll-behavior: smooth;
    width: 70%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #25291C;
    position: fixed;
`

export const TextHugo = styled.a`
    @media (max-width: 700px) {
        font-size: 25px;
        margin-top: 20px;
    }
    height: 100%;
    /* background: blue; */
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: calc(30px);
    font-weight: bold;
`

export const NavbarElements = styled.div`
    height: 100%;
    /* background: blue; */
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const NavbarElement = styled.a`
    @media (max-width: 700px) {
        font-size: 15px;
    }
    width: 100px;
    height: 40%;
    /* background: yellow; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 25px 2% 0 2%;
    font-size: calc(20px);
    font-weight: bold;
    transition: color ease-in-out 1s;

    :after {
        transition: all ease-in-out .2s;
        background: none repeat scroll 0 0 #ffffff;
        content: "";
        display: block;
        height: 2px;
        width: 0%;
    }

    &:hover:after {
        background: none repeat scroll 0 0 #25291C;
        width: 100%;
    }
`