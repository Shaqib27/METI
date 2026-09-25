import time

from google import genai

from app.core.config import settings


client = genai.Client(
    api_key=settings.GEMINI_API_KEY
)


def generate_ai_response(prompt: str) -> str:
    """
    Generate an AI response using Gemini.
    Retries temporary server/network errors.
    """

    max_attempts = 5

    for attempt in range(max_attempts):
        try:
            response = client.models.generate_content(
                model=settings.GEMINI_MODEL,
                contents=prompt,
            )

            if not response.text:
                raise RuntimeError(
                    "Gemini returned an empty response."
                )

            return response.text

        except Exception as exc:

            error_text = str(exc)

            is_temporary_error = (
                "503" in error_text
                or "UNAVAILABLE" in error_text
                or "429" in error_text
                or "ReadError" in error_text
                or "Connection reset" in error_text
            )

            if not is_temporary_error:
                raise

            if attempt == max_attempts - 1:
                raise

            wait_time = 2 ** attempt

            print(
                f"Gemini temporary error. "
                f"Retrying in {wait_time} seconds..."
            )

            time.sleep(wait_time)