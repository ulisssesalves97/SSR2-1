export { default as Card } from '../..\\components\\Card.vue'
export { default as HelloWorld } from '../..\\components\\HelloWorld.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as User } from '../..\\components\\User.vue'
export { default as Bio } from '../..\\components\\profile\\Bio.vue'
export { default as ProfileFoto } from '../..\\components\\profile\\ProfileFoto.vue'

export const LazyCard = import('../..\\components\\Card.vue' /* webpackChunkName: "components_Card'}" */).then(c => c.default || c)
export const LazyHelloWorld = import('../..\\components\\HelloWorld.vue' /* webpackChunkName: "components_HelloWorld'}" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo'}" */).then(c => c.default || c)
export const LazyUser = import('../..\\components\\User.vue' /* webpackChunkName: "components_User'}" */).then(c => c.default || c)
export const LazyBio = import('../..\\components\\profile\\Bio.vue' /* webpackChunkName: "components_profile/Bio'}" */).then(c => c.default || c)
export const LazyProfileFoto = import('../..\\components\\profile\\ProfileFoto.vue' /* webpackChunkName: "components_profile/ProfileFoto'}" */).then(c => c.default || c)
