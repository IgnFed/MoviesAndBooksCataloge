
export const END_POINTS = [
  {
    to:'books',
    absolute: `${window.location.origin}/books`,
    relative: `/books`,
    icon: await import('@images/BookLogo.svg'),
  },
  {
    to:'movies',
    absolute: `${window.location.origin}/movies`,
    relative: `/movies`,
    icon: await import('@images/MovieLogo.svg'),
  },

]