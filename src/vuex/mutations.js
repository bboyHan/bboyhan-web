// 定义所需的 mutations
export const userToken = (state, userToken) => {
  if (userToken) {
    state.token = userToken;
  } else {
    state.token = null;
  }
}

export const username = (state, username) => {
  if (username) {
    state.currentUser = username;
    state.isLogin = true;
  } else if (user == null) {
    sessionStorage.setItem("username", null);
    sessionStorage.setItem("userToken", "");
    state.currentUser = null;
    state.isLogin = false;
    state.token = "";
  }
}

export const lougout = (state) => {
  sessionStorage.clear()
  state.currentUser = null;
  state.token = null
  state.isLogin = false;
}
