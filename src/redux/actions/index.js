import axios from 'axios'

export const PERSONAJES = 'PERSONAJES'

export const traerPersonajes = () => async dispatch => {
    let personajes = await axios.get('https://ddragon.leagueoflegends.com/cdn/12.23.1/data/es_MX/champion.json')
    let arrayPersonajes = Object.keys(personajes.data.data).map(function (key) { return personajes.data.data[key] })
    let arrayConImagen = arrayPersonajes.map(ele => ({ ...ele, imagen: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${ele.id}_0.jpg` }))
    return dispatch({ type: PERSONAJES, payload: arrayConImagen })
}