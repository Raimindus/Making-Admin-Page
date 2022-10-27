/* eslint-disable import/no-unresolved */
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { getOrder, selectOrder } from "../redux/features/counter/carSlice";
import Pagination from "./Pagination";

const limitList = [{ value: "10", label: "10" }];
const jtpList = [
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 30, label: '30' },
  { value: 40, label: '40' },
];

function DataTable() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [jumpToPage, setJumpToPage] = useState();

  const data = useSelector(selectOrder);
  const posts = data.orders;
  console.log(posts);

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

  const paginate = (pageNumber) => {
    if (pageNumber <= 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(pageNumber);
    }
  };

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
          <div style={{ display: "flex" }}>
            <Form className="d-flex flex-direction-column">
              <div>
                <Form.Label>Limit</Form.Label>
                <Col md={3} className="">
                  <Select
                    className="limitJtp selectFont me-5"
                    options={limitList}
                    placeholder="10"
                  />
                </Col>
              </div>
              <div>
                <Form.Label>Jump to page</Form.Label>
                <div className="d-flex">
                  <Col md={3}>
                    <Select
                      className="limitJtp selectFont me-5"
                      options={jtpList}
                      placeholder="1"
                      onChange={(val) => setJumpToPage(val.value)}
                    />
                  </Col>
                  <Col md={2}>
                  <Button onClick={() => setCurrentPage(jumpToPage)} className="btnjtp">Go</Button>
                </Col>
                </div>
              </div>
            </Form>
            <Pagination
              pageNumber={data.pageCount}
              paginate={paginate}
              page={currentPage}
            />
          </div>
        </>
      )}
      <br />
    </div>
  );
}

export default DataTable;
