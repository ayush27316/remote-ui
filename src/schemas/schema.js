const testSchema = `{
    "v:name": "View",
    "style": { "flex": 1, "padding": 20, "backgroundColor": "#f5f5f5" },
    "v:children": [
      {
        "v:name": "Text",
        "style": { "fontSize": 28, "fontWeight": "bold", "marginBottom": 20, "color": "#333" },
        "v:children": "Hello from JSON UI!"
      },
      {
        "v:name": "Button",
        "title": "Press Standard Button",
        "color": "#ff6347",
        "onPress": {
          "action": {
            "name": "handleClick",
            "msg": "Hi from the Standard Button!"
          }
        }
      },
      {
        "v:name": "View",
        "style": { "height": 20 }
      },
      {
        "v:name": "Button",
        "title": "Press Standard Button",
        "style": { "backgroundColor": "#007bff", "paddingVertical": 12, "paddingHorizontal": 25, "borderRadius": 8 },
        "onPress": {
          "action": {
            "name": "handleClick",
            "msg": "Hi from the Custom Button!"
          }
        },
        "v:children": {
            "v:name": "Text",
            "style": { "color": "white", "fontSize": 16, "textAlign": "center" },
            "v:children": "Press Custom Button"
        }
      },
      "This is a primitive string."
    ]
  }`;


export const testSchemaString = `{
    "v:name": "View",
    "style": { "flex": 1, "padding": 20, "backgroundColor": "#f5f5f5" },
    "v:children": [
      {
        "v:name": "Text",
        "style": { "fontSize": 28, "fontWeight": "bold", "marginBottom": 20, "color": "#333" },
        "v:children": "Hello from JSON UI!"
      },
      {
        "v:name": "Button",
        "title": "Press Standard Button",
        "color": "#ff6347",
        "onPress": {
          "action": {
            "name": "handleClick",
            "msg": "Hi from the Standard Button!"
          }
        }
      },
      {
        "v:name": "View",
        "style": { "height": 20 }
      },
      {
        "v:name": "CustomButton",
        "style": { "backgroundColor": "#007bff", "paddingVertical": 12, "paddingHorizontal": 25, "borderRadius": 8 },
        "onPress": {
          "action": {
            "name": "handleClick",
            "msg": "Hi from the Custom Button!"
          }
        },
        "v:children": {
            "v:name": "Text",
            "style": { "color": "white", "fontSize": 16, "textAlign": "center" },
            "v:children": "Press Custom Button"
        }
      },
      "This is a primitive string."
    ]
  }`;

  export default testSchema;