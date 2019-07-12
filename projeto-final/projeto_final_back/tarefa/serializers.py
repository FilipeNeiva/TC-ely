from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from tarefa.models import Tarefa, Atividade


class TarefaSerialize(serializers.ModelSerializer):

    class Meta:
        model = Tarefa
        fields = ('id', 'titulo', 'prazo')



class AtividadeSerialize(serializers.ModelSerializer):

    class Meta:
        model = Atividade
        fields = '__all__'
