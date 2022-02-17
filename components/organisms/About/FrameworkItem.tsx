import Image from "next/image";

interface FrameworkItemProps {
  icon: string;
  name: string;
}
export default function FrameworkItem(props: FrameworkItemProps) {
  const { icon, name } = props;

  return (
    <>
      <div className="col-2">
        <img
          src={`/img/${icon}`}
          alt={name}
          className="img-fluid"
          style={{ maxHeight: "60px" }}
        />
      </div>
    </>
  );
}
