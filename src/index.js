import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/personagem.js"
import { arqueiro } from "./modules/arqueiro.js"

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10)
const arqueiroBruno = new arqueiro('Bruno', 7, 8)

const personagens = [magoAntonio, magaJulia, arqueiroBruno]

new PersonagemView(personagens).render()