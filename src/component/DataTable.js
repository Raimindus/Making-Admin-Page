/* eslint-disable import/no-unresolved */
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { getOrder, selectOrder } from "../redux/features/counter/carSlice";
import Pagination from "./Pagination";

function DataTable() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const data = useSelector(selectOrder);
  const posts = data.orders;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      dispatch(getOrder(currentPage));
      setLoading(false);
    };
    fetchPosts();
  }, [currentPage]);

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
              {posts.map((post, index) => (
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
              <Posts posts={posts} loading={loading} />
            </tbody>
          </Table>
          <Pagination
            pageNumber={data.pageCount}
            paginate={paginate}
          />
        </>
      )}
    </div>
  );
}

export default DataTable;
