import React, { Component } from 'react';
import CMSQuestion from './cmsQuestion.jsx';

const propTypes = {
  questions: React.PropTypes.array,
};


// console.log(this.props);
class QuestionList extends Component {

    // componentDidMount() {
    //   setTimeout((function) => {
    //     console.log(this.props.questions);
    //   }, 1000)
    // }

  render() {
    // const questionElements = this.props.questions.map((individualQuestion) => {
    //   return (
    //     <li>
    //       <CMSQuestion
    //         id: {individualQuestion.id}
    //         question: {individualQuestion.question}
    //         type: {individualQuestion.type}
    //       />
    //     </li>
    //   )
    // })
    return (
      <ul>

      </ul>
    );
  }
}

QuestionList.propTypes = propTypes;

export default QuestionList;
