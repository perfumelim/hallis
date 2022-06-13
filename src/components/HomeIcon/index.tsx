import React from "react";
import { images } from "images/index";
import style from "components/HomeIcon/style";

const { Wrapper, Icon } = style;
function HomeIcon() {
  return (
    <Wrapper>
      <Icon src={images.mousaiLogo}></Icon>
    </Wrapper>
  );
}

export default HomeIcon;
