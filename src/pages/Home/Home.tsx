import { useNavigate } from 'react-router-dom';
import "./home.scss";
import Button from '../../components/button/Button';

const home = () => {
  const navigate = useNavigate();

  const handleStartButton = () => {
    navigate("/intro");
  }

  return (
 <>
 <div className='home-container'>
 <Button customClassName="custom-button-home"  text="Start" onClick={handleStartButton} />
 </div>
 </>
  )
}

export default home