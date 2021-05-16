import Link from "next/link";
import styled from "styled-components";

import { SigninForm } from "./SigninForm";

const videoLink =
  "http://dotsub.com/api/smallplayer.php?filmid=3066&filminstance=3068&language=none";

export const SigninCard = () => {
  return (
    <Wrapper>
      <Link href={videoLink} passHref>
        <a target="_blank">
          <VideoButton>
            <img src="/assets/arrow-on-red.gif" />
            Watch a video!
          </VideoButton>
        </a>
      </Link>
      <Container>
        <SigninForm />
        <Complete>
          Already using Twitter from your phone?{" "}
          <Link href="/account/complete">
            <a>Click here.</a>
          </Link>
        </Complete>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 182px;
`;

const VideoButton = styled.button`
  width: 100%;
  text-align: center;
  background-color: #ff493c;
  color: #fff;
  font-size: 11pt;
  font-weight: bold;
  border: 1px solid #000;
  padding: 4px 0;
  border-radius: 0;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`;

const Container = styled.div`
  padding-left: 3px;
`;

const Complete = styled.div`
  font-size: 0.85em;
  text-align: center;
  background: #e8fecd;
  border: 1px solid #a9bf74;
  line-height: 1.2;
  padding: 4px 20px;
`;
