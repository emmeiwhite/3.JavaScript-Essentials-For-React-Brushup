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
    hasMovieAdaptation: false,
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

console.log('All Books:')
console.log(getBooks())

/** 1. DeStructuring - Arrays and Objects
 * Brushing up for hands-on
 */

/* --
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
--*/
/** 2. Spread Operator & Rest Operator */

// Array: Adding more genres
/* ---
const updatedGenres = [...genres, 'epic fantasy']
console.log(updatedGenres)

// Objects:
const updatedBook = { ...getBook(5), moviePulishedYear: 2001 }
console.log(updatedBook)
--- */

/** 3. template literals: Let's summarize a book from books */
/*---
const lotr = getBook(1)
let summaryBook1 = `${lotr.title} is a ${lotr.pages} pages book, published in the year ${
  lotr.publicationDate.split('-')[0]
}`

console.log(summaryBook1)
---*/
/** --- 4. ternery operator --- */

/*---
const totalPagesComparitor =
  lotr.pages > 1000 ? 'The book has more than a 1000 pages' : 'The book has less than a 1000 pages'

console.log(totalPagesComparitor)
---*/

/** --- 5. Arrow function
const getYear = () => lotr.publicationDate.split('-')[0]
console.log(`PublicationDate is: ${getYear()}`)
--- */
/** --- 6. Short-Circuit Operator

console.log(true && 'A Truthy value!')
console.log(
  false &&
    'I can be any expresion, code block, even the whole appliction code but I will never get executed because of short-circuit'
) // simply returns false
console.log(0 && 'Where are you?') // returns the falsy value, 0 in this case

console.log(undefined && 'Never will I executed') // returns undefined
console.log(null && 'Never will I executed') // returns null

// OR || works completely opposite of &: The first truthy value is returned

console.log('|| operator returns first truthy value')
console.log(true || 'hello world') // true is returned
console.log('I am a truthy value' || 'I can be anything, but I will never ever be executed') // 'I am a truthy value' is returned!
console.log(false || false) // last false is returned
console.log(false || false || 'I am the who will be returned') // first truthy value
console.log(false || 0 || '' || 'hi' || false) // The first truthy value is returned which is 'hi'

// nullish coalescing operator, denoted by ?? is a logical operator that provides a way to handle null or undefined values in programming languages like JavaScript, TypeScript, and C#. It returns its right-hand side operand when its left-hand side operand is either null or undefined, and otherwise returns its left-hand operand.

console.log(5 ?? 'Five')
console.log(null ?? 'I am null, no data')
console.log(undefined ?? 'I am undefined, no data')
console.log('hello' ?? 'We are here! ')
--- */
/** --- Optional Chaining
const book3 = getBook(3)

console.log(book3)
function totalReviews() {
  return book3.reviews?.librarything?.reviewsCount ?? 0
}

console.log('Total Reviews:')
console.log(totalReviews())
--- */

/** 1. map(): HOF which returns a new array with same number of elements with some operations performed - modified one! 
const books = getBooks()
const allIDs = books.map(book => book.id)
const allTitles = books.map(book => book?.title ?? 'Default Title')
const compactBooks = books.map(book => ({ title: book.title, author: book.author }))

console.log(allIDs)
console.log(allTitles)
console.log(compactBooks)

*/

/** 2. filter(): To filter out some of the elements of the array based on some condition

const longBooks = books.filter(book => book.pages > 500)
console.log(longBooks)

const booksWithMovies = books.filter(book => book.hasMovieAdaptation && book.pages > 500)
console.log(booksWithMovies)

// Books with genre 'adventure' | includes() method is a perfect tool here
const adventureBooks = books.filter(book => book.genres.includes('adventure'))
console.log('Adventure Books are:')
console.log(adventureBooks)

 */

/** 3. reduce(): As per the instructor, the reduce() method is the most versatile and the powerful method in the whole JavaScript, since we can perform a lots of stuff by just one reduce method:
 *
 * UseCase: Assume we want to know all the pages in all the books and plan reading all the books accordingly and plan accordingly


const totalPages = books.reduce((acc, book) => {
  return (acc = acc + book.pages)
}, 0)

console.log(`All the pages counted from all the books combined are: ${totalPages}`)

 */
// Accumulator is like a pile on which we put more and more and more. An intermediary value on which we keep adding values until we get the result we are looking for.

/** 4. sort() method: Now that sort() is mutable arr and the original method is affected, so we should adopt the habit of taking copy 

// Basic example:
const arr = [5, 23, 11, 2, 31, 7]
console.log('Original Array:')
console.log(arr)
const sortedArr = arr.sort((a, b) => a - b)

console.log('Sorted array is:')
console.log(sortedArr)

console.log('Original has also changed:')
console.log(arr)

// UseCase: let's sort our books array by pages in the ascending order

const booksSortedByPages = books.slice().sort((book1, book2) => book1.pages - book2.pages)
console.log(booksSortedByPages)
*/

/** Asynchronous JavaScript with Promises */

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(data => console.log(data))

console.log('I will run first, because I am a sync operations')

/** async-await */

async function getTodods() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await response.json()

  return data
}

getTodods().then(data => console.log(data))
console.log('I am synchronous code')
