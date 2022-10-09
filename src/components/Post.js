import { Button } from "@mui/material";
import { motion } from 'framer-motion';

const Post = (props) => {


        const handleClick = () => {
          props.onDelete(props.id);
        }

    return(

            <motion.div
            initial={{opacity:0, y:-20}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:-20}}
            transition={{duration:0.5, ease:"easeInOut"}}
            whileHover={{scale: 1.1, y:-10}}
            className="mb-10 cursor-pointer min-w-[96px] max-w-[500px] mr-5 rounded-xl bg-[#fef6e4] border-2 border-[#001858] ">
                <h1 className="p-4 font-bold">{props.title}</h1>
                <p className="break-words text-left pl-5 pb-5 pr-5">{props.text}</p>
                <div className=" p-5">
                    <Button onClick={handleClick} variant="outlined" color="error">
                        Delete
                    </Button>
                </div>
            </motion.div>

    )
}

export default Post;