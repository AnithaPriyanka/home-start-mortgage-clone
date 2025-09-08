import { Link } from "react-router-dom";

export const Footer = () => {
  const footerSections = [
    {
      title: "Resources",
      links: [
        { label: "Home affordability calculator", href: "/mortgage-calculator" },
        { label: "Mortgage calculator", href: "/mortgage-calculator" },
        { label: "Free mortgage guides", href: "/" },
        { label: "Today's rates", href: "/" },
      ],
    },
    {
      title: "Company", 
      links: [
        { label: "About Us", href: "/about-us" },
        { label: "Careers", href: "/" },
        { label: "Press", href: "/" },
        { label: "Contact", href: "/" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/" },
        { label: "Terms of Service", href: "/" },
        { label: "Licenses", href: "/" },
        { label: "NMLS Consumer Access", href: "/" },
      ],
    },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-primary">Better</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Better Mortgage Corporation provides equal housing opportunity. Better Mortgage is a direct lender.
            </p>
            <div className="text-xs text-muted-foreground">
              <p>NMLS ID #330511</p>
              <p>3 World Trade Center, 175 Greenwich Street, 57th Floor, New York, NY 10007</p>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2024 Better Mortgage Corporation. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};