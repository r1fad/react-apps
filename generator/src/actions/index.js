export const RECEIVE_MEMES = 'RECEIVE_MEMES';

/* action creator, return an object with action type
and information*/
function receiveMemes(json){
  const {memes} = json.data;
  return{
    type:RECEIVE_MEMES,
    memes
  }
}

/* performs a fetch on the Memes api and returns
the response */
function fetchMemesJson(){
  return fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
}

/*returns a function */
export function fetchMemes(){
  return function(dispatch){
    return fetchMemesJson()
      .then(json => dispatch(receiveMemes(json)))
  }
}
