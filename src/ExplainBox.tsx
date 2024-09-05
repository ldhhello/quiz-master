import styled from "styled-components"

const HorizontalFlex = styled.div`
  display: flex;
  flex-direction: row;
`;
const Body = styled.div`
  box-sizing: border-box;

  background-color: lightgray;
  padding: 1.3rem;

  position: fixed;
  width: 100vw;
  height: 15rem;
  bottom: 0;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & h1 {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;
const NextButton = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  &:before {
    content: "> ";
  }
`;

type ExplainBoxType = {
  explain: string;
  onClick: () => void;
}
export default function ExplainBox({explain, onClick}: ExplainBoxType) {
  return (
    <Body>
      <HorizontalFlex>
        <h1>해설</h1>
        {/* <div style={{flexGrow: 1}}/>
        <div>X</div> */}
      </HorizontalFlex>
      
      <div>{explain}</div>

      <div style={{flexGrow: 1}}/>

      <HorizontalFlex>
        <div style={{flexGrow: 1}}></div>
        <NextButton onClick={onClick}>다음 문제</NextButton>
      </HorizontalFlex>
    </Body>
  )
}