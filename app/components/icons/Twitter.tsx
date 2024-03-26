import * as React from "react";
import type { SVGProps } from "react";
const SvgTwitter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={128}
    height={128}
    className="twitter_svg__icon"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path
      fill="#2c2c2c"
      d="M692.875 229.563H788.7l-209.35 239.275 246.284 325.599H632.796L481.758 596.962 308.935 794.437h-95.883l223.921-255.931-236.262-308.943h197.735l136.526 180.5zM659.244 737.08h53.098L369.594 283.907h-56.98z"
    />
  </svg>
);
export default SvgTwitter;
