const requestOptions = {
    headers: {
        'Content-Type': 'application/json',
    }
};

export const client = {

    post: async (url, payload) => 
        await fetch(url, {
            ...requestOptions,
            method: 'POST',
            body: JSON.stringify(payload)
        }).then(response => response.json())
        .catch(error => error)

}