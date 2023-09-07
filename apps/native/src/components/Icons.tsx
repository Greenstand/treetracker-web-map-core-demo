import * as React from "react";
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";

export const NotificationIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    {...props}>
    <Path
      fill="#000"
      d="M25.455 20.364h-1.273V10.182C24.182 4.568 19.614 0 14 0 8.386 0 3.818 4.568 3.818 10.182v10.182H2.545a1.272 1.272 0 1 0 0 2.545H8.91A5.096 5.096 0 0 0 14 28a5.096 5.096 0 0 0 5.09-5.09H25.456a1.272 1.272 0 1 0 0-2.546ZM14 25.454a2.548 2.548 0 0 1-2.545-2.545h5.09A2.548 2.548 0 0 1 14 25.455Zm7.636-5.09H6.364V10.182c0-4.212 3.425-7.637 7.636-7.637s7.636 3.425 7.636 7.637v10.182Z"
    />
  </Svg>
);

export const SearchIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#000"
        d="m27.105 25.504-6.664-6.931a11.269 11.269 0 0 0 2.653-7.268C23.094 5.072 18.022 0 11.789 0 5.555 0 .484 5.072.484 11.305S5.555 22.61 11.789 22.61c2.34 0 4.57-.706 6.476-2.046l6.715 6.984c.28.291.658.452 1.063.452a1.476 1.476 0 0 0 1.063-2.496ZM11.79 2.949c4.607 0 8.356 3.748 8.356 8.356 0 4.607-3.749 8.356-8.356 8.356-4.608 0-8.356-3.749-8.356-8.356 0-4.608 3.748-8.356 8.356-8.356Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h28v28H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const ArrowIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#000"
        d="M10.5 0 8.643 1.857l7.33 7.33H0v2.626h15.973l-7.33 7.33L10.5 21 21 10.5 10.5 0Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h21v21H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const HomeIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <G clipPath="url(#b)">
        <Path
          fill={props.color}
          d="M28.785 12.123 15.87.283a1.077 1.077 0 0 0-1.477.02l-12.2 11.841a1.077 1.077 0 0 0-.326.773v17.007c0 .594.482 1.076 1.076 1.076h8.97c.595 0 1.076-.482 1.076-1.076V22.03h5.024v7.894c0 .594.481 1.076 1.076 1.076h8.97c.594 0 1.076-.482 1.076-1.076V12.917c0-.302-.126-.59-.349-.794Zm-1.803 16.724h-6.818v-7.893c0-.595-.482-1.077-1.076-1.077h-7.176c-.594 0-1.076.482-1.076 1.077v7.893H4.019V13.372L15.162 2.556l11.82 10.834v15.457Z"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color} d="M0 0h31v31H0z" />
      </ClipPath>
      <ClipPath id="b">
        <Path fill={props.color} d="M0 0h31v31H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const WalletIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    {...props}>
    <G fill={props.color} clipPath="url(#a)">
      <Path d="M28.165 7.743h-.386V3.998a2.838 2.838 0 0 0-2.835-2.836H4.38a4.383 4.383 0 0 0-4.357 3.95C-.01 5.267.002 3.873.002 25.46a4.382 4.382 0 0 0 4.377 4.378h23.786A2.838 2.838 0 0 0 31 27.002V10.58a2.838 2.838 0 0 0-2.835-2.836ZM4.38 3.11h20.564c.49 0 .888.398.888.888v3.745H4.38a2.433 2.433 0 0 1-2.428-2.316A2.433 2.433 0 0 1 4.38 3.11Zm23.785 24.78H4.38c-1.34 0-2.43-1.09-2.43-2.43V8.953a4.352 4.352 0 0 0 2.43.738h23.785c.49 0 .887.398.887.888v3.947h-7.327a4.531 4.531 0 0 0-4.526 4.526 4.531 4.531 0 0 0 4.526 4.526h7.327v3.424c0 .49-.398.888-.887.888Zm.887-6.26h-7.327a2.581 2.581 0 0 1-2.579-2.578 2.581 2.581 0 0 1 2.579-2.578h7.327v5.157Z" />
      <Path d="M22.084 20.463a1.411 1.411 0 1 0 0-2.822 1.411 1.411 0 0 0 0 2.822Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color} d="M0 0h31v31H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const OfferIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}>
    <G fill={props.color} clipPath="url(#a)">
      <Path
        stroke={props.color}
        strokeWidth={0.3}
        d="M26.318.168A1.086 1.086 0 0 0 25.27.106L22 1.66 18.697.104a1.086 1.086 0 0 0-.93.002l-3.27 1.555L11.195.105a1.088 1.088 0 0 0-.93.001L6.996 1.66 3.73.107a1.086 1.086 0 0 0-1.554.982v26.824c0 .6.486 1.087 1.087 1.087h22.474c.601 0 1.087-.487 1.087-1.087V1.088c0-.374-.19-.72-.506-.92Zm-1.669 26.657H4.35V2.81l2.18 1.037c.295.14.638.14.934 0l3.269-1.555 3.303 1.557c.296.139.636.138.931-.002l3.269-1.555 3.305 1.557c.293.139.635.138.93-.002L24.65 2.81v24.015Z"
      />
      <Path d="M10.767 7.686a3.411 3.411 0 0 0-3.408 3.407 3.411 3.411 0 0 0 3.408 3.408 3.411 3.411 0 0 0 3.407-3.408 3.411 3.411 0 0 0-3.407-3.407Zm0 4.64a1.234 1.234 0 0 1 0-2.465c.68 0 1.232.553 1.232 1.232 0 .68-.553 1.233-1.232 1.233ZM18.234 15.153a3.411 3.411 0 0 0-3.407 3.408 3.411 3.411 0 0 0 3.407 3.407 3.41 3.41 0 0 0 3.407-3.407 3.411 3.411 0 0 0-3.407-3.408Zm0 4.64a1.234 1.234 0 0 1 0-2.465c.68 0 1.232.553 1.232 1.232 0 .68-.553 1.232-1.233 1.232ZM20.741 8.583a1.088 1.088 0 0 0-1.538.003L8.583 19.243a1.087 1.087 0 1 0 1.54 1.536l10.62-10.658a1.088 1.088 0 0 0-.002-1.538Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color} d="M0 0h29v29H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const TermIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill={props.color}
        d="M28.578 20.102V7.266a2.425 2.425 0 0 0-2.422-2.422h-1.574v1.21a1.21 1.21 0 1 1-2.422 0v-1.21h-5.51v1.21a1.21 1.21 0 1 1-2.421 0v-1.21h-5.45v1.21a1.21 1.21 0 1 1-2.422 0v-1.21H4.844a2.425 2.425 0 0 0-2.422 2.422v18.89a2.425 2.425 0 0 0 2.422 2.422h21.312a2.425 2.425 0 0 0 2.422-2.422 1.21 1.21 0 1 1 2.422 0A4.85 4.85 0 0 1 26.156 31H4.844A4.85 4.85 0 0 1 0 26.156V7.266a4.85 4.85 0 0 1 4.844-4.844h1.513V1.21a1.21 1.21 0 1 1 2.422 0v1.21h5.45v-1.21a1.21 1.21 0 1 1 2.421 0v1.21h5.51v-1.21a1.21 1.21 0 1 1 2.422 0v1.21h1.574A4.85 4.85 0 0 1 31 7.267v12.836a1.21 1.21 0 1 1-2.422 0ZM16.65 12.17a1.21 1.21 0 1 0-2.421 0v7.81a1.21 1.21 0 1 0 2.421 0v-7.81Zm-1.21 10.838a1.21 1.21 0 1 0 0 2.422 1.21 1.21 0 0 0 0-2.422Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color} d="M0 0h31v31H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const ArrowLeft = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}>
    <Path
      fill="#0D1028"
      d="m10.5 0 1.857 1.857-7.33 7.33H21v2.626H5.027l7.33 7.33L10.5 21 0 10.5 10.5 0Z"
    />
  </Svg>
);

export const ArrowDown = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}>
    <Path
      fill="#9597A2"
      d="m0 12.5 2.211-2.21 8.726 8.726V0h3.126v19.016l8.726-8.727L25 12.5 12.5 25 0 12.5Z"
    />
  </Svg>
);