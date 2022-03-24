interface ISearchItemThird {
  url: string,
  width: number,
  height: number
}

interface ISnippet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: {
    default: ISearchItemThird,
    medium: ISearchItemThird,
    high: ISearchItemThird,
    standard:ISearchItemThird,
    maxres: ISearchItemThird
  },
  channelTitle: string,
  tags: string[];
  categoryId: string,
  liveBroadcastContent: string,
  localized: {
    title: string,
    description: string
  },
  defaultAudioLanguage: string
}

interface IStatistics {
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  favoriteCount: string,
  commentCount: string
}

export interface ISearchItem {
  kind: string,
  etag: string,
  id: string,
  snippet: ISnippet,
  statistics: IStatistics
}

