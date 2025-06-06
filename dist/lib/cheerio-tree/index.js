"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// app/lib/cheerio-tree/index.ts
var cheerio_tree_exports = {};
__export(cheerio_tree_exports, {
  googleDesktopSerpConfig: () => googleDesktopSerpConfig,
  proxysitesAiCategoryConfig: () => proxysitesAiCategoryConfig,
  proxysitesAiTopicConfig: () => proxysitesAiTopicConfig,
  wordpressComTagsConfig: () => wordpressComTagsConfig,
  wordpressOrgDocumentationConfig: () => wordpressOrgDocumentationConfig,
  wordpressOrgPhotosConfig: () => wordpressOrgPhotosConfig
});
module.exports = __toCommonJS(cheerio_tree_exports);

// app/lib/cheerio-tree/google-desktopSerp.ts
var googleDesktopSerpConfig = {
  "tree": {
    "url": {
      "match": "https://www.google.com/search",
      "params": {
        "q": {
          "name": "query",
          "required": true
        },
        "gl": {
          "name": "Country Code"
        },
        "hl": {
          "name": "lang code"
        },
        "num": {
          "name": "serp results"
        },
        "start": {
          "name": "offset"
        }
      }
    },
    "nodes": {
      "meta": {
        "wrapper": {
          "list": false,
          "selector": "body",
          "normal": {
            "query_displayed": {
              "selector": "#tsf textarea"
            },
            "result_stats": {
              "wrapper": {
                "list": false,
                "selector": "div#result-stats",
                "normal": {
                  "total_results": {
                    "selector": "SELF",
                    "attr": "html",
                    "after_regular": [
                      {
                        "regex": "<nobr>.*</nobr>",
                        "replace": null
                      },
                      {
                        "regex": "[^\\d]",
                        "replace": null
                      }
                    ]
                  },
                  "time_taken_displayed": {
                    "selector": "nobr",
                    "after_regular": [
                      {
                        "regex": "[^\\d\\.]",
                        "replace": null
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      "origin_results": {
        "wrapper": {
          "list": false,
          "selector": 'div[id="rcnt"]',
          "other_types": [
            {
              "name": "tablist",
              "validate": {
                "selector": 'div.XqFnDf [role="tablist"]'
              }
            },
            {
              "name": "store",
              "rename": "normal",
              "validate": {
                "selector": "#rso div.fKw1wf"
              }
            }
          ],
          "tablist": {
            "tabs": {
              "selector": 'span[jsname="AznF2e"]',
              "is_array": true
            },
            "results": {
              "wrapper": {
                "remove_children_node": {
                  "selector": ".LEwnzc.Sqrs4e"
                },
                "position": true,
                "list": true,
                "selector": "#rso > .MjjYud, #Odp5De, #rso > .ULSxyf .TzHB6b",
                "other_types": [
                  {
                    "name": "twitter",
                    "validate": {
                      "selector": "div.g.eejeod"
                    }
                  },
                  {
                    "name": "site_links",
                    "validate": {
                      "selector": ".BYM4Nd"
                    }
                  },
                  {
                    "name": "video",
                    "validate": {
                      "selector": 'div[jscontroller="rTuANe"]',
                      "except": '[jscontroller="UzbKLd"]'
                    }
                  },
                  {
                    "name": "book",
                    "validate": {
                      "selector": 'div.ChPIuf a[href*="tbm=bks"]'
                    }
                  },
                  {
                    "name": "normal",
                    "validate": {
                      "selector": ".g",
                      "except": "product-viewer-group"
                    }
                  }
                ],
                "normal": {
                  "title": {
                    "selector": '.yuRUbf a[jsname="UWckNb"] h3'
                  },
                  "snippet": {
                    "selector": 'div[data-snf="nke7rc"]',
                    "attr": "html",
                    "to_markdown": true
                  },
                  "source": {
                    "wrapper": {
                      "list": false,
                      "selector": 'a[jsname="UWckNb"]',
                      "normal": {
                        "title": {
                          "selector": "h3"
                        },
                        "name": {
                          "selector": 'a[jsname="UWckNb"] span.VuuXrf'
                        },
                        "display_link": {
                          "selector": 'a[jsname="UWckNb"] .byrV5b cite'
                        },
                        "link": {
                          "selector": "SELF",
                          "attr": "href"
                        }
                      }
                    }
                  },
                  "thumbnail": {
                    "selector": 'div[data-snf="Vjbam"] img',
                    "attr": "src"
                  },
                  "snippet_highlighted_words": {
                    "selector": "em",
                    "is_array": true
                  },
                  "rich_snippet": {
                    "wrapper": {
                      "list": false,
                      "selector": "SELF",
                      "normal": {
                        "rated": {
                          "wrapper": {
                            "list": false,
                            "selector": 'div[data-snf="mCCBcf"]',
                            "other_types": [
                              {
                                "name": "store",
                                "validate": {
                                  "selector": "span.z3HNkc.fUNJzc"
                                }
                              },
                              {
                                "name": "normal",
                                "validate": {
                                  "selector": "span.z3HNkc:not(.fUNJzc)"
                                }
                              }
                            ],
                            "store": {
                              "link": {
                                "selector": "a",
                                "attr": "href"
                              },
                              "label": {
                                "selector": "span[aria-label]",
                                "attr": "aria-label"
                              },
                              "rating": {
                                "to_f": null,
                                "selector": "span[aria-hidden]"
                              },
                              "reviews": {
                                "selector": "a",
                                "to_i": null,
                                "after_regular": [
                                  {
                                    "regex": "K",
                                    "replace": "000"
                                  },
                                  {
                                    "regex": "M",
                                    "replace": "000000"
                                  },
                                  {
                                    "regex": "B",
                                    "replace": "000000000"
                                  },
                                  {
                                    "regex": "[^\\d]",
                                    "replace": null
                                  }
                                ]
                              },
                              "reviews_origin": {
                                "selector": "a"
                              }
                            },
                            "normal": {
                              "display_price": {
                                "selector": "span.LI0TWe.wHYlTd"
                              },
                              "rating": {
                                "selector": "div > span:nth-child(2)",
                                "to_f": null,
                                "after_regular": [
                                  {
                                    "regex": "[^\\d\\.]",
                                    "replace": null
                                  }
                                ]
                              },
                              "label": {
                                "selector": "span[aria-label]",
                                "attr": "aria-label"
                              },
                              "reviews": {
                                "selector": "div > span:nth-child(3)",
                                "to_i": null,
                                "after_regular": [
                                  {
                                    "regex": "K",
                                    "replace": "000"
                                  },
                                  {
                                    "regex": "M",
                                    "replace": "000000"
                                  },
                                  {
                                    "regex": "B",
                                    "replace": "000000000"
                                  },
                                  {
                                    "regex": "[^\\d]",
                                    "replace": null
                                  }
                                ]
                              },
                              "reviews_origin": {
                                "selector": "div > span:nth-child(3)"
                              }
                            }
                          }
                        },
                        "extensions": {
                          "selector": 'div[data-snf="mCCBcf"]'
                        }
                      }
                    }
                  },
                  "links": {
                    "wrapper": {
                      "list": true,
                      "selector": 'div[data-snf="gdePb"] a',
                      "normal": {
                        "title": {
                          "selector": "SELF"
                        },
                        "link": {
                          "selector": "SELF",
                          "attr": "href"
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "store": {
            "results": {
              "wrapper": {
                "remove_children_node": {
                  "selector": ".LEwnzc.Sqrs4e"
                },
                "position": true,
                "list": true,
                "selector": "#rso > .MjjYud, #Odp5De, #rso > .ULSxyf .TzHB6b",
                "other_types": [
                  {
                    "name": "twitter",
                    "validate": {
                      "selector": "div.g.eejeod"
                    }
                  },
                  {
                    "name": "site_links",
                    "validate": {
                      "selector": ".BYM4Nd"
                    }
                  },
                  {
                    "name": "video",
                    "validate": {
                      "selector": 'div[jscontroller="rTuANe"]',
                      "except": '[jscontroller="UzbKLd"]'
                    }
                  },
                  {
                    "name": "book",
                    "validate": {
                      "selector": 'div.ChPIuf a[href*="tbm=bks"]'
                    }
                  },
                  {
                    "name": "normal",
                    "validate": {
                      "selector": ".g",
                      "except": "product-viewer-group"
                    }
                  }
                ],
                "normal": {
                  "title": {
                    "selector": '.yuRUbf a[jsname="UWckNb"] h3'
                  },
                  "snippet": {
                    "selector": 'div[data-snf="nke7rc"]',
                    "attr": "html",
                    "to_markdown": true
                  },
                  "source": {
                    "wrapper": {
                      "list": false,
                      "selector": 'a[jsname="UWckNb"]',
                      "normal": {
                        "title": {
                          "selector": "h3"
                        },
                        "name": {
                          "selector": 'a[jsname="UWckNb"] span.VuuXrf'
                        },
                        "display_link": {
                          "selector": 'a[jsname="UWckNb"] .byrV5b cite'
                        },
                        "link": {
                          "selector": "SELF",
                          "attr": "href"
                        }
                      }
                    }
                  },
                  "thumbnail": {
                    "selector": 'div[data-snf="Vjbam"] img',
                    "attr": "src"
                  },
                  "snippet_highlighted_words": {
                    "selector": "em",
                    "is_array": true
                  },
                  "rich_snippet": {
                    "wrapper": {
                      "list": false,
                      "selector": "SELF",
                      "normal": {
                        "rated": {
                          "wrapper": {
                            "list": false,
                            "selector": 'div[data-snf="mCCBcf"]',
                            "other_types": [
                              {
                                "name": "store",
                                "validate": {
                                  "selector": "span.z3HNkc.fUNJzc"
                                }
                              },
                              {
                                "name": "normal",
                                "validate": {
                                  "selector": "span.z3HNkc:not(.fUNJzc)"
                                }
                              }
                            ],
                            "store": {
                              "link": {
                                "selector": "a",
                                "attr": "href"
                              },
                              "label": {
                                "selector": "span[aria-label]",
                                "attr": "aria-label"
                              },
                              "rating": {
                                "to_f": null,
                                "selector": "span[aria-hidden]"
                              },
                              "reviews": {
                                "selector": "a",
                                "to_i": null,
                                "after_regular": [
                                  {
                                    "regex": "K",
                                    "replace": "000"
                                  },
                                  {
                                    "regex": "M",
                                    "replace": "000000"
                                  },
                                  {
                                    "regex": "B",
                                    "replace": "000000000"
                                  },
                                  {
                                    "regex": "[^\\d]",
                                    "replace": null
                                  }
                                ]
                              },
                              "reviews_origin": {
                                "selector": "a"
                              }
                            },
                            "normal": {
                              "display_price": {
                                "selector": "span.LI0TWe.wHYlTd"
                              },
                              "rating": {
                                "selector": "div > span:nth-child(2)",
                                "to_f": null,
                                "after_regular": [
                                  {
                                    "regex": "[^\\d\\.]",
                                    "replace": null
                                  }
                                ]
                              },
                              "label": {
                                "selector": "span[aria-label]",
                                "attr": "aria-label"
                              },
                              "reviews": {
                                "selector": "div > span:nth-child(3)",
                                "to_i": null,
                                "after_regular": [
                                  {
                                    "regex": "K",
                                    "replace": "000"
                                  },
                                  {
                                    "regex": "M",
                                    "replace": "000000"
                                  },
                                  {
                                    "regex": "B",
                                    "replace": "000000000"
                                  },
                                  {
                                    "regex": "[^\\d]",
                                    "replace": null
                                  }
                                ]
                              },
                              "reviews_origin": {
                                "selector": "div > span:nth-child(3)"
                              }
                            }
                          }
                        },
                        "extensions": {
                          "selector": 'div[data-snf="mCCBcf"]'
                        }
                      }
                    }
                  },
                  "links": {
                    "wrapper": {
                      "list": true,
                      "selector": 'div[data-snf="gdePb"] a',
                      "normal": {
                        "title": {
                          "selector": "SELF"
                        },
                        "link": {
                          "selector": "SELF",
                          "attr": "href"
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "normal": {
            "results": {
              "wrapper": {
                "remove_children_node": {
                  "selector": ".LEwnzc.Sqrs4e"
                },
                "position": true,
                "list": true,
                "selector": "#rso > .MjjYud, #rso div > .MjjYud, #Odp5De",
                "other_types": [
                  {
                    "name": "twitter",
                    "validate": {
                      "selector": "div.g.eejeod"
                    }
                  },
                  {
                    "name": "site_links",
                    "validate": {
                      "selector": ".BYM4Nd"
                    }
                  },
                  {
                    "name": "video",
                    "validate": {
                      "selector": 'div[jscontroller="rTuANe"]',
                      "except": '[jscontroller="UzbKLd"]'
                    }
                  },
                  {
                    "name": "book",
                    "validate": {
                      "selector": 'div.ChPIuf a[href*="tbm=bks"]'
                    }
                  },
                  {
                    "name": "normal",
                    "validate": {
                      "selector": ".g",
                      "except": "product-viewer-group"
                    }
                  }
                ],
                "normal": {
                  "title": {
                    "selector": '.yuRUbf a[jsname="UWckNb"] h3'
                  },
                  "snippet": {
                    "selector": 'div[data-snf="nke7rc"]',
                    "attr": "html",
                    "to_markdown": true
                  },
                  "source": {
                    "wrapper": {
                      "list": false,
                      "selector": 'a[jsname="UWckNb"]',
                      "normal": {
                        "title": {
                          "selector": "h3"
                        },
                        "name": {
                          "selector": 'a[jsname="UWckNb"] span.VuuXrf'
                        },
                        "display_link": {
                          "selector": 'a[jsname="UWckNb"] .byrV5b cite'
                        },
                        "link": {
                          "selector": "SELF",
                          "attr": "href"
                        }
                      }
                    }
                  },
                  "thumbnail": {
                    "selector": 'div[data-snf="Vjbam"] img',
                    "attr": "src"
                  },
                  "snippet_highlighted_words": {
                    "selector": "em",
                    "is_array": true
                  },
                  "rich_snippet": {
                    "wrapper": {
                      "list": false,
                      "selector": "SELF",
                      "normal": {
                        "rated": {
                          "wrapper": {
                            "list": false,
                            "selector": 'div[data-snf="mCCBcf"]',
                            "other_types": [
                              {
                                "name": "store",
                                "validate": {
                                  "selector": "span.z3HNkc.fUNJzc"
                                }
                              },
                              {
                                "name": "normal",
                                "validate": {
                                  "selector": "span.z3HNkc:not(.fUNJzc)"
                                }
                              }
                            ],
                            "store": {
                              "link": {
                                "selector": "a",
                                "attr": "href"
                              },
                              "label": {
                                "selector": "span[aria-label]",
                                "attr": "aria-label"
                              },
                              "rating": {
                                "to_f": null,
                                "selector": "span[aria-hidden]"
                              },
                              "reviews": {
                                "selector": "a",
                                "to_i": null,
                                "after_regular": [
                                  {
                                    "regex": "K",
                                    "replace": "000"
                                  },
                                  {
                                    "regex": "M",
                                    "replace": "000000"
                                  },
                                  {
                                    "regex": "B",
                                    "replace": "000000000"
                                  },
                                  {
                                    "regex": "[^\\d]",
                                    "replace": null
                                  }
                                ]
                              },
                              "reviews_origin": {
                                "selector": "a"
                              }
                            },
                            "normal": {
                              "display_price": {
                                "selector": "span.LI0TWe.wHYlTd"
                              },
                              "rating": {
                                "selector": "div > span:nth-child(2)",
                                "to_f": null,
                                "after_regular": [
                                  {
                                    "regex": "[^\\d\\.]",
                                    "replace": null
                                  }
                                ]
                              },
                              "label": {
                                "selector": "span[aria-label]",
                                "attr": "aria-label"
                              },
                              "reviews": {
                                "selector": "div > span:nth-child(3)",
                                "to_i": null,
                                "after_regular": [
                                  {
                                    "regex": "K",
                                    "replace": "000"
                                  },
                                  {
                                    "regex": "M",
                                    "replace": "000000"
                                  },
                                  {
                                    "regex": "B",
                                    "replace": "000000000"
                                  },
                                  {
                                    "regex": "[^\\d]",
                                    "replace": null
                                  }
                                ]
                              },
                              "reviews_origin": {
                                "selector": "div > span:nth-child(3)"
                              }
                            }
                          }
                        },
                        "extensions": {
                          "selector": 'div[data-snf="mCCBcf"]'
                        }
                      }
                    }
                  },
                  "links": {
                    "wrapper": {
                      "list": true,
                      "selector": 'div[data-snf="gdePb"] a',
                      "normal": {
                        "title": {
                          "selector": "SELF"
                        },
                        "link": {
                          "selector": "SELF",
                          "attr": "href"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

// app/lib/cheerio-tree/proxysitesAi-category.ts
var proxysitesAiCategoryConfig = {
  "tree": {
    "url": {
      "match": "https://www.proxysites.ai/category/.*"
    },
    "nodes": {
      "title": {
        "selector": "title"
      },
      "topics": {
        "wrapper": {
          "position": true,
          "list": true,
          "selector": 'main > div.row > div[class="col"], div#content > main > div > div.h5',
          "other_types": [
            {
              "name": "with_sites",
              "validate": {
                "selector": '> a:not([role="button"])'
              }
            }
          ],
          "with_sites": {
            "name": {
              "selector": " > a"
            },
            "link": {
              "selector": " > a",
              "attr": "href"
            }
          },
          "normal": {
            "name": {
              "selector": "div.col > a span:nth-child(1)"
            },
            "link": {
              "selector": "div.col > a",
              "attr": "href"
            }
          }
        }
      }
    }
  }
};

// app/lib/cheerio-tree/proxysitesAi-topic.ts
var proxysitesAiTopicConfig = {
  "tree": {
    "url": {
      "match": "https://www.proxysites.ai/topic/.*"
    },
    "nodes": {
      "title": {
        "selector": "title"
      },
      "sites": {
        "wrapper": {
          "list": true,
          "selector": "div#collection article",
          "normal": {
            "name": {
              "selector": "h3"
            },
            "link": {
              "selector": "h3 a.text-nav",
              "attr": "href"
            },
            "description": {
              "selector": "div.line-clamp-2"
            },
            "tags": {
              "selector": "div.d-flex.flex-wrap.align-items-center > span",
              "is_array": true
            }
          }
        }
      }
    }
  }
};

// app/lib/cheerio-tree/wordpressCom-tags.ts
var wordpressComTagsConfig = {
  "tree": {
    "url": {
      "match": "https://wordpress.com/tags"
    },
    "nodes": {
      "trending": {
        "wrapper": {
          "list": true,
          "selector": "div.trending-tags__container .trending-tags__column",
          "normal": {
            "tag": {
              "selector": "a .trending-tags__title"
            },
            "link": {
              "selector": "a",
              "attr": "href",
              "after_regular": [
                {
                  "regex": "^(.*)$",
                  "replace": "https://wordpress.com$1"
                }
              ]
            },
            "count": {
              "to_i": null,
              "selector": ".trending-tags__count",
              "after_regular": [
                {
                  "regex": "K",
                  "replace": "000"
                },
                {
                  "regex": "M",
                  "replace": "000000"
                },
                {
                  "regex": "[^\\d]",
                  "replace": null
                }
              ]
            }
          }
        }
      },
      "tags": {
        "wrapper": {
          "list": true,
          "selector": "div.alphabetic-tags__table",
          "normal": {
            "letter": {
              "selector": "h3"
            },
            "tags": {
              "wrapper": {
                "list": true,
                "selector": "div.alphabetic-tags__col",
                "normal": {
                  "name": {
                    "selector": "a"
                  },
                  "link": {
                    "selector": "a",
                    "attr": "href",
                    "after_regular": [
                      {
                        "regex": "^(.*)$",
                        "replace": "https://wordpress.com$1"
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

// app/lib/cheerio-tree/wordpressOrg-documentation.ts
var wordpressOrgDocumentationConfig = {
  "tree": {
    "url": {
      "match": "https://wordpress.org/documentation/"
    },
    "nodes": {
      "articles": null
    }
  }
};

// app/lib/cheerio-tree/wordpressOrg-photos.ts
var wordpressOrgPhotosConfig = {
  "tree": {
    "url": {
      "match": "https://wordpress.org/photos/"
    },
    "nodes": {
      "articles": null
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  googleDesktopSerpConfig,
  proxysitesAiCategoryConfig,
  proxysitesAiTopicConfig,
  wordpressComTagsConfig,
  wordpressOrgDocumentationConfig,
  wordpressOrgPhotosConfig
});
