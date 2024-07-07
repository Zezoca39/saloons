import React, { useState } from 'react';
import './comentarios.css';
import CommentOverlay from './comentariosOverlay';

const CommentList = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const comments = [
        {
            profilePicture: 'corteFeminino.jpg',
            name: "John Doe",
            comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            date: "2024-05-01",
            rating: "★★★★☆",
            images: ['corteFeminino.jpg']
        },
        {
            profilePicture: 'corteFeminino.jpg',
            name: "Jane Doe",
            comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            date: "2024-05-02",
            rating: "★★★★☆",
            images: []
        },
        {
            profilePicture: 'corteFeminino.jpg',
            name: "Alice Smith",
            comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            date: "2024-05-03",
            rating: "★★★★☆",
            images: ['corteFeminino.jpg', 'corteFeminino.jpg']
        },
        {
            profilePicture: 'corteFeminino.jpg',
            name: "Bob Johnson",
            comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            date: "2024-05-04",
            rating: "★★★★☆",
            images: []
        },
        {
            profilePicture: 'corteFeminino.jpg',
            name: "Alice Smith",
            comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            date: "2024-05-03",
            rating: "★★★★☆",
            images: ['corteFeminino.jpg', 'corteFeminino.jpg']
        },
        {
            profilePicture: 'corteFeminino.jpg',
            name: "Alice Smith",
            comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            date: "2024-05-03",
            rating: "★★★★☆",
            images: ['corteFeminino.jpg', 'corteFeminino.jpg']
        },
        {
            profilePicture: 'corteFeminino.jpg',
            name: "Alice Smith",
            comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            date: "2024-05-03",
            rating: "★★★★☆",
            images: ['corteFeminino.jpg', 'corteFeminino.jpg']
        }
    ];

    const handleShowMore = () => {
        setShowOverlay(true);
    };

    const handleCloseOverlay = () => {
        setShowOverlay(false);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredComments = comments.filter(comment =>
        comment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        comment.comment.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="comment-list-container">
            <div className="card-comment"><div className="titulo-comentarios">Comentários</div></div>
            <div className="card-comment">
                {filteredComments.slice(0, 3).map((comment, index) => (
                    <div key={index} className="commentcard">
                        <img src={comment.profilePicture} alt={`${comment.name}'s profile`} className="profile-picture" />
                        <div className="comment-content">
                            <div className="comment-name">{comment.name} | {comment.rating}</div>
                            <div className="comment-text">{comment.comment}</div>
                            <div className="comment-images">
                                {comment.images.map((image, idx) => (
                                    <img key={idx} src={image} alt="comment" className="comment-image" />
                                ))}
                            </div>
                            <div className="comment-date">{comment.date}</div>
                        </div>
                    </div>
                ))}
            </div>
            {comments.length > 3 && (
                <div className="show-more-container2">
                    <div className="show-more-text2" onClick={handleShowMore}>
                    Ver Mais →
                    </div>
                </div>
            )}
            {showOverlay && <CommentOverlay comments={comments} onClose={handleCloseOverlay} onSearchChange={handleSearchChange} />}
        </div>
    );
};

export default CommentList;
