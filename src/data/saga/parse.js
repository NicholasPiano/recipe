
function parse(response) {
  const isOk = response.ok;

  if (isOk) {
    return response.json();
  }

  return {};
}

export default parse;
