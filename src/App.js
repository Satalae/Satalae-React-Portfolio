import './App.css';
//Import the completed component return here
import MainPage from './components/Mainpage';

//Insert component in middle w/ className
function App() {
    return(
        <div className='my-site'>
            <MainPage />
        </div>
    );
}

export default App;