import React from "react";
import { images } from "images/index";
import style from "./style";
const { Wrapper, Icon } = style;

const IconGroups = [
  { id: 1, img: images.twitterIcon, url: "https://twitter.com/mousai_club" },
  { id: 2, img: images.discordIcon, url: "https://discord.gg/mc56HHPFKu" },
];

export default function LinkIcon() {
  return (
    <Wrapper>
      {IconGroups.map((data) => {
        return (
          <a href={data.url}>
            <Icon key={data.id} img={data.img}></Icon>
          </a>
        );
      })}
    </Wrapper>
  );
}
