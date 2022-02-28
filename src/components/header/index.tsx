import React from 'react';
import * as Styled from './style';



interface Componentprops {
    colorView: boolean,
    setColorView: React.Dispatch<React.SetStateAction<boolean>>
}

function Header(props: Componentprops) {

    const NavbarElement = (propsNav: {element: string, href: string, onClick?: () => void}) => (
        <Styled.NavbarElement onClick={propsNav.onClick} style={{color: props.colorView ? "#ffffff": "#25291C", transition:"all ease-in-out 2s"}} href={propsNav.href}>{propsNav.element}</Styled.NavbarElement>
    );

    return (
        <Styled.MainView>
            <Styled.TextHugo style={{color: props.colorView ? "#ffffff": "#25291C"}} onClick={() => props.setColorView(false)} href="#hello-view">{'<HUGO />'}</Styled.TextHugo>
            <Styled.NavbarElements>
                <NavbarElement onClick={() => props.setColorView(true)} href="#about-view" element="ABOUT" />
                <NavbarElement onClick={() => props.setColorView(false)} href="#contact-view" element="CONTACT" />
            </Styled.NavbarElements>
        </Styled.MainView>
    )
};

export default Header