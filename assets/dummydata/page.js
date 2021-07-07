export default [
    {
       "title":"page 1",
       "type":"PAGE",
       "page": 0,
       "path": undefined,
       "children":[
          {
             "title":"container 1",
             "type":"CONTAINER",
             "page": 0,
             "path": '0',
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
             "page": 0,
             "path": '1',
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
                   "page": 0,
                   "path": '1/0',
                   "children":[
                      {
                         "title":"group",
                         "type":"GROUP",
                         "page": 0,
                         "path": '1/0/0',
                         "children":[
                            {
                              "page": 0,
                              "path": '1/0/0/0',     
                               "title":"Some",
                               "type":"TEXT",
                               canEdit: false,
                               inputType: 'text'
                            }
                         ]
                      }
                   ]
                },
                {
                   "title":"group 2",
                   "type":"GROUP",
                   "page": 0,
                   "path": '1/1',
                   "children":[
                      {
                        "page": 0,
                        "path": '1/1/0',
                         "title":"content 4",
                         "type":"TEXT",
                         canEdit: false,
                         inputType: 'text'
                      }
                   ]
                }
             ]
          },
          {
             "title":"container 3",
             "type":"CONTAINER",
             "page": 0,
             "path": '2',
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
       "type":"PAGE",
       "page": 1,
       "path": undefined,
    }
 ]