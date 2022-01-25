export const initialState = {
  searchTerm: '',
  isSticky: false,
  isSidebarSticky: true,
  isDrawerOpen: false,
  profile: {},
  menuToggle: false,
  categories: [],
  type:'',
  tab:"livebroadcast",
  livecategory:"",
  filtertype:false,
  stream:null
};

type ActionType =
  | { type: 'SET_SEARCH_TERM'; payload: string }
  | { type: 'SET_STICKY' }
  | { type: 'REMOVE_STICKY' }
  | { type: 'SET_SIDEBAR_STICKY' }
  | { type: 'REMOVE_SIDEBAR_STICKY' }
  | { type: 'TOGGLE_DRAWER' }
  | { type: 'TOGGLE_MENU'; }
  | { type: 'SET_TOGGLE_MENU'; payload: boolean }
  | { type: 'SET_CATEGORIES'; payload: any }
  | { type: 'SET_LIVE_CATEGORY'; payload:any}
  | { type: 'SET_TYPE'; payload:any}
  | { type: 'SET_TAB';  payload:any}
  | { type: 'SET_FILTER'; payload:boolean}
  | { type: 'SET_STREAM'; payload:any};

type StateType = typeof initialState;

export function appReducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      };
    case 'SET_STICKY':
      return {
        ...state,
        isSticky: true,
      };
    case 'REMOVE_STICKY':
      return {
        ...state,
        isSticky: false,
      };
    case 'SET_SIDEBAR_STICKY':
      return {
        ...state,
        isSidebarSticky: true,
      };
    case 'REMOVE_SIDEBAR_STICKY':
      return {
        ...state,
        isSidebarSticky: false,
      };
    case 'TOGGLE_DRAWER':
      return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen,
      };
    case 'TOGGLE_MENU':
      return {
        ...state,
        menuToggle: !state.menuToggle,
      };
    case 'SET_TOGGLE_MENU':
      return {
        ...state,
        menuToggle: action.payload,
      };
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };
    case 'SET_LIVE_CATEGORY':
      return {
        ...state,
        livecategory:action.payload
      }
    case 'SET_TYPE':
      return {
        ...state,
        type:action.payload
      }
    case 'SET_TAB':
      return {
        ...state,
        tab:action.payload
      }
    case 'SET_STREAM':
      return {
        ...state,
        stream:action.payload
      }
    case 'SET_FILTER':
      return {
        ...state,
        filtertype:action.payload
      }
    default: {
      throw new Error(`Unsupported action type at App Reducer`);
    }
  }
}
