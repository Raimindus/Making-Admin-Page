/* eslint-disable import/no-unresolved */
import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";

import Pagination from "./Pagination";

function DataTable() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  // eslint-disable-next-line no-unused-vars
  const [carName, setCarName] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://bootcamp-rent-car.herokuapp.com/admin/order");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // eslint-disable-next-line react/no-unstable-nested-components, no-shadow
  function Posts({ loading }) {
    if (loading) {
      return (
        <Spinner animation="border" role="status" className="ms-3">
          <span className="visually-hidden ms-5" size="sm">
            Loading...
          </span>
        </Spinner>
      );
    }
  }

  // if (posts.post.Car.name === "") {
  //   return null;
  // }

  // const car = currentPosts.post;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {!posts ? (
        "No data Table"
      ) : (
        <>
          <Table bordered hover>
            <thead className="bg-secondary">
              <tr>
                <th>No</th>
                <th>Email User</th>
                <th>Car</th>
                <th>Start Rent</th>
                <th>Finish Rent</th>
                <th>Price</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {/* {console.log(currentPosts)} */}
              {currentPosts.map((post, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <tr key={index}>
                  <td>{post?.id}</td>
                  <th>{post?.User?.email}</th>
                  <th>{post?.Car?.name || "-"}</th>
                  <td>{dayjs(post?.start_rent_at).format("DD-MMMM-YYYY")}</td>
                  <td>{dayjs(post?.finish_rent_at).format("DD-MMMM-YYYY")}</td>
                  <td>{post?.total_price}</td>
                  <th>{post?.Car?.category || "-"}</th>
                </tr>
              ))}
              <Posts posts={currentPosts} loading={loading} />
            </tbody>
          </Table>
          <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </>
      )}
    </div>
  );
}

export default DataTable;
