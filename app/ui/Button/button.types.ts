import { PropsWithChildren } from "react";

interface InitialProps {
  [x: string]: any;
}

export type ButtonProps = PropsWithChildren<InitialProps>;
