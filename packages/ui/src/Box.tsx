import styled from "styled-components/native";
import {
  colorProps,
  sizeProps,
  flexProps,
  borderProps,
  marginProps,
  paddingProps,
  BorderProps,
  ColorsInterface,
  FlexProps,
  MarginProps,
  PaddingProps,
  SizeProps,
} from "@sevenapps/theme";

export type BoxProps = {
  children?: React.ReactNode;
} & ColorsInterface &
  SizeProps &
  MarginProps &
  FlexProps &
  BorderProps &
  PaddingProps;

const Container = styled.View<BorderProps>`
  ${sizeProps}
  ${colorProps}
  ${borderProps}
  ${marginProps}
  ${paddingProps}
  ${flexProps}
`;

export const Box = ({ children, ...props }: BoxProps) => (
  <Container {...props}>{children}</Container>
);
