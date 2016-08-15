import Image from './components/QuizAlternative/image.jpg'

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
export const CAUSE_PROFESSIONAL_CAPACITATION = "1"
export const CAUSE_FIGHTING_POVERTY = "2"
export const CAUSE_CONSCIOUS_CONSUMPTION = "3"
export const CAUSE_YOUNG_PEOPLE = "4"
export const CAUSE_CULTURE = "5"
export const CAUSE_RIGHTS_DEFENSE = "6"
export const CAUSE_EDUCATION = "7"
export const CAUSE_ELDERLY = "8"
export const CAUSE_ENVIRONMENT = "9"
export const CAUSE_CIVIC_PARTICIPATION = "10"
export const CAUSE_ANIMAL_PROTECTION = "11"
export const CAUSE_HEALTH = "12"
export const CAUSE_DISABLED_PEOPLE = "13"


const causes_obj = {}

for (let i = 0; i < causes.length; i++) {
  causes_obj[causes[i].id] = causes[i]
}

export default causes_obj
