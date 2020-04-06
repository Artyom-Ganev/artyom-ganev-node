export const APP_AUTH = 'APP_AUTH';
export const APP_AUTH_REQUEST = 'APP_AUTH_REQUEST';
export const APP_AUTH_SUCCEEDED = 'APP_AUTH_SUCCEEDED';
export const APP_AUTH_FAILED = 'APP_AUTH_FAILED';
export const APP_LOGOUT = 'APP_LOGOUT';
export const APP_USER = 'APP_USER';
export const APP_USER_REQUEST = 'APP_USER_REQUEST';
export const APP_USER_SUCCEEDED = 'APP_USER_SUCCEEDED';
export const APP_USER_FAILED = 'APP_USER_FAILED';

export const appAuth = (credentials) => ({
  type: APP_AUTH,
  payload: credentials,
});

export const appAuthRequest = () => ({
  type: APP_AUTH_REQUEST,
});

export const appAuthSucceeded = (accessToken) => ({
  type: APP_AUTH_SUCCEEDED,
  payload: { accessToken },
});

export const appAuthFailed = (error) => ({
  type: APP_AUTH_FAILED,
  payload: { error },
});

export const appLogout = () => ({
  type: APP_LOGOUT,
});

export const appUser = (accessToken) => ({
  type: APP_USER,
  payload: { accessToken },
});

export const appUserRequest = () => ({
  type: APP_USER_REQUEST,
});

export const appUserSucceeded = () => ({
  type: APP_USER_SUCCEEDED,
});

export const appUserFailed = () => ({
  type: APP_USER_FAILED,
});
