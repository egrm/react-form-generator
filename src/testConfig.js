const testConfig = `{
  "title": "my form",
  "fields": [
    {
      "label": "count",
      "type": "number"
    },
    {
      "label": "is this true?",
      "type": "checkbox"
    },
    {
      "label": "caption",
      "type": "text"
    },
    {
      "label": "caption",
      "type": "textarea"
    },
    {
      "label": "date",
      "type": "date"
    },
    {
      "label": "which color?",
      "type": "radio",
      "options": [
        {
          "label": "blue",
          "value": "blue"
        },
        {
          "label": "green",
          "value": "green"
        },
        {
          "label": "yellow",
          "value": "yellow"
        }
      ]
    }
  ],
  "buttons": [
    {
      "label": "Send",
      "type": "submit"
    },
    {
      "label": "Apply"
    },
    {
      "label": "Cancel"
    }
  ]
}`;

export default testConfig;
