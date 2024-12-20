```javascript
// Incorrect usage of $inc operator
db.collection.updateMany({}, {$inc: {field: '1'}});
```