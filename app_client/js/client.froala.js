$(function() {
  $('#edit').editable({
    inlineMode: false,
    buttons: [
      'undo', 'redo', 'sep',
      'selectAll', 'sep',
      'bold', 'italic', 'underline', 'strikeThrough', 'superscript', 'subscript', 'sep',
      'fontFamily', 'fontSize', 'color', 'removeFormat', 'sep',
      'formatBlock', 'blockStyle', 'align', 'outdent', 'indent', 'sep',
      'insertOrderedList', 'insertUnorderedList', 'sep',
      'createLink', 'insertImage', 'insertVideo', 'uploadFile', 'table', 'insertHorizontalRule', 'sep',
      'html', 'save'
    ],
    saveURL: 'http://localhost:4242/posts/new',
    saveRequestType: 'POST'
  }).on('editable.saveError', function (e, editor, error) {
    console.log('Oops. Some kind of error, dude.');
  });
});
