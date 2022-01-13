import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IParginParams {
  pageCount: number;
  active: number;
}

const PaginItem = styled.li`
  margin: 0 10px;
  width: 40px;
  height: 40px;
  border: 1px solid;
  border-radius: 5px;
  padding: 10px 0;

  &:hover {
    background-color: rgba(51, 47, 47, 0.1);
  }
  &.active {
    background-color: #87cfeb65;
  }
`;

function Pagin({ pageCount, active }: IParginParams) {
  let items: JSX.Element[] = [];

  for (let i = 1; i <= pageCount; i++) {
    items.push(
      <Link key={i} to={`/${i}`}>
        {i === active ? (
          <PaginItem className="page-item active">{i}</PaginItem>
        ) : (
          <PaginItem className="page-item">{i}</PaginItem>
        )}
      </Link>
    );
  }

  return (
    <Pagination
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        margin: "40px 0",
      }}
    >
      {items}
    </Pagination>
  );
}

export default Pagin;
