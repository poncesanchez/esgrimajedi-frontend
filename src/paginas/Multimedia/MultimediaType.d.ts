export interface instagramPost {
  id: string,
  media_type: string,
  media_url: string,
  thumbnail_url: string,
  permalink: string,
  caption: string,
  timestamp : string,
  children: {
    data: [
      {
        id: string,
        media_type: string,
        media_url: string
      }
    ]
  }
}