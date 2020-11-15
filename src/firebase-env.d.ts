declare namespace NodeJS {
  interface Process {
    env: ProcessEnv
  }
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production'
    readonly BASE_URL: string
    VUE_APP_FIREBASE_API_KEY: string
    VUE_APP_FIREBASE_APP_ID: string
    VUE_APP_FIREBASE_AUTH_DOMAIN: string
    VUE_APP_FIREBASE_DATABASE_URL: string
    VUE_APP_FIREBASE_MEASUREMENT_ID: string
    VUE_APP_FIREBASE_MESSAGING_SENDER_ID: string
    VUE_APP_FIREBASE_PROJECT_ID: string
    VUE_APP_FIREBASE_STORAGE_BUCKET: string
  }
}
