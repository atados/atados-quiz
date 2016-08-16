import Image from '../components/QuizAlternative/image.jpg'
import DogImage from '../components/QuizResultItem/dog-image.jpg'
import {
  CAUSE_PROFESSIONAL_CAPACITATION,
  CAUSE_FIGHTING_POVERTY,
  CAUSE_CONSCIOUS_CONSUMPTION,
  CAUSE_YOUNG_PEOPLE,
  CAUSE_CULTURE,
  CAUSE_RIGHTS_DEFENSE,
  CAUSE_EDUCATION,
  CAUSE_ELDERLY,
  CAUSE_ENVIRONMENT,
  CAUSE_CIVIC_PARTICIPATION,
  CAUSE_ANIMAL_PROTECTION,
  CAUSE_HEALTH,
  CAUSE_DISABLED_PEOPLE
} from './causes'
import {
  SKILL_ART,
  SKILL_COMMUNICATION,
  SKILL_DANCE_MUSIC,
  SKILL_LAW,
  SKILL_EDUCATION,
  SKILL_SPORTS,
  SKILL_GASTRONOMY,
  SKILL_ELDERLY,
  SKILL_LANGUAGES,
  SKILL_IT,
  SKILL_HEALTH,
  SKILL_PSYCHOLOGY,
  SKILL_OTHERS
} from './skills'

export const firstQuestion = "text_1"

export default  {

  // Pergunta 1
  "text_1": {
    title: "Escolha o texto que mais te comove",
    alternatives:  {
      "A": {
        text: "Lorem ipsum dolor iset",
        causes: [
          CAUSE_PROFESSIONAL_CAPACITATION,
          CAUSE_FIGHTING_POVERTY,
          CAUSE_CONSCIOUS_CONSUMPTION
        ],
        next: "group_1",
      },
      "B": {
        text: "Lorem ipsum dolor iset",
        causes: [
          CAUSE_YOUNG_PEOPLE,
          CAUSE_CULTURE,
          CAUSE_RIGHTS_DEFENSE],
        next: "group_2"
      },
      "C": {
        text: "Lorem ipsum dolor iset",
        causes: [
          CAUSE_EDUCATION,
          CAUSE_ELDERLY,
          CAUSE_ENVIRONMENT
        ],
        next: "group_1"
      },
      "D": {
        text: "Lorem ipsum dolor iset",
        causes: [
          CAUSE_CIVIC_PARTICIPATION,
          CAUSE_ANIMAL_PROTECTION,
          CAUSE_HEALTH,
          CAUSE_DISABLED_PEOPLE
        ],
        next: "group_2"
      }
    }
  },

  "group_1": {
    "title": "Clique na imagem que mais toca o seu coração",
    alternatives: {
      "A": {
        image: Image,
        causes: [
          CAUSE_PROFESSIONAL_CAPACITATION,
          CAUSE_FIGHTING_POVERTY
        ],
        next: "group_1_1"
      },

      "B": {
        image: Image,
        causes: [
          CAUSE_FIGHTING_POVERTY,
          CAUSE_CONSCIOUS_CONSUMPTION
        ],
        next: "group_1_1"
      },

      "C": {
        image: Image,
        causes: [
          CAUSE_FIGHTING_POVERTY
        ],
        next: "group_1_2"
      },

      "D": {
        image: Image,
        causes: [
          CAUSE_PROFESSIONAL_CAPACITATION
        ],
        next: "group_1_2"
      }
    }
  },

  "group_1_1": {
    "title": "Clique na imagem que mais toca o seu coração",
    alternatives: {
      "A": {
        image: Image,
        causes: [
          CAUSE_PROFESSIONAL_CAPACITATION
        ],
        skills: [
          SKILL_GASTRONOMY,
          SKILL_ELDERLY,
          SKILL_LANGUAGES,
        ],
        finish: true
      },

      "B": {
        image: Image,
        causes: [
          CAUSE_FIGHTING_POVERTY
        ],
        skills: [
          SKILL_SPORTS,
          SKILL_GASTRONOMY,
          SKILL_ELDERLY,
        ],
        finish: true
      },

      "C": {
        image: Image,
        causes: [
          CAUSE_CONSCIOUS_CONSUMPTION
        ],
        skills: [
          SKILL_SPORTS,
          SKILL_IT,
          SKILL_ELDERLY,
        ],
        finish: true
      },

      "D": {
        image: Image,
        causes: [
          CAUSE_PROFESSIONAL_CAPACITATION
        ],
        skills: [
          SKILL_SPORTS,
          SKILL_GASTRONOMY,
          SKILL_ELDERLY,
        ],
        finish: true
      }
    }
  },

  "group_1_2": {
    "title": "Clique na imagem que mais toca o seu coração",
    alternatives: {
      "A": {
        image: Image,
        causes: [
          CAUSE_FIGHTING_POVERTY
        ],
        skills: [
          SKILL_SPORTS,
          SKILL_GASTRONOMY,
          SKILL_ELDERLY,
        ],
        finish: true
      },

      "B": {
        image: Image,
        causes: [
          CAUSE_PROFESSIONAL_CAPACITATION
        ],
        skills: [
          SKILL_SPORTS,
          SKILL_GASTRONOMY,
          SKILL_ELDERLY,
        ],
        finish: true
      },

      "C": {
        image: Image,
        causes: [
          CAUSE_PROFESSIONAL_CAPACITATION
        ],
        skills: [
          SKILL_SPORTS,
          SKILL_GASTRONOMY,
          SKILL_ELDERLY,
        ],
        finish: true
      },

      "D": {
        image: Image,
        causes: [
          CAUSE_FIGHTING_POVERTY
        ],
        skills: [
          SKILL_HEALTH,
          SKILL_PSYCHOLOGY,
          SKILL_OTHERS
        ],
        finish: true
      }
    }
  },

  "group_2": {
    title: "Clique na imagem que mais toca o seu coração",
    alternatives:  {
      "A": {
        image: Image,
        causes: [
          CAUSE_PROFESSIONAL_CAPACITATION,
          CAUSE_FIGHTING_POVERTY,
          CAUSE_CONSCIOUS_CONSUMPTION
        ],
        skills: [
          SKILL_ART,
          SKILL_COMMUNICATION,
          SKILL_DANCE_MUSIC,
        ],
        finish: true,
      },
      "B": {
        image: DogImage,
        causes: [
          CAUSE_CIVIC_PARTICIPATION,
          CAUSE_ANIMAL_PROTECTION,
          CAUSE_HEALTH,
          CAUSE_DISABLED_PEOPLE
        ],
        skills: [
          SKILL_SPORTS,
          SKILL_GASTRONOMY,
          SKILL_ELDERLY,
        ],
        finish: true,
      },
      "C": {
        image: DogImage,
        causes: [
          CAUSE_CIVIC_PARTICIPATION,
          CAUSE_ANIMAL_PROTECTION,
          CAUSE_HEALTH,
          CAUSE_DISABLED_PEOPLE
        ],
        skills: [
          SKILL_LAW,
          SKILL_EDUCATION,
          SKILL_SPORTS,
        ],
        finish: true,
      },
      "D": {
        image: Image,
        causes: [
          CAUSE_CIVIC_PARTICIPATION,
          CAUSE_ANIMAL_PROTECTION,
          CAUSE_HEALTH,
          CAUSE_DISABLED_PEOPLE
        ],
        skills: [
          SKILL_HEALTH,
          SKILL_PSYCHOLOGY,
          SKILL_OTHERS
        ],
        finish: true,
      }
    }
  }
}
