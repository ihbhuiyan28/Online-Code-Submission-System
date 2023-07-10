import { useLocation } from 'react-router-dom';

function QuestionCard({ card, handleDelete }) {

    const isPathAnswer = useLocation().pathname === '/answer' ? 1 : 0;

    return (
        <div className='row'>
            {
                card && card.map(data => {
                    const { id, title, description, input, output } = data;
                    return (
                        <div className='card col-sm-4 mx-4 mb-4' key={id}>
                            <div className='card-body'>
                                <p className='m-0'>ID: {id}</p>
                                <p className='m-0'>Title: {title}</p>
                                <p className='m-0'>Description: {description}</p>
                                <p className='m-0'>Input: {input}</p>
                                <p className='m-0'>Output: {output}</p>
                                {
                                    !isPathAnswer ? <div className='col-6 d-grid mx-auto p-2 text-center'>
                                        <button
                                            className='btn btn-sm btn-outline-danger'
                                            type='submit'
                                            onClick={
                                                () => handleDelete(id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </div> : console.log('Hello World!')
                                }
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );

}

export default QuestionCard;
