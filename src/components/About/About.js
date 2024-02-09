import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">Sobre mim</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image
              src="/guilhermesantos.png"
              alt="Guilherme Tomelin dos Santos"
            />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Olá! Sou <strong>Guilherme Tomelin</strong>, estudante de Análise e Desenvolvimento de Sistemas. Ao longo de minha jornada, acumulei experiência em estágios de suporte técnico, onde era responsável pela manutenção de computadores e no suporte via Service-Desk, trabalhando em ambientes educacionais como a SMED (Secretaria de Educação) e a Universidade PUCRS.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              Atualmente, busco uma oportunidade de estágio ou posição como desenvolvedor júnior, visando aprimorar continuamente minhas habilidades na área de desenvolvimento de software. Tenho interesse em me especializar futuramente por meio de uma pós-graduação. Estou comprometido em aplicar meu conhecimento de forma proativa e a contribuir positivamente em ambientes colaborativos.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              Durante minha jornada acadêmica e através de projetos práticos, adquiri experiência sólida e confiança no uso de diversas tecnologias.
              <div className="tagline2">
                Incluindo:
              </div>
            </ScrollAnimation>


            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
