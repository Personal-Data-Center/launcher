#! /bin/sh

cd launcher
python3 /launcher/manage.py migrate && python3 /launcher/manage.py runserver 0.0.0.0:80 > logs.txt
