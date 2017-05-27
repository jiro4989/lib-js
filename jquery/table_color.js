$(function() {
  let colors = ['#eb87ce', '#ceeb87', '#87ceeb', ];
  let len = colors.length;
  let i = 0;
  $('.tableDiv').each(function() {
    $(this).css('background-color', colors[i % len]);
    i++;
  });
});
