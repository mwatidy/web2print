export default [
    {
       "title":"page 1",
       "type":"PAGE",
       "children":[
          {
             "title":"container 1",
             "type":"CONTAINER",
             "style": {
                "width": "200px",
                "height": "45px",
                "left": "50px",
                "top": "50px",
             }
          },
          {
             "title":"container 2",
             "type":"CONTAINER",
             "style": {
                "width": "200px",
                "height": "45px",
                "left": "50px",
                "top": "100px",
             },
             "children":[
                {
                   "title":"group 1",
                   "type":"GROUP",
                   "children":[
                      {
                         "title":"SubGroup",
                         "type":"GROUP",
                         "children":[
                            {
                               "title":"subtext",
                               "type":"TEXT"
                            }
                         ]
                      }
                   ]
                },
                {
                   "title":"group 2",
                   "type":"GROUP",
                   "children":[
                      {
                         "title":"subcontent 4 and some more info",
                         "type":"TEXT"
                      }
                   ]
                }
             ]
          },
          {
             "title":"container 3",
             "type":"CONTAINER",
             "style": {
                "width": "200px",
                "height": "45px",
                "left": "50px",
                "top": "150px",
             }
          }
       ]
    },
    {
       "title":"page 2",
       "type":"PAGE"
    }
 ]