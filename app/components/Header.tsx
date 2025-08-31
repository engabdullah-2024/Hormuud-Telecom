// app/_components/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

/** Header with Personal + Business mega menus */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-emerald-600 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6">
        {/* Brand */}
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Hormuud Telecom">
          <Image
            src="/Hormuud.svg"
            alt=""
            width={260}
            height={72}
            priority
            className="h-10 w-auto sm:h-12 md:h-14"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">
            Home
          </Link>

          {/* PERSONAL — MEGA MENU */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-normal data-[state=open]:text-emerald-600">
                  Personal
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-5">
                  <div className="grid w-[760px] grid-cols-2 gap-8 md:grid-cols-4">
                    <MegaSection
                      title="VOICE"
                      items={[
                        ["Prepaid", "#"],
                        ["Postpaid", "#"],
                        ["Anfac Packages", "#"],
                        ["Roaming", "#"],
                        ["Offers", "#"],
                      ]}
                    />
                    <MegaSection
                      title="DATA"
                      items={[
                        ["Anfac Plus Packages", "#"],
                        ["Unlimited", "#"],
                        ["Adsl Plus", "#"],
                        ["Mifi Plus", "#"],
                      ]}
                    />
                    <MegaSection
                      title="EVC PLUS"
                      items={[
                        ["EvcPlus", "#"],
                        ["Merchant", "#"],
                        ["My Account", "#"],
                      ]}
                    />
                    <MegaSection title="VAS" items={[["Keyd Plus", "#"]]} />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* BUSINESS — MEGA MENU (Services + Internet) */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-normal data-[state=open]:text-emerald-600">
                  Business
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-5">
                  <div className="grid w-[640px] grid-cols-2 gap-12">
                    {/* SERVICES */}
                    <div>
                      <div className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
                        Services
                      </div>
                      <ul className="space-y-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#"
                              className="flex items-center gap-2 rounded-md px-1 py-1 text-sm text-zinc-800 hover:bg-zinc-50"
                            >
                              Mysms
                              <span className="rounded-sm bg-emerald-600 px-1.5 py-0.5 text-[10px] font-semibold leading-none text-white">
                                NEW
                              </span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#"
                              className="block rounded-md px-1 py-1 text-sm text-zinc-800 hover:bg-zinc-50"
                            >
                              SMS API
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#"
                              className="block rounded-md px-1 py-1 text-sm text-zinc-800 hover:bg-zinc-50"
                            >
                              Call Center
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#"
                              className="block rounded-md px-1 py-1 text-sm text-zinc-800 hover:bg-zinc-50"
                            >
                              Short Codes
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>

                    {/* INTERNET */}
                    <div>
                      <div className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
                        Internet
                      </div>
                      <ul className="space-y-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#"
                              className="block rounded-md px-1 py-1 text-sm text-zinc-800 hover:bg-zinc-50"
                            >
                              Enterprise Internet
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* WHO WE ARE / MEDIA */}
          <NavDropdown label="Who We Are">
            <NavList items={[["About Hormuud", "#"], ["Social Responsibility", "#"], ["Hormuud Foundation", "#"],["Jobs", "#"], ["Terms and Conditions", "#"]]} />
          </NavDropdown>

          <NavDropdown label="Media">
            <NavList items={[["Press Release", "#"], ["Blog", "#"], ["Events & Campaigns", "#"]]} />
          </NavDropdown>

          <Link href="#contact" className="text-sm text-zinc-900 hover:text-emerald-600">
            Contact Us
          </Link>
        </div>

        {/* Right actions + Mobile trigger */}
        <div className="flex items-center gap-1 sm:gap-2">
          <Button variant="ghost" size="icon" className="h-9 w-9 text-zinc-700 hover:text-emerald-600" aria-label="Favorites">
            <Heart className="h-5 w-5" />
          </Button>

          <div className="relative">
            <Button variant="ghost" size="icon" className="h-9 w-9 text-zinc-700 hover:text-emerald-600" aria-label="Cart">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <span aria-hidden className="absolute -right-0.5 -top-0.5 grid h-4 w-4 place-items-center rounded-full border border-white bg-emerald-600 text-[10px] font-semibold text-white">
              0
            </span>
          </div>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-1 h-9 w-9 md:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              {/* Mobile nav */}
              <nav className="mt-4">
                <ul className="space-y-1">
                  <li>
                    <SheetClose asChild>
                      <Link href="/" className="block rounded-md px-3 py-2 text-sm font-semibold text-emerald-600">
                        Home
                      </Link>
                    </SheetClose>
                  </li>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="personal">
                      <AccordionTrigger className="px-3 py-2 text-sm">Personal</AccordionTrigger>
                      <AccordionContent className="px-3 pb-2">
                        <MobileLink href="#">Prepaid</MobileLink>
                        <MobileLink href="#">Postpaid</MobileLink>
                        <MobileLink href="#">Anfac Packages</MobileLink>
                        <MobileLink href="#">Roaming</MobileLink>
                        <MobileLink href="#">Offers</MobileLink>
                        <div className="mt-2 border-t pt-2 text-xs text-zinc-500">Data</div>
                        <MobileLink href="#">Anfac Plus Packages</MobileLink>
                        <MobileLink href="#">Unlimited</MobileLink>
                        <MobileLink href="#">Adsl Plus</MobileLink>
                        <MobileLink href="#">Mifi Plus</MobileLink>
                        <div className="mt-2 border-t pt-2 text-xs text-zinc-500">EVC Plus</div>
                        <MobileLink href="#">EvcPlus</MobileLink>
                        <MobileLink href="#">Merchant</MobileLink>
                        <MobileLink href="#">My Account</MobileLink>
                        <div className="mt-2 border-t pt-2 text-xs text-zinc-500">VAS</div>
                        <MobileLink href="#">Keyd Plus</MobileLink>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="business">
                      <AccordionTrigger className="px-3 py-2 text-sm">Business</AccordionTrigger>
                      <AccordionContent className="px-3 pb-2">
                        <div className="text-xs text-zinc-500">Services</div>
                        <MobileLink href="#">
                          Mysms
                          <span className="ml-2 rounded-sm bg-emerald-600 px-1.5 py-0.5 text-[10px] font-semibold leading-none text-white">
                            NEW
                          </span>
                        </MobileLink>
                        <MobileLink href="#">SMS API</MobileLink>
                        <MobileLink href="#">Call Center</MobileLink>
                        <MobileLink href="#">Short Codes</MobileLink>
                        <div className="mt-2 border-t pt-2 text-xs text-zinc-500">Internet</div>
                        <MobileLink href="#">Enterprise Internet</MobileLink>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="about">
                      <AccordionTrigger className="px-3 py-2 text-sm">Who We Are</AccordionTrigger>
                      <AccordionContent className="px-3 pb-2">
                        <MobileLink href="#">About Us</MobileLink>
                        <MobileLink href="#">Press</MobileLink>
                        <MobileLink href="#">CSR</MobileLink>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="media">
                      <AccordionTrigger className="px-3 py-2 text-sm">Media</AccordionTrigger>
                      <AccordionContent className="px-3 pb-2">
                        <MobileLink href="#">News</MobileLink>
                        <MobileLink href="#">Gallery</MobileLink>
                        <MobileLink href="#">Blog</MobileLink>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <li className="mt-1">
                    <SheetClose asChild>
                      <Link href="#contact" className="block rounded-md px-3 py-2 text-sm text-zinc-900 hover:bg-zinc-50">
                        Contact Us
                      </Link>
                    </SheetClose>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

/* ================= Helpers ================= */

function MegaSection({
  title,
  items,
}: {
  title: string;
  items: [string, string][];
}) {
  return (
    <div>
      <div className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
        {title}
      </div>
      <ul className="space-y-2">
        {items.map(([label, href]) => (
          <li key={label}>
            <NavigationMenuLink asChild>
              <Link
                href={href}
                className="block rounded-md px-1 py-1 text-sm text-zinc-800 hover:bg-zinc-50"
              >
                {label}
              </Link>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NavDropdown({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-normal data-[state=open]:text-emerald-600">
            {label}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-3">{children}</NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function NavList({ items }: { items: [string, string][] }) {
  return (
    <ul className="w-[260px] space-y-1">
      {items.map(([label, href]) => (
        <li key={label}>
          <NavigationMenuLink asChild>
            <Link href={href} className="block rounded-md px-3 py-2 text-sm text-zinc-800 hover:bg-zinc-50">
              {label}
            </Link>
          </NavigationMenuLink>
        </li>
      ))}
    </ul>
  );
}

function MobileLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <SheetClose asChild>
      <Link href={href} className="block rounded-md px-3 py-2 text-sm text-zinc-900 hover:bg-zinc-50">
        {children}
      </Link>
    </SheetClose>
  );
}
