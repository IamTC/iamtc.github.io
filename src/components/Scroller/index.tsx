export interface ScrollerProps {
  next: string;
  back: string;
  children?: preact.ComponentChildren;
}

function Scroller({ next, back, children }: ScrollerProps) {
  const scroll = (event) => {
    if (event.deltaY > 0) {
      scrollNext(next);
    } else {
      scrollBack(back);
    }
  };

  const scrollNext = (next) => {
    if (next) {
      window.location.replace(next);
    }
  };

  const scrollBack = (back) => {
    if (back) {
      window.location.replace(back);
    }
  };

  return <div onWheel={scroll}>{children}</div>;
}

export default Scroller;
