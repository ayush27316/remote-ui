// Christmas Demo Schemas - Progressive UI Transformation

//this is a work around to load the images for the demo
//Better way to do this is to provide functionality for frtc
require('../../images/santa.png');
require('../../images/christmas2.jpg');


// Step 1: Add Christmas Header with Santa Icon
export const christmasHeaderStep1 = `{
  "v:name": "View",
  "style": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "paddingHorizontal": 16,
    "paddingVertical": 5,
    "backgroundColor": "#0d4f2c", 
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "zIndex": 99,
    "borderBottomWidth": 1,
    "borderBottomColor": "#1a5d35"
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
            "width": 28,
            "height": 28,
            "marginRight": 8
          }
        },
        {
          "v:name": "Text",
          "style": {
            "fontSize": 18,
            "fontWeight": "bold",
            "color": "#ffffff",
            "letterSpacing": 1,
            "padding": 8
          },
          "v:children": "🎄 CHRISTMAS SHOP"
        }
      ]
    },
    {
      "v:name": "Button",
      "variant": "clear",
      "type": "link",
      "href": "Profile",
      "iconName": "user",
      "color": "white"
    }
  ]
}`;

// Step 2: Transform Main Banner to Christmas Theme
export const christmasMainBannerStep2 = `{
  "v:name": "ImageBackground",
  "style": {
    "position": "relative",
    "width": "100%",
    "height": 300,
    "justifyContent": "flex-end",
    "padding": 20,
    "paddingBottom": 40
  },
  "source": "../assets/images/christmas2.jpg",
  "resizeMode": "cover",
  "v:children": [
    {
      "v:name": "View",
      "style": {
        "position": "absolute",
        "top": 20,
        "right": 20,
        "backgroundColor": "rgba(255, 255, 255, 0.9)",
        "paddingHorizontal": 12,
        "paddingVertical": 6,
        "borderRadius": 20
      },
      "v:children": [
        {
          "v:name": "Text",
          "style": {
            "fontSize": 12,
            "fontWeight": "bold",
            "color": "#c41e3a",
            "letterSpacing": 1
          },
          "v:children": "🎁 CHRISTMAS SPECIAL"
        }
      ]
    },
    {
      "v:name": "Text",
      "style": {
        "fontSize": 24,
        "fontWeight": "bold",
        "color": "white",
        "letterSpacing": 1,
        "textShadowColor": "rgba(0,0,0,0.8)",
        "textShadowOffset": {"width": 1, "height": 1},
        "textShadowRadius": 3,
        "alignSelf": "flex-start",
        "marginBottom": 10
      },
      "v:children": "CHRISTMAS SALE 🎄"
    },
    {
      "v:name": "Text",
      "style": {
        "fontSize": 14,
        "color": "white",
        "letterSpacing": 0.5,
        "textShadowColor": "rgba(0,0,0,0.8)",
        "textShadowOffset": {"width": 1, "height": 1},
        "textShadowRadius": 3,
        "marginBottom": 15
      },
      "v:children": "Up to 70% off on selected items"
    },
    {
      "v:name": "View",
      "style": {
        "alignSelf": "flex-start"
      },
      "v:children": [
        {
          "v:name": "Button",
          "iconAlign": "left",
          "type": "link",
          "href": "Shop",
          "style": "clear",
          "iconName": "gift",
          "color": "white",
          "title": "SHOP CHRISTMAS DEALS",
          "buttonStyle": {
            "backgroundColor": "#c41e3a",
            "borderRadius": 25
          },
          "contentStyle": {
            "fontSize": 12,
            "padding": 15,
            "fontWeight": "bold",
            "color": "white",
            "letterSpacing": 1.5
          },
          "height": 45
        }
      ]
    },
    {
      "v:name": "View",
      "style": {
        "position": "absolute",
        "top": 50,
        "right": 20
      },
      "v:children": [
        {
          "v:name": "Timer",
          "initialHours": 23,
          "initialMinutes": 59,
          "style": {
            "backgroundColor": "rgba(255, 255, 255, 0.95)",
            "borderRadius": 10,
            "padding": 8
          }
        }
      ]
    }
  ]
}`;

// Step 3: Add Christmas Colors to Bottom Navigation
export const christmasBottomNavStep3 = `{
  "v:name": "View",
  "style": {
    "position": "absolute",
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "#0d4f2c",
    "borderTopWidth": 1,
    "borderTopColor": "#1a5d35",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "alignItems": "center",
    "paddingVertical": 12,
    "paddingHorizontal": 16,
    "shadowColor": "#000",
    "shadowOffset": {"width": 0, "height": -2},
    "shadowOpacity": 0.1,
    "shadowRadius": 4,
    "elevation": 8
  },
  "v:children": [
    {
      "v:name": "Button",
      "variant": "clear",
      "type": "link",
      "href": "Home",
      "iconName": "home",
      "color": "#c41e3a",
      "style": {
        "alignItems": "center",
        "justifyContent": "center"
      }
    },
    {
      "v:name": "Button",
      "variant": "clear",
      "type": "link",
      "href": "Search",
      "iconName": "menu",
      "color": "#ffffff",
      "style": {
        "alignItems": "center",
        "justifyContent": "center"
      }
    },
    {
      "v:name": "Button",
      "variant": "clear",
      "type": "link",
      "href": "Cart",
      "iconName": "settings",
      "color": "#ffffff",
      "style": {
        "alignItems": "center",
        "justifyContent": "center"
      }
    },
    {
      "v:name": "Button",
      "variant": "clear",
      "type": "link",
      "href": "Profile",
      "iconName": "user",
      "color": "#ffffff",
      "style": {
        "alignItems": "center",
        "justifyContent": "center"
      }
    }
  ]
}`;


// Demo step configurations
export const demoSteps = [
  {
    id: 1,
    title: "Christmas Header",
    description: "Transform the header with Christmas colors and Santa icon",
    componentName: "Header",
    schema: christmasHeaderStep1,
    changes: ["Green Christmas background", "Santa icon added", "White text for contrast"]
  },
  {
    id: 2,
    title: "Festive Main Banner", 
    description: "Replace the main banner with Christmas-themed imagery and content",
    componentName: "MainBanner",
    schema: christmasMainBannerStep2,
    changes: ["Christmas background image", "Festive sale messaging", "Christmas-themed CTA button", "Gift icons"]
  },
  {
    id: 3,
    title: "Christmas Navigation",
    description: "Update bottom navigation with Christmas color scheme",
    componentName: "BottomNavigation", 
    schema: christmasBottomNavStep3,
    changes: ["Christmas green background", "Red accent for active state", "Enhanced shadows"]
  }
];
