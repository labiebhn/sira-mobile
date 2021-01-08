export const addEvidenceTransaction = data => {
  return({
    type: "ADD_EVIDENCE_TRANSACTION",
    payload: data
  })
}

export const addCodeAccount = data => {
  return({
    type: "ADD_CODE_ACCOUNT",
    payload: data
  })
}

export const addTransaction = data => {
  return({
    type: "ADD_TRANSACTION",
    payload: data
  })
}