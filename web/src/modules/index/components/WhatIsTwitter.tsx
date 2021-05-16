import { Fragment } from "react";
import styled from "styled-components";

import { TweetType } from "../types/TweetType";

export interface WhatIsTwitterProps {
  tweets: TweetType[];
}

export const WhatIsTwitter: React.FC<WhatIsTwitterProps> = ({ tweets }) => {
  return (
    <Wrapper>
      <UnorderedList>
        {tweets.map((tweet, i) => (
          <Item key={i}>
            <blockquote>
              <p>{tweet.text}</p>
            </blockquote>
            <cite>
              {tweet?.username ? (
                <Fragment>
                  <strong>{tweet.username}</strong>,
                </Fragment>
              ) : null}{" "}
              {tweet.name}
            </cite>
          </Item>
        ))}
      </UnorderedList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #afeff1;
  padding: 30px 0;
  margin: 0 auto;
  width: 755px;
`;

const UnorderedList = styled.ul`
  width: 576px;
  display: flex;
  margin: 0 0 0 100px;
  color: #000;
  list-style: none;
`;

const Item = styled.li`
  width: 169px;
  margin: 0 23px 0 0;

  blockquote {
    background: url(/assets/arrow2.gif) no-repeat 8% 100%;
    padding: 0 0 11px 0;
    margin: 0 0 1px 0;

    p {
      background: #fff;
      font-size: 0.92em;
      line-height: 1.2;
      padding: 6px 5px;
    }
  }
  cite {
    font-style: normal;
    font-size: 0.85em;
  }
`;
