import { wrapFunctional } from './utils'

export { default as Card } from '../../components/Card.vue'
export { default as GenerateOGPButton } from '../../components/GenerateOGPButton.vue'
export { default as Logo } from '../../components/Logo.vue'

export const LazyCard = import('../../components/Card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c))
export const LazyGenerateOGPButton = import('../../components/GenerateOGPButton.vue' /* webpackChunkName: "components/generate-o-g-p-button" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
