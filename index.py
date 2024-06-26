from urllib import response


def fetch(request, env):
    return response(body="Hello, world from Python in Workers!", status=200)
