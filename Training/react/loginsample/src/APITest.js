import axios from 'axios'

function APITest() {

  function handleclick() {
    const url = 'http://localhost:8000/addition'
    axios.post(url).then((res) => {
      console.log(res.data)
    })
  }

  return (
    <div>
      <button onClick={handleclick}>Add</button>
    </div>
  );
}
  export default APITest;

