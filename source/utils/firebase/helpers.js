
import Rebase from 're-base'

import { FIREBASE_CONFIG } from './config'

export const firebaseDb = Rebase.createClass(FIREBASE_CONFIG.url)
