interface BuiltItemProps {
  icon: string;
}

export default function BuiltItem(props: BuiltItemProps) {
  const { icon } = props;
  return (
    <>
      <img src={`/img/${icon}`} className="img-fluid me-2" alt="" />
    </>
  );
}
