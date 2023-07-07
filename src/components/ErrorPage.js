import '../styles/ErrorPage.css';
import HomeButton from './HomeButton';

function ErrorPage( {handleTitleChange} ) {
    return(
        <section className="wrapper errorPage">
            <h2>404 Error</h2>
            <p>What you're looking for doesn't exist!</p>
            <HomeButton handleTitleChange={handleTitleChange} />
        </section>
    )
}

export default ErrorPage;
