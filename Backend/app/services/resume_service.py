import re

from docx import Document
from pypdf import PdfReader


# ============================================================
# TEXT EXTRACTION
# ============================================================

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


# ============================================================
# TEXT NORMALIZATION
# ============================================================

def normalize_heading(text: str) -> str:
    """
    Normalize section headings affected by PDF extraction.

    Example:
        'Educa tion' -> 'education'
        'Cer tifica tions & Academic Highlights'
        -> 'certifications & academic highlights'
    """

    text = text.strip().lower()

    # Remove spaces inserted inside words by PDF extraction.
    text = re.sub(r"(?<=[a-z])\s+(?=[a-z])", "", text)

    # Normalize repeated whitespace.
    text = re.sub(r"\s+", " ", text)

    return text.strip()


# ============================================================
# BASIC FIELD EXTRACTION
# ============================================================

def extract_email(text: str) -> str | None:
    """
    Extract email address from resume text.
    """

    match = re.search(
        r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}",
        text,
    )

    return match.group(0) if match else None


def extract_phone(text: str) -> str | None:
    """
    Extract Indian phone number from resume text.
    """

    match = re.search(
        r"(?:\+91[\s-]?)?[6-9]\d{9}",
        text,
    )

    return match.group(0) if match else None


def extract_name(text: str) -> str | None:
    """
    Extract candidate name.

    Assumes the first non-empty line is the name.
    """

    lines = [
        line.strip()
        for line in text.splitlines()
        if line.strip()
    ]

    if not lines:
        return None

    return lines[0]


# ============================================================
# SECTION DETECTION
# ============================================================

SECTION_ALIASES = {
    "summary": {
        "professional summary",
        "summary",
        "objective",
    },
    "skills": {
        "technical skills",
        "skills",
    },
    "experience": {
        "experience",
        "work experience",
        "professional experience",
    },
    "projects": {
        "projects",
        "project",
    },
    "education": {
        "education",
    },
    "certifications": {
        "certifications",
        "certifications & academic highlights",
        "certification",
        "certificates",
    },
    "extracurricular": {
        "extracurricular activities",
        "extracurricular",
        "activities",
    },
}


def identify_section(line: str) -> str | None:
    """
    Identify whether a line represents a known resume section.
    """

    normalized = normalize_heading(line)

    for section_name, aliases in SECTION_ALIASES.items():

        normalized_aliases = {
            normalize_heading(alias)
            for alias in aliases
        }

        if normalized in normalized_aliases:
            return section_name

    return None


def extract_sections(text: str) -> dict[str, str]:
    """
    Split resume text into recognized sections.
    """

    lines = text.splitlines()

    sections = {}

    current_section = None
    current_lines = []

    for line in lines:

        stripped_line = line.strip()

        if not stripped_line:
            continue

        detected_section = identify_section(stripped_line)

        if detected_section:

            # Save previous section.
            if current_section and current_lines:
                sections[current_section] = "\n".join(
                    current_lines
                ).strip()

            current_section = detected_section
            current_lines = []

            continue

        if current_section:
            current_lines.append(stripped_line)

    # Save final section.
    if current_section and current_lines:
        sections[current_section] = "\n".join(
            current_lines
        ).strip()

    return sections


# ============================================================
# SKILLS
# ============================================================

def parse_skills(skills_text: str | None) -> list[str]:
    """
    Convert the technical skills section into a list.
    """

    if not skills_text:
        return []

    skills = []

    for line in skills_text.splitlines():

        if ":" in line:
            _, values = line.split(":", 1)
        else:
            values = line

        parts = re.split(
            r",|\||•",
            values,
        )

        for part in parts:

            skill = part.strip()

            if skill:
                skills.append(skill)

    # Remove duplicates while preserving order.
    unique_skills = []
    seen = set()

    for skill in skills:

        normalized = skill.lower()

        if normalized not in seen:
            unique_skills.append(skill)
            seen.add(normalized)

    return unique_skills


# ============================================================
# RESUME PARSER
# ============================================================

def parse_resume(text: str) -> dict:
    """
    Parse important information from extracted resume text.
    """

    sections = extract_sections(text)

    return {
        "name": extract_name(text),
        "email": extract_email(text),
        "phone": extract_phone(text),

        "summary": sections.get(
            "summary"
        ),

        "skills": parse_skills(
            sections.get("skills")
        ),

        "education": sections.get(
            "education"
        ),

        "experience": sections.get(
            "experience"
        ),

        "projects": sections.get(
            "projects"
        ),

        "certifications": sections.get(
            "certifications"
        ),

        "extracurricular": sections.get(
            "extracurricular"
        ),
    }