export const MainBanner = `{
  "v:name": "Lottie",
  "style": {
    "position": "relative",
    "width": "100%",
    "height": 300,
    "padding": 20,
    "backgroundColor": "#C00000"

  },
  "v:children": [
    {
      "v:name": "View",
      "style": {
        "position": "absolute",
        "top": 50,
        "right": 10
      },
      "v:children": [
        {
          "v:name": "Timer",
          "initialHours": 2,
          "initialMinutes": 45
        }
      ]
    },
    {
      "v:name": "View",
      "style": {
        "alignSelf": "flex-start",
        "justifyContent": "center",
        "gap": 10
      },
      "v:children": [
        {
          "v:name": "Text",
          "style": {
            "fontSize": 20,
            "fontWeight": "bold",
            "color": "#fffaf0",
            "letterSpacing": 1,
            "alignSelf": "flex-start",
            "padding": 5
          },
          "v:children": "CHRISTMAS SALE !"
        },
        {
          "v:name": "Button",
          "iconAlign": "left",
          "type": "link",
          "href": "Shop",
          "variant": "outline",
          "iconName": "arrow-forward",
          "color": "white",
          "title": "SHOP ALL",
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

export const MainBannerv2 = `{
  "v:name": "ImageBackground",
  "style": {
    "position": "relative",
    "width": "100%",
    "height": 300,
    "justifyContent": "flex-end",
    "padding": 20,
    "paddingBottom": 40
  },
  "source": "../assets/images/main-banner.jpg",
  "resizeMode": "cover",
  "v:children": [
    {
      "v:name": "Text",
      "style": {
        "fontSize": 20,
        "fontWeight": "bold",
        "color": "black",
        "letterSpacing": 1,
        "backgroundColor": "white",
        "alignSelf": "flex-start",
        "padding": 5,
        "marginBottom": 7
      },
      "v:children": [
        "SUMMER",
        {
          "v:name": "FlickerText",
          "style": {
            "fontSize": 20,
            "fontWeight": "bold",
            "letterSpacing": 1
          },
          "v:children": " SALE !"
        }
      ]
    },
    {
      "v:name": "View",
      "style": {
        "alignSelf": "flex-start",
        "paddingBottom": 20
      },
      "v:children": [
        {
          "v:name": "Button",
          "iconAlign": "left",
          "type": "link",
          "href": "Shop",
          "style": "clear",
          "iconName": "arrow-forward",
          "color": "black",
          "title": "SHOP ALL",
          "buttonStyle": {
            "backgroundColor": "white"
          },
          "contentStyle": {
            "fontSize": 12,
            "padding": 12,
            "fontWeight": "bold",
            "color": "black",
            "letterSpacing": 1.5
          },
          "elevated": true,
          "borderColor": "white",
          "height": 40
        }
      ]
    },
    {
      "v:name": "View",
      "style": {
        "position": "absolute",
        "top": 110,
        "right": 50
      },
      "v:children": [
        {
          "v:name": "Timer",
          "initialHours": 2,
          "initialMinutes": 45
        }
      ]
    }
  ]
}`;
