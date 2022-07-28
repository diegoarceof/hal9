{"name": "summarize", "function": "summarize", "source": "transforms/summarize.js", "language": "javascript", "label": "Summarize", "description": "Select columns to aggregate and others to keep unmodified", "icon": "fa-light fa-calculator-simple", "build": "true", "params": [{"name": "group", "label": "Group", "description": "The list of columns by which to group", "single": false, "static": false, "value": []}, {"name": "field", "label": "Columns", "description": "The list of columns who's values to collect", "single": false, "static": false, "value": []}, {"name": "summarizer", "label": "Summarizer", "description": "The summarizer method to aggregate the values collected, default- count", "value": [{"control": "select", "value": "count", "values": [{"name": "deviation", "label": "Standard Deviation"}, {"name": "first", "label": "First"}, {"name": "last", "label": "Last"}, {"name": "max", "label": "Max"}, {"name": "mean", "label": "Mean"}, {"name": "median", "label": "Median"}, {"name": "min", "label": "Min"}, {"name": "count", "label": "Count"}, {"name": "sum", "label": "Sum"}, {"name": "variance", "label": "Variance"}]}]}]}