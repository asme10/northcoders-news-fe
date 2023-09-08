// import axios from "axios";
// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { postCommentToArticle } from "./../api";

// const CommentAdd = () => {
//   const { articleId } = useParams();
//   const [user, setUser] = useState("");
//   const [body, setBody] = useState("");
//   const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     postCommentToArticle(articleId, newComment, user)
//       .then(() => {
//         setIsSubmitSuccessful(true);
//       })
//       .catch((err) => {
//         console.log(err);
//         setIsSubmitSuccessful(false);
//       });

//     setAuthor("");
//     setBody("");
//   };

//   return (
//     <div
//       className="container-fluid"
//       style={{
//         background:
//           "linear-gradient(to right top, #be789e, #a66d9a, #8d6495, #725b8e, #565285, #3f507f, #264d77, #05496d, #004a63, #044958, #18448d, #264644)",
//         paddingTop: "6rem",
//         minHeight: "100vh",
//         color: "#fff",
//       }}
//     >
//       <div className="container" style={{ maxWidth: "70%" }}>
//         <div className="row">
//           <div className="col-12">
//             {isSubmitSuccessful === true && (
//               <div className="alert alert-success" role="alert">
//                 Successfully submitted!
//               </div>
//             )}
//             {isSubmitSuccessful === false && (
//               <div className="alert alert-danger" role="alert">
//                 Sorry, please fill the field correctly!
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-md-8 offset-md-2">
//           <h1 className="my-4">Add Comment</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="authorInput" className="form-label">
//                 <h5> Username: </h5>
//               </label>
//               <input
//                 type="text"
//                 className="form-control p-3  "
//                 id="authorInput"
//                 placeholder="Enter your username"
//                 value={user}
//                 onChange={(e) => {
//                   setUser(e.target.value);
//                 }}
//                 required
//               />
//             </div>
//             <div className="mb-5 ">
//               <label htmlFor="commentInput" className="form-label">
//                 <h5> Comment:</h5>
//               </label>
//               <textarea
//                 className="form-control"
//                 id="commentInput"
//                 rows="3"
//                 value={newComment}
//                 onChange={(e) => {
//                   setBody(e.target.value);
//                 }}
//                 required
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="btn btn-primary p-3"
//               style={{ fontSize: "18px" }}
//             >
//               Submit Comment
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommentAdd;
