# Generated by Django 2.1.5 on 2020-08-23 17:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('cart', '0002_auto_20200823_2228'),
        ('deliverer', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='deliverer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='deliverer.Deliverer'),
        ),
        migrations.AddField(
            model_name='order',
            name='order_items',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cart.Order_Items'),
        ),
        migrations.AddField(
            model_name='order',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='cart_item',
            name='cart',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cart.Cart'),
        ),
        migrations.AddField(
            model_name='cart_item',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cart.Product'),
        ),
        migrations.AddField(
            model_name='cart',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
