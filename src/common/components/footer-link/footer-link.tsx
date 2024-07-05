import React, { FC, PropsWithChildren } from "react";

interface FooterLinkProps {
  href: string;
}

export const FooterLink: FC<FooterLinkProps & PropsWithChildren> = ({
  href,
  children,
}) => {
  return (
    <div>
      <li>
        <a
          href={href}
          className="font-bold text-sm text-gray-400 hover:text-gray-300 hover:underline"
        >
          {children}
        </a>
      </li>
    </div>
  );
};
