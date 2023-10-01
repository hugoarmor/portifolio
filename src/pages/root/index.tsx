import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import * as S from './style';
import { Header } from '../../components';
import * as Di from 'react-icons/di';
import * as Si from 'react-icons/si';
import abilities from './data/abilities.json';
import axios from 'axios';

function Root() {
    /**
     * VARIABLES
     */
    const [textIndex, setTextIndex] = useState<number>(0);
    const [colorView, setColorView] = useState<boolean>(false);
    const [mail, setMail] = useState<string>("");
    const [mailMessage, setMailMessage] = useState<string>("");
    const [width, setWidth] = useState<number>();


    /**
     * FUNCTIONS
     */
    async function send_mail(text: string, mail: string) {
        axios.post("https://api.emailjs.com/api/v1.0/email/send", {
            service_id: "service_0irw149",
            template_id: "template_pjj7gf8",
            user_id: "Nx5wYdGgApHGW6wPf",
            template_params: {
                from_name: mail,
                message: text
            }
        })
    }

    useEffect(() => {
        setInterval(() => setTextIndex(index => index < (abilities.length - 1) ? index + 1 : 0), 3000);
    }, [])

    useEffect(() => {
        if (width && width > 700 && false) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }
    }, [width])

    return (
        <S.MainView ref={e => setWidth(e?.offsetWidth)}>
            <div style={{ width: "70%", margin: "0 auto" }}>
                <Header colorView={colorView} setColorView={setColorView} />
            </div>
            <S.CenterView id="hello-view">
                <S.BoxTransparent />

                <S.HelloView>
                    <S.HelloViewCenter>
                        <S.HelloInfo>
                            <S.HelloInfoTitle>Hello, I'm Hugo Moreira!</S.HelloInfoTitle>
                            <S.HelloInfoText>Creating digital solutions, brandings, experience and more...</S.HelloInfoText>
                            <S.HelloInfoFooter>Multi-task developer for multi-task demands</S.HelloInfoFooter>
                        </S.HelloInfo>

                        <S.HelloAbilities>
                            <S.HelloAbilitiesText>HUGO MOREIRA</S.HelloAbilitiesText>
                            <Di.DiCode size={"5vw"} />
                            <S.HelloAbilitiesText2>
                                <TextTransition
                                    text={abilities[textIndex % abilities.length]}
                                    springConfig={presets.wobbly}
                                />
                            </S.HelloAbilitiesText2>
                        </S.HelloAbilities>
                    </S.HelloViewCenter>
                </S.HelloView>

                <S.AboutView id="about-view" style={{ height: "100vh" }}>
                    <S.AboutViewCenter>
                        <S.AboutInfo>
                            <S.AboutInfoTitle>ABOUT ME</S.AboutInfoTitle>
                            <S.AboutInfoText>I'm a fullstack developer, focusing on web development based on modern UI's and applications, working with REST API's and different databases.</S.AboutInfoText>
                            <S.AboutInfoFooter>Most used: ReactJS, Typescript, Nodejs, MSSQL and Postgres.</S.AboutInfoFooter>
                        </S.AboutInfo>

                        <S.AboutAbilities>
                            <S.AboutAbilitiesTitle>SKILLS</S.AboutAbilitiesTitle>
                            <S.AboutAbilitiesSkills>
                                <Di.DiHtml5 size="80px" style={{ marginBottom: "20px" }} />
                                <Di.DiCss3 size="80px" style={{ marginBottom: "20px" }} />
                                <Si.SiJavascript size="60px" style={{ marginBottom: "20px", marginRight: "10px" }} />
                                <Si.SiTypescript size="60px" style={{ marginBottom: "20px" }} />
                                <Di.DiNodejsSmall size="80px" style={{ marginBottom: "20px" }} />
                                <Si.SiRubyonrails size="60px" style={{ marginBottom: "20px" }} />
                                <Si.SiMicrosoftsqlserver size="60px" style={{ marginBottom: "20px" }} />
                                <Si.SiPostgresql size="60px" style={{ marginBottom: "20px" }} />
                                <Di.DiStreamline size="80px" style={{ marginBottom: "20px" }} />
                                <Di.DiRust size="80px" style={{ marginBottom: "20px" }} />
                                <Di.DiGit size="80px" style={{ marginBottom: "20px" }} />
                                <Di.DiGithubBadge size="80px" style={{ marginBottom: "20px" }} />
                                <Di.DiReact size="80px" style={{ marginBottom: "20px" }} />
                                <Di.DiLinux size="60px" style={{ marginBottom: "20px" }} />
                            </S.AboutAbilitiesSkills>
                        </S.AboutAbilities>
                    </S.AboutViewCenter>
                </S.AboutView>

                <S.ContactView id="contact-view">
                    <S.ContactViewCenter>
                        <S.ContactViewTitle>Let's work together!</S.ContactViewTitle>
                        <input style={{ width: "calc(60% - 38px)", maxWidth: "calc(430px - 38px)", backgroundSize: "20px", backgroundRepeat: "no-repeat", backgroundImage: `url(https://i.postimg.cc/cHR0Ctfq/email.png)`, backgroundPosition: "10px 12px", paddingLeft: "40px", border: "1px solid #a4aa96", borderTopLeftRadius: "5px", borderTopRightRadius: "5px", height: "40px", marginTop: "30px", outline: "none", borderBottom: "none" }} type="text" onChange={e => setMail(e.target.value)} placeholder="Type your email" />
                        <textarea placeholder="Type your message..." style={{ width: "60%", maxWidth: "430px", border: "1px solid #a4aa96", height: "100px", outline: "none" }} onChange={e => setMailMessage(e.target.value)} rows={6} cols={50}></textarea>
                        <div onClick={async () => await send_mail(mailMessage, mail)} style={{ width: "calc(60% + 4px)", maxWidth: "calc(430px + 4px)", height: "40px", cursor: "pointer", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px", background: "#25291C", fontSize: "20px", fontWeight: "bold", letterSpacing: "2px", color: "#ffffff", borderRadius: "unset", padding: "unset", border: "1px solid black", borderTop: "unset", display: "flex", alignItems: "center", justifyContent: "center" }}>SUBMIT</div>
                    </S.ContactViewCenter>
                    <S.ContactViewFooter>
                        <Di.DiGithubBadge style={{ cursor: "pointer" }} onClick={() => window.open("https://github.com/hugoarmor", '_blank')} size="60px" />
                    </S.ContactViewFooter>
                </S.ContactView>

            </S.CenterView>
        </S.MainView>
    )
}

export default Root;
