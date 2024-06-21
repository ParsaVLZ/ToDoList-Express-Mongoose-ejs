(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

$(document).ready(function() {
  $('.status-dropdown').on('change', function() {
    var $this = $(this);
    var id = $this.data('id');
    var newStatus = $this.val();
    $.ajax({
      url: '/tasks/' + id + '/status',
      method: 'PUT',
      data: {
        status: newStatus
      },
      success: function(response) {
        $this.removeClass('in-progress canceled done');
        
        if (newStatus === 'in-progress') {
          $this.addClass('in-progress');
        } else if (newStatus === 'canceled') {
          $this.addClass('canceled');
        } else if (newStatus === 'done') {
          $this.addClass('done');
        }
      },
    });
  });
});
