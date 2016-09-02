import image_professional_capacitation from '../assets/img/2A/capacitacaoprofissa.jpg'
import image_fighting_poverty from '../assets/img/2A/combateapobreza2.jpg'
import image_rights_defense from '../assets/img/2A/defesadedireitos.jpg'
import image_civic_participation from '../assets/img/2A/participacaocidada.jpg'
import image_young_people from '../assets/img/2B/criancasejovens3.jpg'
import image_culture from '../assets/img/2B/culturaesporteartes.jpg'
import image_education from '../assets/img/2B/educacao.jpg'
import image_elderly from '../assets/img/2C/idosos.jpg'
import image_disabled_people from '../assets/img/2C/pessoascomdeficiencia1.jpg'
import image_health from '../assets/img/2C/saude.jpg'
import image_conscious_consumption from '../assets/img/2D/consumoconsciente.jpg'
import image_environment from '../assets/img/2D/meioambiente.jpg'
import image_animal_protection from '../assets/img/2D/protecaoanimal.jpg'

export const causes =  [
  {
    id: "1",
    name: "Capacitação Profissional",
    image: image_professional_capacitation
  },
  {
    id: "2",
    name: "Combate à Pobreza",
    image: image_fighting_poverty
  },
  {
    id: "3",
    name: "Consumo Consciente",
    image: image_conscious_consumption
  },
  {
    id: "4",
    name: "Crianças e Jovens",
    image: image_young_people
  },
  {
    id: "5",
    name: "Cultura, Esporte e Arte",
    image: image_culture
  },
  {
    id: "6",
    name: "Defesa de Direitos",
    image: image_rights_defense
  },
  {
    id: "7",
    name: "Educação",
    image: image_education
  },
  {
    id: "8",
    name: "Idosos",
    image: image_elderly
  },
  {
    id: "9",
    name: "Meio Ambiente",
    image: image_environment
  },
  {
    id: "10",
    name: "Participação Cidadã",
    image: image_civic_participation
  },
  {
    id: "11",
    name: "Proteção Animal",
    image: image_animal_protection
  },
  {
    id: "12",
    name: "Saúde",
    image: image_health
  },
  {
    id: "13",
    name: "Pessoas com Deficiência",
    image: image_disabled_people
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
