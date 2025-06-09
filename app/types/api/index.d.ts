export interface SidebarLinks {
  napthe: string;
  appstore: string;
  apkdownload: string;
  nhapcode: string;
  dangky: string;
  baovetaikhoan: string;
  fanpage: string;
  chplay: string;
  groupfb: string;
  windows: string;
}
export type newResponse = {
  id: number;
  code: string;
  name: string;
  created_at?: string | null;
  updated_at?: string | null;
};

export type newSubResponse = {
  id: number;
  name: string;
  start_date: string;
  type_new_id: number;
  server_id: number;
  created_at?: string | null;
  updated_at?: string | null;
};

export type newServerRankResponse = {
  id: number;
  name: string;
  description: string;
  created_at?: string | null;
  updated_at?: string | null;
};
export type newServerRankResponse1 = {
  id: number;
  name: string;
};

export type Server = {
  id: number;
  name: string;
  description: string;
  created_at?: string | null;
  updated_at?: string | null;
};

export type RankUserResponse = {
  id: number;
  rank: number;
  name: string;
  level: string;
  power: string;
  server_id: number;
  server?: Server;
  created_at?: string | null;
  updated_at?: string | null;
};
export type RankUserResponse1 = {
  // id: number;
  rank: number;
  rname: string;
  level:number;
  experience: number;
  server_name: string;
};
export type RankRichResponse = {
  id: number;
  rank: number;
  name: string;
  level: string;
  money: string;
  server_id: number;
  server?: Server;
  created_at?: string | null;
  updated_at?: string | null;
};
export type RankRichResponse1 = {
  rank: number;
  rname: string;
  level: string;
  money: string;
  server_name: string;

};
export type RichUser = {
  rank: number;
  rname: string;
  level: number;
  money: number;
  server_name: string;
};

export type ServerRich = {
  server_name: string;
  top_rankings: RichUserUser[];
};
export type RichApiResponse = {
  message: string;
  data: {
    [serverId: string]: ServerRich;
  };
};
export type RankUser = {
  rank: number;
  rname: string;
  level: number;
  experience: number;
  server_name: string;
};

export type ServerRanking = {
  server_name: string;
  top_rankings: RankUser[];
};

export type RankApiResponse = {
  message: string;
  data: {
    [serverId: string]: ServerRanking;
  };
};

export type Embedded = {
  "author": [
      {
          "id": number,
          "name": string,
          "url": string,
          "description": string,
          "link": string,
          "slug": string,
          "avatar_urls": {
              "24": string,
              "48": string,
              "96": string
          },
          "_links": {
              "self": [
                  {
                      "href": string,
                      "targetHints": {
                          "allow":  string []
                          
                      }
                  }
              ],
              "collection": [
                  {
                      "href": string
                  }
              ]
          }
      }
  ],
  "wp:featuredmedia": [
                {
                    "id": number,
                    "date": string,
                    "slug": string,
                    "type": string,
                    "link": string,
                    "title": {
                        "rendered": string
                    },
                    "author": number,
                    "featured_media": number,
                    "caption": {
                        "rendered": string
                    },
                    "alt_text": string,
                    "media_type": string,
                    "mime_type": string,
                    "media_details": {
                        "width": number,
                        "height": number,
                        "file": string,
                        "filesize": number,
                        "sizes": {
                            "thumbnail": {
                                "file": string,
                                "width": number,
                                "height": number,
                                "filesize": number,
                                "mime_type": string,
                                "source_url": string
                            },
                            "full": {
                                "file": string,
                                "width": number,
                                "height": number,
                                "mime_type": string,
                                "source_url": string
                            }
                        },
                        "image_meta": {
                            "aperture": string,
                            "credit": string,
                            "camera": string,
                            "caption": string,
                            "created_timestamp": string,
                            "copyright": "",
                            "focal_length": string,
                            "iso": string,
                            "shutter_speed": string,
                            "title": string,
                            "orientation": string,
                            "keywords": []
                        }
                    },
                    "source_url": string,
                    "_links": {
                        "self": [
                            {
                                "href": string,
                                "targetHints": {
                                    "allow": string[ ]
                                }
                            }
                        ],
                        "collection": [
                            {
                                "href": string
                            }
                        ],
                        "about": [
                            {
                                "href": string
                            }
                        ],
                        "author": [
                            {
                                "embeddable": boolean,
                                "href": string
                            }
                        ],
                        "replies": [
                            {
                                "embeddable": boolean,
                                "href": string
                            }
                        ]
                    }
                }
            ],
  "wp:term": [
      [
          {
              "id": number,
              "link": string,
              "name": string,
              "slug": string,
              "taxonomy": string,
              "_links": {
                  "self": [
                      {
                          "href": string,
                          "targetHints": {
                              "allow": string []
                          }
                           }
                  ],
                  "collection": [
                      {
                          "href": string
                      }
                  ],
                  "about": [
                      {
                          "href": string
                      }
                  ],
                  "wp:post_type": [
                      {
                          "href": string
                      }
                  ],
                  "curies": [
                      {
                          "name":string,
                          "href": string,
                          "templated": boolean
                      }
                  ]
              }
          }
      ],
      []
  ]
};

export type PostResponse = {
  id: number;
  _embedded: Embedded;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: {
    neve_meta_sidebar: string;
    neve_meta_container: string;
    neve_meta_enable_content_width: string;
    neve_meta_content_width: number;
    neve_meta_title_alignment: string;
    neve_meta_author_avatar: string;
    neve_post_elements_order: string;
    neve_meta_disable_header: string;
    neve_meta_disable_footer: string;
    neve_meta_disable_title: string;
    footnotes: string;
  };
  categories: number[];
  tags: number[];
  class_list: string[];
  _links: {
    self: Array<{
      href: string;
      targetHints?: {
        allow: string[];
      };
    }>;
    collection: Array<{
      href: string;
    }>;
    about: Array<{
      href: string;
    }>;
    author: Array<{
      embeddable: boolean;
      href: string;
    }>;
  };
};
