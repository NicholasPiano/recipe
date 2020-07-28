
import convertUrlParameters from './convertUrlParameters';
import parse from './parse';

const proxy = 'https://cors-anywhere.herokuapp.com/';
const url = 'http://www.recipepuppy.com/api';

function fetchFromRecipePuppy({ query, ingredients, page }) {
  const args = convertUrlParameters({ i: ingredients, q: query, p: page });
  const full = `${proxy}${url}${args}`;
  const headers = { Origin: null };

  return fetch(full, { headers }).then(
    parse,
  ).then(
    response => ({ response }),
  ).catch(
    error => ({ error }),
  );
}

export default fetchFromRecipePuppy;
