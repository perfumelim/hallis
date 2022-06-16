import React from "react";
import style from "components/ErrorBox/style";

interface MessageProps {
  children: React.ReactNode;
}

const { Wrapper } = style;
function ErrorBox({ children }: MessageProps) {
  return <Wrapper>{children}</Wrapper>;
}

export default ErrorBox;
