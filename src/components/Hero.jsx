import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Container from "./Container";

const Hero = () => {
  return (
    <Container>
      <section className="flex flex-col md:flex-row gap-20 items-center py-20 md:py-48">
        <StaticImage
          alt="Profile"
          height={300}
          imgClassName="rounded-full max-h-full"
          layout="fixed"
          loading="eager"
          placeholder="none"
          src="../images/profile.jpeg"
          width={300}
        />
        <header className="flex flex-col justify-center md:items-start gap-4 md:gap-6 text-center md:text-left">
          <span className="text-lg md:text-xl">I'm a</span>
          <h1 className="font-bold text-4xl md:text-6xl">Frontend Engineer</h1>
          <span className="text-lg md:text-xl">
            using code to solve problems for humans.
          </span>
        </header>
      </section>
    </Container>
  );
};

export default Hero;
