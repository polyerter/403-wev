import React, { Component } from "react";
import { Table } from "reactstrap";
// import NewArticleModal from "./NewArticleModal";

// import ConfirmRemovalModal from "./ConfirmRemovalModal";

class ArticleList extends Component {
  render() {
    const articles = this.props.articles;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Title</th>
            <th>Text</th>
            <th>Created at</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!articles || articles.length <= 0 ? (
            <tr>
              <td colSpan="4" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            articles.map(article => (
              <tr key={article.pk}>
                <td>{article.title}</td>
                <td>{article.text}</td>
                <td>{article.created_at}</td>
                <td></td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default ArticleList;
