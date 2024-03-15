import { useState , useEffect } from "react"

const Tickets =|| (){
    const [ticket, setTicket] = useState();
  
    useEffect(() => {
        fetch("http://localhost:3000/ticket")
            .then((response) => response.json())
            .then((data) => {
                setTicket(data[0])
            })
      }, []);

      if (!ticket) return <div>Loading...</div>;
      return(
       <div>
         <article key={ticket.id}>
           <h1>{ticket.title}</h1>
           <h2>{ticket.priority}</h2>
           <p>{ticket.description}</p>
           <h3>{ticket.resolved.toString()}</h3>
         </article>
       </div>
      )
}




