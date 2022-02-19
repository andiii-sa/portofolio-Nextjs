import cx from "classnames";
import Link from "next/link";

interface ButtonLinkProps {
  href: string;
  title: string;
  icon: string;
  outline?: boolean;
}

export default function ButtonLink(props: ButtonLinkProps) {
  const { href, title, icon, outline } = props;
  const classBtn = cx({
    "me-3": true,
    btn: true,
    "btn-primary": outline === false,
    "btn-outline-primary": outline,
  });

  return (
    <>
      <Link href={href}>
        <a className={classBtn}>
          {`${title} `}
          <i className={`ms-2 ${icon}`} aria-hidden="true"></i>
        </a>
      </Link>
    </>
  );
}
