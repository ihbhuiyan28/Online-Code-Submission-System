import { useState } from 'react';

function AnswerCard({ answercard, filteredAnswerCard, handleDelete }) {

    let [tempState] = useState('');

    tempState = filteredAnswerCard.length === 0 ? answercard : filteredAnswerCard;

    return (
        <div className='row'>
            {
                tempState && tempState.map(data => {
                    const { id, fullname, registration, questionId, sourceCode } = data;
                    return (
                        <div className='card col-sm-3 mx-4 mb-4' key={id}>
                            <div className='card-body'>
                                <p className='m-0'>ID: {id}</p>
                                <p className='m-0'>Fullname: {fullname}</p>
                                <p className='m-0'>Registration: {registration}</p>
                                <p className='m-0'>Question ID: {questionId}</p>
                                <p className='m-0'>Source Code: <br></br> {sourceCode}</p>
                                <div className='col-6 d-grid mx-auto p-2 text-center'>
                                    <button
                                        className='btn btn-outline-danger'
                                        type='submit'
                                        onClick={
                                            () => handleDelete(id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );

}

export default AnswerCard;
