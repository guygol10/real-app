import React from "react";
import Form from "./common/form";
import PageHeader from "./common/pageHeader";
import cardService from "../services/cardService";
import { toast } from "react-toastify";

class DeleteCard extends Form {
  state = {};

  handleCancel = () => {
    this.props.history.push("/my-cards");
  };

  schema = {};

  doSubmit = async () => {
    const cardId = this.props.match.params.id;
    await cardService.deleteCard(cardId);
    toast("Card is deleted");
    this.props.history.replace("/my-cards");
  };

  render() {
    return (
      <div className="container">
        <PageHeader titleText="Are You sure you want to delete this card?" />
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit} method="POST" autoComplete="off">
              {this.renderButton("Delete Card", "danger")}
              <button
                onClick={this.handleCancel}
                className="btn btn-secondary ml-2"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteCard;
