import Link from "next/link";
import itemJson from "../../../services/item.json";
import PortofolioItem from "./PortofolioItem";

interface PortofolioProps {
  onPage?: boolean;
}
export default function Portofolio(props: PortofolioProps) {
  const { onPage } = props;
  const itemPortofolio = itemJson.data;

  return (
    <>
      <section className="section-portofolio">
        <div className="container">
          <div className="row justify-content-center">
            <h3 className="text-center">Portofolio</h3>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mt-3">
            {itemPortofolio.map((item) => {
              return (
                <PortofolioItem
                  key={item.id}
                  title={item.title}
                  href={`/portofolio/detail/${item.id}`}
                  icon={item.image[0].image}
                />
              );
            })}
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              {onPage ? (
                <Link href="/portofolio">
                  <a className="btn btn-primary">
                    More Portofolio{" "}
                    <i className="fa-solid fa-location-arrow ms-2"></i>
                  </a>
                </Link>
              ) : (
                <Link href="/">
                  <a className="btn btn-outline-primary">
                    <i className="fa fa-arrow-circle-left ms-2"></i> Back
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
