# Generated by Django 2.1.5 on 2020-08-23 17:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('cart', '0001_initial'),
        ('seller', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='dish',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='seller.Dish'),
        ),
        migrations.AddField(
            model_name='order_items',
            name='cart',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='cart.Cart'),
        ),
        migrations.AddField(
            model_name='order_items',
            name='product',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='cart.Product'),
        ),
    ]
