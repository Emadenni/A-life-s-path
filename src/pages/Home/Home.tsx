import { useNavigate } from 'react-router-dom';
import "./home.scss";
import Button from '../../components/Button/Button';

const home = () => {
  const navigate = useNavigate();

  const handleStartButton = () => {
    navigate("/A-life-s-path/intro");
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