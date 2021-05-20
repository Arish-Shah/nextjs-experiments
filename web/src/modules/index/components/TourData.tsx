import styled from "styled-components";
import Link from "next/link";
import { Fragment } from "react";

import { Center } from "@/components/utils/Center";

interface TourData {
  [key: string]: {
    heading: string;
    image: string;
    content: JSX.Element;
  };
}

const Teaser = styled.p`
  font-size: 1.5em;
  padding: 0 4px;
  line-height: 1.3;
  margin: 0 0 1.25em;
`;

const JoinButton = styled.button`
  text-align: center;
  background: #97cd39;
  color: #fff;
  font-size: 1.8em;
  padding: 5.5px 17.5px;
  border: 1px solid #000;
  cursor: pointer;
  border-radius: 0;

  &:hover {
    text-decoration: none;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 1.3;
  color: #000;
  margin: 0 0 1em;
`;

export const UnorderedList = styled.ul`
  font-size: 1.2em;
  line-height: 1.3;
  color: #000;
  margin: 0 0 1em 1.2em;
  list-style: disc;
`;

export const tourData: TourData = {
  "/": {
    heading: "What is Twitter?",
    content: (
      <Fragment>
        <Teaser>
          Twitter is a service for friends, family, and co–workers
          <br /> to communicate and stay connected through the exchange of
          quick, frequent answers to one simple question:{" "}
          <strong>What are you doing?</strong>
        </Teaser>
        <Center>
          <Link href="/signup" passHref>
            <a>
              <JoinButton>Get Started—Join!</JoinButton>
            </a>
          </Link>
        </Center>
      </Fragment>
    ),
    image: "/assets/tour/1.gif",
  },
  "/help/why": {
    heading: "Why use Twitter?",
    content: (
      <Fragment>
        <Paragraph>
          Why? Because even basic updates are meaningful to family members,
          friends, or colleagues—especially when they’re timely.
        </Paragraph>
        <UnorderedList>
          <li>
            <strong>Eating soup?</strong> Research shows that moms want to know.
          </li>
          <li>
            <strong>Running late to a meeting?</strong> Your co–workers might
            find that useful.
          </li>
          <li>
            <strong>Partying?</strong> Your friends may want to join you.
          </li>
        </UnorderedList>
      </Fragment>
    ),
    image: "/assets/tour/2.gif",
  },
  "/help/how": {
    heading: "How does it work?",
    content: (
      <Fragment>
        <Paragraph>
          With Twitter, you can stay hyper–connected to your friends and always
          know what they’re doing. Or, you can stop following them any time. You
          can even set quiet times on Twitter so you’re not interrupted.
        </Paragraph>
        <Paragraph>
          <strong>Twitter puts you in control</strong> and becomes a modern
          antidote to information overload.
        </Paragraph>
      </Fragment>
    ),
    image: "/assets/tour/3.gif",
  },
};
