#This is My first Dockerfile#version 1.0
#Author: hh 
#Base image ��������
FROM centos
#MAINTAINER ά������Ϣ
MAINTAINER hh Wang 
#ADD
ADD  nginx-1.9.3.tar.gz /usr/local/src
#RUN
RUN yum -y install wget gcc gcc-c++ make openssl openssl-devel
RUN useradd -s /sbin/nologin -M www 
#WORKDIR
WORKDIR /usr/local/src/nginx-1.9.3 
RUN ./configure --prefix=/usr/local/nginx --user=www --group=www --with-http_ssl_module --with-http_stub_status_module \
--with-pcre=/usr/local/src/pcre-8.38 && make && make install
RUN echo "daemon off;">>/usr/local/nginx/conf/nginx.conf 
#ENV���廷������
ENV PATH /usr/local/nginx/sbin:$PATH 
#EXPOSE ӳ��˿�
EXPOSE 80 CMD ["nginx"]