const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

async function handleResponse(response) {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong while contacting the server.');
  }

  return data;
}

export async function getAllFeedback() {
  const response = await fetch(`${API_URL}/feedback`);
  return handleResponse(response);
}

export async function getFeedbackById(id) {
  const response = await fetch(`${API_URL}/feedback/${id}`);
  return handleResponse(response);
}

export async function createFeedback(feedbackData) {
  const response = await fetch(`${API_URL}/feedback`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(feedbackData),
  });

  return handleResponse(response);
}

export async function updateFeedback(id, feedbackData) {
  const response = await fetch(`${API_URL}/feedback/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(feedbackData),
  });

  return handleResponse(response);
}

export async function deleteFeedback(id) {
  const response = await fetch(`${API_URL}/feedback/${id}`, {
    method: 'DELETE',
  });

  return handleResponse(response);
}
