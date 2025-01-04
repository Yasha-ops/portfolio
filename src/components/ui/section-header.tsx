import { Badge } from "./badge";

interface SectionHeaderProps {
  badge: string;
  children: [
    React.ReactElement<typeof SectionHeaderTitle>,
    React.ReactElement<typeof SectionHeaderDescription>
  ];
}

export const SectionHeaderTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <h1 className="text-[36px] font-bold text-darkGray text-center mb-3">
      {children}
    </h1>
  );
};

export const SectionHeaderDescription: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return <h2 className="text-center text-secondary">{children}</h2>;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  children,
  badge,
}) => {
  return (
    <div className="flex flex-col justify-center max-w-[500px]">
      <div className="flex justify-center mb-3">
        <Badge>{badge}</Badge>
      </div>

      {children[0]}
      {children[1]}
    </div>
  );
};
