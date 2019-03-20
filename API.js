$(()=> {

  $.get('https://www.reddit.com/r/aww/.json', (data) => {

    console.log(data);

    let title;
    let img;
    $.each(data.data.children, (i)=> {
      title = (data.data.children[i].data.title);
      img = (data.data.children[i].data.thumbnail);

      $('body').append(`<div class = "flex-container"><img src="${img}" /><br><div>${title}</div></div><br>`);
      return i < 10;
    });

  });

});
