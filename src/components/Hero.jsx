import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Container from "./Container";
import { Parallax } from "react-scroll-parallax";

const Hero = () => {
  return (
    <Container>
      <section className="flex flex-col md:flex-row gap-20 items-center py-20 md:py-48">
        <Parallax speed={-10}>
          <div className="rounded-full shadow-2xl">
            <StaticImage
              alt="Profile"
              height={300}
              imgClassName="rounded-full"
              layout="fixed"
              loading="eager"
              placeholder="none"
              src="../images/profile.jpeg"
              width={300}
            />
          </div>
        </Parallax>
        <header className="flex flex-col justify-center md:items-start gap-4 md:gap-6 text-center md:text-left">
          <h1 className="text-xl md:text-3xl font-thin uppercase">
            Ryan Moody
          </h1>
          <span className="text-3xl md:text-6xl font-bold uppercase">
            Frontend Engineer
          </span>
        </header>
      </section>
    </Container>
  );
};

export default Hero;
