import React, { useState, useEffect } from 'react';
import ReviewForm from './ratings'
import { BASE_URL } from '../config';

export default function Comments({ productId }) { // Pass productId as a prop

  const [comments, setComments] = useState([]);
  const [showcomments,setshowcomments] = useState(0)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/showcomments/${productId}`);
        if (response.ok) {
          const data = await response.json();
          setComments(data); // Update comments state with fetched data
        } else {
          console.error("Failed to fetch comments");
        }
      } catch (err) {
        console.error("Error fetching comments:", err);
      }
    };

    fetchData();
  }, [showcomments]);
  const [commentValue, setCommentValue] = useState(''); // State for comment input value

  const handleCommentChange = (event) => {
    setCommentValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    const user = localStorage.getItem('firstname')
    event.preventDefault(); // Prevent default form submission behavior

    if (!commentValue) { // Check if comment has a value
      console.warn("Please enter a comment before submitting.");
      return;
    }
    if (!user) { // Check if comment has a value
      console.warn("Please login before submitting.");
      return;
    }

    try {
        
      const response = await fetch(`${BASE_URL}/api/addcomment`, {
        method: 'POST', // Specify POST method for adding comments
        headers: { 'Content-Type': 'application/json' }, // Set Content-Type header
        body: JSON.stringify({ productId, comment: commentValue,username:user }), // Send data as JSON
      });

      if (response.ok) {
        setshowcomments(showcomments + 1);
        const newComment = await response.json(); // Get the newly added comment
        setComments([...comments, newComment]); // Add new comment to state
        setCommentValue(''); // Clear comment input after successful submission
      } else {
        console.error("Failed to add comment");
      }
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };

  return (
    <>
    <div className="commnetform">
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Comments"
          value={commentValue}
          onChange={handleCommentChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
    <h1>Comments:-</h1>
      <div className="comments-grid">
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <h3>{comment.comment}</h3>
          <h6 style={{backgroundColor:'lightgray'}}>Commented By:- {comment.username} at {new Date(comment.datetime).toLocaleString('en-US', { date: 'short', time: 'short' })}</h6>
          {/* <ReviewForm/> */}
          <hr />
        </div>
      ))}
    </div>    </>
  );
}
