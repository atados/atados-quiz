import * as s from '../skills'
import Image from '../../components/QuizAlternative/image.jpg'

export default {
  "text_3": {
    title: "Qual desses é seu propósito?",
    alternatives:  {
      "A": {
        text: "Quando você dança e corre seu propósito não é chegar a determinado lugar. É aproveitar cada passo do caminho.",
        next: "text_3_a",
      },
      "B": {
        text: "O mundo é grande e eu quero compartilhar o que sei com as pessoas que sabem o que não sei.",
        next: "text_3_b"
      },
      "C": {
        text: "Gerenciamento é substituir músculos por pensamentos, folclore e superstição por conhecimento, e força por cooperação. (Peter Drucker)",
        next: "text_3_c"
      },
      "D": {
        text: "“Em última análise, precisamos amar para não adoecer”. (Freud)",
        next: "text_3_d"
      }
    }
  },

  "text_3_a": {
    title: "Qual dessas Imagens representa seu dom",
    next: "text_4",
    alternatives: {
      "A": {
        image: Image,
        skills: [ s.DANCE_MUSIC ]
      },

      "B": {
        image: Image,
        skills: [ s.SPORTS ]
      },

      "C": {
        image: Image,
        skills: [ s.ART ]
      },

      "D": {
        image: Image,
        skills: [ s.ART ]
      }
    }
  },

  "text_3_b": {
    title: "Qual dessas Imagens representa seu dom",
    next: "text_4",
    alternatives: {
      "A": {
        image: Image,
        skills: [ s.COMMUNICATION ],
      },

      "B": {
        image: Image,
        skills: [ s.EDUCATION ],
      },

      "C": {
        image: Image,
        skills: [ s.IT ],
      },

      "D": {
        image: Image,
        skills: [ s.LANGUAGES ],
      }
    }
  },


  "text_3_c": {
    title: "Qual dessas Imagens representa seu dom",
    next: "text_4",
    alternatives: {
      "A": {
        image: Image,
        skills: [ s.LAW ],
      },

      "B": {
        image: Image,
        skills: [ s.MANAGEMENT ],
      },

      "C": {
        image: Image,
        skills: [ s.MANAGEMENT ],
      },

      "D": {
        image: Image,
        skills: [ s.GASTRONOMY ],
      }
    }
  },

  "text_3_d": {
    title: "Qual dessas Imagens representa seu dom",
    next: "text_4",
    alternatives: {
      "A": {
        image: Image,
        skills: [ s.HEALTH ],
      },

      "B": {
        image: Image,
        skills: [ s.PSYCHOLOGY ],
      },

      "C": {
        image: Image,
        skills: [ s.HEALTH ],
      },

      "D": {
        image: Image,
        skills: [ s.PSYCHOLOGY ],
      }
    }
  }
}
