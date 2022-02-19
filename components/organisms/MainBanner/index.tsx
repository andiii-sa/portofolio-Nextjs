import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import ButtonLink from "./ButtonLink";
import ContactItem from "./ContactItem";

export default function MainBanner() {
  return (
    <>
      <section className="section-hero mt-5">
        <div className="container">
          <div className="row px-5">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 align-self-center">
              <Fade delay={400} cascade triggerOnce>
                <div className="row">
                  <h1>
                    Hi, <br />
                    I’m <span>Andi Saputro.</span>
                  </h1>
                  <h6>
                    I’m a front/back end developer website, interested <br />
                    research and still learning for a new whats happens. <br />
                    Check my portofolio.
                  </h6>
                </div>
                <div className="col mt-3">
                  <ButtonLink
                    title="Profile"
                    href="#about"
                    icon="fa fa-paper-plane-o"
                    outline={false}
                  />
                  <ButtonLink
                    title="Portofolio"
                    href="/portofolio"
                    icon="fa fa-paper-plane"
                    outline
                  />
                </div>
                <div className="row mt-5">
                  <div className="col-4 align-self-center">
                    <p className="float-start">Contact me at</p>
                  </div>
                  <div className="col align-self-center">
                    <ContactItem
                      href="https://www.instagram.com/andiii.sa_"
                      icon="cm-instagram.png"
                      name="instagram"
                    />
                    <ContactItem
                      href="https://www.linkedin.com/in/andiii-sa/"
                      icon="cm-linkedin.png"
                      name="Linkedin"
                    />
                    <ContactItem
                      href="mailto:y.andisaputro47@gmail.com"
                      icon="cm-gmail.png"
                      name="Gmail"
                    />
                    <ContactItem
                      href="https://github.com/andiii-sa"
                      icon="cm-github.png"
                      name="Github"
                    />
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-md-6 col-lg-6 d-none d-sm-none d-md-none d-lg-block img-hero">
              <Fade delay={600} triggerOnce>
                <Image
                  src="/img/img-header.jpg"
                  className="img-fluid float-end"
                  alt="poto profile"
                  width={332}
                  height={412}
                />
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
