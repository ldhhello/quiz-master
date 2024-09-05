import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  gap: 3rem;

  & h1 {
    font-size: 2rem;
    font-family: 'Pretendard-Bold';
  }
  & ol {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }
`;

export default function QuizSelect() {
  const navigate = useNavigate();

  return (
    <Body>
      <h1>퀴즈를 선택하세요.</h1>
      
      <ol>
        <li><button onClick={() => navigate('/quiz/joblife')}>성공적인 직업생활</button></li>
        <li><button onClick={() => navigate('/quiz/gongup')}>공업 일반</button></li>
      </ol>
    </Body>
  )
}