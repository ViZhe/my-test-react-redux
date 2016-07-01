
import Horizon from '@horizon/client'


const hz = new Horizon()
hz.connect()

export const products = hz('products')
