
const apiKey = import.meta.env.VITE_API_KEY;


export const Api = {
    Subject: `${apiKey}/subject`,
    SubjectTopics: `${apiKey}/subjectTopics`,
    SubjectGroup: `${apiKey}/subjectGroup`,
    Filter: `${apiKey}/filter`,
    Addsubject: `${apiKey}/subject`,
}

//GET API
export const getApi = async (api) => {
    try {
        let res = await fetch(api);
        if (res.ok) {
            const apiData = await res.json();
            return apiData
        }

    } catch (error) {
        console.error("Something went wrong while fetching:", error);
    }
};

//POST API
export const postApi = async (api, value) => {
    try {
        const res = await fetch(api, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(value),
        });

        if (res.ok) {
            const apiData = await res.json();
            return apiData
        }

    } catch (error) {
        console.error("Something went wrong while adding data:", error);
    }
};