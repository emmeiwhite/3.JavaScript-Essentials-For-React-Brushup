const data = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: ['fantasy', 'high-fantasy', 'adventure', 'fiction', 'novels', 'literature'],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux'
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452
      }
    }
  },
  {
    id: 2,
    title: 'The Cyberiad',
    publicationDate: '1965-01-01',
    author: 'Stanislaw Lem',
    genres: ['science fiction', 'humor', 'speculative fiction', 'short stories', 'fantasy'],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0
      }
    }
  },
  {
    id: 3,
    title: 'Dune',
    publicationDate: '1965-01-01',
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: ''
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701
      }
    }
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal'
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960
      }
    }
  },
  {
    id: 5,
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos'
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095
      }
    }
  }
]

function getBooks() {
  return data
}

function getBook(id) {
  const book = data.find(book => book.id === id)
  if (book != undefined) {
    return book
  } else {
    return `No book found for the given id: ${id}`
  }
}

/** 1. DeStructuring - Arrays and Objects
 * Brushing up for hands-on
 */

// De-Structuring Objects
const { title, publicationDate, genres, pages } = getBook(5)

console.log(title, publicationDate, genres, pages)
// De-Structuring Arrays: De-Structuring arrays works on the order of the array values

console.log(genres)
const [firstArrElement, secondArrElement, ...restOfTheElements] = genres
console.log(firstArrElement)
console.log(secondArrElement)
console.log(restOfTheElements)

// Swap two numbers with Array De-structuring
let x = 10
let y = 20
;[y, x] = [x, y]

console.log(x, y)

/** 2. Spread Operator & Rest Operator */

// Array: Adding more genres

const updatedGenres = [...genres, 'epic fantasy']
console.log(updatedGenres)

// Objects:
const updatedBook = { ...getBook(5), moviePulishedYear: 2001 }
console.log(updatedBook)

/** 3. template literals: Let's summarize a book from books */

const lotr = getBook(1)
let summaryBook1 = `${lotr.title} is a ${lotr.pages} pages book, published in the year ${
  lotr.publicationDate.split('-')[0]
}`

console.log(summaryBook1)
