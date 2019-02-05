export const getSong = () => {
  return (dispatch: any) => {
    // fetch("getSong", {
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   method: "GET"
    // })
    new Promise(resolve => {
      resolve({
        body: { title: "Some song", text: "some text" },
        ok: true,
        statusText: "text"
      });
    }).then((res: { body: []; ok: boolean; statusText: string }) => {
      if (res.ok) {
        dispatch(getSongSuccess(res.body));
      } else {
        dispatch(getSongFailure(res.statusText));
      }
    });
  };
};

const getSongSuccess = (data: any) => ({
  type: GET_SONG_SUCCESS,
  payload: data
});

const getSongFailure = (error: any) => ({
  type: GET_SONG_FAILURE,
  payload: error
});

export const GET_SONG_SUCCESS = "GET_SONG_SUCCESS";
export const GET_SONG_FAILURE = "GET_SONG_FAILURE";
