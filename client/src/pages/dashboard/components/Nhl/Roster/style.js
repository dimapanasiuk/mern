import { Card } from "reactstrap";
import styled from "styled-components";
import theme from "style/theme";

export const DivFlex = styled.div`
  display: flex;
  align-items: center;
`;
export const Head = styled.h6`
  margin-bottom: 20px;
`;

export const CardStyle = styled(Card)`
  margin-bottom: 20px;
`;

export const H4 = styled.h4`
  color: ${theme.red};
`;

export const H5 = styled.h5`
  color: ${theme.green};
`;
