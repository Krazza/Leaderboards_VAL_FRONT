import Spinner from 'react-bootstrap/Spinner';
import "./CustomSpinner.css"

function CustomSpinner() {
  return (
    <tr>
      <td>
      <Spinner className='spintowin' animation="border" role="status">
      <span className="visually-hidden">{"Loading..."}</span>
    </Spinner>
      </td>
    </tr>
  );
}

export default CustomSpinner;