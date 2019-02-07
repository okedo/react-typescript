export const saveSong = (chordList: string[], ttl: string, txt: string) => {
  return (dispatch: any) => {
    fetch("getSong", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ chordlist: chordList, title: ttl, text: txt })
    }).then(res => {
      if (res.ok) {
        dispatch(saveSongSuccess(res.body));
      } else {
        dispatch(saveSongFailure(res.statusText));
      }
    });
  };
};

const saveSongSuccess = (data: any) => ({
  type: SAVE_SONG_SUCCESS,
  payload: data
});

const saveSongFailure = (error: any) => ({
  type: SAVE_SONG_FAILURE,
  payload: error
});

export const SAVE_SONG_SUCCESS = "SAVE_SONG_SUCCESS";
export const SAVE_SONG_FAILURE = "SAVE_SONG_FAILURE";
