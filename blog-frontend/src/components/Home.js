import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ArticleList from "./ArticleList";
// import NewArticleModal from "./NewArticleModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.resetState();
  }

  getArticles = () => {
    axios.get(API_URL + '/articles/').then(res => this.setState({ articles: res.data }));
  };

  resetState = () => {
    this.getArticles();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <ArticleList
              articles={this.state.articles}
              resetState={this.resetState}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
