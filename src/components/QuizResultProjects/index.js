import React from 'react'
import QuizResultProject from '../QuizResultProject'
import { connect } from 'react-redux'
import { objectToArray } from '../../utils'
import { fetchProjectsIfNeeded } from '../../actions/quizProjectsActions';

class QuizResultProjects extends React.Component {

  componentDidMount() {
    const { dispatch, causes, skills } = this.props
    dispatch(fetchProjectsIfNeeded(causes[0], skills[0]))
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <div className="quiz-projects">
        <div className="container">
          <div className="quiz-question-info">
            <h1 className="quiz-title">Essas são as vagas disponíveis</h1>
          </div>
          <div className="quiz-box">
            <div className="quiz-box-content">
              <QuizResultProject />
              <QuizResultProject />
              <QuizResultProject />
              <QuizResultProject />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.projects.isFetching,
    projects: objectToArray(state.projects.items),
    causes: state.quiz.results.causes,
    skills: state.quiz.results.skills
  }
}

export default connect(
  mapStateToProps
)(QuizResultProjects);
