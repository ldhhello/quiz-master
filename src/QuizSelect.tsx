import { useNavigate } from "react-router-dom";

export default function QuizSelect() {
  const navigate = useNavigate();

  return (
    <>
      <div>퀴즈를 선택하세요.</div>
      
      <ol>
        <li><button onClick={() => navigate('/quiz/joblife')}>성공적인 직업생활</button></li>
      </ol>
    </>
  )
}