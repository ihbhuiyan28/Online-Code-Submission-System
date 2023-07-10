import { useState, useEffect } from 'react';

function AnswerSearch({ answersearch }) {

    const [answerSearch, setAnswerSearch] = useState('');

    const handleChange = event => {
        setAnswerSearch(event.target.value);
    }

    useEffect(() => {
        answersearch(answerSearch);
    }, [answerSearch]);

    return (
        <div className='container-fluid'>
            <form className='d-flex'>
                <input
                    className='form-control me-2 mb-4 w-25'
                    type='search'
                    value={answerSearch}
                    onChange={handleChange}
                    placeholder='Search by Fullname...'
                >
                </input>
            </form>
        </div>
    );

}

export default AnswerSearch;
