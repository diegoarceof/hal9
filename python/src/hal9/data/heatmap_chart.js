{"name": "heatmapchart", "function": "heatmap_chart", "source": "charts/heatmapchart.js", "language": "javascript", "label": "Heatmap", "description": "Draw attention to larger values with more vibrant colors in this 2D map", "icon": "fa-light fa-fire", "build": "true", "params": [{"name": "x", "label": "x", "single": true, "description": "The column in the dataframe that defines the x coordinates of the marks", "value": []}, {"name": "y", "label": "y", "description": "The column in the dataframe that defines the y coordinates of the marks", "single": true, "value": []}, {"name": "value", "label": "Value", "description": "The column in the dataframe that defines the intensity of the colors of the marks", "value": []}, {"name": "palette", "label": "D3 Palette", "value": [{"control": "paletteSelect", "value": "blue", "type": "gradient", "values": [{"name": "blue", "colors": ["#ffffff", "#4e79a7"], "label": "Blue"}, {"name": "orange", "colors": ["#ffffff", "#f28e2c"], "label": "Orange"}, {"name": "red", "colors": ["#ffffff", "#e15759"], "label": "Red"}, {"name": "green", "colors": ["#ffffff", "#59a14f"], "label": "Green"}, {"name": "violet", "colors": ["#ffffff", "#af7aa1"], "label": "Violet"}]}]}, {"name": "fontsize", "label": "Font Size", "description": "The font size", "value": [{"control": "range", "value": 16, "min": 5, "max": 20}]}, {"name": "marginleft", "label": "Margin left", "description": "The left margin", "value": [{"control": "range", "value": 40, "min": 20, "max": 200}]}, {"name": "marginbottom", "label": "Margin Bottom", "description": "The bottom margin", "value": [{"control": "range", "value": 30, "min": 20, "max": 200}]}]}