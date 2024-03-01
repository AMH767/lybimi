import { Accordion } from "react-bootstrap";

const MunfirmAccordion = ({ title, event }) => {
  return (
    <div className="card">
      <Accordion.Toggle as={"h5"} className="card-header" eventKey={event}>
        {title}
        <i className="fas fa-chevron-right" />
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={event} className="content">
        <div className="card-body">
          <p>
            On 
          </p>
        </div>
      </Accordion.Collapse>
    </div>
  );
};
export default MunfirmAccordion;
