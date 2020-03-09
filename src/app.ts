import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import routes from './routes'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void { // Função sem retorno
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    mongoose.connect('', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', function () {
      console.log('We are connected!')
    })
  }

  private routes (): void {
    this.express.get('/', (req, res) => {
      return res.send('Hello Word')
    })

    this.express.use('/user', routes)
  }
}

export default new App().express
