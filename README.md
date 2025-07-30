# habit-tracker
## Monitoring and Alerts

The Habit Tracker backend and frontend applications are monitored using **Azure Application Insights**, which provides real-time performance metrics and logging.

### Dashboard

A custom dashboard tracks key metrics such as:

- Response times for API and frontend requests  
- CPU and memory usage of the web apps  
- Request success and failure rates  

This helps to ensure the applications are running smoothly and efficiently.

### Alerts

The following alerts are configured to proactively notify the team of potential issues:

- **CPU Usage Alert:** Triggers when CPU usage exceeds 80% for more than 5 minutes  
- **Failed Requests Alert:** Triggers when there are more than 10 failed requests within a 5-minute window  

Alerts are sent via email to the operations team to enable quick investigation and resolution.

---

This monitoring setup helps maintain high availability and reliability for users of the Habit Tracker application.
