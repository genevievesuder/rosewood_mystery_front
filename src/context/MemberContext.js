import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotifContext } from '../context/NotifContext';
import { ViewContext } from './ViewContext';


const MemberContext = createContext()

const MemberProvider = ({children}) => {

const {view, setView} = useContext(ViewContext)
const {notif, setNotif} = useContext(NotifContext)
const navigate = useNavigate()
  const [members, setMembers] = useState([]);


  useEffect(() => {
      fetch("/customers")
      .then((res) => {
          if (res.ok) {
              res.json()
              .then((customers) => {
                  setMembers(customers);
              });
          }
      })
  }, []);

// const addMember = (e, formData) => {
//     e.preventDefault()
//     console.log(formData)
//     fetch("/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(formData)
//     })
//         .then(response => {
//         if (response.status === 201) {
//           response.json()
//           .then(userObj => {
//             setUser(userObj)
//             })
//         } else {
//           response.json().then(messageObj => setNotif(messageObj.errors))
//         }
//       })
//       // .catch(error => alert(error)) Dont need this line, right?
//   }


// const deletePost = () => {
//     fetch(`/posts/${id}`, {
//         method: "DELETE",
//     })
//         .then((r) => { 
//         if (r.status === 204) {
//             console.log("Post removed")
//             setPosts((currentPosts) => {
//             return currentPosts.filter(p => p.id !== id)
//             })
//         } else {
//             r.json()
//             .then(err => setNotification(err))
//         }        
//     }) 
// }

// const editPost = (e) => {
//     e.preventDefault()
//     fetch(`/posts/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(editedPost)
//     })
//        .then(res => {
//         if (res.status !== 200) {
//           res.json()
//           .then(messageObj => setNotification(messageObj.errors))
//         } else {
//           res.json()
//           .then(editedPost => setPosts(currentPosts => {
//             const index = currentPosts.findIndex(post => post.id === editedPost.id)
//             return [...currentPosts.slice(0, index), editedPost, ...currentPosts.slice(index + 1)]}))
//           setEditForm(false)
//           setEditedPost({
//             title: "",
//             content: "",
//             image:""
//           })
//         }
//        })
//   }
  
//   const handleChange = ({target: {name, value}}) => {
//     setEditedPost(currentPost => ({ 
//         ...currentPost,
//         [name]: value
//     }))
//   }

// const submitPost = (e) => {
//     e.preventDefault()
//     fetch("/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(newPost)
//     })
//        .then(res => {
//         if (res.status !== 201) {
//           res.json()
//           .then(messageObj => setNotification(messageObj.errors))
//         } else {
//           setPostForm(false)
//           res.json()
//           .then(newPost => setPosts(currentPosts =>
//             [newPost, ...currentPosts]))
//           setNewPost({
//             title: "",
//             content: "",
//             image:""
//           })
//         }
//       })
//   }

  
// addMember, updateMember, deleteMember
  return (
    <MemberContext.Provider value={{members, setMembers}}>
        {children}
    </MemberContext.Provider>
)
}

export {MemberContext, MemberProvider}