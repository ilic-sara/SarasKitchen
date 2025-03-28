const apiBaseUrl = "https://localhost:5069/api/";

window.apiClient = {
    get: async (url, includeCredentials = false) => {
        const response = await fetch(apiBaseUrl + url, {
            method: 'GET',
            credentials: includeCredentials ? 'include' : 'same-origin'
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`GET request failed: ${errorText}`);
        }

        return await response.json();
    },

    post: async (url, dataObject) => {
        const response = await fetch(apiBaseUrl + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataObject),
            credentials: 'include'
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`POST request failed: ${errorText}`);
        }

        return await response.json();
    },

    put: async (url, dataObject) => {
        const response = await fetch(apiBaseUrl + url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataObject),
            credentials: 'include'
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`PUT request failed: ${errorText}`);
        }
    },

    delete: async (url) => {
        const response = await fetch(apiBaseUrl + url, {
            method: 'DELETE',
            credentials: 'include'
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`DELETE request failed: ${errorText}`);
        }
    }
};
