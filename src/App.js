import './App.css';
import useFetchJobs from './components/useFetchJobs'

function App() {
  const {posts} = useFetchJobs()
  const data = posts.map((post) => {
     return <h2 key={post.id}>{post.title}</h2>
  })
  return (
    <div className="App">
        {data}
    </div>
  );
}

export default App;
