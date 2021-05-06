export const Main: React.FC = ({ children }) => {
  return (
    <>
      <div className="arrow"></div>
      <main>{children}</main>
      <style jsx>{`
        .arrow {
          margin-top: 6px;
          padding-top: 11px;
          background: url(/assets/arrow.gif) no-repeat 25px 0;
        }

        main {
          border-radius: 5px;
          height: 100px;
          background: #fff;
        }
      `}</style>
    </>
  );
};
