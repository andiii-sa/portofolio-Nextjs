import { useState } from "react";
import BuiltItem from "../../../components/molecules/BuiltItem";
import PreviewItem from "../../../components/molecules/PreviewItem";
import Footer from "../../../components/organisms/Footer";
import Header from "../../../components/organisms/Header";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ThumbnailItem from "../../../components/molecules/ThumbnailItem";

import parse from "html-react-parser";
import Link from "next/link";
import { getItemPortofolio, getItemPortofolioDetail } from "../../../services";
import { Fade } from "react-awesome-reveal";

interface DetailProps {
  data: any;
}

export default function Detail({ data }: DetailProps) {
  const [imagePreview, setImagePreview] = useState(data.image[0].image);
  const onClick = (data: string) => {
    setImagePreview(data);
  };

  return (
    <>
      <Header page="/portofolio" />

      <section className="section-portofolio-detail">
        <div className="container">
          <Fade delay={1500} cascade>
            <div className="row justify-content-center">
              <h3 className="text-center">{data.title}</h3>
              <h5 className="text-center mt-1">{data.category}</h5>
            </div>
            <div className="row image-preview justify-content-center">
              <div className="col-8">
                <Zoom zoomMargin={40}>
                  <PreviewItem icon={imagePreview} />
                </Zoom>
              </div>
            </div>
            <div className="row mt-3 thumbnail justify-content-center">
              {data.image.map((item: any) => {
                return (
                  <ThumbnailItem
                    key={item.id}
                    icon={item.image}
                    onClick={() => onClick(item.image)}
                  />
                );
              })}
            </div>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 detail justify-content-center">
              <div className="col-12 col-sm-12 col-md-7">
                <p className="title">About the project</p>
                <p className="description">{parse(data.description)}</p>
              </div>
              <div className="col-12 col-sm-12 col-md-3">
                <p className="title">Built with</p>
                {data.framework.map((item: any) => {
                  return <BuiltItem key={item.id} icon={item.image} />;
                })}
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="text-center mt-4">
                  <Link href="/portofolio">
                    <a className="btn btn-outline-primary">
                      <i className="fa-solid fa-arrow-alt-circle-left me-2"></i>
                      Back{" "}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <Footer />
    </>
  );
}

export function getStaticPaths() {
  const data = getItemPortofolio();
  const paths = data.map((item: any) => {
    return {
      params: {
        id: item.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string;
  };
}

export function getStaticProps({ params }: GetStaticProps) {
  const { id } = params;
  const data = getItemPortofolioDetail(id);

  return {
    props: {
      data: data,
    },
  };
}
