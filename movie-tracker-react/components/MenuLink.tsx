import type { ReactNode } from 'react';

interface Props {
  href: string;
  children: ReactNode;
}

export default function MenuLink(props: Props) {
  return (
    <a className="text-xl font-montserrat font-bold" href={props.href}>
      {props.children}
    </a>
  );
}
