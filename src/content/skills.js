import image_art from '../assets/img/6A/arte1.jpg'
import image_dance from '../assets/img/6A/danca.jpg'
import image_sports from '../assets/img/6A/esportes1.jpg'
import image_communication from '../assets/img/6B/comunicacao.jpg'
import image_education from '../assets/img/6B/educacao.jpg'
import image_eletronics from '../assets/img/6B/eletronica.jpg'
import image_languages from '../assets/img/6B/idiomas.jpg'
import image_law from '../assets/img/6C/direito.jpg'
import image_gastronomy from '../assets/img/6C/gastronomia.jpg'
import image_management from '../assets/img/6C/gestao.jpg'
import image_kid_in_hospital from '../assets/img/6D/criancanohosp.jpg'
import image_rh from '../assets/img/6D/rh1.jpg'

export const skills = [
  {
    id: "1",
    name: "Artes / Artesanato",
    image: image_art
  },
  {
    id: "2",
    name: "Comunicação",
    image: image_communication
  },
  {
    id: "3",
    name: "Dança / Música",
    image: image_dance
  },
  {
    id: "4",
    name: "Direito",
    image: image_law
  },
  {
    id: "5",
    name: "Educação",
    image: image_education
  },
  {
    id: "6",
    name: "Esportes",
    image: image_sports
  },
  {
    id: "7",
    name: "Gastronomia",
    image: image_gastronomy
  },
  {
    id: "8",
    name: "Gestão",
    image: image_management
  },
  {
    id: "9",
    name: "Idiomas",
    image: image_languages
  },
  {
    id: "10",
    name: "Informática / Eletrônica",
    image: image_eletronics
  },
  {
    id: "11",
    name: "Saúde / Psicologia",
    image: image_kid_in_hospital
  },
  {
    id: "12",
    name: "Outros",
    image: image_rh
  }
]

// Exporting the ids by name
export const ART = "1"
export const COMMUNICATION = "2"
export const DANCE_MUSIC = "3"
export const LAW = "4"
export const EDUCATION = "5"
export const SPORTS = "6"
export const GASTRONOMY = "7"
export const MANAGEMENT = "8"
export const LANGUAGES = "9"
export const IT = "10"
export const HEALTH = "11"
export const PSYCHOLOGY = "11"
export const OTHERS = "12"

const skills_obj = {}

for (let i = 0; i < skills.length; i++) {
  skills_obj[skills[i].id] = skills[i]
}

export default skills_obj
