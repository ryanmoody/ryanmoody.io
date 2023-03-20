import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Container from "./Container";

const Hero = () => {
  return (
    <Container>
      <section className="flex flex-col-reverse md:flex-row gap-20 items-center py-20">
        <StaticImage
          src="../images/profile.jpeg"
          alt="Profile"
          width={300}
          height={300}
          className="rounded-full max-h-full"
        />
        <header className="flex flex-col justify-center items-center md:items-start gap-6">
          <span className="text-2xl">I'm a</span>
          <h1 className="font-bold text-7xl md:text-8xl text-center md:text-left">
            UI Engineer
          </h1>
          <span className="text-2xl">
            using code to solve problems for humans.
          </span>
        </header>
      </section>
    </Container>
  );
};

export default Hero;
