import 'bootstrap/dist/css/bootstrap.css';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { answer_url, question_url } from './constants/urls';

import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';

import AnswerCard from './components/Card/AnswerCard';
import QuestionCard from './components/Card/QuestionCard';
import AnswerForm from './components/Form/AnswerForm';
import QuestionForm from './components/Form/QuestionForm';
import AnswerSearch from './components/Search/AnswerSearch';

import Error from './pages/Error';
import Home from './pages/Home';

function App() {

  const [answer, setAnswer] = useState([]);
  const [question, setQuestion] = useState([]);
  const [filteredAnswer, setFilteredAnswer] = useState(answer);

  const getAllAnswer = () => {
    axios
      .get(answer_url)
      .then(response =>
        setAnswer(response.data)
      );
  }

  const getAllQuestion = () => {
    axios
      .get(question_url)
      .then(response =>
        setQuestion(response.data)
      );
  }

  const handleAnswerSubmit = data => {
    axios
      .post(answer_url, {
        fullname: data.fullname,
        registration: data.registration,
        questionId: data.questionId,
        sourceCode: data.sourceCode
      })
      .then(res => {
        setAnswer(prevAnswer => {
          return [...prevAnswer, res.data];
        });
      });
  }

  const handleQuestionSubmit = data => {
    axios
      .post(question_url, {
        title: data.title,
        description: data.description,
        input: data.input,
        output: data.output
      })
      .then(res => {
        setQuestion(prevQuestion => {
          return [...prevQuestion, res.data];
        });
      });
  }

  const handleAnswerDelete = id => {
    axios
      .delete(answer_url + `/${id}`)
      .then(() => {
        setAnswer(answer.filter(res => res.id !== id));
      });
  }

  const handleQuestionDelete = id => {
    axios
      .delete(question_url + `/${id}`)
      .then(() =>
        setQuestion(question.filter(res => res.id !== id))
      );
  }

  const handleSearch = ch => {
    const newAnswer = answer.filter(data => {
      return data.fullname.toLowerCase().startsWith(ch.toLowerCase());
    });
    setFilteredAnswer(newAnswer);
  }

  useEffect(() => {
    getAllAnswer();
    getAllQuestion();
  }, []);

  return (
    <div className='d-flex flex-column min-vh-100'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/answer'
            element={
              <div className='row'>
                <div className='col'>
                  <QuestionCard card={question} />
                </div>
                <div className='col'>
                  <AnswerForm form={handleAnswerSubmit} />
                </div>
              </div>
            } />
          <Route path='/question'
            element={
              <div className='row'>
                <div className='col'>
                  <QuestionCard card={question} handleDelete={handleQuestionDelete} />
                </div>
                <div className='col'>
                  <QuestionForm form={handleQuestionSubmit} />
                </div>
              </div>
            }
          />
          <Route path='/submissions'
            element={
              <div>
                <AnswerSearch answersearch={handleSearch} />
                <AnswerCard
                  answercard={answer}
                  filteredAnswerCard={filteredAnswer}
                  handleDelete={handleAnswerDelete}
                />
              </div>
            }
          />
          <Route path='/*' element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );

}

export default App;
