import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const router = useRouter();

  const links: { text: string; href: string; altText?: string }[] = [
    { text: "About Us", href: "/about#about" },
    { text: "Contact", href: "/about#contact" },
    { text: "Blog", href: "https://blog.twitter.com" },
    { text: "Status", href: "https://status.twitter.com" },
    { text: "Downloads", href: "/downloads" },
    { text: "API", href: "https://apiwiki.twitter.com" },
    { text: "Search", href: "https://search.twitter.com" },
    { text: "Help", href: "https://help.twitter.com" },
    { text: "Jobs", href: "/jobs" },
    { text: "Terms", href: "/tos", altText: "TOS" },
    { text: "Privacy", href: "/privacy" },
  ];

  return (
    <StyledFooter>
      <UnorderedList>
        <ListItem>&copy; 2008 Twitter</ListItem>
        {links.map((link, i) => (
          <ListItem key={i}>
            {router.pathname === link.href ? (
              link.altText || link.text
            ) : (
              <Link href={link.href} passHref>
                <Anchor>{link.text}</Anchor>
              </Link>
            )}
          </ListItem>
        ))}
      </UnorderedList>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 8px 0;
  background: #fff;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 15px;
  line-height: 1;
`;

const UnorderedList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const ListItem = styled.li`
  margin: 0 5px;
`;

const Anchor = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
