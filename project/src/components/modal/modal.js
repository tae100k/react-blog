import styled from "styled-components";
import "./modal.css";
function Modal(props) {
  return (
    <StyledModal isClicked={props.isClicked}>
      <div className="info">
        <h3>{props.title}</h3>
        <p>{props.date}</p>
        <p>{props.desc}</p>
      </div>
      <div className="photo">
        <img alt={props.title} src={props.src} />
      </div>
    </StyledModal>
  );
}

const StyledModal = styled.div`
  position: center;
  display: ${(props) => (props.isClicked ? "flex" : "none")};
  border: 1px solid lightgrey;
  margin: 12px 32px;
  padding: 25px;
  flex-direction: row;
  justify-content: space-between;
  max-width: 700px;
`;

export default Modal;
