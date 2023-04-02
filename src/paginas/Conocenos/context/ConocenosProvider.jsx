import { useReducer } from 'react';
import { ConocenosContext } from './ConocenosContext';
import { ConocenosReducer } from './ConocenosReducer';

//LOADING
const INITIAL_STATE = {
  vista : "LOADING", //LOADING, ELEGIR_FACCION, FACCION
  personas: [],
  facciones: [],
  faccionSeleccionada:{},
  personasFaccion:[],
  personaSeleccionada:{}
}

export const ConocenosProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(ConocenosReducer, INITIAL_STATE);

  const setVista = ( vista ) => {
    dispatch({ 
      type : 'SET_VISTA', 
      payload: vista 
    });
  }

  const setData = ( data ) => {
    dispatch({ 
      type : 'SET_DATA', 
      payload: data 
    });
  }

  const setPersonaSeleccionada = ( persona ) => {
    dispatch({ 
      type : 'SET_PERSONA_SELECCIONADA', 
      payload: persona 
    });
  };


  const handleFaccionElegida = ( faccion ) => {
    const personasFaccion = [];
    for (let index = 0; index < state.personas.length; index++) {
      const persona = state.personas[index];
      const personaEnFaccion = persona.characters.find( fac => fac.faction === faccion.id);
      if(personaEnFaccion){
        personasFaccion.push({
          ...persona,
          ...personaEnFaccion
        })
      }
    }
    
    const data = {
      vista: 'PERSONAJES',
      faccionSeleccionada: faccion,
      personasFaccion: personasFaccion,
      personaSeleccionada: personasFaccion.length > 0 ? personasFaccion[0] : {}
    }
    console.log(data);
    setData(data);
  }

  const handleReset = () => {
    const data = {
      vista: 'ELEGIR_FACCION',
      faccionSeleccionada: {},
      personasFaccion:[],
      personaSeleccionada:{}
    }
    setData(data);
  };


  return(
    <ConocenosContext.Provider
      value={{
        ...state,

        setVista,
        setData,
        setPersonaSeleccionada,

        //handlers
        handleFaccionElegida,
        handleReset
      }}
    >
      { children }
    </ConocenosContext.Provider>
  )
};