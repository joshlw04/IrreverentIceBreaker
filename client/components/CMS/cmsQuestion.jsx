import React, { Component } from 'react';

const propTypes = {
  id: React.PropTypes.number,
  question: React.PropTypes.string,
  type: React.PropTypes.string,
  admin_email: React.PropTypes.string,
};

class CMSQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localType: this.props.type || '',
      localQuestion: this.props.question || '',
      localAdminEmail: this.props.admin_email || '',
    };
    this.handleEditOfType = this.handleEditOfType.bind(this);
    this.handleEditOfQuestion = this.handleEditOfQuestion.bind(this);
    this.handleEditOfEmail = this.handleEditOfEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.isSaved = this.isSaved.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      localType: nextProps.type || '',
      localQuestion: nextProps.question || '',
      localAdminEmail: nextProps.localAdminEmail || '',
    });
  }
  handleEditOfType(e) {
    const newType = e.target.value;
    this.setState({
      localType: newType,
    });
  }
  handleEditOfQuestion(e) {
    const newQuestion = e.target.value;
    this.setState({
      localQuestion: newQuestion,
    });
  }

  handleEditOfEmail(e) {
    const newAdminEmail = e.target.value;
    this.setState({
      localAdminEmail: newAdminEmail,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handlePublish({
      id: this.props.id,
      type: this.state.localType,
      question: this.state.localQuestion,
      admin_email: this.state.localAdminEmail,
    });
    this.setState({ saved: true });
  }
  handleDeleteClick() {
    this.props.handleDelete(this.props.id);
  }
  isSaved() {
    return this.props.type === this.state.localType &&
           this.props.question === this.state.localQuestion;
  }
  render() {
    let activeButtons;
    if (this.isSaved()) {
      activeButtons = (
          <button className="delete-button" onClick={this.handleDeleteClick}>x</button>
      );
    }
    return (
      <div className="question">
      {/* <div className={this.isSaved() ? 'saved' : 'not-saved'} > */}
        <form className="post-display" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="type"
            placeholder="type"
            value={this.state.localType}
            onChange={this.handleEditOfType}
          />
          <input
            type="text"
            name="question"
            placeholder="question"
            value={this.state.localQuestion}
            onChange={this.handleEditOfQuestion}
          />
          <input
            type="text"
            name="email"
            placeholder="admin_email"
            value={this.state.localAdminEmail}
            onChange={this.handleEditOfEmail}
          />

          <input
            type="submit"
            value="SAVE"
            className="hidden"
          />
          {activeButtons}
        </form>

      </div>
    );
  }
}

export default CMSQuestion;
