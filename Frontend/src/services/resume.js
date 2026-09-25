import API_BASE_URL from "./api";

export async function uploadResume(file) {
    const token = localStorage.getItem("access_token");

    if (!token) {
        throw new Error("No access token found");
    }

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(
        `${API_BASE_URL}/resume/upload`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.detail || "Failed to upload resume"
        );
    }

    return data;
}