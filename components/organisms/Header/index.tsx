import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import NavItem from "./NavItem";

interface HeaderProps {
  page: string;
}
export default function Header(props: HeaderProps) {
  const { page } = props;

  const getNavLinkClass = (path: string) => {
    return page === path ? true : false;
  };
  return (
    <>
      <header>
        <div className="container">
          <Fade delay={300}>
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <Image
                    src="/icon/logo.svg"
                    alt="logo-navbar"
                    width={69}
                    height={60}
                  />
                </a>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="ms-auto navbar-nav">
                  <NavItem
                    title="About"
                    href="/"
                    active={getNavLinkClass("/")}
                  />
                  <NavItem
                    title="Portofolio"
                    href="/portofolio"
                    active={getNavLinkClass("/portofolio")}
                  />
                </ul>
              </div>
            </nav>
          </Fade>
        </div>
      </header>
    </>
  );
}
