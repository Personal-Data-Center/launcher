FROM python

COPY setup.sh /setup.sh

RUN mkdir launcher

RUN pip3 install django-admin djangorestframework

CMD ["/run.sh"]
