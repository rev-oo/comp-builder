import type { ComponentProps } from "react";

const H1 = ({ className, ...props }: ComponentProps<'h1'>) =>
  <h1 className={`${className} text-4xl font-bold`} {...props} />;

const H2 = ({ className, ...props }: ComponentProps<'h2'>) =>
  <h2 className={`${className} text-3xl font-bold`} {...props} />;

const H3 = ({ className, ...props }: ComponentProps<'h3'>) =>
  <h3 className={`${className} text-xl font-semibold`} {...props} />;

const H4 = ({ className, ...props }: ComponentProps<'h4'>) =>
  <h4 className={`${className} text-lg font-semibold`} {...props} />;

export {
  H1,
  H2,
  H3,
  H4,
};
