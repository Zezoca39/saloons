import React, { useState } from 'react';
import './comentarios.css';

const CommentList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const comments = [
        {
            profilePicture: 'https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg',
            name: "John Doe",
            comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            date: "2024-05-01",
            images: ['https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg']
        },
        {
            profilePicture: 'https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg',
            name: "Jane Doe",
            comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            date: "2024-05-02",
            images: []
        },
        {
            profilePicture: 'https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg',
            name: "Alice Smith",
            comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            date: "2024-05-03",
            images: ['https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg', 'https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg']
        },
        {
            profilePicture: 'https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg',
            name: "Bob Johnson",
            comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            date: "2024-05-04",
            images: []
        },
        {
            profilePicture: 'https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg',
            name: "Alice Smith",
            comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            date: "2024-05-03",
            images: ['https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg', 'https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg']
        },
        {
            profilePicture: 'https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg',
            name: "Alice Smith",
            comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            date: "2024-05-03",
            images: ['https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg', 'https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg']
        },
        {
            profilePicture: 'https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg',
            name: "Alice Smith",
            comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            date: "2024-05-03",
            images: ['https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg', 'https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg']
        }
    ];

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredComments = comments.filter(comment =>
        comment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        comment.comment.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="comment-list-container2">
            <div className="card-comment2">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Pesquisar por nome ou comentário"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="card-comment2">
                {filteredComments.map((comment, index) => (
                    <div key={index} className="commentcard2">
                        <img src={comment.profilePicture} alt={`${comment.name}'s profile`} className="profile-picture2" />
                        <div className="comment-content2">
                            <div className="comment-name2">{comment.name}</div>
                            <div className="comment-text2">{comment.comment}</div>
                            <div className="comment-images2">
                                {comment.images.map((image, idx) => (
                                    <img key={idx} src={image} alt="comment" className="comment-image2" />
                                ))}
                            </div>
                            <div className="comment-date2">{comment.date}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentList;
