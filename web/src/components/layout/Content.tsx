import styled from "styled-components";

export const Content = styled.div`
  flex: 1;
  padding: 5px 10px 15px;
  background: #fff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 3px 0 4px;
  }

  p {
    line-height: 1.2;
    margin: 5.5px 0;
  }

  &.container {
    h2,
    h3 {
      font-family: Georgia, serif;
      font-size: 40px;
      font-weight: normal;
      letter-spacing: -1px;
      padding-left: 12px !important;
      padding-top: 6px;
    }

    h3 {
      margin-bottom: 8px;
      font-size: 22px;
      letter-spacing: 0;
      font-weight: normal;
    }

    p,
    ol {
      margin-left: 14px !important;
    }

    p {
      line-height: 1.5em !important;
      margin-bottom: 20px !important;
    }
  }
`;
