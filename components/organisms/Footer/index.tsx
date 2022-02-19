import { Fade } from "react-awesome-reveal";

export default function Footer() {
  return (
    <>
      <Fade delay={300} triggerOnce>
        <footer className="py-3">
          <p className="text-center">Copyright 2022 - Andi Saputro.</p>
        </footer>
      </Fade>
    </>
  );
}
