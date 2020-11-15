import { createLogger, createStore } from 'vuex'
import auth from './modules/auth'

const debug = process.env.NODE_ENV !== 'production'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState {}

export default createStore({
  modules: {
    auth,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})
