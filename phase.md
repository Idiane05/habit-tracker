# Phase 2 Submission - IaC, Containerization & Manual Deployment

## 🚀 Live Public URL
[https://habit-frontend-app-a09e8c13.azurewebsites.net/](https://habit-frontend-app-a09e8c13.azurewebsites.net/)

## 📸 Screenshots of Provisioned Resources
Below are the screenshots showing successful resources

<img width="953" height="437" alt="resources azure" src="https://github.com/user-attachments/assets/3e7bbacd-26d3-4faa-8e74-0eeba9c053e8" />


---

##  Peer Review
I reviewed my peer’s Pull Request here:  
[https://github.com/peer-username/repo-name/pull/PR-number](https://github.com/peer-username/repo-name/pull/PR-number)

---

##  Reflection

### Challenges with Infrastructure as Code (IaC)
- Writing Terraform scripts from scratch was initially confusing, especially understanding dependencies and resource relationships.
- Learning how different providers work (e.g., AWS vs Azure) and authenticating properly took time.
- Managing state files and understanding `terraform apply` vs `terraform plan` was a bit tricky at first.

### Challenges with Manual Deployment
- Pushing images to the container registry required correct tagging and authentication steps (e.g., `docker login`, `docker tag`, `docker push`).
- Setting up the container service via the web console or CLI had a learning curve—especially configuring environment variables and ports.
- Debugging deployment issues without logs (at first) made it challenging to know what was failing.

---

 I successfully deployed my containerized app to the cloud and provisioned the infrastructure with Terraform. It was a challenging but rewarding experience!

