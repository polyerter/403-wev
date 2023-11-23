from api.v1.client.serializers.blog_serializer import ArticleSerializer
from rest_framework import viewsets
from main.models import Article


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
