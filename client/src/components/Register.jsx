import React from "react"


const Register = (props) => {
 return (
   <div className="registerCon">
     <div className="customRow">
       <img
         className="imageStyle"
         alt="avatar"

       />
       <div className="registerCol" sm={12}>
         <form className="registerForm" 
        //  onSubmit={submit}
        >
           <div className="form-group">
             <label htmlFor="name">Name</label>
             <input
              //  onChange={update}
               name="name"
               type="text"
               className="form-control"
               placeholder="Enter Your Name"
             />
             <label htmlFor="email">Email</label>
             <input
              //  onChange={update}
               name="email"
               type="email"
               className="form-control"
               placeholder="Enter Your Email"
             />
             <label htmlFor="password">Password</label>
             <input
               name="password"
              //  onChange={update}
              //  value={password}
               type="password"
               className="form-control"
             />
           </div>
           <button type="submit" value="Submit" data-type="register">
             Submit
           </button>
         </form>
       </div>
     </div>
   </div>
 );
}



export default Register
