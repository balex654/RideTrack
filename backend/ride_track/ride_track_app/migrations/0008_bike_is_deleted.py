# Generated by Django 3.2.14 on 2022-12-14 20:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ride_track_app', '0007_activity_total_mass'),
    ]

    operations = [
        migrations.AddField(
            model_name='bike',
            name='is_deleted',
            field=models.BooleanField(default=False),
        ),
    ]
