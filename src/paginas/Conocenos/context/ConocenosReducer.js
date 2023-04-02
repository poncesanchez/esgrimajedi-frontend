export const ConocenosReducer = ( state, action ) => {

  switch ( action.type ) {

    case 'SET_DATA':
    return {
      ...state,
      ...action.payload
    };
    case "SET_PERSONA_SELECCIONADA":
      return {
        ...state,
        personaSeleccionada: action.payload
      };


    //chatgtp
    case "SET_VISTA":
      return {
        ...state,
        vista: action.payload
      };
    case "SET_PERSONAS":
      return {
        ...state,
        personas: action.payload
      };
    case "SET_FACCIONES":
      return {
        ...state,
        facciones: action.payload
      };
    case "SET_FACCION_SELECCIONADA":
      return {
        ...state,
        faccionSeleccionada: action.payload
      };
    case "SET_PERSONAS_FACCION":
      return {
        ...state,
        personasFaccion: action.payload
      };
    

    default:
      return state;

  }
};