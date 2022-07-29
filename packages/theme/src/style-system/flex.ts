export interface FlexProps {
  flex: number;
  flexDir: "row" | "column" | "column-reverse" | "row-reverse";
  flexGrow: number;
  flexWrap: "nowrap" | "wrap" | "wrap-reverse";
  justifyContent:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  alignItems: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  alignSelf: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
}

export const flexProps = ({
  flex,
  flexDir,
  flexGrow,
  flexWrap,
  justifyContent,
  alignItems,
  alignSelf,
}: FlexProps) => `
  ${flex ? `flex: ${flex};` : ""}
  ${flexDir ? `flex-direction: ${flexDir};` : ""}
  ${flexGrow ? `flex-grow: ${flexGrow};` : ""}
  ${flexWrap ? `flex-wrap: ${flexWrap};` : ""}
  ${justifyContent ? `justify-content: ${justifyContent};` : ""}
  ${alignItems ? `align-items: ${alignItems};` : ""}
  ${alignSelf ? `align-self: ${alignSelf};` : ""}
`;
