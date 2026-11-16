FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Copy frontend files
COPY index.html .
COPY style.css .
COPY script.js .
COPY menu.png .

# Copy frontend asset directories
COPY booking/ ./booking/
COPY destinations/ ./destinations/
COPY images/ ./images/
COPY packages/ ./packages/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
