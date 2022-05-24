import React, { Children } from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { auth } from "../firebase"
// export default function PrivateRoute({ component: Component, ...rest,Children }) {

  export default function PrivateRoute({  component:Component,...rest }) {
  const { currentUser } = useAuth()
  const user=auth.currentUser
console.log("current user "+currentUser)


  return (
<>
   





    <Route
      {...rest}
      render={props => {
        
        return currentUser ?<Component {...props} /> : <Redirect to="/login" /> 
        
      

        
    
      }}
    ></Route>

{/* 
<Route
      {...rest}
      render={props => {
        
        return user.emailVerified || currentUser ?<Component {...props} /> : <Redirect to="/verify-email" /> 
        
      

        
    
      }}
    ></Route> */}



    
</>
  )
}



// import React from 'react'
// import { Route, Redirect } from "react-router-dom";
// import propTypes from "prop-types";
// import { useAuth } from "../contexts/AuthContext";

// const PrivateRoute = ({ children, ...rest }) => {
//   const { currentUser } = useAuth();
//   console.log(currentUser, "here");

//   if (currentUser.user && !currentUser.isVerified) {
//     return(
//     <Route {...rest}>
//       {currentUser.user && currentUser.isVerified ? (
//         children
//       ) : (
//         <Redirect to="/verify-email" />
//       )}
//     </Route>


//     )
//   } else {
//     return (
//       <Route {...rest}>
//         {currentUser.user && currentUser.isVerified ? (
//           children
//         ) : (
//           <Redirect to="/login" />
//         )}
//       </Route>
//     );
//   }
// };

// export default PrivateRoute;

// PrivateRoute.propTypes = {
//   children: propTypes.node.isRequired,
// };
