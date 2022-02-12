import React from "react";

type Props = {
  children: React.ReactNode;
};

function Section({ children }: Props) {
  return <div style={{ marginTop: "50px" }}>{children}</div>;
}

export default Section;
