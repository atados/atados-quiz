import * as c from '../causes'
import A_image_professional_capacitation from '../../assets/img/2A/capacitacaoprofissa.jpg'
import A_image_fighting_poverty from '../../assets/img/2A/combateapobreza2.jpg'
import A_image_rights_defense from '../../assets/img/2A/defesadedireitos.jpg'
import A_image_civic_participation from '../../assets/img/2A/participacaocidada.jpg'

import B_image_young_people from '../../assets/img/2B/criancasejovens3.jpg'
import B_image_young_people2 from '../../assets/img/2B/criancasejovens4.jpg'
import B_image_culture from '../../assets/img/2B/culturaesporteartes.jpg'
import B_image_education from '../../assets/img/2B/educacao.jpg'

import C_image_elderly from '../../assets/img/2C/idosos.jpg'
import C_image_disabled_people from '../../assets/img/2C/pessoascomdeficiencia1.jpg'
import C_image_disabled_people2 from '../../assets/img/2C/pessoascomdeficiencia3.jpg'
import C_image_health from '../../assets/img/2C/saude.jpg'

import D_image_conscious_consumption from '../../assets/img/2D/consumoconsciente.jpg'
import D_image_environment from '../../assets/img/2D/meioambiente.jpg'
import D_image_animal_protection from '../../assets/img/2D/protecaoanimal.jpg'
import D_image_animal_protection2 from '../../assets/img/2D/protecaoanimal4.jpg'

export default {
  "text_1": {
    title: "Qual dessas frases mais te representa?",
    alternatives:  {
      "A": {
        text: "“Só glorificamos o nosso direito à vida cumprindo nosso dever de cidadãos no mundo”.  (Gandhi, Mahatma)",
        next: "text_1_a",
      },
      "B": {
        text: "Cultura e sucesso é o que fica entre nós depois que esquecemos tudo o que foi aprendido. Compartilhe!  (Lagerlof, Selma - adaptação) ",
        next: "text_1_b"
      },
      "C": {
        text: "Quem quiser ter saúde e longevidade no corpo, procure tê-las na alma. (Quevedo, Francisco – adaptação)   ",
        next: "text_1_c"
      },
      "D": {
        text: "“Ambiente limpo não é o que mais se limpa e sim o que menos se suja”. (Xavier, Chico) ",
        next: "text_1_d"
      }
    }
  },

  "text_1_a": {
    title: "Com qual dessas imagens você mais se identifica?",
    next: "text_2",
    alternatives: {
      "A": {
        image: A_image_fighting_poverty,
        causes: [ c.FIGHTING_POVERTY ]
      },

      "B": {
        image: A_image_rights_defense,
        causes: [ c.RIGHTS_DEFENSE ]
      },

      "C": {
        image: A_image_civic_participation,
        causes: [ c.CIVIC_PARTICIPATION ]
      },

      "D": {
        image: A_image_professional_capacitation,
        causes: [ c.PROFESSIONAL_CAPACITATION ]
      }
    }
  },

  "text_1_b": {
    title: "Com qual dessas imagens você mais se identifica?",
    next: "text_2",
    alternatives: {
      "A": {
        image: B_image_culture,
        causes: [ c.CULTURE ],
      },

      "B": {
        image: B_image_young_people,
        causes: [ c.YOUNG_PEOPLE ],
      },

      "C": {
        image: B_image_education,
        causes: [ c.EDUCATION ],
      },

      "D": {
        image: B_image_young_people2,
        causes: [ c.YOUNG_PEOPLE ],
      }
    }
  },


  "text_1_c": {
    title: "Com qual dessas imagens você mais se identifica?",
    next: "text_2",
    alternatives: {
      "A": {
        image: C_image_elderly,
        causes: [ c.ELDERLY ],
      },

      "B": {
        image: C_image_health,
        causes: [ c.HEALTH ],
      },

      "C": {
        image: C_image_disabled_people,
        causes: [ c.DISABLED_PEOPLE ]
      },

      "D": {
        image: C_image_disabled_people2,
        causes: [ c.DISABLED_PEOPLE ]
      }
    }
  },

  "text_1_d": {
    title: "Com qual dessas imagens você mais se identifica?",
    next: "text_2",
    alternatives: {
      "A": {
        image: D_image_environment,
        causes: [ c.ENVIRONMENT ],
      },

      "B": {
        image: D_image_animal_protection,
        causes: [ c.ANIMAL_PROTECTION ],
      },

      "C": {
        image: D_image_conscious_consumption,
        causes: [ c.CONSCIOUS_CONSUMPTION ],
      },

      "D": {
        image: D_image_animal_protection2,
        causes: [ c.ANIMAL_PROTECTION ],
      }
    }
  }
}
