export type Position = {
  position?: string;
  period: {
    from: Date;
    to: Date;
  };
};

export type Project = {
  title: string;
  link?: string;
  positions: Position[];
  summary: string;
  tags: string[];
};
