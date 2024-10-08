import styled from 'styled-components'
import ExplainBox from './ExplainBox';

const Title = styled.h1`
  font-size: 2rem;
  margin: 1rem;
  padding-bottom: 4rem;
  width: 60%;
  font-family: 'Pretendard-SemiBold';
`;
const QuizButtonBase = styled.button`
  background-color: white;
  border: 1px solid black;
  padding-top: 0.45rem;
  padding-bottom: 0.45rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 1rem;
  font-size: 1rem;
  transition: all 0.3s ease;

  width: 30rem;
  position: relative;

  &:before {
    margin-right: 0.2rem;
    display: inline-block;
    position: absolute;
    left: 0.5rem;
    width: 0.9rem;
  }
  &:after {
    margin-right: 0.2rem;
    display: inline-block;
    content: "";
    width: 0.9rem;
  }
`;
const QuizButton = styled(QuizButtonBase)`
  cursor: pointer;
  &:hover {
    background-color: #dedede;
  }
  &:before {
    content: "";
  }
`;
const QuizButtonFixed = styled(QuizButtonBase)<{ correct?: boolean }>`
  border-color: ${({ correct }) => correct ? "green" : "red"};
  cursor: default;
  &:before {
    content: "${({correct}) => correct ? "O" : "X"}";
    color: ${({ correct }) => correct ? "green" : "red"};
  }
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;

  & ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
  }
`;

type QuizType = {
  quiz: string;
  list: string[];
  showAnswer?: boolean;
  answer: number;
  explain: string;
  onClick: (idx: number) => void;
  onNext: () => void;
};
export default function Quiz({ quiz, list, showAnswer, answer, explain, onClick, onNext }: QuizType) {
  //const clickable = showAnswer || false;

  return (
    <Body>
      <Title>{quiz}</Title>
      <ul>
        {showAnswer || list.map((candidate, idx) => <li key={idx}>
          <QuizButton onClick={() => onClick(idx)}>{candidate}</QuizButton>
        </li>)}
        {showAnswer && list.map((candidate, idx) => <li key={idx}>
          <QuizButtonFixed correct={idx == answer}>{candidate}</QuizButtonFixed>
        </li>)}
      </ul>

      {showAnswer && <ExplainBox explain={explain} onClick={onNext} />}
    </Body>
  )
}