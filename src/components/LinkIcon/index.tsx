import React from "react";
import { images } from "images/index";
import style from "./style";
const snsIcons = [images.twitterIcon, images.discordIcon];
const { Wrapper, Icon } = style;
export default function LinkIcon() {
  return (
    <Wrapper>
      {snsIcons.map((icon, idx) => {
        return <Icon key={idx} img={icon}></Icon>;
      })}
    </Wrapper>
  );
}
