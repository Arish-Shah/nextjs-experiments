interface ContentProps {
  children: React.ReactNode;
}

export function Content({ children }: ContentProps) {
  return (
    <div className="bg-transparent bg-twttr-arr bg-no-repeat bg-scroll pt-[11px] mt-[6px]">
      <div className="bg-white rounded-md">
        {children}
      </div> 
    </div>
  );
}
