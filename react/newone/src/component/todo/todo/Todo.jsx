import React,{useState} from "react";

const Todo = () =>{
    const [text,setText]=useState("")
    const [todoarr,setTodoarr] = useState ([])
    const handleaddtodo = () => {
        let newone = {
            title:text,
            id:Math.floor(Math.random()*1000),
            status:false
        }
        setTodoarr([...todoarr,newone])
        console.log(todoarr);
        setText("")
    }


    const changecomfun = (id) => {
      setTodoarr(todoarr.map((todo)=>  todo.id===id ? {...todo, status:true}:todo ))
    console.log(id);
    
    }

    const removefun = (id) => {
        setTodoarr(todoarr.filter((todo) =>  todo.id !== id ))
    }


    return (
			<>
				<input
					onChange={(el) => setText(el.target.value)}
					placeholder="Enter your todo task"
					type="text"
				/>
				<button onClick={handleaddtodo}>Submit</button>

				<div>
					<ul>
						{todoarr.map((el) => (
							<li key={el.id}>
								{el.title}
								{"-------->"}
								{el.status ? "Completed" : "Not completed"}

								<button
									onClick={() => {
										changecomfun(el.id);
									}}
								>
									{" "}
									Completed
								</button>
								<button
									onClick={() => {
										removefun(el.id);
									}}
								>
									{" "}
									Remove
								</button>
							</li>
						))}
					</ul>
				</div>

				<div>
					<ul></ul>
				</div>
			</>
		);
}

export default Todo




