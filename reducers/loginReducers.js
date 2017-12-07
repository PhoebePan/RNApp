// reducers/loginReducer.js
import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  GET_OTPCODE_SUCCESS
} from "../actions/actions";

const initialState = {
  mobile: "",
  otpCode: "",
  isAuth: false,
  expireTime: "",
  sessionToken: "",
  chatAuthToken: "",
  chatUserId: "",
  memberSn: ""
};

export default function authenticate(state = initialState, action = {}) {
  switch (action.type) {
    case GET_OTPCODE_SUCCESS:
      return {
        ...state,
        isAuth: false,
        mobile: action.data.mobile,
        otpCode: action.data.otpCode
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        mobile: action.data.mobile,
        otpCode: action.data.otpCode,
        expireTime: action.data.expireTime,
        sessionToken: action.data.sessionToken,
        chatAuthToken: action.data.chatAuthToken,
        chatUserId: action.data.chatUserId,
        memberSn: action.data.memberSn
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: false,
        mobile: "",
        otpCode: "",
        expireTime: "",
        sessionToken: "",
        chatAuthToken: "",
        chatUserId: "",
        memberSn: ""
      };
    default:
      return state;
  }
}
