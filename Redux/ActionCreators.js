import * as ActionTypes from "./ActionTypes";
import { baseUrl } from '../shared/baseUrl' //dev setup

// not sure if in the case of the gallery I need to do this?
// but perhaps there is some auxialary content that supports the gallery?
export const fetchGallery = () => dispatch => {
    return fetch(baseUrl+'gallery')
        .then(response => {
            if(response.ok){
                return response
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
         const errMess = new Error(error.message);
         throw errMess;           
        })
    .then(response => response.json())
    .then(gallery => dispatch(addGallery(gallery)))
    .catch(error=> dispatch(galleryFailed(error.message)));
};


export const galleryLoading = () => ({
    type: ActionTypes.GALLERY_LOADING,
});

export const galleryFailed = () => ({
    type: ActionTypes.GALLERY_FAILED,
    payload: errMess
});

export const addGallery = () => ({
    type: ActionTypes.ADD_GALLERY,
    payload: gallery,
});

// export const postGallery = (content) => dispatch => ({

// })

export const fetchPrompts = () => dispatch => {
    return fetch(baseUrl+'prompts')
        .then(response => {
            if(response.ok){
                return response
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
         const errMess = new Error(error.message);
         throw errMess;           
        })
    .then(response => response.json())
    .then(prompts => dispatch(addPrompts(prompts)))
    .catch(error=> dispatch(promptsFailed(error.message)));
};

export const promptsLoading = () => ({
    type: ActionTypes.PROMPTS_LOADING,
});

export const promptsFailed = () => ({
    type: ActionTypes.PROMPTS_FAILED,
    payload: errMess
});

export const addPrompts = () => ({
    type: ActionTypes.ADD_PROMPTS,
    payload: prompts,
});

// export const postPrompt = (content) => dispatch => ({})


// How to loade individual user? AUthentication?
export const fetchUser = () => dispatch => {
    return fetch(baseUrl+'user')
        .then(response => {
            if(response.ok){
                return response
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
         const errMess = new Error(error.message);
         throw errMess;           
        })
    .then(response => response.json())
    .then(user => dispatch(addUser(user)))
    .catch(error=> dispatch(userFailed(error.message)));
};

export const userLoading = () => ({
    type: ActionTypes.USER_LOADING,
});

export const userFailed = () => ({
    type: ActionTypes.USER_FAILED,
    payload: errMess
});

export const addUser = () => ({
    type: ActionTypes.ADD_USER,
    payload: user,
});

export const fetchParentalControls = () => dispatch => {
    return fetch(baseUrl+'parentalControls')
        .then(response => {
            if(response.ok){
                return response
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
         const errMess = new Error(error.message);
         throw errMess;           
        })
    .then(response => response.json())
    .then(parentalControls => dispatch(addParentalControls(parentalControls)))
    .catch(error=> dispatch(parentalControlsFailed(error.message)));
};

export const parentalControlsLoading = () => ({
    type: ActionTypes.PARENTALCONTROLS_LOADING,
});

export const parentalControlsFailed = () => ({
    type: ActionTypes.PARENTALCONTROLS_FAILED,
    payload: errMess
});

export const addParentalControls = () => ({
    type: ActionTypes.ADD_PARENTALCONTROLS,
    payload: parentalControls
});