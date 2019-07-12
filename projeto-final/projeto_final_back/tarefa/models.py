from django.db import models

# Create your models here.
from django.conf import settings


class Tarefa(models.Model):
    usuario = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='tarefas',
        on_delete=models.CASCADE
    )
    titulo = models.CharField(max_length=20)
    prazo = models.DateField()


class Atividade(models.Model):

    nome = models.CharField(max_length=20)
    descricao = models.CharField(max_length=200)
    tarefa = models.ForeignKey('Tarefa', on_delete=models.CASCADE, related_name='atividades')