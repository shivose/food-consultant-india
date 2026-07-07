import Link from "next/link";
import { UtensilsCrossed, Linkedin, Twitter, Instagram, Mail, MapPin } from "lucide-react";
import { getGoogleMapsLink, siteBusiness, siteContact } from "@/lib/site";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Challenges", href: "#challenges" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why-us" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Mail, href: `mailto:${siteBusiness.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="#home" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                <UtensilsCrossed className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold text-primary">
                FoodConsult<span className="text-accent">Pro</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              We help restaurants build practical systems for food safety, SOPs, staff training,
              and inspection-ready operations—every single day.
            </p>
            <a
              href={getGoogleMapsLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex max-w-xs gap-2 text-sm leading-relaxed text-slate-600 transition-colors hover:text-accent"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{siteContact.address}</span>
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-slate-600 transition-colors hover:text-accent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li className="text-sm text-slate-600">Restaurant Operations Consultancy</li>
              <li className="text-sm text-slate-600">Food Safety Audits</li>
              <li className="text-sm text-slate-600">SOP Development</li>
              <li className="text-sm text-slate-600">Staff Training</li>
              <li className="text-sm text-slate-600">Compliance Support</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} {siteBusiness.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:justify-start">
              <Link
                href="/privacy"
                className="text-sm text-slate-500 transition-colors hover:text-accent"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-slate-500 transition-colors hover:text-accent"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all hover:border-accent hover:text-accent"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
