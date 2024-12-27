# Sử dụng image Node chính thức làm base cho giai đoạn build
FROM node:16 as build

# Đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json để cài đặt dependencies
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Tăng bộ nhớ heap để build React App
ENV NODE_OPTIONS=--max-old-space-size=8096

# Build ứng dụng cho production
RUN npm run build

# Sử dụng image Nginx để phục vụ ứng dụng React
FROM nginx:alpine

# Sao chép file build từ giai đoạn trước sang thư mục phục vụ của Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Chạy Nginx
CMD ["nginx", "-g", "daemon off;"]
