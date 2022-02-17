import Link from "next/link";
import cx from "classnames";

interface NavItemProps {
  title: string;
  active?: boolean;
  href: string;
}

export default function NavItem(props: Partial<NavItemProps>) {
  const { title, active, href = "/" } = props;
  const classTitle = cx({
    "nav-item": true,
    active: active,
  });

  return (
    <>
      <li className={classTitle}>
        <Link href={href}>
          <a className="nav-link" aria-current="page">
            {title}
          </a>
        </Link>
      </li>
    </>
  );
}
