// HomePage.js
import React, { useState } from 'react';
import { Form, Select, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

const { Option } = Select;

const HomePage = () => {
    const navigate = useNavigate();
    const [level, setLevel] = useState('');
    const [category, setCategory] = useState('');

    const handleStartQuiz = () => {
        navigate(`/quiz?level=${level}&category=${category}`);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>Choose Level and Category</h1>
            <Form style={{ width: '300px', margin: 'auto' }}>
                <Form.Item label="Level">
                    <Select value={level} onChange={setLevel}>
                        <Option value="easy">Easy</Option>
                        <Option value="medium">Medium</Option>
                        <Option value="hard">Hard</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Category">
                    <Select value={category} onChange={setCategory}>
                        <Option value="">All</Option>
                        <Option value="9">General Knowledge</Option>
                        <Option value="10">Entertainment: Books</Option>
                        <Option value="11">Entertainment: Film</Option>
                        <Option value="12">Entertainment: Music</Option>
                        <Option value="13">Entertainment: Musicals & Theatres</Option>
                        <Option value="14">Entertainment: Television</Option>
                        <Option value="15">Entertainment: Video Games</Option>
                        <Option value="16">Entertainment: Board Games</Option>
                        <Option value="17">Science & Nature</Option>
                        <Option value="18">Science: Computers</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={handleStartQuiz}>Start Quiz</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default HomePage;
