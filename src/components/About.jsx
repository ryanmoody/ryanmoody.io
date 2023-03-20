import * as React from "react";
import Container from "./Container";
import CodeEditorImage from "../images/code-editor.svg";

const About = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-12 items-center justify-between p-8 md:p-12">
        <section className="flex flex-col justify-center bg-neutral-50 shadow-xl rounded-xl p-8">
          <h2 className="font-bold text-2xl mb-4">About</h2>
          <p className="text-lg leading-loose">
            I’m a frontend engineer with over six years of experience building
            web applications. Having primarily worked on product teams, I’ve
            developed a passion for user experience and empathetic problem
            solving. I focus on making user interfaces more equitable by
            utilizing scalable architectures and digital accessibility best
            practices.
          </p>
        </section>
        <img src={CodeEditorImage} alt="Code Editor" height={300} width={300} />
      </div>
    </Container>
  );
};

export default About;
