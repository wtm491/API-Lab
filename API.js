$(()=> {

  $.get('https://www.reddit.com/r/aww/.json', (data) => {

    console.log(data);

    let title;
    let img;
    $.each(data.data.children, (i)=> {
      title = (data.data.children[i].data.title);
      img = (data.data.children[i].data.thumbnail);

      $('body').append(`<img src="${img}"></img><br><div>${title}</div><br>`);
      return i < 10;
    });

  });

});
