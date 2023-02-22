# docker/backend/Dockerfile

FROM python:3.8.3-slim

WORKDIR /app
ADD ./backend/requirements.txt /app/backend/


RUN pip install --upgrade pip
RUN pip install gunicorn
# RUN apt-get install build-essential
# RUN apt-get install python3-dev
RUN apt-get update && apt-get install build-essential -y
#RUN pip install backports.zoninfo
RUN pip install -r ./backend/requirements.txt


ADD ./docker/backend /app/docker/backend

ADD ./backend /app/backend