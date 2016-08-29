import Image from '../components/QuizAlternative/image.jpg'

export const causes =  [
  {
    id: "1",
    name: "Capacitação Profissional",
    image: Image
  },
  {
    id: "2",
    name: "Combate à Pobreza",
    image: Image
  },
  {
    id: "3",
    name: "Consumo Consciente",
    image: Image
  },
  {
    id: "4",
    name: "Crianças e Jovens",
    image: Image
  },
  {
    id: "5",
    name: "Cultura, Esporte e Arte",
    image: Image
  },
  {
    id: "6",
    name: "Defesa de Direitos",
    image: Image
  },
  {
    id: "7",
    name: "Educação",
    image: Image
  },
  {
    id: "8",
    name: "Idosos",
    image: Image
  },
  {
    id: "9",
    name: "Meio Ambiente",
    image: Image
  },
  {
    id: "10",
    name: "Participação Cidadã",
    image: Image
  },
  {
    id: "11",
    name: "Proteção Animal",
    image: Image
  },
  {
    id: "12",
    name: "Saúde",
    image: Image
  },
  {
    id: "13",
    name: "Pessoas com Deficiência",
    image: Image
  }
]

// Exporting the ids by name
export const PROFESSIONAL_CAPACITATION = "1"
export const FIGHTING_POVERTY = "2"
export const CONSCIOUS_CONSUMPTION = "3"
export const YOUNG_PEOPLE = "4"
export const CULTURE = "5"
export const RIGHTS_DEFENSE = "6"
export const EDUCATION = "7"
export const ELDERLY = "8"
export const ENVIRONMENT = "9"
export const CIVIC_PARTICIPATION = "10"
export const ANIMAL_PROTECTION = "11"
export const HEALTH = "12"
export const DISABLED_PEOPLE = "13"


const causes_obj = {}

for (let i = 0; i < causes.length; i++) {
  causes_obj[causes[i].id] = causes[i]
}

export default causes_obj
