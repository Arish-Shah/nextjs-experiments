import Link from "next/link";

interface FooterProps {
  forIndex?: boolean;
}

export function Footer({ forIndex }: FooterProps) {
  const links = [
    { text: "About Us", href: "/about#about" },
    { text: "Contact", href: "/about#contact" },
    { text: "Blog", href: "" },
    { text: "Status", href: "" },
    { text: "Downloads", href: "/downloads" },
    { text: "API", href: "" },
    { text: "Search", href: "" },
    { text: "Help", href: "" },
    { text: "Jobs", href: "/jobs" },
    { text: "Terms", href: "/terms" },
    { text: "Privacy", href: "/privacy" },
  ];

  return (
    <footer className={`mx-auto mt-[15px] p-[4px_0px] text-center bg-white rounded-[5px]`}>
      <ul>
        <li className="inline m-[0px_4px]">
          © 2008 Twitter
        </li>
        {links.map((link, i) => (
          <li className="inline m-[0px_5px]" key={i}>
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
