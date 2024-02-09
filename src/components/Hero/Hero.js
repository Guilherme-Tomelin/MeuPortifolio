import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,

} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Guilherme Tomelin dos Santos',
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'Desenvolvedor de Software.',
                    1000,
                    'Apaixonado por resolver problemas com código.',
                    1000,
                    'Explorador de novas tecnologias e frameworks.',
                    1000,
                    'Focado em aprender e crescer como desenvolvedor.',
                    1000,
                    'Buscando sempre novos desafios e aprendizados.',
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }

          </HeroLeft>
          <HeroRight>
              <Image
                src="/guilhermesantos.png"
                alt="Guilherme Tomelin dos Santos"
              />
          </HeroRight>
        </HeroWrapper>
      </HeroContainer>
    </main>
  );
}

export default Hero;
