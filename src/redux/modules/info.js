const LOAD = 'tfk-portalen/info/LOAD'
const LOAD_SUCCESS = 'tfk-portalen/info/LOAD_SUCCESS'
const LOAD_FAIL = 'tfk-portalen/info/LOAD_FAIL'

const initialState = {
  errors: [],
  data: {
    shortcuts: null
  }
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
        errors: state.errors.filter(item => item.infoType !== action.infoType)
      }
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          [action.infoType]: action.result
        }
      }
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        errors: [
          ...state.errors,
          { infoType: action.infoType, error: action.error, active: true }
        ],
        data: {
          ...state.data,
          [action.infoType]: []
        }
      }
    default:
      return state
  }
}
export function load(infoType) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get(`/api/info/${infoType}`),
    infoType
  }
}
