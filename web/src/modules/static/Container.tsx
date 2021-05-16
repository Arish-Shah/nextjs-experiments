import styled from "styled-components";

import { Content } from "@/components/ui/Content";

export const Container = styled(Content)`
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
    line-height: 1.4em;
  }

  p {
    line-height: 1.5em !important;
    margin-bottom: 20px !important;
  }

  ol {
    width: 92%;
    padding-left: 30px;
    margin-left: 4px !important;

    li {
      padding-bottom: 8px;
    }
  }

  &.full {
    p {
      width: 95%;
    }
  }
`;
