import { useState } from 'react';

function AnswerForm({ form }) {

    const [answerForm, setAnswerForm] = useState({
        fullname: '', registration: '', questionId: '', sourceCode: ''
    });

    const { fullname, registration, questionId, sourceCode } = answerForm;

    const handleChange = event => {
        setAnswerForm(prevState => {
            return { ...prevState, [event.target.name]: event.target.value };
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        form(answerForm);
        setAnswerForm({
            fullname: '',
            registration: '',
            questionId: '',
            sourceCode: ''
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='mb-4 w-75'>
                <input
                    className='form-control'
                    type='text'
                    name='fullname'
                    id='fullname'
                    value={fullname}
                    onChange={handleChange}
                    placeholder='Fullname'
                    required
                >
                </input>
            </div>
            <div className='mb-4 w-75'>
                <input
                    className='form-control'
                    type='text'
                    name='registration'
                    id='registration'
                    value={registration}
                    onChange={handleChange}
                    placeholder='Registration'
                    required
                >
                </input>
            </div>
            <div className='mb-4 w-75'>
                <input
                    className='form-control'
                    type='text'
                    name='questionId'
                    id='questionId'
                    value={questionId}
                    onChange={handleChange}
                    placeholder='Question ID'
                    required
                >
                </input>
            </div>
            <div className='mb-4 w-75'>
                <textarea
                    className='form-control'
                    type='text'
                    name='sourceCode'
                    id='sourceCode'
                    rows='12'
                    value={sourceCode}
                    onChange={handleChange}
                    placeholder='Source Code'
                    required
                >
                </textarea>
            </div>
            <div className='row'>
                <div className='col-2 mb-4 d-grid text-center'>
                    <button
                        className='btn btn-outline-success'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );

}

export default AnswerForm;
