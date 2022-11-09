var FakeServer = require('fake-json-api-server/src/nodeServer');

new FakeServer({
    storageKey: 'fakeServerStorage',
    port: 3001,
    resources: {
        stores: {
            data: [{
                type: 'stores',
                id: '1',
                attributes: {
                    name: 'MicroBooks',
                    website:'https://www.micro-books-store.com',
                    rating: 4,
                    storeImage: 'https://i.pinimg.com/736x/51/a2/47/51a247e0d1785b89b70a17a1c8f31ac5--melbourne-australia-second-hand.jpg',
                    establishmentDate: '1995-02-09T00:00:00+0000'
                },
                relationships: {
                    countries: {
                        data: {
                            id: '1',
                            type: 'countries'
                        }
                    },
                    books: {
                        data: [
                            {id: '1', type: 'books'},
                            {id: '2', type: 'books'},
                            {id: '8', type: 'books'},
                        ]
                    }
                }
            },
            {
                type: 'stores',
                id: '2',
                attributes: {
                    name: 'SquirroBooks',
                    website:'https://www.squirro.com',
                    rating: 5,
                    storeImage: 'https://i.ytimg.com/vi/g-5A1EJ4KMg/maxresdefault.jpg',
                    establishmentDate: '2011-01-17T00:00:00+0000'
                },
                relationships: {
                    countries: {
                        data: {
                            id: '3',
                            type: 'countries'
                        }
                    },
                    books: {
                        data: [
                            {id: '1', type: 'books'},
                            {id: '2', type: 'books'},
                            {id: '3', type: 'books'},
                            {id: '4', type: 'books'},
                            {id: '5', type: 'books'},
                            {id: '6', type: 'books'},
                            {id: '7', type: 'books'},
                            {id: '8', type: 'books'},
                        ]
                    }
                }
            },
            {
                type: 'stores',
                id: '3',
                attributes: {
                    name: 'CryptoBook',
                    website:'https://www.crypto-book-store.com',
                    rating: 3,
                    storeImage: 'https://www.crypto-news-flash.com/wp-content/uploads/2020/11/Bitcoin-Store.png',
                    establishmentDate: '1971-10-10T00:00:00+0000'
                },
                relationships: {
                    countries: {
                        data: {
                            id: '1',
                            type: 'countries'
                        }
                    },
                    books: {
                        data: [
                            {id: '4', type: 'books'},
                        ]
                    }
                }
            },
            {
                type: 'stores',
                id: '4',
                attributes: {
                    name: 'ChipzStore',
                    website:'https://www.chipz-store-books.com',
                    rating: 5,
                    storeImage: 'http://3.bp.blogspot.com/-3ofq2Hhzjs4/UhRo3UMXiBI/AAAAAAAAGeQ/Z_1wag7ouyI/s1600/empty+shelves.jpg',
                    establishmentDate: '1988-10-10T00:00:00+0000'
                },
                relationships: {
                    countries: {
                        data: {
                            id: '2',
                            type: 'countries'
                        }
                    }
                }
            }],
        },
        books: {
            data: [
                {
                    type: 'books',
                    id: '1',
                    attributes: {
                        name: 'JavaScript: The Good Parts',
                        copiesSold: 154
                    },
                    relationships: {
                        author: {
                            data: {
                                id: '1',
                                type: 'authors'
                            }
                        }
                    }
                },
                {
                    type: 'books',
                    id: '2',
                    attributes: {
                        name: 'JavaScript: The Definitive Guide',
                        copiesSold: 66
                    },
                    relationships: {
                        author: {
                            data: {
                                id: '2',
                                type: 'authors'
                            }
                        }
                    }
                },
                {
                    type: 'books',
                    id: '3',
                    attributes: {
                        name: 'Learn JavaScript Visually',
                        copiesSold: 78
                    },
                    relationships: {
                        author: {
                            data: {
                                id: '3',
                                type: 'authors'
                            }
                        }
                    }
                },
                {
                    type: 'books',
                    id: '4',
                    attributes: {
                        name: 'Eloquent JavaScript',
                        copiesSold: 111
                    },
                    relationships: {
                        author: {
                            data: {
                                id: '4',
                                type: 'authors'
                            }
                        }
                    }
                },
                {
                    type: 'books',
                    id: '5',
                    attributes: {
                        name: 'How JavaScript Works',
                        copiesSold: 33
                    },
                    relationships: {
                        author: {
                            data: {
                                id: '1',
                                type: 'authors'
                            }
                        }
                    }
                },
                {
                    type: 'books',
                    id: '6',
                    attributes: {
                        name: 'Beautiful Code: Leading Programmers Explain How They Think',
                        copiesSold: 66
                    },
                    relationships: {
                        author: {
                            data: {
                                id: '5',
                                type: 'authors'
                            }
                        }
                    }
                },
                {
                    type: 'books',
                    id: '7',
                    attributes: {
                        name: 'Canvas Pocket Reference: Scripted Graphics for HTML5',
                        copiesSold: 42
                    },
                    relationships: {
                        author: {
                            data: {
                                id: '2',
                                type: 'authors'
                            }
                        }
                    }
                },
                {
                    type: 'books',
                    id: '8',
                    attributes: {
                        name: 'JavaScript Pocket Reference: Activate Your Web Pages',
                        copiesSold: 47
                    },
                    relationships: {
                        author: {
                            data: {
                                id: '2',
                                type: 'authors'
                            }
                        }
                    }
                },
            ],
        },
        countries: {
            data: [{
                type: 'countries',
                id: '1',
                attributes: {
                    code: 'AU',
                }
            },
            {
                type: 'countries',
                id: '2',
                attributes: {
                    code: 'HR',
                }
            },
            {
                type: 'countries',
                id: '3',
                attributes: {
                    code: 'CH',
                }
            },
            {
                type: 'countries',
                id: '4',
                attributes: {
                    code: 'IS',
                }
            },
            {
                type: 'countries',
                id: '5',
                attributes: {
                    code: 'SE',
                }
            }]
        },
        authors: {
            data: [{
                type: 'authors',
                id: '1',
                attributes: {
                    fullName: 'Douglas Crockford',
                }
            },
            {
                type: 'authors',
                id: '2',
                attributes: {
                    fullName: 'David Flanagan'
                }
            },
            {
                type: 'authors',
                id: '3',
                attributes: {
                    fullName: 'Ivelin Demirov'
                }
            },
            {
                type: 'authors',
                id: '4',
                attributes: {
                    fullName: 'Marijn Haverbeke'
                }
            },
            {
                type: 'authors',
                id: '5',
                attributes: {
                    fullName: 'Greg Wilson'
                }
            }]
        }
    }
});
