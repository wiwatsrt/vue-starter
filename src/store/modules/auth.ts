import firebase from '@/plugins/firebase'
import { ActionTree, GetterTree } from 'vuex'
import { RootState } from '../index'

type User = {
  id: string
  name: string | null
  email: string | null
  photoUrl: string | null
}

type State = {
  user: User | null
}

type AuthPayload = {
  email: string
  password: string
}

const state = <State>{
  user: null,
}

const getters = <GetterTree<State, RootState>>{
  loggedInUser(state: State) {
    return state.user
  },
  isAuthenticated(state: State) {
    return !!state.user
  },
}

const mutations = {
  setUser(state: State, user: firebase.User): void {
    state.user = {
      id: user.uid,
      name: user.displayName,
      email: user.email,
      photoUrl: user.photoURL,
    }
  },
  clearUser(state: State): void {
    state.user = null
  },
}

const actions = <ActionTree<State, RootState>>{
  signUpWithEmail({ commit }, payload: AuthPayload) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(({ user }) => {
          commit('setUser', user)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  signInWithEmail({ commit }, payload: AuthPayload): Promise<void> {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(({ user }) => {
          commit('setUser', user)
          resolve()
        })
        .catch((error) => {
          commit('clearUser')
          reject(error)
        })
    })
  },
  signOut({ commit }): Promise<void> {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit('clearUser')
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  autoSignIn({ commit }, user: firebase.User) {
    if (user) {
      commit('setUser', user)
    } else {
      commit('clearUser')
    }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
