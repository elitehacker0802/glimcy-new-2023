import { createSlice } from '@reduxjs/toolkit';

// utils
import axios from '../../utils/axios';

// Slice to fetch User Detail
const initialState = {
  isLoading: true,
  isProfileUploading: false,
  isProfileUploadError: false,
  error: null,
  success: null,
  user: {},
  apiKeys: []
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // START LOADING
    startLoading: (state) => {
      state.success = null;
      state.isLoading = true;
      state.error = null;
      state.user = {};
    },

    // Profile update Loading
    startProfileUpdateLoading: (state) => {
      state.success = null;
      state.isLoading = true;
      state.error = null;
    },

    // Forgot Pass Loading Start
    startForgotPassLoading: (state) => {
      state.success = null;
      state.isLoading = true;
      state.error = null;
    },

    // Upload Profile Picture Loading
    startUploadProfilePictureLoading: (state) => {
      state.success = null;
      state.isProfileUploading = true;
      state.isProfileUploadError = false;
    },

    // Password Reset Loading
    startPasswordResetLoading: (state) => {
      state.success = null;
      state.isLoading = true;
      state.error = null;
    },

    // HAS ERROR
    hasError: (state, action) => {
      state.success = null;
      state.isLoading = false;
      state.error = action.payload;
      state.user = {};
    },

    // Profile Update has error
    profileUpdateHasError: (state, action) => {
      state.success = null;
      state.isLoading = false;
      state.error = action.payload;
    },

    // Password Reset Has Error
    passwordResetHasError: (state, action) => {
      state.success = null;
      state.isLoading = false;
      state.error = action.payload;
    },

    // Profile Picture Upload Error
    profilePictureUploadError: (state, action) => {
      state.success = null;
      state.isProfileUploading = false;
      state.isProfileUploadError = action.payload;
    },

    // Forgot Pass Has Error
    forgotPassHasError: (state, action) => {
      state.success = null;
      state.isLoading = false;
      state.error = action.payload;
    },

    // Profile Update Success
    profileUpdateSuccess: (state, action) => {
      state.success = true;
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    },

    // Profile Picture Upload Success
    profilePictureUploadSuccess: (state, action) => {
      state.success = true;
      state.isProfileUploading = false;
      state.isProfileUploadError = false;
      state.user = action.payload;
    },

    // GET USER
    getUserSuccess: (state, action) => {
      state.success = true;
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    },

    // GET USER API KEYS
    getUserApiKeySuccess: (state, action) => {
      state.success = true;
      state.isLoading = false;
      state.error = null;
      state.apiKeys = action.payload;
    },

    // Password Reset Success
    passwordResetSuccess: (state) => {
      state.success = true;
      state.isLoading = false;
      state.error = null;
    },

    // Forgot Pass Success
    forgotPassSuccess: (state) => {
      state.success = true;
      state.isLoading = false
      state.error = false
    },
    
    // Clear Success/Error
    clearSuccessError: (state) => {
      state.success = false;
      state.error = null;
    },
    
    // Clear Error
    clearError: (state) => {
      state.error = null;
    },
    
    // Clear Success
    clearSuccess: (state) => {
      state.success = false;
    },
    
    // Logout User
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    
    // Set User
    setUser: (state, user) => {
      state.isAuthenticated = true;
      state.user = user;
  },
}
})

// Reducer
export default slice.reducer
export const { actions } = slice

// Actions
export function getUser() {
  return async (dispatch) => {
    dispatch(actions.startLoading())
    try {
      const response = await axios.get('/api/v1/accounts/profile/')
      dispatch(actions.getUserSuccess(response.data))
      console.log(response.data);
    } catch (error) {
      dispatch(actions.hasError(error))
    }
  }
}

export function getUserApiKeys() {
  return async (dispatch) => {
    dispatch(actions.startLoading())
    try {
      const response = await axios.get('/api/v1/accounts/profile/api-keys')
      dispatch(actions.getUserApiKeySuccess(response.data))
      console.log(response.data);
    } catch (error) {
      dispatch(actions.hasError(error))
    }
  }
}

export function updateProfile(data) {
  return async (dispatch) => {
    dispatch(actions.startProfileUpdateLoading())
    try {
      const response = await axios.patch('/api/v1/accounts/profile/', data)
      dispatch(actions.profileUpdateSuccess(response.data))
      
    } catch (error) {
      dispatch(actions.profileUpdateHasError(error))
    }
  }
}

export function forgotPassword(data) {
  return async (dispatch) => {
    dispatch(actions.startForgotPassLoading())
    try {
      await axios.post('/api/v1/accounts/forgot-password/', data)
      dispatch(actions.forgotPassSuccess())
    } catch (error) {
      dispatch(actions.forgotPassHasError(error))
    }
  }
}

export function updatePassword(data) {
  return async (dispatch) => {
    dispatch(actions.startPasswordResetLoading())
    try {
      await axios.post('/api/v1/accounts/update-password/', data)
      dispatch(actions.passwordResetSuccess())
    } catch (error) {
      dispatch(actions.passwordResetHasError(error))
    }
  }
}

export function resetPassword(data) {
  return async (dispatch) => {
    dispatch(actions.startPasswordResetLoading())
    try {
      await axios.post('/api/v1/accounts/reset-password/', data)
      dispatch(actions.passwordResetSuccess())
    } catch (error) {
      dispatch(actions.passwordResetHasError(error))
    }
  }
}
