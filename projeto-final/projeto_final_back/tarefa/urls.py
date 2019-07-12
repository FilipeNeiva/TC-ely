from django.urls import include, path
from rest_framework import routers

from tarefa.views import TarefaItemViewSet, AtividadeItemViewSet

router = routers.DefaultRouter()
router.register(
    'tarefas', TarefaItemViewSet, base_name='tarefas'
)
router.register(
    'atividade', AtividadeItemViewSet, base_name='atividade'
)