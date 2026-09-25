from pathlib import Path

from docx import Document
from pypdf import PdfReader


def extract_text_from_pdf(file_path: str) -> str:
    """
    Extract text from a PDF resume.
    """

    reader = PdfReader(file_path)

    extracted_text = []

    for page in reader.pages:
        text = page.extract_text()

        if text:
            extracted_text.append(text)

    return "\n".join(extracted_text).strip()


def extract_text_from_docx(file_path: str) -> str:
    """
    Extract text from a DOCX resume.
    """

    document = Document(file_path)

    extracted_text = []

    for paragraph in document.paragraphs:
        text = paragraph.text.strip()

        if text:
            extracted_text.append(text)

    return "\n".join(extracted_text).strip()


def extract_resume_text(
    file_path: str,
    file_type: str,
) -> str:
    """
    Extract text from a supported resume file.
    """

    file_type = file_type.lower().replace(".", "")

    if file_type == "pdf":
        return extract_text_from_pdf(file_path)

    if file_type == "docx":
        return extract_text_from_docx(file_path)

    raise ValueError(
        f"Unsupported resume file type: {file_type}"
    )