import React, { ReactNode } from "preact/compat";

const CardHeader = (props: { children: ReactNode; className?: string }) => {
  return <div className={props.className}>{props.children}</div>;
};

const CardContent = (props: { children: ReactNode; className?: string }) => {
  return <div className={props.className}>{props.children}</div>;
};

const CardFooter = (props: { children: ReactNode; className?: string }) => {
  return <div className={props.className}>{props.children}</div>;
};

function Card(props: { children: ReactNode; className?: string }) {
  return <div className={props.className}>{props.children}</div>;
}

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
