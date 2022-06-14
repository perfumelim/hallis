import React from "react";
import { images } from "images/index";
import style from "components/HomeIcon/style";

const { Wrapper, Icon } = style;
function HomeIcon() {
  return (
    <Wrapper>
      <a href="https://mousai.club">
        <Icon src={images.mousaiLogo}></Icon>
      </a>
    </Wrapper>
  );
}

export default HomeIcon;
