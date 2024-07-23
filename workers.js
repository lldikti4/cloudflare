// Import Pyodide
importScripts('https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js');

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  await loadPyodide();
  const pyodide = await loadPyodide({ indexURL : 'https://cdn.jsdelivr.net/pyodide/v0.18.1/full/' });

  const pythonCode = `
  from js import Response

  def handle_request():
      return Response.new('Hello from Python!', headers={'Content-Type': 'text/plain'})

  handle_request()
  `;

  const pyResult = await pyodide.runPythonAsync(pythonCode);
  return pyResult;
}
