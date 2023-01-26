import Spinner from 'react-bootstrap/Spinner';
import './loader.css';
function Loader() {
  return <Spinner className={'loader'} animation="border" />;
}

export default Loader;