import * as ActionTypes from './ActionTypes';

export const parentalControls = (state = { isLoading: true,
                                    errMess: null,
                                    parentalControls: []}, action) =>{
    switch (action.type){
        case ActionTypes.ADD_PARENTALCONTROLS:
            return {...state, isLoading: false, errMess: null, parentalControls: action.payload};
        case ActionTypes.PARENTALCONTROLS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        case ActionTypes.PARENTALCONTROLS_LOADING:
            return {...state, isLoading:true,errMess:null,parentalControls:[]};
        //update PARENTALCONTROLS
        }
                                }
