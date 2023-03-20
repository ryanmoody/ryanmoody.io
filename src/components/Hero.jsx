import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Container from "./Container";

const Hero = () => {
  return (
    <Container>
      <section className="flex flex-row gap-10 items-center">
        <StaticImage
          src="../images/profile.jpeg"
          alt="Profile"
          width={300}
          height={300}
          className="rounded-full max-h-full"
        />
        <header className="h-96 flex flex-col justify-center gap-6">
          <span className="text-2xl">I'm a</span>
          <h1 className="font-bold text-8xl">UI Engineer</h1>
          <span className="text-2xl">
            using code to solve problems for humans.
          </span>
        </header>
      </section>
    </Container>
  );
};

export default Hero;
