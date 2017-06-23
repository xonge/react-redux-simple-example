// import { SubmissionError } from 'redux-form';

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const API_ENDPOINT = 'http://busbus.app/oauth/token'
// const CSRF_TOKEN = 'API_ENDPOINT'

export default (async function submit(values) {
    try {
        let r = await fetch(API_ENDPOINT, {
            // credentials: 'include',
            // mode: 'cors',
            method: 'post',
            body: JSON.stringify({ "grant_type": "password",
     "client_id": "2",
     "client_secret": "k49AIRizxXk5cbrBAkmTYr1wc9S2bEHSiuBy8csM",
     "username": "xonge@qq.com",
     "password": "123456asd" }),
            headers: {
                'Content-Type': 'application/json',
                // 'X-CSRFToken': CSRF_TOKEN
            }
        })
        // console.log(r)
        let parsedProducts = await r.json();
        console.log(parsedProducts)
    } catch (error) {
        console.log('error: ', error)
    }
});

// export const submit = (values) => {
// //   dispatch(startLoading());

//   return new Promise((resolve, reject) => {
//     // postToApi is a wrapper around fetch
//     postToApi(values)
//       .then(([ response, json ]) => {
//         // dispatch(stopLoading());

//         // your statuses may be different, I only care about 202 and 400
//         if (response.status === 202) {
//         //   dispatch(showResults(values));
//           resolve();
//         }
//         else if (response.status === 400) {
//           // here I expect that the server will return the shape:
//           // {
//           //   username: 'User does not exist',
//           //   password: 'Wrong password',
//           //   _error: 'Login failed!'
//           // }
//           reject(json.errors);
//         }
//         else {
//           // we're not sure what happened, but handle it:
//           // our Error will get passed straight to `.catch()`
//           throw(new Error('Something went horribly wrong!'));
//         }
//       })
//       .catch( error => {
//         // Otherwise unhandled server error
//         // dispatch(stopLoading());
//         reject({ _error: error });
//       });
//   });
// };