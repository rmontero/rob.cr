"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { Menu, X } from "lucide-react";

import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
import { ThemeToggle } from "./ThemeToggle";

const Logo = () => (
  <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 hover:opacity-80 transition-opacity">
    <span className="text-2xl">🇨🇷</span> <span className="mt-1">Rob.cr.</span>
  </Link>
);

const NavItem = ({ children }) => {
  return (
    <li className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
      {children}
    </li>
  );
};



const Profile = ({ size = "large", profilePicture }) => {
  const isSmall = size === "small";

  const overriddenName = "Rob Montero";
  const overriddenDescription =
    "I’m a dynamic and strategic leader with over 25 years of experience in the tech industry and multiple domains such as healthcare, higher education, and consumer goods. I excel at leading cross-functional teams to develop robust, high-performance web and mobile applications. My extensive technical expertise spans both back end and front end development, with a strong focus on CMS, data migration, API development, and modern JavaScript frameworks.";

  if (isSmall) {
    return (
      <div className="flex items-center gap-4 mt-8">
        {prismic.isFilled.image(profilePicture) && (
          <Link href="/" className="relative h-12 w-12 overflow-hidden rounded-full bg-zinc-300 shrink-0">
            <PrismicNextImage
              field={profilePicture}
              fill={true}
              sizes="3rem"
              className="object-cover"
            />
          </Link>
        )}
        <div className="flex flex-col text-left">
          <Heading size="xs" className="mb-0 font-sans tracking-tight dark:text-zinc-50">
            <Link href="/">
              {overriddenName}
            </Link>
          </Heading>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20 lg:mt-32 w-full">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
        <div className="flex flex-col gap-8">
          {prismic.isFilled.image(profilePicture) && (
            <div className="relative h-32 w-32 md:h-48 md:w-48 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
              <PrismicNextImage
                field={profilePicture}
                fill={true}
                sizes="(max-width: 768px) 8rem, 12rem"
                priority={true}
                className="object-cover"
              />
            </div>
          )}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 max-w-4xl leading-none">
            {overriddenName}
          </h1>
        </div>
        <div className="lg:max-w-md flex flex-col gap-6">
          <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 font-serif">
            {overriddenDescription}
          </p>

        </div>
      </div>
      <div className="mt-16 border-b-4 border-double border-zinc-200 dark:border-zinc-800 w-full" />
    </div>
  );
};

export const Header = ({
  withDivider = true,
  withProfile = true,
  profileSize = "large",
  navigation,
  settings,
}) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Bounded as="header" size="widest" className="!py-4">
      <div className="flex items-center justify-between w-full py-6">
        <Logo />
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 rounded-full border border-zinc-200 dark:border-zinc-800 px-6 py-2">
            <NavItem>
              <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>
                <PrismicText field={navigation.data.homepageLabel} />
              </Link>
            </NavItem>
            {navigation.data?.links.map((item) => {
              const label = prismic.asText(item.label);
              const href = prismic.asLink(item.link);
              return (
                <NavItem key={label}>
                  <PrismicNextLink field={item.link} aria-current={pathname === href ? "page" : undefined}>
                    <PrismicText field={item.label} />
                  </PrismicNextLink>
                </NavItem>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center gap-4 py-1">
          <ThemeToggle />
          <button
            className="md:hidden p-2 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden py-4 border-t border-zinc-200 dark:border-zinc-800">
          <ul className="flex flex-col gap-4 px-2">
            <NavItem>
              <Link href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={() => setIsMobileMenuOpen(false)}>
                <PrismicText field={navigation.data.homepageLabel} />
              </Link>
            </NavItem>
            {navigation.data?.links.map((item) => {
              const label = prismic.asText(item.label);
              const href = prismic.asLink(item.link);
              return (
                <NavItem key={label}>
                  <PrismicNextLink field={item.link} aria-current={pathname === href ? "page" : undefined} onClick={() => setIsMobileMenuOpen(false)}>
                    <PrismicText field={item.label} />
                  </PrismicNextLink>
                </NavItem>
              );
            })}
          </ul>
        </div>
      )}

      {withProfile && <Profile size={profileSize} profilePicture={settings?.data?.profilePicture} />}
    </Bounded>
  );
};
