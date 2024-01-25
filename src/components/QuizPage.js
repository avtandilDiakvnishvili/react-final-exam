// QuizPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, Radio, Button } from 'antd';
import { useNavigate } from 'react-router-dom';


const QuizPage = () => {
    const navigate = useNavigate();

    const { level, category } = useParams();
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);


    useEffect(() => {

        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };
        const fetchData = async () => {
            try {
                const { data } = await axios.get('https://the-trivia-api.com/v2/questions', {
                    params: {
                        limit: 5, // Number of questions you want to fetch
                        difficulties: level,
                        categories: category
                    }
                });
                console.log(data)
                const questions = data.map((question) => {
                    const answers = [question.correctAnswer, ...question.incorrectAnswers];
                    shuffleArray(answers);

                    return { ...question, answers };
                });
                setQuestions(questions);


            } catch (error) {
                console.error('Error fetching questions: ', error);
            }
        };
        fetchData();
    }, [level, category]);

    const handleNextQuestion = () => {
        if (selectedAnswer === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
        setSelectedAnswer('');
        setCurrentQuestion(currentQuestion + 1);
    };
    const goToHome = () => {
        navigate(`/`);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            {questions.length > 0 && currentQuestion < questions.length ? (
                <div>
                    <Card title={`Question ${currentQuestion + 1}`}>
                        <p>{questions[currentQuestion].question.text}</p>
                        <Radio.Group onChange={(e) => setSelectedAnswer(e.target.value)} value={selectedAnswer}>
                            {questions[currentQuestion].answers.map((answer, index) => (
                                <Radio key={index} value={answer}>{answer}</Radio>
                            ))}
                        </Radio.Group>
                    </Card>
                    <br />
                    <Button type="primary" onClick={handleNextQuestion}>Next</Button>
                </div>
            ) : (
                <div>
                    <h1>Quiz Completed!</h1>
                    <p>Your score: {score}</p>
                    <Button type="primary" onClick={goToHome}>Start New</Button>
                </div>
            )}
        </div>
    );
};

export default QuizPage;
