FROM mcr.microsoft.com/playwright:v1.45.1-jammy

RUN mkdir /tests
WORKDIR /tests
COPY . /tests/

RUN npm install --force
RUN npx playwright install --with-deps
