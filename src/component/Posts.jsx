import React, { useState } from 'react';
import './Pagination.css';
import "bootstrap/dist/css/bootstrap.css";
import { Table } from 'react-bootstrap';

const Posts = ({ posts, loading }) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <input
        placeholder='search...'
        type="text"
        className='post_input mb-3'
        onChange={e => {
          setSearchTerm(e.target.value);
        }}
      />

      <div className="post_table">
        <Table striped hover table-responsive>
          <thead className='table-dark'>
            <tr>
              <th>No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Credit Card No</th>
              <th>Email</th>

            </tr>
          </thead>
          <tbody>
            {posts && posts.filter((post) => {
              if (searchTerm === '') {
                return post
              } else if (post.FirstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.CreditCardNumber.toLowerCase().includes(searchTerm.toLowerCase())) {
                return searchTerm
              }
            }).map((post, i) => {
              return <tr key={post.id}>
                <td>{i + 1}</td>
                <td>{post.FirstName}</td>
                <td>{post.LastName}</td>
                <td>{post.Gender}</td>
                <td>{post.CreditCardNumber}</td>
                <td>{post.Email}</td>
              </tr>
            })}
          </tbody>
        </Table>
      </div>

    </>
  );
};

export default Posts;