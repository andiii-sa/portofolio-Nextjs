import Image from "next/image";
import Link from "next/link";

interface PortofolioItemProps {
  icon: string;
  title: string;
  href: string;
}

export default function PortofolioItem(props: PortofolioItemProps) {
  const { icon, title, href } = props;

  return (
    <>
      <div className="col">
        <div className="card shadow border-0">
          <Image
            src={`/img/${icon}`}
            className="card-img-top"
            alt={title}
            height={245}
            width={422}
          />
          <div className="card-body">
            <div className="card-title px-3">
              <div className="row">
                <div className="col-7 align-self-center">
                  <h4 className="d-inline">{title}</h4>
                </div>
                <div className="col-5 align-self-center">
                  <Link href={href}>
                    <a className="btn btn-outline-primary float-end">
                      <span>
                        Detail
                        <i className="fa-solid fa-circle-arrow-right ms-2"></i>
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
