import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import styles from "../css/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import projectMark from "../imgs/fukuokaMark.png";
import {
  faUtensils,
  faPlane,
  faAddressCard,
  faSignInAlt,
  faUserPlus,
  faUserCircle,
  faShoppingBasket,
  faListAlt,
  faSignOut,
  faSignOutAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const { user, setUser } = props;
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 객체를 사용

  const handleLogout = () => {
    localStorage.clear();
    setUser("Guest");
    // 로그아웃시 로그인 페이지 이동

    navigate("/login"); // 로그아웃 성공시 로그인 경로로 이동
  };

  return (
    <Container>
      <Row className={styles.row}>
        <Col>
          <Navbar className="h-8" data-bs-theme="light">
            <Container>
              <Navbar.Brand className="navbar-brand" as={Link} to="/">
                <img
                  alt="main"
                  src={projectMark}
                  width="50"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                Japang
              </Navbar.Brand>

              <Nav
                id="nav"
                className="fs-4 justify-content-between"
                style={{ width: "600px" }}
              >
                <Nav.Item>
                  <Nav.Link
                    className={styles.link}
                    as={Link}
                    to="/productList?category=Food"
                  >
                    <FontAwesomeIcon
                      style={{ marginRight: "6px" }}
                      icon={faUtensils}
                    />
                    식품
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    className={styles.link}
                    as={Link}
                    to="/productList?category=Travel"
                  >
                    <FontAwesomeIcon
                      style={{ marginRight: "6px" }}
                      icon={faPlane}
                    />
                    현지학기제
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className={styles.link} as={Link} to="/Introduce">
                    <FontAwesomeIcon
                      style={{ marginRight: "6px" }}
                      icon={faAddressCard}
                    />
                    조원소개
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Nav className="d-flex ">
                {user === "Guest" ? (
                  // 게스트
                  <>
                    <Nav.Link className={styles.link} as={Link} to="/Login">
                      <FontAwesomeIcon
                        style={{ marginRight: "6px" }}
                        icon={faSignInAlt}
                      />
                      로그인
                    </Nav.Link>
                    <Nav.Link className={styles.link} as={Link} to="/Register">
                      <FontAwesomeIcon
                        style={{ marginRight: "6px" }}
                        icon={faUserPlus}
                      />
                      회원가입
                    </Nav.Link>
                  </>
                ) : user === "Buyer" ? (
                  // 구매자
                  <>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <FontAwesomeIcon
                          style={{ marginRight: "6px" }}
                          icon={faUserCircle}
                        />

                        {localStorage.getItem("Nickname")}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/MyPage">
                          프로필
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/MyCart">
                          장바구니
                        </Dropdown.Item>
                        <Dropdown.Item onClick={handleLogout}>
                          <FontAwesomeIcon
                            style={{ marginRight: "6px" }}
                            icon={faSignOutAlt}
                          />
                          로그아웃
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </>
                ) : user === "Seller" ? (
                  // 판매자
                  <>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <FontAwesomeIcon
                          style={{ marginRight: "6px" }}
                          icon={faUserCircle}
                        />
                        {localStorage.getItem("Nickname")}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/MyProduct">
                          판매 상품 리스트
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/SellerMyPage">
                          프로필
                        </Dropdown.Item>
                        <Dropdown.Item onClick={handleLogout}>
                          <FontAwesomeIcon
                            style={{ marginRight: "6px" }}
                            icon={faSignOutAlt}
                          />
                          로그아웃
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </>
                ) : (
                  // 어드민
                  <>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <FontAwesomeIcon
                          style={{ marginRight: "6px" }}
                          icon={faUsers}
                        />

                        {localStorage.getItem("Nickname")}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/ManageBuyer">
                          구매자 관리
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/ManageSeller">
                          판매자 관리
                        </Dropdown.Item>
                        <Dropdown.Item onClick={handleLogout}>
                          <FontAwesomeIcon
                            style={{ marginRight: "6px" }}
                            icon={faSignOutAlt}
                          />
                          로그아웃
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </>
                )}
              </Nav>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
