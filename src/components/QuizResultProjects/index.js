import React from 'react'
import QuizResultProject from '../QuizResultProject'
import { connect } from 'react-redux'
import { objectToArray } from '../../utils'
import { fetchProjectsIfNeeded } from '../../actions/quizProjectsActions'
import loadingSpin from '../../assets/loading-spin.svg';

class QuizResultProjects extends React.Component {

  componentDidMount() {
    const { dispatch, causes, skills } = this.props
    dispatch(fetchProjectsIfNeeded(causes, skills))
  }

  componentWillReceiveProps(nextProps) {
  }

  get content() {
    const { projects, isFetching } = this.props;

    if (isFetching) {
      return <img src={loadingSpin} className="preloader" alt="Loading" />
    }

    if (!projects || !projects.length) {
      return <h3>Nenhuma vaga encontrada</h3>
    }

    return projects.map(project =>
      <QuizResultProject
        key={project.id}
        {...project}
      />
    )
  }

  render() {
    return (
      <div className="quiz-projects">
        <h1 className="quiz-title">Essas são as vagas disponíveis</h1>

        { this.content }
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
