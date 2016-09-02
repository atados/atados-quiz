import * as s from '../skills'
import A_image_art from '../../assets/img/8A/arte2.jpg'
import A_image_handicraft from '../../assets/img/8A/artesanato2.jpg'
import A_image_music from '../../assets/img/8A/musica2.jpg'
import A_image_sports from '../../assets/img/8A/esporte2.jpg'

import B_image_communication from '../../assets/img/8B/comunicacao2.jpg'
import B_image_education from '../../assets/img/8B/educacao2.jpg'
import B_image_eletronics from '../../assets/img/8B/eletronica2.jpg'
import B_image_languages from '../../assets/img/8B/idiomas2.jpg'

import C_image_law from '../../assets/img/8C/direitos.jpg'
import C_image_gastronomy from '../../assets/img/8C/gastronomia2.jpg'
import C_image_management from '../../assets/img/8C/gestao2.jpg'
import C_image_management2 from '../../assets/img/8C/gestao4.jpg'

import D_image_someone_happy from '../../assets/img/8D/alguemfelizhosp.jpg'
import D_image_talk_in_comunity from '../../assets/img/8D/conversaentrecomunid.jpg'
import D_image_kid_in_hospital from '../../assets/img/8D/criancanohosp2.jpg'
import D_image_rh from '../../assets/img/8D/rh2.jpg'

export default {
  "text_4": {
    title: "Entre essas ideias, qual melhor define seu potencial? ",
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
        image: A_image_music,
        skills: [ s.DANCE_MUSIC ],
        otherwise: "B"
      },

      "B": {
        image: A_image_sports,
        skills: [ s.SPORTS ],
        otherwise: "C"
      },

      "C": {
        image: A_image_art,
        skills: [ s.ART ],
        otherwise: "A"
      },

      "D": {
        image: A_image_handicraft,
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
        image: B_image_communication,
        skills: [ s.COMMUNICATION ],
        otherwise: "B"
      },

      "B": {
        image: B_image_education,
        skills: [ s.EDUCATION ],
        otherwise: "A"
      },

      "C": {
        image: B_image_eletronics,
        skills: [ s.IT ],
        otherwise: "D"
      },

      "D": {
        image: B_image_languages,
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
        image: C_image_law,
        skills: [ s.LAW ],
        otherwise: "B"
      },

      "B": {
        image: C_image_management,
        skills: [ s.MANAGEMENT ],
        otherwise: "D"
      },

      "C": {
        image: C_image_gastronomy,
        skills: [ s.GASTRONOMY ]
      },

      "D": {
        image: C_image_management2,
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
        image: D_image_someone_happy,
        skills: [ s.HEALTH ],
        otherwise: "B"
      },

      "B": {
        image: D_image_talk_in_comunity,
        skills: [ s.PSYCHOLOGY ],
        otherwise: "A"
      },

      "C": {
        image: D_image_kid_in_hospital,
        skills: [ s.HEALTH ],
        otherwise: "D"
      },

      "D": {
        image: D_image_rh,
        skills: [ s.PSYCHOLOGY ],
        otherwise: "C"
      }
    }
  }
}
