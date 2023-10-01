import React, { useEffect, useState } from 'react';
import * as Styled from './style';

interface Props {
    colorView: boolean,
    setColorView: React.Dispatch<React.SetStateAction<boolean>>
}

function Header(props: Props) {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY < 460) {
              setScroll(false)
            } else if (window.scrollY > 460 && window.scrollY < 1420) {
              setScroll(true)
            }
            else { setScroll(false) }
          })
    }, [])

    const NavbarElement = (propsNav: {element: string, href: string, onClick?: () => void}) => (
        <Styled.NavbarElement onClick={propsNav.onClick} style={{color: (props.colorView || scroll) ? "#ffffff": "#25291C", transition:"color 2s"}} href={propsNav.href}>{propsNav.element}</Styled.NavbarElement>
    );

    return (
        <Styled.MainView>
            <Styled.TextHugo style={{color: (props.colorView || scroll) ? "#ffffff": "#25291C"}} onClick={() => props.setColorView(false)} href="#hello-view">{'<HUGO />'}</Styled.TextHugo>
            <Styled.NavbarElements>
                <NavbarElement onClick={() => props.setColorView(true)} href="#about-view" element="ABOUT" />
                <NavbarElement onClick={() => props.setColorView(false)} href="#contact-view" element="CONTACT" />
            </Styled.NavbarElements>
        </Styled.MainView>
    )
};

export default Header
