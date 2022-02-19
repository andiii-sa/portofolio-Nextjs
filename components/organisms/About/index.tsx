import { Fade } from "react-awesome-reveal";
import FrameworkItem from "./FrameworkItem";

export default function About() {
  return (
    <>
      <section className="section-about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-12">
              <Fade delay={1000} cascade>
                <h3 className="text-center" id="about">
                  About
                </h3>
                <p className="text-center mt-3">
                  Hello, I’m Andi a new website developer and love to learn new
                  things. <br />
                  I am very interested in learning javascript, but I have also
                  studied other than javascript languages.
                  <br />
                  Some of the languages I’m learning
                </p>
              </Fade>
            </div>
          </div>
          <Fade delay={1200} cascade>
            <div className="row mt-4 justify-content-center">
              <FrameworkItem icon="fw-Nextjs.png" name="NextJS" />
              <FrameworkItem icon="fw-reactjs.png" name="ReactJS" />
              <FrameworkItem icon="fw-expressjs.png" name="ExpressJS" />
              <FrameworkItem icon="fw-laravel.png" name="Laravel 8" />
            </div>
            <div className="row mt-4 justify-content-center">
              <FrameworkItem icon="fw-python.png" name="Python" />
              <FrameworkItem icon="fw-flask.png" name="Flask" />
              <FrameworkItem icon="fw-flutter.png" name="Flutter" />
              <FrameworkItem icon="fw-reactnv.png" name="ReactNative" />
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
}
