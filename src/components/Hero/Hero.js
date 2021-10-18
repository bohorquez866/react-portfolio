import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello there, I am Jesus and Welcome to my Portfolio Website
        </SectionTitle>
        <SectionText>
          You are welcome to come in and check some of my previous work and a
          little bit about me. I am a frontend Developer who wants to evolve
          into a Crypto and Mobile Developer.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
