# Use a lightweight base image
FROM nginx:alpine

# Copy the HTML files into the container
COPY index.html /usr/share/nginx/html 
COPY main.css /usr/share/nginx/html/main.css
COPY main.js /usr/share/nginx/html/main.js
COPY img /usr/share/nginx/html/img

EXPOSE 80


