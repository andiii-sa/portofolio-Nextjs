import Image from "next/image";

interface ContactItemProps {
  href: string;
  icon: string;
  name: string;
}

export default function ContactItem(props: ContactItemProps) {
  const { href, icon, name } = props;
  return (
    <>
      <a className="ms-2" href={href} target="_blank" rel="noreferrer">
        <Image src={`/img/${icon}`} alt={name} height="30" width="30" />
      </a>
    </>
  );
}
