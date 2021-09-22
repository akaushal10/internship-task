import {
  CHECK_VERIFIED,
  FAILURE_CREATE_PROFILE,
  IS_VERIFIED,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REQUEST_CREATE_PROFILE,
  REQUEST_LOGIN,
  SUCCESS_CREATE_PROFILE,
} from "../actions/actionsTypes";

const initialState = {
  loading: false,
  errorMessage: "",
  email: "",
  status:0,
  expiry:'',
  errorStatus:false,
  auth:''
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LOGIN: {
      return {
        ...state,
        loading: true,
        errorStatus:false,
        errorMessage:''
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loading: false,
        errorStatus:true,
        errorMessage: action.payload,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        errorStatus:false,
        errorMessage:'',
        ...action.payload
      };
    }
    case CHECK_VERIFIED:{
     return {
      ...state,
      loading:true,
     } 
    }
    case IS_VERIFIED:{
      return {
        ...state,
        loading:false,
        ...action.payload
      }
    }
    case REQUEST_CREATE_PROFILE:{
      return {
        ...state,
        loading:true
      }
    }
    case SUCCESS_CREATE_PROFILE:{
      return {
        ...state,
        loading: false,
        errorStatus:false,
        errorMessage:'',
        ...action.payload
      }
    }
    case FAILURE_CREATE_PROFILE:{
      return {
        ...state,
        loading: false,
        email: '',
        errorStatus:true,
        errorMessage:action.payload
      }
    }
    default:return state;
  }
};
export default loginReducer;
