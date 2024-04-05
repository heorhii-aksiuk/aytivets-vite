import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Section({ children }: Props) {
  return (
    <div className="m-4">
      <section>{children}</section>
    </div>
  );
}

export default Section;
