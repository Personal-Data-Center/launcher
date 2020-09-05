FROM python

COPY run.sh /run.sh

RUN mkdir launcher

RUN pip3 install django-admin djangorestframework

CMD ["/run.sh"]
