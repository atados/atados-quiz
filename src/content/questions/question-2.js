import * as c from '../causes'
import Image from '../../components/QuizAlternative/image.jpg'

export default {
  "text_2": {
    title: "Qual dessas frases mais te representa?",
    alternatives:  {
      "A": {
        text: "Um homem só tem o direito de olhar um outro de cima para baixo se for para ajudá-lo a se levantar. (Gabriel Garcia Márquez)",
        next: "text_2_a",
      },
      "B": {
        text: "A gente diminui o peso do corpo quando pratica esportes. E diminui o peso do coração quando pratica verdades. (Camila Heloise).",
        next: "text_2_b"
      },
      "C": {
        text: "Deficiência é não enxergar nas pessoas, as suas verdadeiras eficiências. Ronne Paulo de Magalhães",
        next: "text_2_c"
      },
      "D": {
        text: "Quando olhar para uma floresta observe todas as árvores e não para uma apenas. Um dia você vai precisar de mais de uma árvore. Izzo Rocha",
        next: "text_2_d"
      }
    }
  },

  "text_2_a": {
    title: "Com qual dessas imagens você mais se identifica?",
    next: "text_3",
    alternatives: {
      "A": {
        image: Image,
        causes: [ c.FIGHTING_POVERTY ],
        otherwise: "B"
      },

      "B": {
        image: Image,
        causes: [ c.RIGHTS_DEFENSE ],
        otherwise: "A"
      },

      "C": {
        image: Image,
        causes: [ c.CIVIC_PARTICIPATION ],
        otherwise: "B"
      },

      "D": {
        image: Image,
        causes: [ c.PROFESSIONAL_CAPACITATION ],
        otherwise: "C"
      }
    }
  },

  "text_2_b": {
    title: "Com qual dessas imagens você mais se identifica?",
    next: "text_3",
    alternatives: {
      "A": {
        image: Image,
        causes: [ c.CULTURE ],
        otherwise: "C"
      },

      "B": {
        image: Image,
        causes: [ c.YOUNG_PEOPLE ],
        otherwise: "A",
      },

      "C": {
        image: Image,
        causes: [ c.EDUCATION ],
        otherwise: "B",
      },

      "D": {
        image: Image,
        causes: [ c.YOUNG_PEOPLE ],
        otherwise: "A",
      }
    }
  },


  "text_2_c": {
    title: "Com qual dessas imagens você mais se identifica?",
    next: "text_3",
    alternatives: {
      "A": {
        image: Image,
        causes: [ c.ELDERLY ],
        otherwise: "C",
      },

      "B": {
        image: Image,
        causes: [ c.HEALTH ],
        otherwise: "D",
      },

      "C": {
        image: Image,
        causes: [ c.DISABLED_PEOPLE ],
        otherwise: "A"
      },

      "D": {
        image: Image,
        causes: [ c.DISABLED_PEOPLE ],
        otherwise: "B",
      }
    }
  },

  "text_2_d": {
    title: "Com qual dessas imagens você mais se identifica?",
    next: "text_3",
    alternatives: {
      "A": {
        image: Image,
        causes: [ c.ENVIRONMENT ],
        otherwise: "B",
      },

      "B": {
        image: Image,
        causes: [ c.ANIMAL_PROTECTION ],
        otherwise: "A",
      },

      "C": {
        image: Image,
        causes: [ c.CONSCIOUS_CONSUMPTION ],
        otherwise: "A",
      },

      "D": {
        image: Image,
        causes: [ c.ANIMAL_PROTECTION ],
        otherwise: "A",
      }
    }
  }
}
