import { useNavigate } from "react-router-dom";
import styled from "styled-components"

const Body = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 2rem;

  & h1 {
    font-size: 5rem;
    font-weight: bold;
    color: green;
  }
`;

type FinishBoxType = {
  correctCount: number;
  quizCount: number;
}

export default function FinishBox({correctCount, quizCount}: FinishBoxType) {
  const navigate = useNavigate();

  return (
    <Body>
      <div>당신의 점수는..</div>
      <h1>{correctCount}/{quizCount}</h1>
      {correctCount == quizCount && <div>만점을 축하합니다!</div>}
      {correctCount < quizCount && <div>좀 더 노력해 보세요.</div>}

      <button onClick={ () => navigate('/') }>처음으로</button>
    </Body>
  )
}