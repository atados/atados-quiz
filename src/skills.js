import DogImage from './components/QuizResultItem/dog-image.jpg'
export const skills = [
  {
    id: "1",
    name: "Artes / Artesanato",
    image: DogImage
  },
  {
    id: "2",
    name: "Comunicação",
    image: DogImage
  },
  {
    id: "3",
    name: "Dança / Música",
    image: DogImage
  },
  {
    id: "4",
    name: "Direito",
    image: DogImage
  },
  {
    id: "5",
    name: "Educação",
    image: DogImage
  },
  {
    id: "6",
    name: "Esportes",
    image: DogImage
  },
  {
    id: "7",
    name: "Gastronomia",
    image: DogImage
  },
  {
    id: "8",
    name: "Gestão",
    image: DogImage
  },
  {
    id: "9",
    name: "Idiomas",
    image: DogImage
  },
  {
    id: "10",
    name: "Informática / Eletrônica",
    image: DogImage
  },
  {
    id: "11",
    name: "Saúde / Psicologia",
    image: DogImage
  },
  {
    id: "12",
    name: "Outros",
    image: DogImage
  }
]

// Exporting the ids by name
export const SKILL_ART = "1"
export const SKILL_COMMUNICATION = "2"
export const SKILL_DANCE_MUSIC = "3"
export const SKILL_LAW = "4"
export const SKILL_EDUCATION = "5"
export const SKILL_SPORTS = "6"
export const SKILL_GASTRONOMY = "7"
export const SKILL_ELDERLY = "8"
export const SKILL_LANGUAGES = "9"
export const SKILL_IT = "10"
export const SKILL_HEALTH = "11"
export const SKILL_PSYCHOLOGY = "12"
export const SKILL_OTHERS = "13"

const skills_obj = {}

for (let i = 0; i < skills.length; i++) {
  skills_obj[skills[i].id] = skills[i]
}

export default skills_obj
