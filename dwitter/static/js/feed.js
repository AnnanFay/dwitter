var onDweetChanged = function() {
  var charCount = $(this).parent().find(".character-count")[0];
  var submitButton = $(this).parent().parent().find(".dweet-button")[0];

  charCount.textContent = this.value.length + '/140';
  if(this.value.length > 140){
    $(charCount).addClass('too-long');
    $(submitButton).prop('disabled', true);
  }else{
    $(charCount).removeClass('too-long');
    $(submitButton).prop('disabled', false);
  }
};

$(document).ajaxComplete(function() {
  $('.code-input').each(onDweetChanged);
});

$(document).ready(function()  {
  $('body').on('input','.code-input', onDweetChanged);
  $('.code-input').each(onDweetChanged);


  function requestFullscreen(el) {
    (el.mozRequestFullScreen ||
     el.webkitRequestFullscreen ||
     el.requestFullscreen).call(el);
  }
  $('.dweet').each(function(i, el) {
    var link = $(el).find('.fullscreen-button');
    var iframe = $(el).find('iframe.dweetiframe');
    link.on('click', function(e) {
      e.preventDefault();
      requestFullscreen(iframe[0]);
    });

    var sharebutt = $(el).find('.share-button');
    var sharelink = $(el).find('.share-link');
    sharebutt.on('click', function(e) {
      e.preventDefault();
      sharelink.toggle();
    });
  });
});
