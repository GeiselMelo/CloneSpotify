export const environment = {
  production: true
};


export const SpotifyConfiguration = {
  clientId: 'ef72451e2d47487cb3d7b0f616d230be',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'https://geisel-spotify12.netlify.app/',
  scopes: [
    "user-read-currently-playing", // musica tocando agora.
    "user-read-recently-played", // ler musicas tocadas recentemente
    "user-read-playback-state", // ler estado do player do usuario
    "user-top-read", // top artistas e musicas do usuario
    "user-modify-playback-state", // alterar do player do usuario.
    "user-library-read", // ler biblioteca dos usuarios
    "playlist-read-private", // ler playlists privads
    "playlist-read-collaborative" // ler playlists colaborativas
  ]
}
