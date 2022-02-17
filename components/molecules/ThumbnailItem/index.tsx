interface ThumbnailItemProps {
  icon: string;
  onClick: (data: string) => void;
}

export default function ThumbnailItem(props: ThumbnailItemProps) {
  const { icon, onClick } = props;

  return (
    <>
      <div className="col-2">
        <img
          src={`/img/${icon}`}
          alt="ic-thumbnail"
          className="img-fluid"
          onClick={() => onClick(`${icon}`)}
        />
      </div>
    </>
  );
}
