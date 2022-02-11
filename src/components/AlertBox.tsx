import { Alert } from "react-bootstrap";

function AlertBox(msg: string) {
  return <Alert variant={"danger"}>{msg}</Alert>;
}

export default AlertBox;
