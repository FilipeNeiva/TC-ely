from rest_framework import viewsets

# Create your views here.
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from tarefa.models import Tarefa, Atividade
from tarefa.serializers import TarefaSerialize, AtividadeSerialize



class TarefaItemViewSet(viewsets.ModelViewSet):

    serializer_class = TarefaSerialize
    queryset = Tarefa.objects.all()
    permission_classes = [IsAuthenticated]
    authentication_classes = (JSONWebTokenAuthentication,)

    def perform_create(self, serializer):
        serializer.save(usuario=self.request.user)

    def filter_queryset(self, queryset):
        return Tarefa.objects.filter(usuario=self.request.user)


class AtividadeItemViewSet(viewsets.ModelViewSet):
    serializer_class = AtividadeSerialize
    queryset = Atividade.objects.all()
    permission_classes = [IsAuthenticated]
    authentication_classes = (JSONWebTokenAuthentication,)

