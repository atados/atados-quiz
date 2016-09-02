import * as s from '../skills'
import A_image_art from '../../assets/img/6A/arte1.jpg'
import A_image_handicraft from '../../assets/img/6A/artesanato.jpg'
import A_image_dance from '../../assets/img/6A/danca.jpg'
import A_image_sports from '../../assets/img/6A/esportes1.jpg'

import B_image_communication from '../../assets/img/6B/comunicacao.jpg'
import B_image_education from '../../assets/img/6B/educacao.jpg'
import B_image_eletronics from '../../assets/img/6B/eletronica.jpg'
import B_image_languages from '../../assets/img/6B/idiomas.jpg'

import C_image_law from '../../assets/img/6C/direito.jpg'
import C_image_gastronomy from '../../assets/img/6C/gastronomia.jpg'
import C_image_management from '../../assets/img/6C/gestao.jpg'
import C_image_management2 from '../../assets/img/6C/gestao3.jpg'

import D_image_someone_happy from '../../assets/img/6D/alguemfelizhosp2.jpg'
import D_image_talk_in_comunity from '../../assets/img/6D/conversaentrecomunid2.jpg'
import D_image_kid_in_hospital from '../../assets/img/6D/criancanohosp.jpg'
import D_image_rh from '../../assets/img/6D/rh1.jpg'

export default {
  "text_3": {
    title: "Qual desses é o seu propósito?",
    alternatives:  {
      "A": {
        text: "“Quando você dança e corre seu propósito não é chegar a determinado lugar. É aproveitar cada passo do caminho”. (Abdo, Sara)",
        next: "text_3_a",
      },
      "B": {
        text: "“O mundo é grande e eu quero compartilhar o que sei com as pessoas que sabem o que não sei”. (Abdo, Sara)",
        next: "text_3_b"
      },
      "C": {
        text: "“Gerenciamento é substituir músculos por pensamentos, folclore e superstição por conhecimento, e força por cooperação”. (Drucker, Peter)",
        next: "text_3_c"
      },
      "D": {
        text: "“Em última análise, precisamos amar para não adoecer”. (Sigmund, Freud)",
        next: "text_3_d"
      }
    }
  },

  "text_3_a": {
    title: "Qual dessas Imagens representa seu dom",
    next: "text_4",
    alternatives: {
      "A": {
        image: A_image_dance,
        skills: [ s.DANCE_MUSIC ]
      },

      "B": {
        image: A_image_sports,
        skills: [ s.SPORTS ]
      },

      "C": {
        image: A_image_art,
        skills: [ s.ART ]
      },

      "D": {
        image: A_image_handicraft,
        skills: [ s.ART ]
      }
    }
  },

  "text_3_b": {
    title: "Qual dessas Imagens representa seu dom",
    next: "text_4",
    alternatives: {
      "A": {
        image: B_image_communication,
        skills: [ s.COMMUNICATION ],
      },

      "B": {
        image: B_image_education,
        skills: [ s.EDUCATION ],
      },

      "C": {
        image: B_image_eletronics,
        skills: [ s.IT ],
      },

      "D": {
        image: B_image_languages,
        skills: [ s.LANGUAGES ],
      }
    }
  },


  "text_3_c": {
    title: "Qual dessas Imagens representa seu dom",
    next: "text_4",
    alternatives: {
      "A": {
        image: C_image_law,
        skills: [ s.LAW ],
      },

      "B": {
        image: C_image_management,
        skills: [ s.MANAGEMENT ],
      },

      "C": {
        image: C_image_management2,
        skills: [ s.MANAGEMENT ],
      },

      "D": {
        image: C_image_gastronomy,
        skills: [ s.GASTRONOMY ],
      }
    }
  },

  "text_3_d": {
    title: "Qual dessas Imagens representa seu dom",
    next: "text_4",
    alternatives: {
      "A": {
        image: D_image_someone_happy,
        skills: [ s.HEALTH ],
      },

      "B": {
        image: D_image_talk_in_comunity,
        skills: [ s.PSYCHOLOGY ],
      },

      "C": {
        image: D_image_kid_in_hospital,
        skills: [ s.HEALTH ],
      },

      "D": {
        image: D_image_rh,
        skills: [ s.PSYCHOLOGY ],
      }
    }
  }
}
