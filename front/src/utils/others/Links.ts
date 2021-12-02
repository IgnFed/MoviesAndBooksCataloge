import BookLogo from '@images/BookLogo.svg';
import MovieLogo from '@images/MovieLogo.svg';


export const END_POINTS = [
  {
    to:'books',
    absolute: `${window.location.origin}/books`,
    relative: `/books`,
    icon: BookLogo,
  },
  {
    to:'movies',
    absolute: `${window.location.origin}/movies`,
    relative: `/movies`,
    icon: MovieLogo,
  },

]