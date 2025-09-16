export const Banner = `{
    "v:name": "ImageBackground",
    "source": "../assets/images/christmas2.jpg",
    "resizeMode": "cover",
    "style": {
      "position": "relative",
      "width": "100%",
      "height": 300,
      "justifyContent": "center"
     
    },
    "v:children": [
      {
        "v:name": "View",
        "style": {
          "alignSelf": "flex-start",
          "justifyContent": "center",
          "gap": 12
        },
        "v:children": [
          {
            "v:name": "Text",
            "style": {
              "fontSize": 20,
              "fontWeight": "bold",
              "color": "#fffaf0",
              "letterSpacing": 1,
              "backgroundColor": "transparent",
              "alignSelf": "flex-start",
              "padding": 5
            },
            "v:children": "50% DISCOUNT"
          },
          {
            "v:name": "Text",
            "style": {
              "fontSize": 20,
              "fontWeight": "bold",
              "color": "#fffaf0",
              "letterSpacing": 1,
              "backgroundColor": "transparent",
              "alignSelf": "flex-start",
              "padding": 5
            },
            "v:children": "ON ALL FOOTWEAR"
          },
          
          {
            "v:name": "Button",
            "iconAlign": "left",
            "type": "link",
            "href": "Shop",
            "variant": "outline",
            "iconName": "arrow-forward",
            "color": "white",
            "title": "SHOP",
            "contentStyle": {
              "fontSize": 12,
              "padding": 12,
              "fontWeight": "bold",
              "letterSpacing": 1.5
            },
            "borderColor": "white",
            "height": 40
          }
        ]
      }
    ]
  }`;
  