const initialState = {
  evidenceTransaction: null,
  codeAccount: null,
  transaction: null,
  balance: 12500000
}

const transactionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch(type){
    case 'ADD_EVIDENCE_TRANSACTION':
      return {
        ...state,
        evidenceTransaction: payload
      }
    case 'ADD_CODE_ACCOUNT':
      return {
        ...state,
        codeAccount: payload
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transaction: payload
      }
    default:
      return {
        ...state
      }
  }
}

export default transactionReducer;