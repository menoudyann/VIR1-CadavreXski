# Vir1 CavavreXski
## Three tier Docker App
LPODev et menoudyann

# Issue
We separated the code into three distinct parts (frontend, backend and db) using Vite.Js, NodeJS and Mysql respectively.

The Docker-Compose launches correctly on the AWS instance and all the containers are running. We can access the frondend from our browser at the following address: cadavrexski.cld.education. 

However, the application is not usable because the frontend is unable to resolve the address of the backend (http://back:5000/api/v1/phrases), making it impossible to chat between the two. 

We've investigated this problem and we think we need to install a nginx server that exposes our frontend and redirects all requests made to the backend. 
