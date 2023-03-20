import * as React from "react";
import Container from "./Container";

const About = () => {
  return (
    <div className="bg-yellow-200">
      <Container>
        <section className="flex flex-col justify-center h-96">
          <h2 className="font-bold text-3xl mb-4">About</h2>
          <p className="text-2xl leading-loose">
            I’m a frontend engineer with over six years of experience building
            web applications. Having primarily worked on product teams, I’ve
            developed a passion for user experience and empathetic problem
            solving. I focus on making user interfaces more equitable by
            utilizing scalable architectures and digital accessibility best
            practices.
          </p>
        </section>
      </Container>
    </div>
  );
};

export default About;
