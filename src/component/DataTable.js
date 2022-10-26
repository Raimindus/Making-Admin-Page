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
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
];

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
            <Posts loading={loading} />
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
                  <th className="fw-normal">{post?.User?.email}</th>
                  <th className="fw-normal">{post?.Car?.name || "-"}</th>
                  <td>{dayjs(post?.start_rent_at).format("DD-MMMM-YYYY")}</td>
                  <td>{dayjs(post?.finish_rent_at).format("DD-MMMM-YYYY")}</td>
                  <td>{post?.total_price}</td>
                  <th className="fw-normal">{post?.Car?.category || "-"}</th>
                </tr>
              ))}
              <Posts posts={posts} loading={loading} />
            </tbody>
          </Table>
          <div style={{ display: "flex" }}>
            <Form className="d-flex flex-direction-column">
              <Col md={1} className="me-5">
                <Form.Label>Limit</Form.Label>
                <Col>
                  <Select className="selectFont limitS me-2" options={limitList} placeholder="10" />
                </Col>
              </Col>
              <Col className="ms-2">
                <Form.Label>Jump to page</Form.Label>
                <Col className="d-flex">
                  <Col className="d-flex">
                    <Select className="limitJtp selectFont" options={jtpList} placeholder="1" />
                    <Button className="btnjtp" style={{ marginLeft: "-5px" }}>
                      Go
                    </Button>
                  </Col>
                </Col>
              </Col>
            </Form>
            <Col className="d-flex align-items-end mt-3 ">
              <Pagination pageNumber={data.pageCount} paginate={paginate} page={currentPage} />
            </Col>
          </div>
        </>
      )}
      <br />
    </div>
  );
}

export default DataTable;
