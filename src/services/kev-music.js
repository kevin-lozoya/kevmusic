import trae from 'trae'
import configService from './config'

const kevMusicService = trae.create({
  baseUrl: configService.apiUrl
})

export default kevMusicService
