# DocPad Dockerfile

FROM node:latest
MAINTAINER Galyamin.d.d@gmail.com


# Install DocPad globally.

RUN npm install -g docpad
RUN apt-get update
RUN apt-get install graphicsmagick

# DocPad authentication.

RUN echo "{\n  subscribed: false\n  subscribeTryAgain: false\n  tos: true\n  identified: true\n}" > ~/.docpad.cson


# Set up the application directory.

VOLUME ["/app"]
WORKDIR /app
ADD . /app
RUN npm install
# Expose the default DocPad port.

EXPOSE 9778



# Launch DocPad when the container stars, passing through any arguments.

CMD ["-"]
ENTRYPOINT ["docpad"]
