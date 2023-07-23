import { useState, useEffect } from "react";
import axios from "axios";

export const useQuiz = (quizUrl) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestionSet, setCurrentQuestionSet] = useState([]);

  useEffect(() => {
    // RACE CONDITION 1
    if (!quizUrl) {
      // MOCK DATA

      const mockData = [
        // {
        //   question: "What is the capital of Spain?",
        //   type: "text",
        //   correctAnswer: "Madrid",
        // },
        // {
        //   question: "What is the capital of France?",
        //   type: "multiple",
        //   correctAnswer: "Paris",
        //   choices: [
        //     {
        //       answer: "Paris",
        //     },
        //     {
        //       answer: "London",
        //     },
        //     {
        //       answer: "Rome",
        //     },
        //     {
        //       answer: "Madrid",
        //     },
        //   ],
        // },
        // {
        //   question: "What is the capital of Germany?",
        //   type: "multiple",
        //   correctAnswer: "Berlin",
        //   choices: [
        //     {
        //       answer: "London",
        //     },
        //     {
        //       answer: "Rome",
        //     },
        //     {
        //       answer: "Madrid",
        //     },
        //     {
        //       answer: "Berlin",
        //     },
        //   ],
        // },
        // {
        //   question: "What is the capital of Italy?",
        //   type: "text",
        //   correctAnswer: "Rome",
        // },

        // mock data for personality quiz
        {
          question: "What is your favorite color?",
          type: "multiple",
          choices: [
            {
              answer: "Red",
            },
            {
              answer: "Blue",
            },
            {
              answer: "Green",
            },
            {
              answer: "Yellow",
            },
          ],
        },
        {
          question: "What is your favorite animal?",
          type: "text",
        },
      ];

      setTimeout(() => {
        setIsLoading(false);
        setCurrentQuestionSet(mockData);
      }, 1000);
      return;
    }

    //     // RACE CONDITION 2
    //     axios
    //       .get(quizUrl)
    //       .then((response) => {
    //         setIsLoading(false);
    //         setCurrentQuestionSet(response.data.results);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
  }, []);

  const handleAnswerChange = (questionIndex, answer) => {
    setUserResponses((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: answer,
    }));
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const getCurrentQuestion = () => {
    return currentQuestionSet[currentQuestionIndex];
  };

  const getTotalQuestions = () => {
    return currentQuestionSet.length;
  };

  const getSubmittedAnswers = () => {
    return userResponses;
  };

  const handleSubmit = () => {
    const answers = getSubmittedAnswers();

    // return more verbose array of objects that contains the answer, index, and question

    const formattedAnswers = Object.keys(answers).map((questionIndex) => {
      const question = currentQuestionSet[questionIndex].question;
      const answer = answers[questionIndex];
      return {
        question,
        answer,
        questionIndex,
      };
    });

    // TODO: Send data to backend
    console.log(formattedAnswers);
  };

  return {
    currentQuestionIndex,
    userResponses,
    isLoading,
    currentQuestionSet,
    setCurrentQuestionSet,
    handleAnswerChange,
    handleNextQuestion,
    handlePreviousQuestion,
    getCurrentQuestion,
    getTotalQuestions,
    getSubmittedAnswers,
    handleSubmit,
  };
};
