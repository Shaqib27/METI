from app.services.assessment_service import (
    infer_candidate_role,
    generate_assessment_blueprint,
)


candidate_profile = {
    "name": "Md Shaqib Hussain",

    "summary": (
        "Computer Science Engineer with hands-on experience "
        "in software development, C/C++, Python, data structures, "
        "algorithms, Linux, and machine learning."
    ),

    "skills": [
        "C",
        "C++",
        "Python",
        "SQL",
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Linux",
        "Scikit-learn",
        "TensorFlow",
        "Keras",
        "Apache Spark",
        "PySpark",
        "AWS",
        "FastAPI",
        "Docker",
        "Git",
    ],

    "experience": (
        "Graduate Engineer Trainee – Data Analyst "
        "with experience using SQL, Python, Power BI "
        "and data processing workflows."
    ),

    "projects": (
        "IntelliScan AI cancer screening system using "
        "TensorFlow, Keras, CNN, transfer learning and PySpark. "
        "Air Quality Forecasting System using Python, "
        "Scikit-learn, LightGBM, XGBoost, Streamlit and AWS."
    ),

    "certifications": (
        "GATE 2025 Computer Science and Engineering qualified. "
        "CDAC PG Diploma in Big Data Analytics AI & ML."
    ),

    "education": (
        "B.Tech Computer Science and Engineering. "
        "PG Diploma in Big Data Analytics AI & ML."
    ),
}


# ---------------------------------------------------------
# STEP 1: INFER CANDIDATE ROLE
# ---------------------------------------------------------

role_result = infer_candidate_role(candidate_profile)

print("\nROLE INFERENCE RESULT")
print("=====================")
print(role_result)


# ---------------------------------------------------------
# STEP 2: GENERATE ASSESSMENT BLUEPRINT
# ---------------------------------------------------------

blueprint_result = generate_assessment_blueprint(
    candidate_profile,
    role_result,
)

print("\nASSESSMENT BLUEPRINT")
print("====================")
print(blueprint_result)