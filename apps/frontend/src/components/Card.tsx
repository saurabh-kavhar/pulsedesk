import type { ReactNode } from 'react';

type Props = {
  title?: string;
  children: ReactNode;
};

export default function Card({ title, children }: Props) {
  return (
    <div className="card">
      {title && <div className="cardTitle">{title}</div>}
      {children}
    </div>
  );
}
