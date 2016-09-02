import * as c from '../causes'
import A_image_professional_capacitation from '../../assets/img/4A/capacitacaoprofissa2.jpg'
import A_image_fighting_poverty from '../../assets/img/4A/combateapobreza.jpg'
import A_image_rights_defense from '../../assets/img/4A/defesadedireitos2.jpg'
import A_image_civic_participation from '../../assets/img/4A/participacaocidada2.jpg'

import B_image_young_people from '../../assets/img/4B/criancasejovens.jpg'
import B_image_young_people2 from '../../assets/img/4B/criancasejovens2.jpg'
import B_image_culture from '../../assets/img/4B/culturaesporteartes2.jpg'
import B_image_education from '../../assets/img/4B/educacao2.jpg'

import C_image_elderly from '../../assets/img/4C/idosos2.jpg'
import C_image_disabled_people from '../../assets/img/4C/pessoascomdeficiencia2.jpg'
import C_image_disabled_people2 from '../../assets/img/4C/pessoascomdeficiencia4.jpg'
import C_image_health from '../../assets/img/4C/saude2.jpg'

import D_image_conscious_consumption from '../../assets/img/4D/consumoconsciente.jpg'
import D_image_environment from '../../assets/img/4D/meioambiente2.jpg'
import D_image_animal_protection from '../../assets/img/4D/protecaoanimal2.jpg'
import D_image_animal_protection2 from '../../assets/img/4D/protecaoanimal3.jpg'

export default {
  "text_2": {
    title: "Qual dessas frases mais te representa?",
    alternatives:  {
      "A": {
        text: "“Um homem só tem o direito de olhar um outro de cima para baixo se for para ajudá-lo a se levantar”. (Márquez, Gabriel Garcia)",
        next: "text_2_a",
      },
      "B": {
        text: "“A gente diminui o peso do corpo quando pratica esportes. E diminui o peso do coração quando pratica verdades”. (Heloise, Camila).",
        next: "text_2_b"
      },
      "C": {
        text: "“Deficiência é não enxergar nas pessoas as suas verdadeiras eficiências”. (Magalhães, Ronne Paulo)",
        next: "text_2_c"
      },
      "D": {
        text: "“Quando olhar para uma floresta observe todas as árvores e não para uma apenas. Um dia você vai precisar de mais de uma árvore”. (Rocha, Izzo)",
        next: "text_2_d"
      }
    }
  },

  "text_2_a": {
    title: "Com qual dessas imagens você mais se identifica?",
    next: "text_3",
    alternatives: {
      "A": {
        image: A_image_fighting_poverty,
        causes: [ c.FIGHTING_POVERTY ],
        otherwise: "B"
      },

      "B": {
        image: A_image_rights_defense,
        causes: [ c.RIGHTS_DEFENSE ],
        otherwise: "A"
      },

      "C": {
        image: A_image_civic_participation,
        causes: [ c.CIVIC_PARTICIPATION ],
        otherwise: "B"
      },

      "D": {
        image: A_image_professional_capacitation,
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
        image: B_image_culture,
        causes: [ c.CULTURE ],
        otherwise: "C"
      },

      "B": {
        image: B_image_young_people2,
        causes: [ c.YOUNG_PEOPLE ],
        otherwise: "A",
      },

      "C": {
        image: B_image_education,
        causes: [ c.EDUCATION ],
        otherwise: "B",
      },

      "D": {
        image: B_image_young_people,
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
        image: C_image_elderly,
        causes: [ c.ELDERLY ],
        otherwise: "C",
      },

      "B": {
        image: C_image_health,
        causes: [ c.HEALTH ],
        otherwise: "D",
      },

      "C": {
        image: C_image_disabled_people,
        causes: [ c.DISABLED_PEOPLE ],
        otherwise: "A"
      },

      "D": {
        image: C_image_disabled_people2,
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
        image: D_image_environment,
        causes: [ c.ENVIRONMENT ],
        otherwise: "B",
      },

      "B": {
        image: D_image_animal_protection,
        causes: [ c.ANIMAL_PROTECTION ],
        otherwise: "A",
      },

      "C": {
        image: D_image_conscious_consumption,
        causes: [ c.CONSCIOUS_CONSUMPTION ],
        otherwise: "A",
      },

      "D": {
        image: D_image_animal_protection2,
        causes: [ c.ANIMAL_PROTECTION ],
        otherwise: "A",
      }
    }
  }
}
