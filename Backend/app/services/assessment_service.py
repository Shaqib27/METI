import json

from app.services.ai_service import generate_ai_response


def infer_candidate_role(profile: dict) -> dict:
    """
    Infer the candidate's most suitable target role
    from the structured resume profile.
    """

    prompt = f"""
You are an AI resume analysis engine.

Infer the most suitable professional role for this candidate.

Candidate Profile:

{json.dumps(profile, indent=2)}

Consider:
- summary
- skills
- experience
- projects
- education
- certifications

Return ONLY valid JSON:

{{
    "inferred_role": "string",
    "confidence": 0.0,
    "reasoning": "short explanation",
    "core_domains": ["string"]
}}

Rules:
- Choose a realistic job role based on the overall profile.
- Do not base the decision on a single skill.
- confidence must be between 0 and 1.
- core_domains should contain 3 to 5 major areas to assess.
- No markdown.
- JSON only.
"""

    response = generate_ai_response(prompt)

    try:
        return json.loads(response)

    except json.JSONDecodeError as exc:
        raise ValueError(
            "AI returned an invalid role inference response."
        ) from exc


def generate_assessment_blueprint(
    profile: dict,
    role_inference: dict
) -> dict:
    """
    Generate a structured assessment blueprint based on
    the candidate profile and inferred role.
    """

    prompt = f"""
You are an AI assessment design engine for METI,
an AI-powered interview assessment platform.

Create an assessment blueprint for the candidate below.

The assessment must evaluate whether the candidate
actually has the knowledge and experience represented
in their resume.

Candidate Role Inference:

{json.dumps(role_inference, indent=2)}

Candidate Profile:

{json.dumps(profile, indent=2)}

The assessment should test these areas:

1. Role fundamentals
2. Technical skills
3. Project understanding
4. Work experience authenticity
5. Problem solving

Return ONLY valid JSON in exactly this format:

{{
    "role": "string",
    "total_questions": 15,
    "sections": [
        {{
            "name": "string",
            "question_count": 0,
            "focus": "string"
        }}
    ]
}}

Rules:

1. Use the inferred role as the primary assessment context.
2. Use the candidate's actual skills, projects and experience.
3. Do not create questions about technologies that are
   completely unrelated to the candidate profile.
4. Include project-based questions from the candidate's
   actual projects.
5. Include experience-based questions from the candidate's
   actual work experience.
6. Include technical fundamentals appropriate for the role.
7. Include problem-solving questions.
8. total_questions must be exactly 15.
9. question_count values must add up to exactly 15.
10. Use 4 to 7 assessment sections.
11. Do not include markdown.
12. Return only JSON.
"""

    response = generate_ai_response(prompt)

    try:
        blueprint = json.loads(response)

    except json.JSONDecodeError as exc:
        raise ValueError(
            "AI returned an invalid assessment blueprint response."
        ) from exc

    return blueprint