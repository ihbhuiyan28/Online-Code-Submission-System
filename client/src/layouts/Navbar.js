import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <header className='bg-light border-bottom mb-4 py-4'>
            <div className='d-flex flex-wrap align-items-center justify-content-center'>
                <Link className='navbar-brand px-4' to=''>Home</Link>
                <Link className='navbar-brand px-4' to='/answer'>Answer</Link>
                <Link className='navbar-brand px-4' to='/question'>Question</Link>
                <Link className='navbar-brand px-4' to='/submissions'>Submissions</Link>
            </div>
        </header>
    );

}

export default Navbar;
