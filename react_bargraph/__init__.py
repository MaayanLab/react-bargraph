import json
import uuid
import pandas as pd
from pathlib import Path
from textwrap import dedent
from IPython.display import display, HTML, Javascript

def react_bargraph_js():
  return open(Path(__file__).parent/'react_bargraph.js', 'r', encoding='utf-8').read()

def define_react_bargraph(include_require=False):
  if include_require: display(HTML('<script src="/static/components/requirejs/require.js"></script>'))
  display(Javascript(react_bargraph_js()))

_defined = False

def ReactBarGraph(id=None, include_require=False, force_define=False, **kwargs):
  global _defined
  if force_define or not _defined:
    define_react_bargraph(include_require=include_require)
    _defined = True
  if id is None:
    id = str(uuid.uuid4())
  if isinstance(kwargs.get('data'), pd.DataFrame):
    kwargs['data'] = kwargs['data'].to_dict(orient='records')
  return HTML(dedent(f'''
    <div id="{id}"></div>
    <script>
    require(['react_bargraph'], function (react_bargraph) {{
      try {{
        var self = document.getElementById('{id}')
        while (self.children.length > 0) self.children[0].remove()
        react_bargraph.ReactBarGraph(
          self,
          {json.dumps(kwargs)}
        )
      }} catch (e) {{
        console.error(e)
        var self = document.getElementById('{id}')
        self.innerHTML = '<b style="color:red">' + e + '</b>'
      }}
    }}, function (e) {{
      console.error(e)
      var self = document.getElementById('{id}')
      self.innerHTML = '<b style="color:red">' + e + '</b>'
    }})
    </script>
  '''))
