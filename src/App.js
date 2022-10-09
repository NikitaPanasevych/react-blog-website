import './App.css';
import Navbar from './components/Navbar';
import Button from '@mui/material/Button';
import Post from './components/Post';
import { TextField } from '@mui/material';
import {useState} from "react"
import { motion, AnimatePresence } from 'framer-motion';
import { pink } from '@mui/material/colors';


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
    <div className="App w-screen h-screen grid bg-[#f3d2c1]">
      <Navbar />
      <AnimatePresence>
      {isExpanded && 
      (<motion.div 
      initial={{opacity:0, y:-20}}
      animate={{opacity:1, y:0}}
      exit={{opacity:0, y:-20}}
      transition={{duration:1, delay:1, ease:"easeInOut"}}
      className="createPostField w-[40em] h-[18em]  m-auto mt-[30px] pt-8 mb-10 rounded-xl bg-[#fef6e4] border-2 border-[#001858]">
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
        <p className='pt-10'><Button sx={{color: pink[500]}} onClick={handlePostCreation} className='w-1/3 ' variant="outlined"><strong>Post</strong></Button></p>
        </motion.div>)}
      </AnimatePresence>
      <AnimatePresence>
      {!isExpanded &&
      <motion.div
      initial={{opacity:0, y:-20}}
      animate={{opacity:1, y:0}}
      exit={{opacity:0, y:-20}}
      transition={{duration:1, ease:"easeInOut"}}
      className="absolute w-[30em] top-[40%] left-[37%] pb-10 pt-10 rounded-xl bg-white"> 
        <Button onClick={handleExpansion} variant="contained">Start Writing</Button>
      </motion.div>}
      </AnimatePresence>
      
      <div className='w-[90vw] flex flex-wrap mt-10 m-auto'>
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
