import { useEffect, useState } from "react";
import Quiz from "./Quiz";
import FinishBox from "./FinishBox";
import { useParams } from "react-router-dom";

function shuffle<T>(array: T[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

type QuizType = {
  quiz: string;
  candidate: string[];
  answer: number;
  explain: string;
}

export default function QuizSystem() {
  const {quizName} = useParams();

  const [quizData, setQuizData] = useState<QuizType[] | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    fetch(`/${quizName}.json`)
    .then(data => data.json())
    .then(json => {
      shuffle(json);
      setQuizData(json);
    });
  }, []);

  const currentQuiz = quizData ? quizData![currentIdx] : null;

  const onButtonClicked = (idx: number) => {
    setShowAnswer(true);

    if(currentQuiz!.answer-1 == idx)
      setCorrectCount(correctCount + 1);
  }
  const onNextClicked = () => {
    setCurrentIdx(currentIdx + 1);
    setShowAnswer(false);
  }

  return (
    <>
      { !!quizData || <div>로딩 중..</div> }
      { currentQuiz && <Quiz
        quiz={currentQuiz!.quiz}
        list={currentQuiz!.candidate}
        answer={currentQuiz!.answer - 1}
        explain={currentQuiz!.explain}
        showAnswer={showAnswer}
        onClick={onButtonClicked}
        onNext={onNextClicked}
      /> }
      { currentQuiz === undefined && <FinishBox correctCount={correctCount} quizCount={quizData!.length}/>}
    </>
  )
}