import csv
from jobspy import scrape_jobs

DESIRED_ROLE = "Data Scientist"
RESULTS_LIMIT = 20
AGE_HOURS = 72

jobs = scrape_jobs(
    site_name=["indeed", "linkedin", "zip_recruiter", "glassdoor", "google"],
    search_term=f"{DESIRED_ROLE}",
    google_search_term=f"{DESIRED_ROLE} jobs near Singapore since yesterday",
    location="Singapore, Singapore",
    results_wanted=RESULTS_LIMIT,
    hours_old=AGE_HOURS,
    country_indeed='Singapore',
)
print(f"Found {len(jobs)} jobs")
print(jobs.head())
jobs.to_csv("jobs.csv", quoting=csv.QUOTE_NONNUMERIC, escapechar="\\", index=False)