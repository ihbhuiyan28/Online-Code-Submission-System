import { useState } from 'react';

function QuestionForm({ form }) {

    const [formState, setFormState] = useState({
        title: '', description: '', input: '', output: ''
    });

    const { title, description, input, output } = formState;

    const handleChange = event => {
        setFormState(prevState => {
            return { ...prevState, [event.target.name]: event.target.value };
        });

    }

    const handleSubmit = event => {
        event.preventDefault();
        form(formState);
        setFormState({
            title: '', description: '', input: '', output: ''
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='mb-4 w-75'>
                <input
                    className='form-control'
                    type='text'
                    name='title'
                    id='title'
                    value={title}
                    onChange={handleChange}
                    placeholder='Title'
                    required
                >
                </input>
            </div>
            <div className='mb-4 w-75'>
                <textarea
                    className='form-control'
                    type='text'
                    name='description'
                    id='description'
                    rows='4'
                    value={description}
                    onChange={handleChange}
                    placeholder='Description'
                    required
                >
                </textarea>
            </div>
            <div className='mb-4 w-75'>
                <input
                    className='form-control'
                    type='text'
                    name='input'
                    id='input'
                    value={input}
                    onChange={handleChange}
                    placeholder='Input'
                    required
                >
                </input>
            </div>
            <div className='mb-4 w-75'>
                <input
                    className='form-control'
                    type='text'
                    name='output'
                    id='output'
                    value={output}
                    onChange={handleChange}
                    placeholder='Output'
                    required
                >
                </input>
            </div>
            <div className='col-2 d-grid text-center'>
                <button
                    className='btn btn-outline-success'
                    type='submit'
                >
                    Submit
                </button>
            </div>
        </form>
    );

}

export default QuestionForm;
