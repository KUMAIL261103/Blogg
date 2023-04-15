import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
const Create = () => {
    const [title,setTitle] = useState('');
     const [body,setbody] = useState('');
     const [author,setAuthor] = useState('Kumail');
     const [isPending,setIsPending] = useState(false);
     const history = useNavigate();
     const handleSubmit = (e) =>{
        e.preventDefault();
        setIsPending(true);
        const  blog ={title,body,author};
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers:{"Content-type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added");
            setIsPending(false);
            history("/");
        })
     }
    return ( 
        <div className="create">
            <h2>Add a new Blogg</h2>
            <form onSubmit={handleSubmit}>
                <label>Blogg title:</label>
            <input type="text" required value={title}
            onChange={(e)=>setTitle(e.target.value)}></input>
            <label>Blog body:</label>
            <textarea required  value={body}
            onChange={(e)=>setbody(e.target.value)}/>
            <label>Blog author:</label>
            <input type="text" required value={author}
            onChange={(e)=>setAuthor(e.target.value)}></input>
            {!isPending &&<button>Add Blogg</button>}
            {isPending &&<button disabled>Loading</button>}
            </form>
        </div>
     );
}
 
export default Create;