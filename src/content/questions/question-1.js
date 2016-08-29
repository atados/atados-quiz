import * as c from '../causes'
export default {
  "text_1": {
    title: "Qual dessas frases mais te representa?",
    alternatives:  {
      "A": {
        text: "Só glorificamos o nosso direito à vida cumprindo nosso dever de cidadãos no mundo. (Gandhi)",
        next: "text_1_a",
      },
      "B": {
        text: "“Cultura e sucesso é o que fica entre nós depois que esquecemos tudo o que foi aprendido. Compartilhe”. Adaptação da frase de Selma Lagerlof.",
        next: "text_1_b"
      },
      "C": {
        text: "“Quem quiser ter saúde e longevidade no corpo, procure tê-las na alma”. Adaptação da frase de Francisco Quevedo.",
        next: "text_1_c"
      },
      "D": {
        text: "Ambiente limpo não é o que mais se limpa e sim o que menos se suja. Chico Xavier",
        next: "text_1_d"
      }
    }
  },

  "text_1_a": {
    title: "Com qual dessas imagens você mais se identifica?",
    next: "text_2",
    alternatives: {
      "A": {
        image: Image,
        causes: [ c.FIGHTING_POVERTY ]
      },

      "B": {
        image: Image,
        causes: [ c.RIGHTS_DEFENSE ]
      },

      "C": {
        image: Image,
        causes: [ c.CIVIC_PARTICIPATION ]
      },

      "D": {
        image: Image,
        causes: [ c.PROFESSIONAL_CAPACITATION ]
      }
    }
  },

  "text_1_b": {
    title: "Com qual dessas imagens você mais se identifica?",
    next: "text_2",
    alternatives: {
      "A": {
        image: Image,
        causes: [ c.CULTURE ],
      },

      "B": {
        image: Image,
        causes: [ c.YOUNG_PEOPLE ],
      },

      "C": {
        image: Image,
        causes: [ c.EDUCATION ],
      },

      "D": {
        image: Image,
        causes: [ c.YOUNG_PEOPLE ],
      }
    }
  },


  "text_1_c": {
    title: "Com qual dessas imagens você mais se identifica?",
    next: "text_2",
    alternatives: {
      "A": {
        image: Image,
        causes: [ c.ELDERLY ],
      },

      "B": {
        image: Image,
        causes: [ c.HEALTH ],
      },

      "C": {
        image: Image,
        causes: [ c.DISABLED_PEOPLE ],
      },

      "D": {
        image: Image,
        causes: [ c.DISABLED_PEOPLE ],
      }
    }
  },

  "text_1_d": {
    title: "Com qual dessas imagens você mais se identifica?",
    next: "text_2",
    alternatives: {
      "A": {
        image: Image,
        causes: [ c.ENVIRONMENT ],
      },

      "B": {
        image: Image,
        causes: [ c.ANIMAL_PROTECTION ],
      },

      "C": {
        image: Image,
        causes: [ c.CONSCIOUS_CONSUMPTION ],
      },

      "D": {
        image: Image,
        causes: [ c.ANIMAL_PROTECTION ],
      }
    }
  }
}
