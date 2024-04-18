FROM yaoapp/yao:0.10.4-unstable-amd64-dev
ADD app /data/app
RUN mkdir -p /data/app/logs && \
    mkdir -p /data/app/data/db
    
VOLUME /data/app
WORKDIR /data/app
EXPOSE 5099
CMD ["/usr/local/bin/yao", "start"]
