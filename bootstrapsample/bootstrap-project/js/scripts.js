$(document).ready(function () {
  $('.commission-tab').click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      return;
    }
    $('.commission-tab').removeClass('active bg-success').addClass('bg-secondary bg-opacity-secondary');
    $(this).addClass('active bg-success').removeClass('bg-secondary bg-opacity-secondary');

    if ($(this).attr('id') === 'team-commission') {
        $('#content').load('team-commission.html');
    } else {
        $('#content').load('personal-commission.html');
    }
  });

  $('#content').load('personal-commission.html');
});