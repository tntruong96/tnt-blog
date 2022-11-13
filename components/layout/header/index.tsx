import {
  Aside,
  HamburgerButton,
  HeaderAuthen,
  HeaderContainer,
  HeaderLogo,
  HeaderNav,
} from "@components/layout/header/style";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import logo from "@public/images/logo.png";
import Image from "next/image";
import { route } from "next/dist/server/router";

const navItems = [
  {
    title: "Blogs",
    link: "/",
  },
  {
    title: "About Me",
    link: "/about",
  },
];

const Header = () => {
  const router = useRouter();
  const [openSidebar, setOpenSidebar] = useState(false);

  const renderNav = navItems.map((item, i) => (
    <li key={i} className={router.pathname === item.link ? "active" : ""}>
      <Link href={item.link} passHref>
        <a>{item.title}</a>
      </Link>
    </li>
  ));

  const sidebarOperate = () => {
    setOpenSidebar(!openSidebar);
  };

  const handleScroll = () => {
    if (openSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  useEffect(() => {
    handleScroll();
  }, [openSidebar]);

  return (
    <HeaderContainer>
      <HeaderLogo>
        <div className="pl-2 md:pl-20">
          <Image
            onClick={async () => router.push("/")}
            className="cursor-pointer"
            objectFit="fill"
            src={logo}
            alt="Logo"
          />
        </div>
        <HeaderNav className="hidden sm:block">
          <ol>{renderNav}</ol>
        </HeaderNav>
      </HeaderLogo>
      <HamburgerButton onClick={sidebarOperate}>
        <span className={openSidebar ? "open" : ""}></span>
        <Aside className={openSidebar ? "open" : ""}>
          <nav>
            <ol>{renderNav}</ol>
          </nav>
        </Aside>
      </HamburgerButton>
      <HeaderAuthen>{/* authen */}</HeaderAuthen>
    </HeaderContainer>
  );
};

export default Header;
