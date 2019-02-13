import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
library.add(
  faGithub,
  faTwitter,
  faLinkedin,
  faEnvelope
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
