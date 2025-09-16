export const schema =` {
    "v:name": "View",
    "style": {
      "position": "absolute",
      "top": 0,
      "left": 0,
      "right": 0,
      "paddingHorizontal": 16,
      "paddingVertical": 5,
      "backgroundColor": "white", 
      "flexDirection": "row",
      "alignItems": "center",
      "justifyContent": "space-between",
      "zIndex": 99,
      "borderBottomWidth": 1,
      "borderBottomColor": "#f2f2f2"
    },
    "v:children": [
      {
        "v:name": "View",
        "style": {
          "flexDirection": "row",
          "alignItems": "center"
        },
        "v:children": [
          {
            "v:name": "Image",
            "source": "../assets/images/santa.png",
            "style": {
              "width": 24,
              "height": 24,
              "marginRight": 8
            }
          },
          {
            "v:name": "Text",
            "style": {
              "fontSize": 18,
              "fontWeight": "bold",
              "color": "black",
              "letterSpacing": 1,
              "padding": 8
            },
            "v:children": "HELLO There"
          }
        ]
      },
      {
        "v:name": "Button",
        "variant": "clear",
        "type": "link",
        "href": "Profile",
        "iconName": "user"
        
      }
    ]
  }
`   