from django.test import TestCase, Client

from django.contrib.auth.models import User


class InfokalaTestCase(TestCase):
    def setUp(self):
        user = User.objects.create(username='mahti', is_superuser=True)
        user.set_password('mahti')
        user.save()

        self.client = Client()
        login_response = self.client.post('/admin/login', dict(username='mahti', password='mahti'))
        self.assertEqual(login_response.status_code, 301)

    def test_removal(self):
        pass
