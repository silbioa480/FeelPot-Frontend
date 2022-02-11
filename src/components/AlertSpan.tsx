import { Alert } from "react-bootstrap";

function AlertSpan(params: { msg: string }) {
  return (
    <Alert variant={"danger"} style={{ marginTop: "20px" }}>
      {params.msg}
    </Alert>
  );
}

export default AlertSpan;
