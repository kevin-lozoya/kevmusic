import kevMusicService from './kev-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'
  return kevMusicService.get('/search', {
    params: { q, type }
  }).then(res => res.data)
}

export default trackService
