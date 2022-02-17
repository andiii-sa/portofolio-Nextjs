interface PreviewItemProps {
  icon: string;
}

export default function PreviewItem(props: PreviewItemProps) {
  const { icon } = props;
  return (
    <>
      <img
        src={`/img/${icon}`}
        alt="ic-thumb"
        className="img-fluid"
        id="main_image"
      />
    </>
  );
}
