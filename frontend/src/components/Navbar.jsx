import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, Phone, Bone } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "./ui/sheet";
import { NAV_LINKS, CLINIC } from "../lib/doctor";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      data-testid="main-navbar"
      className={`sticky top-0 z-40 w-full border-b transition-all ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-slate-200/70 shadow-sm"
          : "bg-white/70 backdrop-blur-md border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 group"
          data-testid="navbar-logo"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E6F4F1] text-[#0F2C59] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
            <Bone className="h-5 w-5" />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-semibold text-[#0F2C59]">Dr. Bhaskar Chand</span>
            <span className="text-xs text-[#475569]">Physiotherapist · Jamtara</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#2563EB] bg-[#E6F4F1]"
                    : "text-[#0F2C59] hover:text-[#2563EB] hover:bg-slate-50"
                }`
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right CTAs */}
        <div className="flex items-center gap-2">
          <a
            href={`tel:${CLINIC.phoneRaw}`}
            data-testid="navbar-call-btn"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-[#0F2C59] hover:bg-[#E6F4F1] hover:border-[#E6F4F1] transition-colors"
            aria-label="Call clinic"
          >
            <Phone className="h-4 w-4 text-[#2563EB]" />
            <span className="hidden sm:inline">Call</span>
          </a>
          <Link
            to="/appointment"
            data-testid="navbar-book-btn"
            className="hidden sm:inline-flex items-center rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/25 hover:bg-[#1D4ED8] transition-all"
          >
            Book Appointment
          </Link>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0F2C59] hover:bg-slate-50"
                data-testid="mobile-menu-trigger"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] sm:w-[380px] bg-white">
              <SheetHeader>
                <SheetTitle className="text-left text-[#0F2C59] font-semibold">
                  Dr. Bhaskar Chand
                </SheetTitle>
                <SheetDescription className="text-left text-[#475569]">
                  Physiotherapist · Jamtara
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? "text-[#2563EB] bg-[#E6F4F1]"
                          : "text-[#0F2C59] hover:bg-slate-50"
                      }`
                    }
                    end={link.to === "/"}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
              <div className="mt-6 border-t pt-4 flex flex-col gap-2">
                <Link
                  to="/appointment"
                  data-testid="mobile-book-btn"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1D4ED8]"
                >
                  Book Appointment
                </Link>
                <a
                  href={`tel:${CLINIC.phoneRaw}`}
                  data-testid="mobile-call-btn"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#0F2C59]"
                >
                  <Phone className="h-4 w-4" /> Call {CLINIC.phone}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
