import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Section({ children }: Props) {
  return (
    <div className="m-4 mt-10">
      <section>{children}</section>
    </div>
  );
}

export default Section;
