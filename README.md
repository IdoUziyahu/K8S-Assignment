# K8S-Assignment

in this repo you can find:

### /K8S

a folder with all the YAML files used for the project. which all configure the services, deployments, ingress and network policy

### service A

an application that print the Bitcoin value in USD every minute, and every 10 minutes it prints the average of the last 10 minutes

### service B

an api call that return "Hello Microsoft!"

<p style="color:red">
* every service has it own dockerfile, they have pushed to the ACR container registry by the image name that have been commented to each file at the top. and the Kubernetes deployment files are pulling the images from this registry.
</p>
