import { useNavigate ,useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BloggDetails = () => {
    const{id}= useParams()
    const history = useNavigate();
    const {data:blog,error,isPending} = useFetch('http://localhost:8000/blogs/'+id)
    const handleDelete = () =>{
        fetch('http://localhost:8000/blogs/' + blog.id,{
            method: 'DELETE'
        }).then(()=>{
            history("/");
        })
    }
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete Blogg</button>
                </article>
            )

            }
        </div>
      );
}
 
export default BloggDetails;