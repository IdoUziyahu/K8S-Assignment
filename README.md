# K8S-Assignment

The content of the repo:

### /K8S

A folder with all the YAML files used for the project. Which all configure the services, deployments, ingress and network policy

### /service-a

The source code to service A. An application that print the Bitcoin value in USD every minute, and every 10 minutes it prints the average of the last 10 minutes.

### /service-b

The source code to service B. An api call that return "Hello Microsoft!"

<p style="color:red">
* Every service has it own dockerfile, they have pushed to the ACR container registry by the image name that have been commented to each file at the top. The Kubernetes deployment files are pulling the images from this registry.
</p>

### /templates

The azure template files of the project. Includes template to the entire resouce group and only for AKS.

---

the ingress with the services is exposed in ip 20.185.208.237, use [20.185.208.237/service-a](http://20.185.208.237/service-a) and [20.185.208.237/service-b](http://20.185.208.237/service-b) to see the servises live.

#### thanks for reading!

Ido uziyahu.
