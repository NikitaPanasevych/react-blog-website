import { Button } from "@mui/material";

const Post = (props) => {

        const handleClick = () => {
          props.onDelete(props.id);
        }

    return(
        <div className="mb-10 min-w-[96px] max-w-[500px] mr-5 rounded-xl bg-white ">
            <h1 className="p-4 font-bold">{props.title}</h1>
            <p className="break-words text-left pl-5 pb-5 pr-5">{props.text}</p>
            <div className=" p-5">
                <Button onClick={handleClick} variant="outlined" color="error">
                    Delete
                </Button>
            </div>
            
        </div>
        
    )
}

export default Post;