interface ContentProps {
  children: React.ReactNode;
}

export function Content({ children }: ContentProps) {
  return (
    <div className="bg-transparent bg-tw-arr2 bg-no-repeat bg-scroll bg-[25px_0px] pt-[11px] mt-[16px]">
      <div className="bg-white bg-repeat bg-scroll bg-[0] rounded-[5px]">{children}</div>
    </div>
  );
}
