import localFont from "next/font/local";

export const generalSans = localFont({
  src: [
    { path: "../public/fonts/general-sans-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/general-sans-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--nf-body",
  display: "swap",
});

export const vcr = localFont({
  src: "../public/fonts/vcr-osd-mono.ttf",
  variable: "--nf-eyebrow",
  display: "swap",
});

export const sfPixelate = localFont({
  src: "../public/fonts/sf-pixelate.woff2",
  variable: "--nf-billboard",
  display: "swap",
});

export const instrumentSerif = localFont({
  src: [
    {
      path: "../public/fonts/instrument-serif-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--nf-heading",
  display: "swap",
});

export const clashDisplay = localFont({
  src: "../public/fonts/clash-display-semibold.woff2",
  variable: "--nf-display",
  display: "swap",
});

export const fasthand = localFont({
  src: "../public/fonts/fasthand.ttf",
  variable: "--nf-hand",
  display: "swap",
});

export const chilanka = localFont({
  src: "../public/fonts/chilanka-regular.ttf",
  variable: "--nf-malayalam",
  display: "swap",
});
