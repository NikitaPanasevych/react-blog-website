import './App.css';
import Navbar from './components/Navbar';
import Button from '@mui/material/Button';
import Post from './components/Post';
import { TextField } from '@mui/material';
import {useState} from "react"


function App() {

  const [isExpanded, setIsExpanded] = useState(false)
  const [postContent, setPostContent] = useState({
    title:"",
    text:""
  })
  const[postContentArray, setPostContentArray] = useState([])

  const handleExpansion = () => {
    setIsExpanded(true)
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setPostContent(prevValue =>{
      return{
        ...prevValue,
        [name]:value
      }
    })
  }

  const handlePostCreation = () =>{
    setPostContentArray(prevValue=>{return([...prevValue, postContent])})
    setPostContent({
      title:"",
      text:""
    })
  }

  function deleteNote(id) {
    setPostContentArray(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App w-screen h-screen grid bg-[#3330E4]">
      <Navbar />
      {isExpanded ? 
      <div className="createPostField w-[700px] min-h-[500px] max-h-[500px] m-auto mt-[40px] pt-8 mb-10 rounded-xl bg-white">
            <TextField name='title' value={postContent.title} onChange={handleChange} id="standard-basic" className="w-3/4 h-16" label="Title" variant="standard" />
            <TextField
          name='text'
          value={postContent.text}
          id="standard-multiline-flexible"
          onChange={handleChange}
          className='w-3/4 '
          label="Content"
          multiline
          maxRows={10}
          variant="standard"
        />
        <p className='pt-10'><Button onClick={handlePostCreation} className='w-1/3' variant="contained">Post</Button></p>
        </div>
      :
      <div className="createPostField w-[700px] m-auto mt-[8px] pb-10 pt-10 rounded-xl bg-white"> 
      <Button onClick={handleExpansion} variant="contained">Start Writing</Button>
      </div>
      }
      <div className='w-[90vw] flex flex-wrap m-auto'>
        {postContentArray.map((postContentItem, index)=>{
          return(
            <Post 
          title={postContentItem.title} 
          text={postContentItem.text} 
          key={index}
          id={index} 
          onDelete={deleteNote} 
            />
            )
          })}
      </div>
    </div>
  );
}

export default App;
