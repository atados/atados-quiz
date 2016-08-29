import * as s from '../skills'
import Image from '../../components/QuizAlternative/image.jpg'
export default {
  "text_4": {
    title: "Quais dessas ideias mais te lembra seu potencial?",
    alternatives:  {
      "A": {
        text: "O movimento das artes nos leva para outra dimensão sem nos tirar do lugar.",
        next: "text_4_a",
      },
      "B": {
        text: "A finalidade da comunicação é fazer-se entender. Mas há quem prefira se desentender. (Augusto Branco)",
        next: "text_4_b"
      },
      "C": {
        text: "Regra é, em primeiro lugar, gestão da vida quotidiana. Max Weber",
        next: "text_4_c"
      },
      "D": {
        text: "“Do mesmo modo que aquele que fere ao outro fere a si próprio, aquele que cura, cura a si mesmo” (C. G. Jung)",
        next: "text_4_d"
      }
    }
  },

  "text_4_a": {
    title: "Qual dessas atividades mais te chama a atenção? ",
    finish: true,
    alternatives: {
      "A": {
        image: Image,
        skills: [ s.DANCE_MUSIC ],
        otherwise: "B"
      },

      "B": {
        image: Image,
        skills: [ s.SPORTS ],
        otherwise: "C"
      },

      "C": {
        image: Image,
        skills: [ s.ART ],
        otherwise: "A"
      },

      "D": {
        image: Image,
        skills: [ s.ART ],
        otherwise: "B"
      }
    }
  },

  "text_4_b": {
    title: "Qual dessas atividades mais te chama a atenção?",
    finish: true,
    alternatives: {
      "A": {
        image: Image,
        skills: [ s.COMMUNICATION ],
        otherwise: "B"
      },

      "B": {
        image: Image,
        skills: [ s.EDUCATION ],
        otherwise: "A"
      },

      "C": {
        image: Image,
        skills: [ s.IT ],
        otherwise: "D"
      },

      "D": {
        image: Image,
        skills: [ s.LANGUAGES ],
        otherwise: "A"
      }
    }
  },


  "text_4_c": {
    title: "Com qual dessas imagens você mais se identifica?",
    finish: true,
    alternatives: {
      "A": {
        image: Image,
        skills: [ s.LAW ],
        otherwise: "B"
      },

      "B": {
        image: Image,
        skills: [ s.MANAGEMENT ],
        otherwise: "D"
      },

      "C": {
        image: Image,
        skills: [ s.GASTRONOMY ]
      },

      "D": {
        image: Image,
        skills: [ s.GASTRONOMY ],
        otherwise: "B"
      }
    }
  },

  "text_4_d": {
    title: "Qual dessas atividades mais te chama a atenção?",
    finish: true,
    alternatives: {
      "A": {
        image: Image,
        skills: [ s.HEALTH ],
        otherwise: "B"
      },

      "B": {
        image: Image,
        skills: [ s.PSYCHOLOGY ],
        otherwise: "A"
      },

      "C": {
        image: Image,
        skills: [ s.HEALTH ],
        otherwise: "D"
      },

      "D": {
        image: Image,
        skills: [ s.PSYCHOLOGY ],
        otherwise: "C"
      }
    }
  }
}
