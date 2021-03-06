import Link from "next/link";
import itemJson from "../../../services/item.json";
import PortofolioItem from "../Portofolio/PortofolioItem";

interface PortofolioDashboardProps {
  onPage?: boolean;
}
export default function PortofolioDashboard(props: PortofolioDashboardProps) {
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
            {itemPortofolio.slice(0, 3).map((item) => {
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
              <Link href="/portofolio">
                <a className="btn btn-primary">
                  More Portofolio{" "}
                  <i className="fa fa-arrow-circle-right ms-2"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
