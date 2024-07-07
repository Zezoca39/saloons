import React from 'react';
import './comentariosOverlay.css';

const CommentOverlay = ({ comments, onClose, onSearchChange, onSortChange }) => {
  return (
    <div className="overlay-comments" onClick={onClose}>
      <div className="overlay-content-comments" onClick={(e) => e.stopPropagation()}>
        <div className="overlay-header-comments">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="search-bar-comments"
            onChange={onSearchChange}
          />
          <select className="sort-dropdown-comments" onChange={onSortChange}>
            <option value="date">Sort by Date</option>
            <option value="lowest_rating">Sort by Lowest Rating</option>
            <option value="highest_rating">Sort by Highest Rating</option>
          </select>
          <span className="close-button-comments" onClick={onClose}>&times;</span>
        </div>
        <div className="overlay-card-comments">
          {comments.map((comment, index) => (
            <div key={index} className="comment-card">
              <img src={comment.profilePicture} alt={`${comment.name}'s profile`} className="profile-picture-comments" />
              <div className="comment-content">
                <div className="comment-name">{comment.name}</div>
                <div className="comment-text">{comment.comment}</div>
                <div className="comment-images">
                  {comment.images.map((image, idx) => (
                    <img key={idx} src={image} alt="comment" className="comment-image" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="add-comment-button-comments">Add Comment</button>
      </div>
    </div>
  );
};

export default CommentOverlay;
