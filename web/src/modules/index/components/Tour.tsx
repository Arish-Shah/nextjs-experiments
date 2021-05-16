import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { TourType } from "../types/TourType";
import { tourData } from "./TourData";

export interface TourProps {
  tourType: TourType;
}

export const Tour: React.FC<TourProps> = () => {
  const router = useRouter();

  const links = [
    { text: "What?", href: "/" },
    { text: "Why?", href: "/help/why" },
    { text: "How?", href: "/help/how" },
  ];

  return (
    <Wrapper>
      <Title>
        <h2>{tourData[router.pathname].heading}</h2>
        <Menu>
          {links.map((link) => (
            <Item key={link.text}>
              <Link href={link.href} passHref>
                <Anchor
                  className={router.pathname === link.href ? "active" : ""}
                >
                  {link.text}
                </Anchor>
              </Link>
            </Item>
          ))}
        </Menu>
      </Title>
      <ImageWrapper>
        <Image
          src={tourData[router.pathname].image}
          width="508"
          height="154"
          draggable={false}
          className="tour"
        />
      </ImageWrapper>
      {tourData[router.pathname].content}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 510px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 2em;
    color: #000;
    line-height: 1;
    margin-top: -1.5px;
  }
`;

const Menu = styled.ul`
  list-style: none;
  font-size: 1.2em;
  line-height: 1.3;
  display: flex;
`;

const Item = styled.li`
  margin: 0.2em 0 0 8px;
  padding: 3px 2px;
`;

const Anchor = styled.a`
  border: 1px dashed #a4a0a1;
  color: #a4a0a1;
  padding: 3px 12px;

  &:hover {
    border-style: solid;
    text-decoration: none;
  }

  &.active {
    border: 1px solid #000;
    color: #000;
  }
`;

const ImageWrapper = styled.div`
  border: 1px solid #000;
  height: 156px;
  margin: 24px 0 13.5px 0;
`;
