export const media = {
  fold: `screen and (min-width: 280px)`,
  se: `screen and (min-width: 320px)`,
  mobile: `screen and (min-width: 375px)`,
  tablet: `screen and (min-width: 992px)`,
  smallLaptop: `screen and (min-width: 1024px)`,
  laptop: `screen and (min-width: 1200px)`,
  galaxyTap: `screen and (min-width: 1280px)`,
  wideTablet: `screen and (min-width: 1360px)`,
  mac: `screen and (min-width: 1440px)`,
  desktopNormal: `screen and (min-width: 1536px)`,
  desktopMiddle: `screen and (min-width: 1600px)`,
  desktopModdie2: `screen and (min-width: 1700px)`,
  desktopWide: `screen and (min-width: 1800px)`,
  wide: `screen and (min-width: 2000px)`,
  wide2: `screen and (min-width: 2100px)`,
  moreWide: `screen and (min-width: 2200px)`,
  monitor: `screen and (min-width: 2300px)`,
  normalMonitor: 'screen and (min-width: 2400px)',
  biggerMonitor: 'screen and (min-width: 2600px)',
};

export type Media = keyof typeof media;
