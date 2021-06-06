import axios from 'axios';

export const getEndpoint = (val, auth, cb, type) => {
    // there are only GET endpoints available to the normal user

    console.log('making request')

    axios.get(`https://api.reefraid.com/v1/${type}/${val}`, {
        headers: {
            Authorization: auth,
        }
    })
        .then(d => {
            return cb('success', { data: d.data, status: d.status, statusText: d.statusText })
        })
        .catch(d => {
            console.dir(d)
            if (d.response) return cb('fail', { data: d.response.data, status: d.response.status, statusText: d.response.statusText })

            return cb('fail', { data: { _error: 'internal error, could not make request', code: 0 }, status: '500', statusText: 'Internal Server Error' })
        })
}
