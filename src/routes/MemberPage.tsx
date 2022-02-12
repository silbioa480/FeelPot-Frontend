import React from "react";

type Props = {
  children: React.ReactNode;
};

function MemberPage({ children }: Props) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "30%", flexDirection: "row" }}>Menu Bar</div>
      <div>{children}</div>
    </div>
  );
}

export default MemberPage;
